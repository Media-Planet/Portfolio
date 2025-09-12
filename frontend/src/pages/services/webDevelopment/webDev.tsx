import style from "../services.module.css";
import styles from "../../home/home.module.css";

import imgs_fun from "./data";

const imgs = imgs_fun();

function WebDev() {
  return (
    <>
      <div className="containerr bg-primary Times_New_RomanF_italic $ ">
        <h2
          className={`Times_New_RomanF_italic text-black pt-2 ${style["H_S"]} ${styles.cardH1Font} ${styles.glitch} `}
        >
          Web Development
        </h2>
        <div className="row justify-content-between">
          <section className="d-grid col-8 col-sm-7 pe-0">
            <p
              className={`align-self-center InterF text-black mb-0 ${style["P_S"]} pe-0`}
            >
              We craft stunning, responsive websites that combine bold design
              with smooth functionality—built to impress and perform.
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
                Start Your Journey
              </button>
            </div>
          </section>
          <section className="col p-0">
            <img
              src={imgs.photo}
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
                className={`Times_New_RomanF_italic text-black mt-2 mt-sm-3 mb-sm-4  ${style["Sec2_H_S"]} ${styles.cardH1Font} ${styles.glitch} ${styles.title_1}`}
              >
                What Do We Do ?
              </h2>
              <p
                className={`InterF text-black mb-4 mb-sm-5 ${style["Sec2_P_S_2"]}`}
              >
                From landing pages to full-scale platforms, we design websites
                that are fast, responsive, and built to tell your brand’s story
                in style.
              </p>

              <ul className="list-unstyled list d-flex flex-column gap-4 gap-sm-5 m-0">
                <li className={`${style["Sec2_Ul_S"]} InterF text-black`}>
                  <img
                    src={imgs.sec2_S1}
                    className={`me-2 me-sm-4 ${style["Sec2_S_img_S"]}`}
                  />
                  Custom UI/UX Design
                </li>
                <li className={`${style["Sec2_Ul_S"]} InterF text-black`}>
                  <img
                    src={imgs.sec2_S2}
                    className={`me-2 me-sm-4 ${style["Sec2_S_img_S"]}`}
                  />
                  Responsive Development
                </li>
                <li className={`${style["Sec2_Ul_S"]} InterF text-black`}>
                  <img
                    src={imgs.sec2_S3}
                    className={`me-2 me-sm-4 ${style["Sec2_S_img_S"]}`}
                  />
                  E-commerce
                </li>
                <li className={`${style["Sec2_Ul_S"]} InterF text-black`}>
                  <img
                    src={imgs.sec2_S4}
                    className={`me-2 me-sm-4 ${style["Sec2_S_img_S"]}`}
                  />
                  SEO & Performance Optimization
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
                className={`Times_New_RomanF_italic text-black ${style["Sec2_H_S_2"]}`}
              >
                Built for every screen
              </h3>
              <p className={`InterF text-black ${style["Sec2_P_S_2"]}`}>
                Your website will shine everywhere from big screens to
                mobile devices without losing speed or style.
              </p>

            </section>
          </div>

          <div className="d-flex mt-3">
            <p className="mx-5 border border-black w-25"></p>
          </div>

        </div>

        <div>
          <h2
            className={`Times_New_RomanF_italic text-black mt-1 mt-sm-2 mb-sm-5 ${style["H_S3"]} ${styles.cardH1Font} ${styles.glitch} ${styles.title_1}`}
          >
            Our Approach
          </h2>

          <section className="row gap-5 justify-content-around">
            <div className="col-3 d-flex justify-content-center flex-column text-center">
              <img src={imgs.sec3_P1} />
              <p className={`${style["Sec3_P_S"]} InterF text-black`}>
                Understand goals and user needs
              </p>
            </div>
            <div className="col-3 d-flex justify-content-center flex-column text-center">
              <img src={imgs.sec3_P2} />
              <p className={`${style["Sec3_P_S"]} InterF text-black`}>
                Create beautiful, functional layouts
              </p>
            </div>
            <div className="col-3 d-flex justify-content-center flex-column text-center">
              <img src={imgs.sec3_P3} />
              <p className={`${style["Sec3_P_S"]} InterF text-black`}>
                Develop and launch with precision
              </p>
            </div>
          </section>

        </div>

        <div className="mt-sm-5">

          <section className="row">
            <div className="col-7">
              <h2
                className={`Times_New_RomanF_italic text-black mt-sm-2 mb-sm-5 ${style["H_S4"]}`}
              >
                Why Choose Us?
              </h2>
              <p className={`InterF text-black my-sm-5 ${style["P_S4"]}`}>
                We’re not just designers – we are digital storytellers. We
                create web experiences that connect people together and help
                your business stand out, grow online, and turn visitors into
                loyal customers.
              </p>
            </div>
            <div className="col-5 align-content-center">
              <li className="list-unstyled d-flex flex-column gap-sm-4">
                <ul
                  className={`${style["Sec3_Ul_S"]} InterF text-black align-content-center`}
                >
                  <img
                    src={imgs.sec3_S5}
                    className={`${style["Sec3_S_img_S"]} mx-2`}
                    alt="..."
                  />
                  Fast Load Times
                </ul>
                <ul
                  className={`${style["Sec3_Ul_S"]} InterF text-black align-content-center`}
                >
                  <img
                    src={imgs.sec3_S6}
                    className={`${style["Sec3_S_img_S"]} mx-2`}
                    alt="..."
                  />
                  Accessible & User-Friendly
                </ul>
                <ul
                  className={`${style["Sec3_Ul_S"]} InterF text-black align-content-center`}
                >
                  <img
                    src={imgs.sec3_S7}
                    className={`${style["Sec3_S_img_S"]} mx-2`}
                    alt="..."
                  />
                  Built for Growth
                </ul>
              </li>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default WebDev;
