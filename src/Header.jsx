import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-container">
          <img
            src="https://res.cloudinary.com/dndit9q1h/image/upload/v1750130523/ChatGPT_Image_16_jun_2025_10_21_48_p.m._xaisvj.png"
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
