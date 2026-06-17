import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <p className="footer-contact">
          Questions? Call <a href="/">000-800-919-1743</a>
        </p>

        <div className="footer-links">

          <div className="footer-column">
            <a href="">FAQ</a>
            <a href="/">Investor Relations</a>
            <a href="/">Privacy</a>
            <a href="/">Speed Test</a>
          </div>

          <div className="footer-column">
            <a href="/">Help Centre</a>
            <a href="/">Jobs</a>
            <a href="/">Cookie Preferences</a>
            <a href="/">Legal Notices</a>
          </div>

          <div className="footer-column">
            <a href="/">Account</a>
            <a href="/">Ways to Watch</a>
            <a href="/">Corporate Information</a>
            <a href="/">Only on Netflix</a>
          </div>

          <div className="footer-column">
            <a href="/">Media Centre</a>
            <a href="/">Terms of Use</a>
            <a href="/">Contact Us</a>
          </div>

        </div>

        <select className="footer-language">
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

        <p className="footer-country">Netflix India</p>

        <p className="footer-captcha">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
        </p>

      </div>
    </footer>
  );
}