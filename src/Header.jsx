import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-container">
          <img
            src="https://res.cloudinary.com/dppqkypts/image/upload/v1750038487/310c5914-a4fa-47b0-a225-cb4355700a44_dihuv7.png"
            alt="BROCCOLI CREW Logo"
            className="header-logo"
          />
        </div>

        <div className="title-container">
          <h1 className="title">
            <span className="broccoli-emoji">🥦</span>
            BROCCOLI CREW
            <span className="broccoli-emoji">🥦</span>
          </h1>
          <p className="subtitle">
            Amigos del gym, unidos por la fuerza y diferentes profesiones
          </p>
        </div>

        <div className="header-spacer"></div>
      </div>
    </header>
  );
}

export default Header;
