import{Link}from"react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
               {/*把連結換成link*/}
              {/* to='/' 會回到跟目錄/上面*/}
                <Link  className="nav-link active" to='/'>Home</Link >
            </li>
             <li className="nav-item">
                <Link  className="nav-link active" to='/about'>關於我</Link >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
