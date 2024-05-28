import logo from './logo.svg';
import './App.css';
import user from './images/rohit.jpg'

import About from './components/About';
import Skills from './components/Skills';
import Qualification from './components/Qualification';
import Experience from './components/Experience';
import Contact from './components/Contact';

//import routing components
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <div className='container pt-4'>
        <div className='row'>
          <div className='col-md-3'>
            <div className='border p-4 rounded border-dark'>
              <div className='mb-4'>
                <img src={user} className='rounded-circle img-fluid' />
              </div>
              <ul className='list-group'>
                <li className='list-group-item'>
                  <Link to={'/about'} className='nav-link'>About</Link>
                </li>
                <li className='list-group-item'>
                  <Link to={'/skills'} className='nav-link'>Skills</Link>
                </li>
                <li className='list-group-item'>
                  <Link to={'/qualifications'} className='nav-link'>Qualifications</Link>
                </li>
                <li className='list-group-item'>
                  <Link to={'/experience'} className='nav-link'>Experience</Link>
                </li>
                <li className='list-group-item'>
                  <Link to={'/contact'} className='nav-link'>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-md-9'>
            <div className='border border-dark p-4 rounded'>
              {/* all the components will be rendere here */}
              <Routes>
                <Route path='/about' element={<About />} />
                <Route path='/skills' element={<Skills />} />
                <Route path='/qualifications' element={<Qualification />} />
                <Route path='/experience' element={<Experience />} />
                <Route path='/contact' element={<Contact />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

//additional: routing: react-router-dom, npm install react-router-dom
