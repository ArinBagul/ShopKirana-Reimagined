import React from "react";
import "../styles/Error404.css";

function Error404() {
  return (
    <section id="error-404">
      <div className="bg-image-es">
        <div className="overlay-es">
          <div className="logo-es">
            <h2 className="es-logo">
              <span>Shop</span>Kirana
            </h2>
          </div>
          <div className="content-es">
            <h1>Mobile Version</h1>
            <h2>Under Construction</h2>
            <p>
              We're working hard to bring you a fantastic mobile experience. In
              the meantime, enjoy our full features on the desktop version.
              <br></br>
              <i>Please check back soon!</i>
            </p>
            <div className="contact-batch-grp cta-es">
              <a
                href="mailto:info@shopkirana.com"
                className="contact-info-batch"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M14.375 2.29175H5.62502C4.5752 2.29175 3.56839 2.70879 2.82606 3.45112C2.08372 4.19345 1.66669 5.20026 1.66669 6.25008V13.7501C1.66669 14.2699 1.76907 14.7846 1.968 15.2649C2.16692 15.7451 2.45849 16.1815 2.82606 16.549C3.56839 17.2914 4.5752 17.7084 5.62502 17.7084H14.375C15.4242 17.7062 16.4297 17.2885 17.1715 16.5466C17.9134 15.8048 18.3311 14.7992 18.3333 13.7501V6.25008C18.3311 5.20094 17.9134 4.1954 17.1715 3.45355C16.4297 2.71169 15.4242 2.29395 14.375 2.29175ZM11.3334 9.22508C10.9234 9.4589 10.4595 9.58187 9.98752 9.58187C9.51553 9.58187 9.05168 9.4589 8.64168 9.22508L2.93335 5.95008C3.00716 5.28783 3.32253 4.67604 3.81912 4.23172C4.31571 3.7874 4.95867 3.54175 5.62502 3.54175H14.375C15.0408 3.54357 15.6828 3.78986 16.179 4.23383C16.6752 4.67781 16.9911 5.28855 17.0667 5.95008L11.3334 9.22508Z"
                    fill="#EDF2F4"
                  />
                </svg>
                info@shopkirana.com
              </a>
              <a href="tel:+91-782-811-2112" className="contact-info-batch">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M14.4225 11.4451L12.5175 11.2276C12.2935 11.2013 12.0665 11.2261 11.8534 11.3001C11.6404 11.3741 11.4469 11.4955 11.2875 11.6551L9.90753 13.0351C7.77842 11.9522 6.04787 10.2217 4.96503 8.09257L6.35253 6.70507C6.67503 6.38257 6.83253 5.93257 6.78003 5.47507L6.56253 3.58507C6.52001 3.2192 6.34443 2.88175 6.06921 2.63695C5.79399 2.39216 5.43836 2.25713 5.07003 2.25757H3.77253C2.92503 2.25757 2.22003 2.96257 2.27253 3.81007C2.67003 10.2151 7.79253 15.3301 14.19 15.7276C15.0375 15.7801 15.7425 15.0751 15.7425 14.2276V12.9301C15.75 12.1726 15.18 11.5351 14.4225 11.4451Z"
                    fill="#EDF2F4"
                  />
                </svg>
                +91-782-811-2112
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Error404;
