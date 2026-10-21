export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-top">
        <a href="#home" className="footer-brand">
          ACTION C 
          {/* <span>C</span> */}
          <small>PRODUCTION HOUSE</small>
        </a>

        <p className="footer-message">
          DREAM BIG
          <br />
          WORK <span>HARD.</span>
        </p>
      </div>

      <div className="footer-divider" />

      <div className="footer-grid">
        <div className="footer-column">
          <h3>PHONE</h3>
          <a href="tel:091234567">091234567</a>
        </div>

        <div className="footer-column">
          <h3>LOCATION</h3>
          <p>HỒ CHÍ MINH, VIỆT NAM</p>
        </div>
    
        <div className="footer-column">
          <h3>SOCIAL</h3>
          <a href="https://www.facebook.com/share/1NFFj8EyNy/?mibextid=wwXIfr" target="_blank" rel="noreferrer">
            Facebook ↗
          </a>
          <a href="https://youtube.com/@actioncteam?si=FLEGIHLWTYh48h_P" target="_blank" rel="noreferrer">
            YouTube ↗
          </a>
          <a href="https://www.tiktok.com/@action.c?_r=1&_t=ZS-9AkMim2siC0" target="_blank" rel="noreferrer">
            TikTok ↗
          </a>
        </div>

        <div className="footer-column">
          <h3>EMAIL</h3>
          <a href="mailto:cas.dmc91@gmail.com">
            cas.dmc91@gmail.com
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 ACTION C PRODUCTION</span>
        <span>CRAFTED WITH DENIGH.</span>
      </div>
    </footer>
  );
}