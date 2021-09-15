import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Tinder del Tinder</h1>
      <div className="links">
        <Link to="/" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>Estadisticas</Link>
        <Link to="/match" style={{ 
          color: 'black', 
          backgroundColor: '#FFD700',
          borderRadius: '8px' 
        }}>Match</Link>
        <Link to="/like" style={{ 
          color: 'white', 
          backgroundColor: '#32CD32',
          borderRadius: '8px' 
        }}>Like</Link>
        <Link to="/dislike" style={{ 
          color: 'white', 
          backgroundColor: '#FF0000',
          borderRadius: '8px' 
        }}>Disike</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;