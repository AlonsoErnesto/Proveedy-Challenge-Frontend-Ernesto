import './style.css';
import { Moon } from '@styled-icons/boxicons-regular/Moon';
import { Like } from '@styled-icons/foundation';

export const NavTop = () => {
   return (
      <div className="nav-profile">
         <div className="items">
            <div className='btn_like'>
               <Like style={{ transform: 'rotateY(180deg)' }} size={30} color="#88dc65"/>
            </div>
            <div className='btn_theme'>
               <Moon size={25} color="#697a8d"/>
            </div>   
            <div className='profile_photo'>
               <div className='profile'>
                  <p style={{fontSize:15, fontWeight:'bold'}}>JO</p>
               </div>
            </div>
         </div>
      </div>
   )
}
