import './App.css';
import FeedbackApp from './FeedbackApp'
import Signin from './pages/Signin'
import { BrowserRouter, Routes, Route, Navigate, Link, NavLink } from 'react-router-dom'
import Page404 from './pages/Page404';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Navigate to={localStorage.getItem('user') ? "/feedbacks" : "/signin"}></Navigate>} />
          <Route path='signin' element={<Signin />}></Route>
          <Route path='feedbacks' element={<FeedbackApp />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
        <div className='card'>
          <NavLink to="/signin" activeclassname="active"> SignIn</NavLink>
          <NavLink to="/feedbacks" activeclassname="active"> Feedback App</NavLink>
        </div>
      </BrowserRouter>

    </>
  );
}

export default App;
