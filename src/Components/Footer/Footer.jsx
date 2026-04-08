import './Footer.css';
import {
  FaInstagram,
  FaSnapchatGhost,
  FaYoutube,
  FaEnvelope,
  FaTiktok
} from 'react-icons/fa';

// ✅ FIX PATH (adjust based on your folder)
import footer_logo from '../../../public/assets/footer/logo.png';

export default function Footer() {
  return (
    <footer className="footer">

      {/* TOP SECTION */}
      <div className="footer__top">

        {/* LEFT */}
        <div className="footer__left">
          <h3>Say Hello</h3>

          <div className="footer__socials">
            <FaInstagram />
            <FaSnapchatGhost />
            <FaYoutube />
            <FaEnvelope />
            <FaTiktok />
          </div>
        </div>

        {/* RIGHT SIDE (2 COLUMNS) */}
        <div className="footer__right">

          <div className="footer__col">
            <h4>Hauptmenü</h4>
            <ul>
              <li>Home</li>
              <li>Pawbottle</li>
              <li>Kontakt</li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Richtlinen</h4>
            <ul>
              <li>Impressum</li>
              <li>Allgemeine Geschäftsbedingungen</li>
              <li>Datenschutzerklärung</li>
              <li>Widerrufsrecht</li>
              <li>Versandbedingungen</li>
            </ul>
          </div>

        </div>

      </div>

      {/* BIG LOGO */}
      <div className="footer__logo">
        <img src={footer_logo} alt="Pawlabbi Logo" />
      </div>

      {/* COPYRIGHT */}
      <div className="footer__bottom">
        © 2025, Pawlabbi.
      </div>

    </footer>
  );
}