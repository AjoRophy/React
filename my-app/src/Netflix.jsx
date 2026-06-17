import "./netflix.css";
import Button from "react-bootstrap/Button";
import logo from "./logo.png";

export default function Test() {
  return (
    <div className="overlay">
      <nav className="navbar">
        <img src={logo} alt="Netflix Logo"className="logo"/>

        <div className="nav-right">
          <select className="navselect">
            <option>English</option>
            <option>Malayalam</option>
            <option>Spanish</option>
            <option>French</option>
            <option>Italian</option>
            <option>Portuguese</option>
            <option>Dutch</option>
            <option>Turkish</option>
            <option>Ukrainian</option>
            <option>Russian</option>
          </select> 
          <Button variant="danger" className="sign-in-btn">Sign In</Button>
        </div>

      </nav>
                 

      <div className="content">
        <h1>Unlimited movies, TV shows and more</h1>

        <h3>Starts at ₹149. Cancel at any time.</h3>

        <p>
          Ready to watch? Enter your email to create or restart your
          membership.
        </p>

        <div className="email-section">
          <input
            type="email"
            placeholder="Email address"
          />

          <Button variant="danger" size="lg">
            Get Started &gt;
          </Button>
        </div>
      </div>
    </div>
  );
}