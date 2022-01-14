
import { useSelector } from 'react-redux';
import './App.css';
import Ourcouner from './components/Ourcouner';
import Showstudent from './components/Showstudent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Contact from './components/Contact';
import Addstudent from './components/Addstudent';


function App() {



  return (
    <Router>
        <div className="App">
          <Header/>
         

          <Routes>

            <Route path='' element={<Home/>} />
            <Route path='/student' element={<Showstudent/>}/>
            <Route path='*' element={<Home/>}/>
            
            <Route path='/contact' element={<Contact />} />
            <Route path='/student/des' element={<Addstudent />}>
              <Route path=':id' element={<Addstudent />} />

            </Route>
            {/* <Route path='/student/update' element={<Update />}>
              <Route path=':id' element={<Update />} />

            </Route> */}


          </Routes>

          





        </div>
      </Router>
  );
}

export default App;
