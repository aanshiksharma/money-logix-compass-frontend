function Footer() {
  const styles = {
    list: "space-y-2.5 text-muted-foreground text-xs",
    listHeading:
      "uppercase text-sm font-medium tracking-wider mb-4 text-secondary-foreground",
  };

  return (
    <footer className="">
      <div className="w-full mx-auto max-w-5xl px-4 md:px-6">
        <div className="py-8 w-full">
          <h2 className="text-lg mb-3">MoneyLogix Compass</h2>
          <p className="max-w-1/2 text-sm text-balance text-muted-foreground">
            Helping first-time investors move from uncertainty to a structured
            investment strategy through thoughtful conversations and
            personalized investment planning.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2 sm:gap-4 py-8 border-t border-border/75">
          <div>
            <h3 className={styles.listHeading}>Product</h3>
            <ul className={styles.list}>
              <li>
                <a href="#how" className="footer-link">
                  How it Works
                </a>
              </li>
              <li>
                <a href="#show" className="footer-link">
                  Showcase
                </a>
              </li>
              <li>
                <a href="#why" className="footer-link">
                  Why Compass
                </a>
              </li>
              <li>
                <a href="#faq" className="footer-link">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={styles.listHeading}>Project</h3>
            <ul className={styles.list}>
              <li>
                <a
                  target="_blank"
                  href="https://github.com/aanshiksharma/money-logix-compass-frontend"
                  className="footer-link"
                >
                  GitHub (Frontend)
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://github.com/aanshiksharma/money-logix-compass-backend"
                  className="footer-link"
                >
                  Github (Backend)
                </a>
              </li>
              <li>
                <a target="_blank" href="#" className="footer-link">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={styles.listHeading}>legal</h3>
            <ul className={styles.list}>
              <li>
                <a href="#" className="footer-link">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <section className="border-t text-center text-pretty border-border">
        <div className="max-w-5xl mx-auto px-4 md:px-6 py-4 text-xs text-muted-foreground gap-2 flex flex-col items-center">
          <div className="grid md:grid-cols-[auto_auto_auto] gap-[0.5ch] md:gap-[1ch]">
            <p>© 2026 MoneyLogix Compass. All rights reserved.</p>
            <span className="max-md:hidden">|</span>
            <p>
              Built for MoneyLogix Hackathon Placement Drive 2026 in JSS
              University
            </p>
          </div>

          <p>
            <span className="font-bold">Disclaimer: </span>
            Compass provides educational investment planning assistance and
            should not be considered personalized financial, investment, or
            legal advice.
          </p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
