import { Link, useLocation } from 'react-router-dom';
import { Heart, BookOpen, Clock, Image as ImageIcon, MessageSquare, Sparkles, Star, Map, Gift, Navigation } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const location = useLocation();
  if (location.pathname === '/secret') return null;

  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 shadow-lg"
    >
      <ul className="flex items-center space-x-6">
        <NavItem to="/home" icon={<Heart size={20} />} active={location.pathname === '/home'} />
        <NavItem to="/story" icon={<BookOpen size={20} />} active={location.pathname === '/story'} />
        <NavItem to="/timeline" icon={<Clock size={20} />} active={location.pathname === '/timeline'} />
        <NavItem to="/gallery" icon={<ImageIcon size={20} />} active={location.pathname === '/gallery'} />
        <NavItem to="/letter" icon={<MessageSquare size={20} />} active={location.pathname === '/letter'} />
        <NavItem to="/moments" icon={<Sparkles size={20} />} active={location.pathname === '/moments'} />
        <NavItem to="/things-i-love" icon={<Star size={20} />} active={location.pathname === '/things-i-love'} />
        <NavItem to="/favorites" icon={<Heart size={20} />} active={location.pathname === '/favorites'} />
        <NavItem to="/future" icon={<Map size={20} />} active={location.pathname === '/future'} />
        <NavItem to="/wish" icon={<Gift size={20} />} active={location.pathname === '/wish'} />
        <NavItem to="/final" icon={<Navigation size={20} />} active={location.pathname === '/final'} />
      </ul>
    </motion.nav>
  );
}

function NavItem({ to, icon, active }) {
  return (
    <li>
      <Link to={to} className={`block transition-colors ${active ? 'text-primary-300' : 'text-white/60 hover:text-white'}`}>
        {icon}
      </Link>
    </li>
  );
}
