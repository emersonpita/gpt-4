import './header.css';

const checkbox = document.querySelector("#hamburguer-menu");
const navLinks = document.querySelectorAll(".nav-mobile a");
navLinks === null || navLinks === void 0 ? void 0 : navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        if (checkbox) {
            checkbox.checked = false;
        }
    });
});

const Header = () => {
  return (
    <div id="header">

      <div className="header-container">

        <div className="logo-menu">

          <div className="logo">

            <a href="#">GPT-4</a>

          </div>

          <div className="menu">

            <nav className="nav-desktop">

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

        <input type="checkbox" id="hamburguer-menu"/>

        <label for="hamburguer-menu">

          <div class="mobile-menu">

            <span class="hamburguer1"></span>

            <span class="hamburguer2"></span>

            <span class="hamburguer3"></span>

          </div>

        </label>

        <div class="overlay">

          <nav class="nav-mobile">

            <a href="#home" class="menu-item active">Home</a>

            <a href="#whatisgpt" class="menu-item">What is GPT?</a>

            <a href="#features" class="menu-item">Features</a>

            <a href="#blog" class="menu-item">Blog</a>

          </nav>

        </div>

      </div>

    </div>
  )
}

export default Header;