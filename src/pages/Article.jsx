import React from "react";
import styles from "../styles/Article.module.css";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Article() {
  const likeIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.624 4.42395C3.965 5.18195 2.75 6.98595 2.75 9.13695C2.75 11.3339 3.65 13.0279 4.938 14.4799C6.001 15.6759 7.287 16.6679 8.541 17.6339C8.83967 17.8639 9.13467 18.0933 9.426 18.3219C9.952 18.7369 10.421 19.0999 10.874 19.3649C11.327 19.6299 11.69 19.7499 12 19.7499C12.31 19.7499 12.674 19.6299 13.126 19.3649C13.579 19.0999 14.048 18.7369 14.574 18.3219C14.8653 18.0926 15.1603 17.8636 15.459 17.6349C16.713 16.6669 17.999 15.6759 19.062 14.4799C20.351 13.0279 21.25 11.3339 21.25 9.13695C21.25 6.98695 20.035 5.18195 18.376 4.42395C16.764 3.68695 14.598 3.88195 12.54 6.02095C12.47 6.09353 12.3862 6.15127 12.2934 6.19071C12.2006 6.23014 12.1008 6.25047 12 6.25047C11.8992 6.25047 11.7994 6.23014 11.7066 6.19071C11.6138 6.15127 11.53 6.09353 11.46 6.02095C9.402 3.88195 7.236 3.68695 5.624 4.42395ZM12 4.45995C9.688 2.38995 7.099 2.09995 5 3.05895C2.786 4.07395 1.25 6.42595 1.25 9.13795C1.25 11.8029 2.36 13.8369 3.817 15.4769C4.983 16.7899 6.41 17.8889 7.671 18.8589C7.95767 19.0789 8.233 19.2929 8.497 19.5009C9.01 19.9049 9.56 20.3349 10.117 20.6609C10.674 20.9869 11.31 21.2509 12 21.2509C12.69 21.2509 13.326 20.9859 13.883 20.6609C14.441 20.3349 14.99 19.9049 15.503 19.5009C15.767 19.2929 16.0423 19.0789 16.329 18.8589C17.589 17.8889 19.017 16.7889 20.183 15.4769C21.64 13.8369 22.75 11.8029 22.75 9.13795C22.75 6.42595 21.215 4.07395 19 3.06095C16.901 2.10095 14.312 2.39095 12 4.45995Z"
        fill="#595959"
      />
    </svg>
  );

  const commentIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M1.5 6.75C1.5 5.75544 1.89509 4.80161 2.59835 4.09835C3.30161 3.39509 4.25544 3 5.25 3H18.75C19.7446 3 20.6984 3.39509 21.4017 4.09835C22.1049 4.80161 22.5 5.75544 22.5 6.75V14.25C22.5 14.7425 22.403 15.2301 22.2145 15.6851C22.0261 16.14 21.7499 16.5534 21.4017 16.9017C21.0534 17.2499 20.64 17.5261 20.1851 17.7145C19.7301 17.903 19.2425 18 18.75 18H13.032L8.4375 22.02C8.22491 22.2059 7.96328 22.3265 7.68391 22.3676C7.40454 22.4087 7.11925 22.3685 6.86214 22.2517C6.60504 22.1349 6.38701 21.9466 6.23412 21.7092C6.08123 21.4718 5.99995 21.1954 6 20.913V18H5.25C4.25544 18 3.30161 17.6049 2.59835 16.9017C1.89509 16.1984 1.5 15.2446 1.5 14.25V6.75ZM5.25 4.5C4.65326 4.5 4.08097 4.73705 3.65901 5.15901C3.23705 5.58097 3 6.15326 3 6.75V14.25C3 14.8467 3.23705 15.419 3.65901 15.841C4.08097 16.2629 4.65326 16.5 5.25 16.5H7.5V20.847L12.468 16.5H18.75C19.3467 16.5 19.919 16.2629 20.341 15.841C20.7629 15.419 21 14.8467 21 14.25V6.75C21 6.15326 20.7629 5.58097 20.341 5.15901C19.919 4.73705 19.3467 4.5 18.75 4.5H5.25Z"
        fill="#595959"
      />
    </svg>
  );

  const shareIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M15.75 9H17.625C18.1223 9 18.5992 9.19754 18.9508 9.54917C19.3025 9.90081 19.5 10.3777 19.5 10.875V19.875C19.5 20.3723 19.3025 20.8492 18.9508 21.2008C18.5992 21.5525 18.1223 21.75 17.625 21.75H6.375C5.87772 21.75 5.40081 21.5525 5.04917 21.2008C4.69754 20.8492 4.5 20.3723 4.5 19.875V10.875C4.5 10.3777 4.69754 9.90081 5.04917 9.54917C5.40081 9.19754 5.87772 9 6.375 9H8.25M15.75 6L12 2.25M12 2.25L8.25 6M12 2.25V15.0469"
        stroke="#595959"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );

  return (
    <>
      <section id={styles.article}>
        <div className={styles.article_ctr}>
          <div className={styles.heading}>
            <h2>
              ShopKirana (DIRECT) raised $38Mn (285 Crore~) led by Sixth Sense
              Ventures, Oman India, Info Edge
            </h2>
          </div>

          <div className={styles.article_tools}>
            <div className={styles.publisher_ctr}>
              <img
                className={styles.profile_pic}
                src="https://static.wixstatic.com/media/12d400_5e99232600624c89b44b532ed22c4675~mv2.jpg/v1/fill/w_250,h_250,al_c,q_80,enc_auto/Tanutejas-Saraswat1.jpg"
                alt="profile image"
                width={50}
                height={50}
              />
              <div className={styles.publisher_content}>
                <span className={styles.publisher_name}>Admin</span>
                <div className={styles.article_meta_data}>
                  <span className={styles.date}>Jan 27, 2022</span>
                  <span>-</span>
                  <span className={styles.ttr}>3 min read</span>
                </div>
              </div>
            </div>
            <div className={styles.pub_tools_ctr}>
              <a href="#" className={`${styles.like} ${styles.pub_tool}`}>
                {likeIcon} 14.6K
              </a>
              <a href="#" className={`${styles.comment} ${styles.pub_tool}`}>
                {commentIcon} 400
              </a>
              <a href="#" className={`${styles.share} ${styles.pub_tool}`}>
                {shareIcon}
              </a>
            </div>
          </div>
          <div className={styles.page} id={styles.page}>
            <img src="https://static.wixstatic.com/media/c45202_ae229d7a1340447b99e248f9f9fbf1a4~mv2.jpg/v1/fill/w_925,h_671,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c45202_ae229d7a1340447b99e248f9f9fbf1a4~mv2.jpg" alt="Blog image" />
            Business-to-business FMCG startup Shopkirana said it has raised $38 million from  Sixth Sense Ventures, Oman India joint investment fund, Info Edge and other investors. <br></br><br></br>


The round was led by Info Edge, Oman India Joint Investment Fund and Sixth Sense Ventures. Trifecta, Incubate Fund, Akatsuki, Ajanta LLP, Gunosy Capital, 9Unicorns also participated in the round. <br></br><br></br>


ShopKirana, now known as Direct, works directly with brands and helps them with distribution network and market intelligence. With direct platform, the kirana stores can discover, order, get delivery and make payments for all the brands in one place. <br></br><br></br>


The raised capital will be used to expand the business to all major Tier-II cities of India. It works with 50,000 kirana stores in eight cities in Madhya Pradesh, Uttar Pradesh, Rajasthan and Gujarat, but the company aims to add a new city every 15 days this year and grow its presence across 30 cities by this year end, said Sumit Ghorawat, who co-founded ShopKirana.<br></br><br></br>


The company was founded by former executives from the consumer goods sector -- Deepak Dhanotiya, Sumit Ghorawat, and Tanutejas Saraswat . Shopkirana is the first company in the sector to break even operationally.<br></br><br></br>


Tanutejas Saraswat, founder of ShopKirana says: " We have a solid and tested playbook and plan to launch a new city every 15 days this year."<br></br><br></br>


Sumit Ghorawat, founder of ShopKirana says: "We are building India's biggest go-to-market platform for FMCG brands. With the right product market fit and considering the heavy adoption from kirana stores, legacy FMCG brands and D2C brands - we are super excited to take the business to national scale.<br></br><br></br>


Deepak Kumar Dhanotiya, founder of ShopKirana says: " We are building next generation digital and democratic ecosystem for FMCG brands"<br></br><br></br>


"The Shopkirana team has been very impressive in their rapid scale up and capital efficiency. Their deep understanding of the business has made them the partner of choice for many reputed FMCG brands. Kirana stores are the backbone of India and it is more important than ever to empower them with just-in-time sourcing that frees up working capital and increases product availability to enable them to service their customers better and compete with e-tailers." Sanjeev Bikchandani, Founder & Executive Vice Chairman of Info Edge<br></br><br></br>


“ShopKirana possesses the key tenets for a successful company. Large addressable market – $500 bn market poised for disruption, highly motivated promoters, capital-efficient business model and a great product market fit – serving the need of kirana shop owners and their suppliers (FMCG brands and others) thus laying a strong foundation for a long term competitive edge. OIJIF is very excited to partner with ShopKirana in this journey as we work on growing the company together.” Srinath Srinivasan, CEO at Oman India Joint Investment Fund Management Company.<br></br><br></br>


Nikhil Vora, Founder & CEO Sixth Sense Ventures stated, “We are big believers in consumer disruption led by distribution changeover. Shop Kirana is our window into that opportunity. Super thrilled to be able to partner the super trio Sumit, Deepak and Tanutejas in their mission to change the way, 11mn small kiranas operate and get serviced in India. We like the expertise of the founders who come with deep and relevant consumer experience, having led supply chain and GTM functions at leading FMCG brands. Interestingly, its also ensured that ShopKirana becomes the most capital efficient player in the market with a revenue run rate of ~ Rs800crs. Look forward to being part of this rocketship…ShopKirana”.<br></br><br></br>


ShopKirana will use the fund to scale across tier 2 cities & invest in solid technology backend which is giving data insights to brands. ShopKirana will invest in human capital to be ready for national scale. <br></br><br></br>
          </div>
        </div>
      </section>
      <Contact />
      <Footer />
    </>
  );
}

export default Article;
