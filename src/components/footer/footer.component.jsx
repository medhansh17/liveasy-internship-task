import "./footer.styles.css";
import ExternalLink from "../external_link.component";

const Footer = () => {
  return (
    <footer>
      <div className="footerLinks">
        <ExternalLink url="https://about.google/" text="About" />
        <ExternalLink url="https://ads.google.com/" text="Advertising" />
        <ExternalLink
          url="https://www.google.com/intl/en_in/business/"
          text="Business"
        />
        <ExternalLink
          url="https://www.google.com/search/howsearchworks/"
          text="How Search Works"
        />
      </div>
      <div className="footerLinks">
        <ExternalLink
          url="https://policies.google.com/privacy"
          text="Privacy"
        />
        <ExternalLink url="https://policies.google.com/terms" text="Terms" />
        <a href="" rel="noopener noreferrer" target="_blank">
          Settings
        </a>
      </div>
    </footer>
  );
};

export default Footer;
