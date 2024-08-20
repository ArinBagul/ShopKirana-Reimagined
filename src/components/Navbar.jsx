import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav>
        <div className="navbar">
          <div className="shop-kirana-logo">
            <a href="#"><span>Shop.</span>Kirana</a>
          </div>

          <ul className="nav-link-list">
            <li><a href="#" className="active-nav-link">Home</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Stories</a></li>
            <li><a href="#">About</a></li>
          </ul>

          <a href="#" className="nav-btn">Let's Build Together</a>
          <button className="menu-btn">Menu <i className="fi fi-br-menu-burger"></i></button>
        </div>
      </nav>
  );
}

export default Navbar;
