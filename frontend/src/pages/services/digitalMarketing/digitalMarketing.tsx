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
        className={`containerr bg-primary Times_New_RomanF_italic ${styles.cardCustom}`}
        dir={Direction || "ltr"}
      >
        <h2 className={`${styles.cardH1Font} ${styles.glitch}  `}>
          {t("Digital Marketing")}
        </h2>
        <div className="row justify-content-between">
          <section className="d-grid col-8 col-sm-7 pe-0">
            <p className={`  ${styles.paragraph} ${style.paragraphWeb} `}>
              {t(
                "We create eye-catching content and smart campaigns that grow your brand, spark engagement, and drive results."
              )}
            </p>
            <div className={`${style.btnDiv}`}>
              <button className={`${style.btnCustom} ${style.btnWeb}`}>
                <img
                  className={`${styles.buttonLogo} me-2`}
                  src={imgs.logo}
                  alt="Media Planet"
                />
                {t("Start Your Journey")}
              </button>
            </div>
          </section>
          <section className={`col p-0 ${style.codeImage}`}>
            <img
              src={i18n.language === "ar" ? photo_AR : imgs.photo}
              className={`${style["img_S"]}`}
              alt="... Marketing"
            />
          </section>
        </div>

        <div className="d-flex justify-content-center">
          <p
            className={`border border-black w-75 mt-4 mt-sm-5 ${style.lineWeb}`}
          ></p>
        </div>

        <div className={`${style.sectionTwo}`}>
          <div className="row">
            <section className="col-sm-6">
              <h2
                className={`${styles.cardH1Font} ${styles.glitch}  ${style["Sec2_H_S"]}`}
              >
                {t("What Do We Do?")}
              </h2>
              <p
                className={`${styles.paragraph} mb-4 mb-sm-5 ${style["Sec2_P_S_2"]} `}
              >
                {t(
                  "From strategy to launch, we design effective campaigns that bring your story to life -cross-platform, impactful, and built to endure."
                )}
              </p>

              <ul className="list-unstyled list d-flex flex-column gap-4 gap-sm-5 m-0">
                <li className={`${style["Sec2_Ul_S"]} ${styles.paragraph}`}>
                  <img
                    src={imgs.sec2_S1}
                    className={`me-2 me-sm-4 ${style["Sec2_S_img_S"]} `}
                  />
                  {t("Campaign Strategy")}
                </li>
                <li className={`${style["Sec2_Ul_S"]} ${styles.paragraph} `}>
                  <img
                    src={imgs.sec2_S2}
                    className={`me-2 me-sm-4 ${style["Sec2_S_img_S"]}`}
                  />
                  {t("Content Creation")}
                </li>
                <li className={`${style["Sec2_Ul_S"]} ${styles.paragraph}`}>
                  <img
                    src={imgs.sec2_S3}
                    className={`me-2 me-sm-4 ${style["Sec2_S_img_S"]}`}
                  />
                  {t("Social Media Marketing")}
                </li>
              </ul>
            </section>

            <section className="col-sm-6">
              <img
                src={imgs.sec2_png1}
                alt="#"
                className={`${style["img_S"]} ${style.imgSec2Marketing}`}
              />
              <h3
                className={`${styles.cardH1Font} ${styles.glitch}  ${style["Sec2_H_S_2"]}`}
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

        <div className={`${style.sectionThree} mt-sm-5`}>
          <h2
            className={`${styles.cardH1Font} ${styles.glitch}  ${style["H_S3"]} ${style.sectionThreehead}`}
          >
            {t("Our Approach")}
          </h2>

          <section className="row gap-5 justify-content-around">
            <div className="col-3 d-flex justify-content-center  align-items-center flex-column">
              <img
                src={i18n.language === "ar" ? sec3_P1_AR : imgs.sec3_P1}
                className={`${style.Sec3_S_img_Marketing}`}
              />
              <p
                className={`${style["Sec3_P_S"]}  text-black text-center ${style.sec3Desimg}`}
              >
                {t("Business alignment")}
              </p>
            </div>
            <div className="col-3 d-flex justify-content-center align-items-center flex-column text-center">
              <img
                src={i18n.language === "ar" ? sec3_P2_AR : imgs.sec3_P2}
                className={`${style.Sec3_S_img_Marketing}`}
              />
              <p
                className={`${style["Sec3_P_S"]}  text-black ${style.sec3Desimg} `}
              >
                {t("Content creation")}
              </p>
            </div>
            <div className="col-3 d-flex justify-content-center  align-items-center flex-column text-center">
              <img
                src={i18n.language === "ar" ? sec3_P3_AR : imgs.sec3_P3}
                className={`${style.Sec3_S_img_Marketing}`}
              />
              <p
                className={`${style["Sec3_P_S"]}  text-black text-center ${style.sec3Desimg}`}
              >
                {t("Performance optimization")}
              </p>
            </div>
          </section>
        </div>

        <div className={`mt-sm-5 ${style.sectionFour}`}>
          <section className="row">
            <div className="col-7">
              <h2 className={`${styles.cardH1Font} ${styles.glitch} }`}>
                {t("Why Choose Us?")}
              </h2>
              <p className={`${styles.paragraph} my-sm-5 }`}>
                {t(
                  "We’re not just marketers – we are digital growth strategists. We plan and execute data-driven campaigns that deliver measurable results and build lasting brand engagement across every platform."
                )}
              </p>
            </div>

            <div
              className={`col-5 align-content-center ${style.sectionFourList}`}
            >
              <li className="list-unstyled d-flex flex-column gap-4">
                <ul className={` ${styles.paragraph} align-content-center `}>
                  <img
                    src={imgs.sec3_S4}
                    className={`${style["Sec3_S_img_S"]} mx-2`}
                    alt="..."
                  />
                  <div className={` ${style.ulSectionFour}`}>
                    {t("Analytical & Data-Driven")}
                  </div>
                </ul>
                <ul className={` ${styles.paragraph} `}>
                  <img
                    src={imgs.sec3_S5}
                    className={`${style["Sec3_S_img_S"]} mx-2`}
                    alt="..."
                  />
                  {t("Multi-Platform Strategy")}
                </ul>
                <ul className={` ${styles.paragraph} `}>
                  <img
                    src={imgs.sec3_S6}
                    className={`${style["Sec3_S_img_S"]} mx-2`}
                    alt="..."
                  />
                  {t("Optimized Campaigns")}
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
