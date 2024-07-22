import React from "react";
import { Tilt } from "react-tilt";
import "../styles/Contact.css";

import map from "../assets/map.png";

function Contact() {
  const addressPointerTilt = {
    reverse: false, // reverse the tilt direction
    max: 25, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };

  return (
    <section id="contact-section">
      <div className="contact-container">
        <div className="map"></div>
        <div className="contact-card">
          <div className="contact-head-ctr">
            <div className="contact-head">
              <span className="playfair">Connect</span>
              <span>with us</span>
            </div>
            <div className="contact-subhead">
              <p>We will reach you within 50 minutes</p>
            </div>
          </div>
          <form className="contact-form">
            <input type="text" placeholder="First name" id="fname" />
            <input type="text" placeholder="Last name" id="lname" />
            <input type="text" placeholder="Email address" id="email" />
            <input type="text" placeholder="Phone" id="phone" />
            <button type="submit" id="contact-btn" className="contact-btn">
              Connect
            </button>
          </form>
        </div>
        <a href="https://maps.app.goo.gl/ULR6g4awrHaeE3Qg9" target="_blank" className="map-cta">
          look at Google Maps
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
          >
            <path
              d="M9.03641 7.59837L9.01873 0.785395L2.20576 0.767717C2.13478 0.758107 2.06256 0.763859 1.994 0.784585C1.92543 0.805311 1.86212 0.840528 1.80835 0.887849C1.75458 0.93517 1.7116 0.993492 1.68233 1.05887C1.65306 1.12424 1.63817 1.19514 1.63869 1.26677C1.6392 1.33839 1.65509 1.40908 1.6853 1.47402C1.7155 1.53897 1.7593 1.59668 1.81374 1.64322C1.86819 1.68977 1.93199 1.72408 2.00085 1.74382C2.0697 1.76357 2.14199 1.76829 2.21283 1.75767L7.31814 1.77888L0.554664 8.54236C0.460896 8.63612 0.408218 8.7633 0.408218 8.89591C0.408218 9.02852 0.460896 9.15569 0.554664 9.24946C0.648432 9.34323 0.77561 9.39591 0.908218 9.39591C1.04083 9.39591 1.168 9.34323 1.26177 9.24946L8.02525 2.48599L8.04646 7.5913C8.04693 7.72398 8.10009 7.85104 8.19424 7.94453C8.28839 8.03802 8.41582 8.09028 8.54851 8.08981C8.68119 8.08934 8.80825 8.03618 8.90174 7.94203C8.99523 7.84788 9.04749 7.72044 9.04702 7.58776L9.03641 7.59837Z"
              fill="#EDF2F4"
            />
          </svg>
        </a>
        <a href="https://maps.app.goo.gl/ULR6g4awrHaeE3Qg9" target="_blank" className="address-batch">
          1501, 15th Floor, SKYE Corporate Park, Plot No 25, Scheme No 78, Part
          II, Sector B Indore 452010
        </a>
        <div className="area">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="110"
            height="110"
            viewBox="0 0 97 82"
            fill="none"
          >
            <g filter="url(#filter0_dd_38_12)">
              <path
                d="M6 53L14.5 6C14.5 6 26.2631 9.5 34 9.5C63 9.5 78.1667 15 91.5 18L76 76.5L6 53Z"
                fill="#F4F4F4"
                fillOpacity="0.2"
                shapeRendering="crispEdges"
              />
              <path
                d="M14.5 6L14.7852 5.04153L13.7147 4.72302L13.516 5.82204L14.5 6ZM6 53L5.01596 52.822L4.86209 53.6728L5.68174 53.948L6 53ZM76 76.5L75.6817 77.448C75.9438 77.536 76.2307 77.5115 76.4741 77.3805C76.7175 77.2494 76.8958 77.0234 76.9666 76.7561L76 76.5ZM91.5 18L92.4666 18.2561L92.7326 17.2523L91.7195 17.0244L91.5 18ZM13.516 5.82204L5.01596 52.822L6.98404 53.178L15.484 6.17796L13.516 5.82204ZM5.68174 53.948L75.6817 77.448L76.3183 75.552L6.31826 52.052L5.68174 53.948ZM76.9666 76.7561L92.4666 18.2561L90.5334 17.7439L75.0334 76.2439L76.9666 76.7561ZM91.7195 17.0244C78.4557 14.04 63.1423 8.5 34 8.5V10.5C62.8577 10.5 77.8777 15.96 91.2805 18.9756L91.7195 17.0244ZM34 8.5C30.2477 8.5 25.4625 7.64636 21.5672 6.77416C19.6298 6.34037 17.9314 5.90641 16.7179 5.581C16.1113 5.41835 15.6264 5.28296 15.2939 5.18848C15.1277 5.14124 14.9996 5.10424 14.9135 5.07918C14.8705 5.06664 14.838 5.0571 14.8164 5.05075C14.8056 5.04758 14.7976 5.04521 14.7924 5.04366C14.7898 5.04289 14.7879 5.04232 14.7867 5.04196C14.7861 5.04179 14.7856 5.04166 14.7854 5.04159C14.7853 5.04155 14.7852 5.04154 14.7852 5.04152C14.7851 5.04152 14.7852 5.04153 14.5 6C14.2148 6.95847 14.2149 6.95851 14.2151 6.95856C14.2152 6.9586 14.2155 6.95866 14.2157 6.95873C14.2162 6.95887 14.2168 6.95907 14.2176 6.95931C14.2193 6.9598 14.2217 6.9605 14.2247 6.96141C14.2309 6.96323 14.2398 6.96588 14.2515 6.96933C14.275 6.97623 14.3094 6.98633 14.3544 6.99944C14.4445 7.02564 14.5767 7.06384 14.7472 7.1123C15.0882 7.20922 15.5828 7.34728 16.1999 7.51275C17.4337 7.84359 19.1597 8.28463 21.1302 8.72584C25.0506 9.60364 30.0154 10.5 34 10.5V8.5Z"
                fill="#F4F4F4"
              />
            </g>
            <defs>
              <filter
                id="filter0_dd_38_12"
                x="0.862091"
                y="0.7229"
                width="95.8705"
                height="80.7771"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_38_12"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_dropShadow_38_12"
                  result="effect2_dropShadow_38_12"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_38_12"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>

        <div className="address-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="80"
            viewBox="0 0 70 80"
            fill="none"
          >
            <g filter="url(#filter0_dddd_38_9)">
              <path
                d="M35 20.1666C33.8949 20.1666 32.8351 19.7276 32.0537 18.9462C31.2723 18.1648 30.8333 17.105 30.8333 15.9999C30.8333 14.8948 31.2723 13.835 32.0537 13.0536C32.8351 12.2722 33.8949 11.8333 35 11.8333C36.1051 11.8333 37.1649 12.2722 37.9463 13.0536C38.7277 13.835 39.1667 14.8948 39.1667 15.9999C39.1667 16.5471 39.0589 17.0889 38.8495 17.5944C38.6401 18.1 38.3332 18.5593 37.9463 18.9462C37.5594 19.3331 37.1 19.64 36.5945 19.8494C36.089 20.0588 35.5472 20.1666 35 20.1666ZM35 4.33325C31.9058 4.33325 28.9384 5.56241 26.7504 7.75034C24.5625 9.93826 23.3333 12.9057 23.3333 15.9999C23.3333 24.7499 35 37.6666 35 37.6666C35 37.6666 46.6667 24.7499 46.6667 15.9999C46.6667 12.9057 45.4375 9.93826 43.2496 7.75034C41.0617 5.56241 38.0942 4.33325 35 4.33325Z"
                fill="#E54421"
              />
              <path
                d="M31.7002 19.2997C32.5753 20.1749 33.7623 20.6666 35 20.6666C35.6128 20.6666 36.2197 20.5459 36.7859 20.3114C37.3521 20.0768 37.8665 19.7331 38.2998 19.2998C38.7332 18.8664 39.0769 18.352 39.3114 17.7858C39.546 17.2196 39.6667 16.6128 39.6667 15.9999C39.6667 14.7622 39.175 13.5753 38.2998 12.7001C37.4247 11.8249 36.2377 11.3333 35 11.3333C33.7623 11.3333 32.5753 11.8249 31.7002 12.7001C30.825 13.5753 30.3333 14.7622 30.3333 15.9999C30.3333 17.2376 30.825 18.4246 31.7002 19.2997ZM35 36.9098C34.9618 36.8658 34.921 36.8186 34.8775 36.7681C34.5613 36.4011 34.1088 35.8661 33.5653 35.1966C32.478 33.8568 31.0291 31.9809 29.5812 29.8349C28.1323 27.6874 26.6905 25.2785 25.6126 22.8723C24.5316 20.4596 23.8333 18.0863 23.8333 15.9999C23.8333 13.0383 25.0098 10.198 27.104 8.10389C29.1981 6.00974 32.0384 4.83325 35 4.83325C37.9616 4.83325 40.8019 6.00974 42.896 8.10389C44.9902 10.198 46.1667 13.0383 46.1667 15.9999C46.1667 18.0863 45.4684 20.4596 44.3875 22.8723C43.3095 25.2785 41.8678 27.6874 40.4189 29.8349C38.9709 31.9809 37.522 33.8568 36.4347 35.1966C35.8913 35.8661 35.4387 36.4011 35.1225 36.7681C35.0791 36.8186 35.0382 36.8658 35 36.9098Z"
                stroke="#F4F4F4"
              />
            </g>
            <defs>
              <filter
                id="filter0_dddd_38_9"
                x="0.333344"
                y="0.333252"
                width="69.3333"
                height="79.3333"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="19" />
                <feGaussianBlur stdDeviation="11.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.968333 0 0 0 0 0.278972 0 0 0 0 0.129111 0 0 0 0.7 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_38_9"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="9" />
                <feGaussianBlur stdDeviation="6.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.968333 0 0 0 0 0.278972 0 0 0 0 0.129111 0 0 0 0.8 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_dropShadow_38_9"
                  result="effect2_dropShadow_38_9"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="5" />
                <feGaussianBlur stdDeviation="3" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 0.422262 0 0 0 0 0.296667 0 0 0 0.65 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect2_dropShadow_38_9"
                  result="effect3_dropShadow_38_9"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="3" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.55 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect3_dropShadow_38_9"
                  result="effect4_dropShadow_38_9"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect4_dropShadow_38_9"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>

        <div className="contact-details">
          <span>Contact us</span>
          <div className="contact-batch-grp">
            <a href="mailto:info@shopkirana.com" className="contact-info-batch">
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
    </section>
  );
}

export default Contact;
