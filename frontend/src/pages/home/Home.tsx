import styles from "./Home.module.css";
import TVAline from "../../assets/image/TV-photo.png";
import logo from "../../assets/image/Logo.png";
import servicesOne from "../../assets/image/Our-service-1.png";
import servicesTwo from "../../assets/image/Our-service-2.png";
import servicesThree from "../../assets/image/Our-service-3.png";
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
      <div className={`containerr bg-primary Times_New_RomanF_italic`}>
        {/* Header Section */}
        <div
          className={`row  align-items-center justify-content-center align-items-center `}
        >
          <div className="col-md-6 ">
            {/* left */}
            <div className={`${styles.cardCustom}`}>
              <h1 className={`${styles.cardH1Font}`}>Media Planet</h1>
              <p>
                Where bold ideas collide with <br />
                storytelling, tech, and design to <br />
                create immersive campaigns crafted <br />
                to stand out, speak loud, and leave a mark.
              </p>
              <div className="mt-4">
                <a href="#form"  className={`${styles.btnCustom}`}>
                  <img src={logo} width={"30px"} alt="logo" /> Start Your
                  Journey
                </a>
                <a href="#" className={`mt-4  ${styles.btnCustom}`}>
                  Gallery
                </a>
              </div>
            </div>
          </div>
          {/* right */}
          {/* Image  */}
          <div className="col-md-6 d-flex justify-content-end ">
            <img
              src={TVAline}
              alt="Alien on TV"
              className="img-fluid "
              style={{ maxHeight: "300px", objectFit: "contain" }}
            />
          </div>
        </div>

        {/* Services Section */}
        <div className={` my-5 text-center align-items-center `}>
          <h2 className="mb-3 fs-1 fw-bold ">Our services</h2>
          <div className={`row `}>
            {services.map((service, index) => (
              <div key={index} className={`col-md-4 mb-4`}>
                <div
                  className={`p-3 shadow-sm ${styles.h300}  d-flex flex-column justify-content-between`}
                >
                  <img
                    src={service.image}
                    alt={service.alt}
                    className={` mb-3 img-fluid`}
                  />
                  <p className={`fs-4 mb-0`}>{service.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* form Section */}
        <div className=" py-5" id="form">
          <div className="row align-items-center">
            <h1 className="text-center mb-1 ">Start now :)</h1>
            <div className="col-md-6">
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control border-black bg-transparent"
                    placeholder="Enter your name"
                  
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control border-black bg-transparent"
                    placeholder="Enter your E-Mail"
                  />
                </div>

                <div className="row mb-3">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control border-black bg-transparent"
                      placeholder="Design ID"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control border-black bg-transparent"
                      placeholder="Phone number"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <textarea
                    className="form-control border-black bg-transparent"
                    placeholder="Description"
                    rows={3}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn fs-4 btn-dark w-100 d-flex align-items-center justify-content-center gap-2 rounded-pill"
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
                className="img-fluid"
                style={{ width: "300px", transform: "rotate(15deg)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
