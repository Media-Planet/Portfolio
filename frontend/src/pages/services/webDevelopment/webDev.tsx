import style from "../services.module.css";

import imgs_fun from "./data";

const imgs = imgs_fun();

interface Approach {
  title: string;
  image: string;
  alt: string;
}

function WebDev() {
  const Approachs: Approach[] = [
    {
      title: "Understand goals and user needs",
      image: `${imgs.sec3_P1}`,
      alt: "user needs",
    },
    {
      title: "Create beautiful, functional layouts",
      image: `${imgs.sec3_P2}`,
      alt: "functional layouts",
    },
    {
      title: "Develop and launch with precision",
      image: `${imgs.sec3_P3}`,
      alt: "launch with precision",
    },
  ];
  return (
    <>
      <div className="containerr  bg-primary Times_New_RomanF_italic">
        {/* section one */}
        <div className="row  align-items-center justify-content-center align-items-center ">
          <div className="col-md-6 d-flex  flex-column">
            {/* left */}
            <div className={`${style.cardCustom}`}>
              <h1 className={`${style.cardH1Font}`}>Web Development</h1>
              <p>
                We craft stunning, responsive websites that combine bold design
                with smooth functionality—built to impress and perform.
              </p>
              <div className="mt-4">
                <a href="/" className={`${style.btnCustom}`}>
                  <img
                    width={"50px"}
                    className="me-2"
                    src={imgs.logo}
                    alt="Media Planet"
                  />
                  Start Your Journey
                </a>
              </div>
            </div>
          </div>
          {/* right */}
          {/* Image  */}
          <div className="col-md-6 d-flex justify-content-end ">
            <img
              src={imgs.photo}
              alt="... coding"
              className="img-fluid "
              style={{ maxHeight: "500px", objectFit: "contain" }}
            />
          </div>
        </div>

        {/* border line */}
        <div className="d-flex justify-content-center">
          <p className="border border-black w-75 mt-4 mt-sm-5"></p>
        </div>

        {/* section two */}

        <div className="row align-items-center  ">
          {/* left */}
          <div className="col-md-6">
            <div className={`${style.cardCustom}`}>
              <h2 className={`${style.cardH1Font}`}>What Do We Do ?</h2>
              <p className={` mb-4 mb-sm-5 `}>
                From landing pages to full-scale platforms, we design websites
                that are fast, responsive, and built to tell your brand’s story
                in style.
              </p>
              {/* list */}
              <ul className="list-unstyled list d-flex flex-column gap-4 gap-sm-5 m-0">
                <li className={` InterF `}>
                  <img src={imgs.sec2_S1} className={`me-2 me-sm-4 `} />
                  Custom UI/UX Design
                </li>
                <li className={` InterF `}>
                  <img src={imgs.sec2_S2} className={`me-2 me-sm-4 `} />
                  Responsive Development
                </li>
                <li className={` InterF `}>
                  <img src={imgs.sec2_S3} className={`me-2 me-sm-4 `} />
                  E-commerce
                </li>
                <li className={` InterF `}>
                  <img src={imgs.sec2_S4} className={`me-2 me-sm-4 `} />
                  SEO & Performance Optimization
                </li>
              </ul>
            </div>
          </div>
          {/* right */}
          <div className="col-md-6">
            <img
              src={imgs.sec2_png1}
              alt="media planet web development"
              className="img-fluid "
              style={{ maxHeight: "900px", objectFit: "contain" }}
            />
            <div className={`${style.cardCustom}`}>
              <h1 className={`${style.cardH1Font}`}>Built for every screen</h1>
              <p>
                Your website will shine everywhere from big screens to mobile
                devices without losing speed or style.
              </p>
            </div>
          </div>
        </div>

        {/* border line */}
        <div className="d-flex justify-content-center">
          <p className="border border-black w-75 mt-4 mt-sm-5"></p>
        </div>

        {/* section three */}
        <div className={` my-5 text-center align-items-center `}>
          {/* Approachs */}
          <h2 className="mb-3 fs-1 fw-bold ">Our Approachs</h2>
          <div className={`row `}>
            {Approachs.map((Approach, index) => (
              <div key={index} className={`col-md-4 mb-4`}>
                <div
                  className={`p-3 shadow-sm ${style.h300}  d-flex flex-column justify-content-between`}
                >
                  <img
                    src={Approach.image}
                    alt={Approach.alt}
                    className={` mb-3 img-fluid`}
                    style={{ maxHeight: "550px", objectFit: "contain" }}
                  />
                  <p className={`fs-3 mb-0`}>{Approach.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* section four */}
        <div className={`${style.cardCustom}`}>
          <div className="row">
            {/* left */}
            <div className="col-md-6">
              <h1 className={`${style.cardH1Font}`}>Why Choose Us?</h1>
              <p className={` `}>
                We’re not just designers – we are digital storytellers. We
                create web experiences that connect people together and help
                your business stand out, grow online, and turn visitors into
                loyal customers.
              </p>
            </div>

            {/* right */}
            <div className="col-md-6">
              <div>
                <li className="list-unstyled d-flex flex-column gap-sm-4">
                  <ul className={` InterF `}>
                    <img src={imgs.sec3_S5} className={` mx-4`} alt="..." />
                    Fast Load Times
                  </ul>
                  <ul className={` InterF `}>
                    <img src={imgs.sec3_S6} className={` mx-4`} alt="..." />
                    Accessible & User-Friendly
                  </ul>
                  <ul className={` InterF `}>
                    <img src={imgs.sec3_S7} className={` mx-4`} alt="..." />
                    Built for Growth
                  </ul>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WebDev;
