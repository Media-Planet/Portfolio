import { useTranslation } from 'react-i18next';
import style from '../services.module.css';
import { Direction } from '../../../util/i18n/Direction';
import imgs_fun from './data';
import sec3_P1_AR from "../../../assets/Images/services/BoardG/Card_1_AR.png"
import sec3_P2_AR from "../../../assets/Images/services/BoardG/Card_2_AR.png"
import sec3_P3_AR from "../../../assets/Images/services/BoardG/Card_3_AR.png"


function BoardG() {
  const [t, i18n] = useTranslation();
  const imgs = imgs_fun();
  return (
    <>
      <div className='px-3 px-sm-4 bg-primary' dir={Direction || "ltr"}>
        <h2 className={`Times_New_RomanF_italic text-black pt-2 ${style['H_S']}`}>{t("Board Games")}</h2>
        <div className='row justify-content-between'>
          <section className='d-grid col-8 col-sm-7 pe-0'>
            <p className={`align-self-center InterF text-black mb-0 ${style['P_S']} pe-0`}>{t("We design imaginative, visually striking board games that engage, entertain, and tell unforgettable stories.")}</p>
            <div className='align-self-center pe-0 me-sm-5'>
              <button className={`bg-secondary text-success w-100 rounded-5 border-0 Times_New_RomanF_italic ${style['btn_S']} mt-3 mt-sm-0`}>
                <img className={`mx-1 mx-sm-3 mb-sm-2 py-1 ${style['btm_Img_S']}`} src={imgs.logo} alt="Media Planet" />{t("Start Your Journey")}
              </button>
            </div>
          </section>
          <section className='col p-0'>
            <img src={imgs.photo} className={`${style['img_S']}`} alt="... coding" />
          </section>
        </div>

        <div className='d-flex justify-content-center'>
          <p className='border border-black w-75 mt-4 mt-sm-5'></p>
        </div>

        <div>
          <div className='row'>
            <section className='col-sm-6'>
              <h2 className={`Times_New_RomanF_italic text-black mt-2 mt-sm-3 mb-sm-4  ${style['Sec2_H_S']}`}>{t("What Do We Do ?")}</h2>
              <p className={`InterF text-black mb-4 mb-sm-5 ${style['Sec2_P_S_2']}`}>
                {t("From brand concepts to custom board games, we design playful experiences that bring your story to life—strategic, immersive, and built to connect.")}
              </p>

              <ul className='list-unstyled list d-flex flex-column gap-4 gap-sm-5 m-0'>
                <li className={`${style['Sec2_Ul_S']} InterF text-black`}><img src={imgs.sec2_S1} className={`me-2 me-sm-4 ${style['Sec2_S_img_S']}`} />
                  {t("Prototype Creation")}
                </li>
                <li className={`${style['Sec2_Ul_S']} InterF text-black`}><img src={imgs.sec2_S2} className={`me-2 me-sm-4 ${style['Sec2_S_img_S']}`} />
                  {t("Production Assistance")}
                </li>
                <li className={`${style['Sec2_Ul_S']} InterF text-black`}><img src={imgs.sec2_S3} className={`me-2 me-sm-4 ${style['Sec2_S_img_S']}`} />
                  {t("Rulebook Writing")}
                </li>
              </ul>
            </section>

            <section className='col-sm-6'>

              <img src={imgs.sec2_png1} alt="#" className={`${style['img_S']}`} />
              <h3 className={`Times_New_RomanF_italic text-black ${style['Sec2_H_S_2']}`}>{t("Built for every player")}</h3>
              <p className={`InterF text-black ${style['Sec2_P_S_2']}`}>{t("From casual to competitive, adults to kids - our games captivate players of all types.")}
              </p>
            </section>
          </div>
          <div className='d-flex mt-3'>
            <p className='mx-5 border border-black w-25'></p>
          </div>
        </div>


        <div>
          <h2 className={`Times_New_RomanF_italic text-black mt-1 mt-sm-2 mb-sm-5 ${style['H_S3']}`}>{t("Our Approach")}</h2>

          <section className='row gap-5 justify-content-around'>
            <div className='col-3 d-flex justify-content-center flex-column'>
              <img src={(i18n.language === "ar") ? sec3_P1_AR : imgs.sec3_P1} />
            </div>
            <div className='col-3 d-flex justify-content-center flex-column text-center'>
              <img src={(i18n.language === "ar") ? sec3_P2_AR : imgs.sec3_P2} />
            </div>
            <div className='col-3 d-flex justify-content-center flex-column text-center'>
              <img src={(i18n.language === "ar") ? sec3_P3_AR : imgs.sec3_P3} />
            </div>
          </section>
        </div>

        <div className='mt-sm-5'>

          <section className='row'>
            <div className='col-7'>
              <h2 className={`Times_New_RomanF_italic text-black mt-2 mb-5 ${style['H_S4']}`}>{t("Why Choose Us?")}</h2>
              <p className={`InterF text-black my-5 ${style['P_S4']}`}>{t("We’re not just designers – we are digital storytellers. We create memorable board game experiences that draw players into new worlds of strategy and imagination.")}
              </p>
            </div>

            <div className='col-5 align-content-center'>
              <li className='list-unstyled d-flex flex-column gap-4'>
                <ul className={`${style['Sec3_Ul_S']} InterF text-black align-content-center`}>
                  <img src={imgs.sec3_S4} className={`${style['Sec3_S_img_S']} mx-2`} alt="..." />{t("Innovative Concepts")}
                </ul>
                <ul className={`${style['Sec3_Ul_S']} InterF text-black align-content-center`}>
                  <img src={imgs.sec3_S5} className={`${style['Sec3_S_img_S']} mx-2`} alt="..." />{t("Highly Visual & Immersive")}
                </ul>
                <ul className={`${style['Sec3_Ul_S']} InterF text-black align-content-center`}>
                  <img src={imgs.sec3_S6} className={`${style['Sec3_S_img_S']} mx-2`} alt="..." />{t("Strategic & Fun to play")}
                </ul>
              </li>
            </div>
          </section>

        </div>
      </div>
    </>
  )
}

export default BoardG;