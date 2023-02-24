import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import './index.css';
import NotFound from './NotFound';
import Login from './Login';
import Navigate from './Navigate';
import RedditNavbar from './RedditNavbar';

function App() {
  const { isLoggedIn } = useSelector((state) => state.reddit_auth);
  return (
    <BrowserRouter>
      {isLoggedIn?
        <>
        <RedditNavbar />
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        </>
        :
        <>
        <Routes>
            <Route exact path='/login' element={<Login/>}/>
            <Route path='*' element={<Navigate location={'/login'} />} />
        </Routes>
        </>
      }   
    </BrowserRouter>
  );
}

export default App;
