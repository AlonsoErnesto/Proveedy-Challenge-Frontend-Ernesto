import './style.css';
import { Navbar,NavTop,TableContent } from '../../Components';

const Home = () => {
   return (
      <div className="wrapper">
         <Navbar/>
            <div className='content'>
               <NavTop/>
               <TableContent/>
            </div>
      </div>
   )
}

export default Home