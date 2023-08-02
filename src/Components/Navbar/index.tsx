import { GraphUp } from '@styled-icons/bootstrap/GraphUp';
import { Database } from '@styled-icons/octicons/Database';
import { FilePlus } from '@styled-icons/boxicons-solid/FilePlus';

import { ArrowIosBackOutline } from '@styled-icons/evaicons-outline/ArrowIosBackOutline';
import { LineHorizontal1 } from '@styled-icons/fluentui-system-regular/LineHorizontal1';

import './style.css';
export const Navbar = () => {
   return (
   <div className="navbar_left">
            <div className='contain_nav'>
               <div className='head_nav'>
                  <img style={{width:39}} src="./assets/images/logo.png"/>
                  <span>YachAI</span>
               </div>
               <div className='btn-arrow'>
                  <ArrowIosBackOutline size={25} color="#ffffff"/>
               </div>
            </div>
            <div className="list_btns">
               <div className="item_list">
                  <div className='btn_contain'>
                     <GraphUp size={15} color="#9b9b9b"/>
                     <span>Dashboards</span>
                  </div>
               </div>
               <h4 className="module_title">
                  <LineHorizontal1 size={20} color="#9b9b9b"/>
                  <span>Modulos</span>
               </h4>
               <div className="item_list active">
                  <div className='btn_contain active_btn '>
                     <Database size={15} color="#000000"/>
                     <span>Documentos</span>
                  </div>
               </div>
               <div className="item_list">
                  <div className='btn_contain'>
                     <FilePlus size={20} color="#9b9b9b"/>
                     <span>Agregar documento</span>
                  </div>
               </div>
            </div>
         </div>
   )
}
