import "./footer.styles.css";

const Footer = () => {
  return (
    <footer>
      <div className="footerLinks">
        <a href="https://about.google/">About</a>
        <a href="https://ads.google.com/">Advertising</a>
        <a href="https://www.google.com/intl/en_in/business/">Buisness</a>
        <a href="https://www.google.com/search/howsearchworks/">
          How Search Works
        </a>
      </div>
      <div className="footerLinks">
        <a href="https://policies.google.com/privacy">Privacy</a>
        <a href="https://policies.google.com/terms">Terms</a>
        <a href="">Settings</a>
      </div>
    </footer>
  );
};

export default Footer;
