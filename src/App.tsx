
import { Route, Routes } from "react-router"
import NavWrapper from "./components/NavWrapper"
import Dashboard from "./pages/dashboard/Dashboard"
import NewsCategory from "./pages/news-category/NewsCategory"
import News from "./pages/news/News"
import ImageNews from "./pages/image-news/ImageNews"
import VideoNews from "./pages/video-news/VideoNews"
import Ads from "./pages/ads/Ads"
import RolesPermission from "./pages/roles-permissions/RolesPermission"
import User from "./pages/user/User"
import Author from "./pages/author/Author"
import SiteSetting from "./pages/site-setting/SiteSetting"
import MediaManager from "./pages/media-manager/MediaManager"
import MenuManager from "./pages/menu-manager/MenuManager"
import Hastag from "./pages/hastag-manager/Hastag"
import SocialMedia from "./pages/social-media/SocialMedia"

const App = () => {
  return (
    <Routes>
      <Route element={<NavWrapper />}>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/news-category' element={<NewsCategory />} />
        <Route path='/news' element={<News />} />
        <Route path='/image-news' element={<ImageNews />} />
        <Route path='/video-news' element={<VideoNews />} />
        <Route path='/ads-management' element={<Ads />} />
        <Route path='/roles-permissions' element={<RolesPermission />} />
        <Route path='/user-management/user' element={<User />} />
        <Route path='/user-management/author' element={<Author />} />
        <Route path='/settings/site-setting' element={<SiteSetting />} />
        <Route path='/settings/media-manager' element={<MediaManager />} />
        <Route path='/settings/menu-manager' element={<MenuManager />} />
        <Route path='/settings/hastag-manager' element={<Hastag />} />
        <Route path='/settings/social-media' element={<SocialMedia />} />
      </Route>
    </Routes>
  )
}

export default App