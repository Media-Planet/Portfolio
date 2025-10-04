import { useTranslation } from "react-i18next";
import style from "../services.module.css";
import { Direction } from "../../../util/i18n/Direction";
import imgs_fun from "./data";
import sec3_P1_AR from "../../../assets/Images/services/DigitalMarketing/Card_1_AR.png";
import sec3_P2_AR from "../../../assets/Images/services/DigitalMarketing/Card_2_AR.png";
import sec3_P3_AR from "../../../assets/Images/services/DigitalMarketing/Card_3_AR.png";
import photo_AR from "../../../assets/Images/services/DigitalMarketing/1_AR.png";
import styles from "../../home/home.module.css";

function DigitalMarketing() {
  const [t, i18n] = useTranslation();
  const imgs = imgs_fun();
  return (
    <>
      <div
        className="containerr bg-primary Times_New_RomanF_italic"
        dir={Direction || "ltr"}
      >
        <h2
          className={`${style["H_S"]} ${styles.cardH1Font} ${styles.glitch} `}
        >
          {t("Digital Marketing")}
        </h2>
        <div className="row justify-content-between">
          <section className="d-grid col-8 col-sm-7 pe-0">
            <p className={`${styles.paragraph} ${style["P_S"]} pe-0`}>
              {t(
                "We create eye-catching content and smart campaigns that grow your brand, spark engagement, and drive results."
              )}
            </p>
            <div className="align-self-center pe-0 me-sm-5">
              <button
                className={`bg-secondary text-success w-100 rounded-5 border-0 Times_New_RomanF_italic ${style["btn_S"]} mt-3 mt-sm-0`}
              >
                <img
                  className={`mx-1 mx-sm-3 mb-sm-2 py-1 ${style["btm_Img_S"]}`}
                  src={imgs.logo}
                  alt="Media Planet"
                />
                {t("Start Your Journey")}
              </button>
            </div>
          </section>
          <section className="col p-0">
            <img
              src={i18n.language === "ar" ? photo_AR : imgs.photo}
              className={`${style["img_S"]}`}
              alt="... coding"
            />
          </section>
        </div>

        <div className="d-flex justify-content-center">
          <p className="border border-black w-75 mt-4 mt-sm-5"></p>
        </div>

        <div>
          <div className="row">
            <section className="col-sm-6">
              <h2
                className={`${style["Sec2_H_S"]} ${styles.cardH1Font} ${styles.glitch} `}
              >
                {t("What Do We Do ?")}
              </h2>
              <p className={`${styles.paragraph} ${style["Sec2_P_S_2"]}`}>
                {t(
                  "From strategy to launch, we design effective campaigns that bring your story to life -cross-platform, impactful, and built to endure."
                )}
              </p>

              <ul className="list-unstyled list d-flex flex-column gap-4 gap-sm-5 m-0">
                <li className={`${style["Sec2_Ul_S"]} ${styles.paragraph}`}>
                  <img
                    src={imgs.sec2_S1}
                    className={` ${style["Sec2_S_img_S"]}`}
                  />
                  {t("Campaign Strategy")}
                </li>
                <li className={`${style["Sec2_Ul_S"]} ${styles.paragraph} `}>
                  <img
                    src={imgs.sec2_S2}
                    className={`${style["Sec2_S_img_S"]}`}
                  />
                  {t("Content Creation")}
                </li>
                <li className={`${style["Sec2_Ul_S"]} ${styles.paragraph}`}>
                  <img
                    src={imgs.sec2_S3}
                    className={` ${style["Sec2_S_img_S"]}`}
                  />
                  {t("Social Media Marketing")}
                </li>
              </ul>
            </section>

            <section className="col-sm-6">
              <img
                src={imgs.sec2_png1}
                alt="#"
                className={`${style["img_S"]}`}
              />
              <h3
                className={` ${style["Sec2_H_S_2"]} ${styles.cardH1Font} ${styles.glitch} `}
              >
                {t("Results across channels")}
              </h3>
              <p className={`${styles.paragraph} ${style["Sec2_P_S_2"]}`}>
                {t(
                  "From organic search to paid ads, social media content - we get results through diverse digital channels."
                )}
              </p>
            </section>
          </div>
          <div className="d-flex mt-3">
            <p className="mx-5 border border-black w-25"></p>
          </div>
        </div>

        <div>
          <h2
            className={`${styles.cardH1Font} ${styles.glitch} ${style["H_S3"]}`}
          >
            {t("Our Approach")}
          </h2>

          <section className="row gap-5 justify-content-around">
            <div className="col-3 d-flex justify-content-center flex-column">
              <img src={i18n.language === "ar" ? sec3_P1_AR : imgs.sec3_P1} />
              <p
                className={`${style["Sec3_P_S"]} ${styles.paragraph} text-center`}
              >
                {t("Understand your business and campaign goals.")}
              </p>
            </div>
            <div className="col-3 d-flex justify-content-center flex-column text-center">
              <img src={i18n.language === "ar" ? sec3_P2_AR : imgs.sec3_P2} />
              <p
                className={`${style["Sec3_P_S"]} ${styles.paragraph} text-black`}
              >
                {t(
                  "Produce high quality and engaging content for each platform."
                )}
              </p>
            </div>
            <div className="col-3 d-flex justify-content-center flex-column text-center">
              <img src={i18n.language === "ar" ? sec3_P3_AR : imgs.sec3_P3} />
              <p
                className={`${style["Sec3_P_S"]} ${styles.paragraph} text-black`}
              >
                {t("Analyze data and optimize campaign.")}
              </p>
            </div>
          </section>
        </div>

        <div className="mt-sm-5">
          <section className="row">
            <div className="col-7">
              <h2
                className={`${styles.cardH1Font} ${styles.glitch}  ${style["H_S"]}`}
              >
                {t("Why Choose Us?")}
              </h2>
              <p
                className={`${styles.paragraph} text-black my-5 ${style["P_S"]}`}
              >
                {t(
                  "We’re not just marketers – we are digital growth strategists. We plan and execute data-driven campaigns that deliver measurable results and build lasting brand engagement across every platform."
                )}
              </p>
            </div>

            <div className="col-5 align-content-center">
              <li className="list-unstyled d-flex flex-column gap-4">
                <ul
                  className={`${style["Sec3_Ul_S"]} ${styles.paragraph} align-content-center`}
                >
                  <img
                    src={imgs.sec3_S4}
                    className={`${style["Sec3_S_img_S"]} mx-2`}
                    alt="..."
                  />
                  {t("Analytical & Data-Driven")}
                </ul>
                <ul
                  className={`${style["Sec3_Ul_S"]} ${styles.paragraph} align-content-center`}
                >
                  <img
                    src={imgs.sec3_S5}
                    className={`${style["Sec3_S_img_S"]} mx-2`}
                    alt="..."
                  />
                  {t("Multi-Platform Strategy")}
                </ul>
                <ul
                  className={`${style["Sec3_Ul_S"]} ${styles.paragraph} align-content-center`}
                >
                  <img
                    src={imgs.sec3_S6}
                    className={`${style["Sec3_S_img_S"]} mx-2`}
                    alt="..."
                  />
                  {t("Optimized & Scalable Campaigns")}
                </ul>
              </li>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default DigitalMarketing;
