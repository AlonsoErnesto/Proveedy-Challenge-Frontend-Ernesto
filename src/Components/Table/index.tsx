import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FileAudio } from '@styled-icons/fa-regular/FileAudio';
import { Eye } from '@styled-icons/open-iconic/Eye';
import { FiletypePdf, FiletypeMp4 } from '@styled-icons/bootstrap';

import './style.css';
import { DocumentInterface } from '../../Interface/Document';

export const TableContent:React.FC = () => {
   const [data, setData] = useState<DocumentInterface[]>([]);
   const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkxMDAzOTIzLCJpYXQiOjE2OTA5MTc1MjMsImp0aSI6ImQ0YTU3NmVmOTA4NTRiMWE4OTBiYzRkM2I1NmU0OGYxIiwidXNlcl9pZCI6MX0.l3t8AjfpiePt9W0VA9pVBnjlCPDREszudODVsdNaFl8';

   useEffect(() => {
      axios.get('https://yachai.lat/documents/api/document', {
         headers: {
            Authorization: `Bearer ${token}`
         }
      })
         .then(response => {
            const modifiedData: DocumentInterface[] = response.data.map((item: any) => {
               const createdAt =  new Date(item.created_at).toLocaleString('es-ES')
               return {
                  ...item,
                  size: item.size < 1024
                     ? `${item.size} bytes`
                     : item.size < 1024 * 1024
                     ? `${(item.size / 1024).toFixed(1)} KB`
                     : `${(item.size / (1024 * 1024)).toFixed(1)} MB`,
                  created_at: createdAt
               };
               });
               setData(modifiedData);
            })
         .catch(error => {
            console.error('Error al obtener los datos:', error);
         });
   }, []);

   console.log(data[1])

   return (
      <div className='table_content'>
         <div className="content">
            <div className="top_table">
               <div className='select_boxes'>
                  <span>Mostrar </span>
                  <select  id="standard-select">
                     <option value="10">10</option>
                     <option value="25">25</option>
                     <option value="50">50</option>
                     <option value="100">100</option>
                  </select>
                  <span> documentos</span>
               </div>
               <div className="search">
                  <span>Buscar: </span>
                  <input type="text" name="search"  placeholder='documento'/>
               </div>
            </div>
         {data && data.length > 0 ? (
            <div className='table'  style={{overflowX:'auto'}}>
            <table>
               <thead >
                  <tr style={{background:'#ffffff',textTransform:'uppercase'}}>
                     <th className="id_sector">id</th>
                     <th className="up_sector">subido</th>
                     <th className="title_sector">titulo</th>
                     <th className="size_sector">tamaño</th>
                     <th className="type_sector">tipo</th>
                     <th className="state_sector">estado</th>
                     <th className="action_sector">accion</th>
                  </tr>
               </thead>
               <tbody>
                  {data.map((item) => (
                  <tr key={item.id}>
                     <td>{item.id}</td>
                     <td>{item.created_at}</td>
                     <td>{item.title}</td>
                     <td>
                        {item.size}
                     </td>
                     <td>
                        { 
                           item.extension === 'pdf' && <FiletypePdf size={25} color="red"/> 
                        }
                        { item.extension === 'mp3' && <FileAudio size={25} color="#88dc65"/>}
                        { 
                           item.extension === 'mp4' && <FiletypeMp4 size={25} color="blue"/>
                        }
                     </td>
                     <td style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                        <p className="state_text">PROCESADO</p>
                     </td>
                     <td>
                        <div className="icon_show">
                           <Eye size={20} color="#ffffff"/>   
                        </div>
                     </td>
                  </tr>
                  ))}
               </tbody>
            </table>
            </div>
            ) : (
               <div>Cargando datos...</div>
            )}
         </div>
      </div>
   );
};
