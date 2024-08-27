import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './screens/home';
import AboutUsPage from './screens/about-us';
import './App.css';
import ProfilePage from './screens/profile';
import About from './screens/profile/about';
import EditProfile from './screens/profile/editprofile';
import NotFoundPage from './screens/404';

function App() {
  /**
   * profile
   *       about-me    -> profile/khoatranpc/about-me
   *       courses    -> profile/khoatranpc/courses
   * 
   */
  return (
    <div>
      <header>
        <div>Header is here</div>
        <div>
          <Link to={'/'}>Trang chủ</Link>
          <Link to={'/about-us'}>Về chúng tôi</Link>
        </div>
      </header>
      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/about-us'} element={<AboutUsPage />} />
        <Route path={'/profile'} element={<ProfilePage />}>
          <Route path={'about'} element={<About />} />
          <Route path={'edit-profile'} element={<EditProfile />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App
