import './header.css';

const Header = () => {
  return (
    <div id="header">

      <div className="header-container">

        <div className="logo-menu">

          <div className="logo">

            <a href="#">GPT-4</a>

          </div>

          <div className="menu">

            <nav>

              <a href="#home" className="menu-item active">Home</a>

              <a href="#whatisgpt" className="menu-item">What is GPT?</a>

              <a href="#features" className="menu-item">Features</a>

              <a href="#blog" className="menu-item">Blog</a>

            </nav>

          </div>

        </div>

        <div className="sign">

          <a href="#" className="signin">Sign in</a>

          <a href="#" className="signup">Sign up</a>

        </div>

      </div>

    </div>
  )
}

export default Header;