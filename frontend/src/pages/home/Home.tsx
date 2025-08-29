import styles from "./Home.module.css";
import TVAline from "../../assets/image/img_header.png";
import logo from "../../assets/image/Logo.png";
import servicesOne from "../../assets/image/Service 1.png";
import servicesTwo from "../../assets/image/Service 2.png";
import servicesThree from "../../assets/image/Service 3.png";
import rocket from "../../assets/image/rocket.png";

interface Service {
  title: string;
  image: string;
  alt: string;
}
function Home() {
  const services: Service[] = [
    {
      title: "Web Design & Development",
      image: `${servicesOne}`,
      alt: "Alien working on a laptop",
    },
    {
      title: "Board Game Design",
      image: `${servicesTwo}`,
      alt: "Alien designing a board game",
    },
    {
      title: "Digital marketing campaigns and content creation",
      image: `${servicesThree}`,
      alt: "Alien doing marketing",
    },
  ];

  return (
    <>
      <div className={`containerr bg-primary Times_New_RomanF_italic $ `}>
        {/* Header Section */}
        <div
          className={`row  align-items-center justify-content-center align-items-center `}
        >
          <div className={`col-md-6 ${styles.textContainer} `}>
            {/* left */}
            <div className={`${styles.cardCustom}`}>
              <h1
                className={`${styles.cardH1Font} ${styles.glitch} ${styles.title_1}`}
              >
                Media Planet
              </h1>
              <div className={`${styles.textBox} `}>
                <p className={` ${styles.paragraph}`}>
                  Where bold ideas collide with storytelling, tech, and design
                  to create immersive campaigns crafted to stand out, speak
                  loud, and leave a mark.
                </p>
                <img
                  src="src\assets\image\halfMoon.png"
                  className={`${styles.halfMoon}`}
                  alt="half moon"
                />
              </div>
              <div className="mt-4">
                <a href="#form" className={`${styles.btnCustom}`}>
                  <img
                    src={logo}
                    className={`${styles.buttonLogo} `}
                    alt="logo"
                  />{" "}
                  Start Your Journey
                </a>
                <a
                  href="#"
                  className={`mt-4  ${styles.btnCustom} ${styles.btnGallery}`}
                >
                  Gallery
                </a>
              </div>
            </div>
          </div>
          {/* right */}
          {/* Image  */}
          <div className="col-md-6 d-flex justify-content-end  ">
            <img
              src={TVAline}
              alt="Alien on TV"
              className={`img-fluid ${styles.bounce} ${styles.imageTV}`}
              style={{ maxHeight: "200vw", objectFit: "contain" }}
            />
          </div>
        </div>

        {/* Services Section */}
        <div className={` my-5 text-center align-items-center `}>
          <h2
            className={`${styles.cardH1Font} ${styles.margin} ${styles.glitch}`}
          >
            Our services
          </h2>
          <div className={`row ${styles.services} `}>
            {services.map((service, index) => (
              <div
                key={index}
                className={`col-md-4 mb-4 ${styles.serviceCard}`}
              >
                <div
                  className={`p-3 ${styles.h300} d-flex flex-column justify-content-between `}
                >
                  <img
                    src={service.image}
                    alt={service.alt}
                    className={` mb-3 img-fluid b-1 ${styles.serviceImage}`}
                  />
                  <p className={` mb-0 ${styles.title}`}>{service.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* form Section */}
        <div className=" py-5" id="form">
          <div className="row align-items-center">
            <h1
              className={`${styles.cardH1Font} ${styles.title_3} ${styles.glitch}`}
            >
              Start now :)
            </h1>
            <div className={`col-md-6 ${styles.formRes} mt-4 mt-md-0`}>
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className={`form-control  bg-transparent ${styles.form}`}
                    placeholder="Enter your name"
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    className={`form-control  bg-transparent ${styles.form}`}
                    placeholder="Enter your E-Mail"
                  />
                </div>

                <div className="row mb-3">
                  <div className="col">
                    <input
                      type="text"
                      className={`form-control  bg-transparent ${styles.form}`}
                      placeholder="Design ID"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className={`form-control  bg-transparent ${styles.form}`}
                      placeholder="Phone number"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <textarea
                    className={`form-control  bg-transparent ${styles.form} ${styles.form_2}`}
                    placeholder="Description"
                    rows={3}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className={`btn fs-4 btn-dark w-100 d-flex align-items-center justify-content-center gap-2 rounded-pill  ${styles.submit}`}
                >
                  <span role="img" aria-label="planet">
                    <img src={logo} width={"40px"} alt="" />
                  </span>
                  Submit
                </button>
              </form>
            </div>

            <div className="col-md-6 text-center mt-4 mt-md-0">
              <img
                src={rocket}
                alt="Rocket"
                className={`img-fluid ${styles.shake} ${styles.rocket}`}
                style={{ width: "30vw" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
