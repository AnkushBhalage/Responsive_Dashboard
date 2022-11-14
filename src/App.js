import logo from './logo.svg';
import './App.css';
import {AiOutlineMenu} from 'react-icons/ai'
import{BsFillBugFill} from 'react-icons/bs'
import{DiApple} from 'react-icons/di'
import {VscSearch} from 'react-icons/vsc'
function App() {
  return (
    <>
      <div className='sidebar'>
        <div className='sidebar-brand'>
          <h2><span className='lab la-accusoft'></span><span>Operators Fleet Management</span></h2>
        </div>
        <div className='sidebar-menu'>
          <ul>
            <li>
              <a href='#'className='active'><span><DiApple/></span> <span>Dashboard</span></a>
            </li>
            <li>
              <a href='#'> <span><DiApple/></span> <span>Customers</span></a>
            </li>
            <li>
              <a href='#'> <span><DiApple/></span> <span>Projects</span></a>
            </li>
            <li>
              <a href='#'> <span><DiApple/></span> <span>Orders</span></a>
            </li>
          </ul>
        </div>
      </div>
      <div className='main-content'>
        <header>
          <div className='header-title'>
            <h2><span><AiOutlineMenu/></span>Dashboard</h2>
          </div>
          <div className='search-wrapper'>
            <span className='las la-search'></span>
           <input type="search" placeholder='Search here'/>
          </div>
        </header>
        <main>
          <div className='cards'>
             <div className='card-single'>
                <div>
                  <h1>54</h1>
                  <span>Customers</span>
                </div>
             </div>
             <div className='card-single'>
                <div>
                  <h1>79</h1>
                  <span>Proects</span>
                </div>
             </div>
             <div className='card-single'>
                <div>
                  <h1>124</h1>
                  <span>Orders</span>
                </div>
             </div>
             <div className='card-single'>
                <div>
                  <h1>$6k</h1>
                  <span>Income</span>
                </div>
             </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
