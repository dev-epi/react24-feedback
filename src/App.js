import './App.css';
import FeedbackApp from './FeedbackApp'
import Signin from './pages/Signin'
import { BrowserRouter, Routes, Route, Navigate, Link, NavLink } from 'react-router-dom'
import Page404 from './pages/Page404';
import Profile from './pages/Profile';
import About from './pages/About';
import Layout from './pages/Layout';

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='' element={<Navigate to={localStorage.getItem('user') ? "/feedbacks" : "/signin"}></Navigate>} />
          <Route path='signin' element={<Signin />}></Route>
          <Route path='' element={<Layout />}>

                <Route path='feedbacks' element={<FeedbackApp />} />
                <Route path='profile' element={<Profile />} />
                <Route path='about/:slug' element={<About />} />
          </Route>

          <Route path='*' element={<Page404 />} />
        </Routes>

      </BrowserRouter>

    </>
  );
}

export default App;
