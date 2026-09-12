import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SecretPage from './pages/SecretPage';
import LandingPage from './pages/LandingPage';
import StoryPage from './pages/StoryPage';
import TimelinePage from './pages/TimelinePage';
import GalleryPage from './pages/GalleryPage';
import LetterPage from './pages/LetterPage';
import MomentsPage from './pages/MomentsPage';
import ThingsILovePage from './pages/ThingsILovePage';
import FavoritesPage from './pages/FavoritesPage';
import FuturePage from './pages/FuturePage';
import WishPage from './pages/WishPage';
import FinalPage from './pages/FinalPage';
import Navbar from './components/Navbar';
import MusicPlayer from './components/MusicPlayer';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <BrowserRouter>
      <CustomCursor />
      <MusicPlayer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/secret" replace />} />
        <Route path="/secret" element={<SecretPage />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/story" element={<StoryPage />} />
        <Route path="/timeline" element={<TimelinePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/letter" element={<LetterPage />} />
        <Route path="/moments" element={<MomentsPage />} />
        <Route path="/things-i-love" element={<ThingsILovePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/future" element={<FuturePage />} />
        <Route path="/wish" element={<WishPage />} />
        <Route path="/final" element={<FinalPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
