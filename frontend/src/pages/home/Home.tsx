import styles from "./Home.module.css";
import TVAline from "../../assets/image/img_header.png";
import logo from "../../assets/image/Logo.png";
import servicesOne from "../../assets/image/Service 1.png";
import servicesTwo from "../../assets/image/Service 2.png";
import servicesThree from "../../assets/image/Service 3.png";
import servicesThree_AR from "../../assets/image/Service 3_AR.png";
import rocket from "../../assets/image/rocket.png";
import { useTranslation } from "react-i18next";
import { Direction } from "../../util/i18n/Direction";


interface Service {
    title: string;
    image: string;
    alt: string;
    route: string;
}
function Home() {

    const [t, i18n] = useTranslation();


    const services: Service[] = [
        {
            title: t("Web Design & Development"),
            image: `${servicesOne}`,
            alt: t("Alien working on a laptop"),
            route:'webdev',
        },
        {
            title: t("Board Game Design"),
            image: `${servicesTwo}`,
            alt: t("Alien designing a board game"),
            route:'board-game',
        },
        {
            title: t("Digital marketing campaigns and content creation"),
            image: `${(i18n.language === 'ar') ? servicesThree_AR : servicesThree}`,
            alt: t("Alien doing marketing"),
            route:'digital-marketing',
        },
    ];

    return (
        <>
            <div className={`containerr bg-primary Times_New_RomanF_italic`} dir={Direction || 'ltr'}>
                {/* Header Section */}
                <div
                    className={`row  align-items-center justify-content-center align-items-center `}
                >
                    <div className={`col-md-6 ${styles.textContainer} `}>
                        {/* left */}
                        <div className={`${styles.cardCustom}`}>
                            <h1
                                className={`${styles.cardH1Font} ${styles.glitch} ${styles.title_1} ${(i18n.language === 'ar') ? 'pe-2' : ''}`}
                            >
                                {t("Media Planet")}
                            </h1>
                            <div className={`${styles.textBox} `}>
                                <p className={` ${styles.paragraph}`}>
                                    {t("Where bold ideas collide with storytelling, tech, and design to create immersive campaigns crafted to stand out, speak loud, and leave a mark.")}
                                </p>
                                <img
                                    src="src\assets\image\halfMoon.png"
                                    className={`${styles.halfMoon} ${(i18n.language === 'ar') ? styles['mirror-y'] : ''}`}
                                    alt="half moon"
                                />
                            </div>
                            <div className=" mt-4">
                                <a href="#form" className={`${styles['btnCustom']} ${(i18n.language === 'ar') ? styles['btn_1'] : ''}`}>
                                    <img
                                        src={logo}
                                        className={`${styles.buttonLogo}`}
                                        alt="logo"
                                    />
                                    {t("Start Your Journey")}
                                </a>
                                <a
                                    href="#"
                                    className={`mt-4 ${styles.btnGallery} ${(i18n.language === 'ar') ? styles['btn_2'] : styles['btnCustom']}`}
                                >
                                    {t("Gallery")}
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* right */}
                    {/* Image  */}
                    <div className={`col-md-6 d-flex justify-content-end ${(i18n.language === 'ar') ? styles['mirror-y'] : ''}`}>
                        <img
                            src={TVAline}
                            alt="Alien on TV"
                            className={`img-fluid ${styles.bounce} ${styles.imageTV}`}
                            style={{ maxHeight: "200vw", objectFit: "contain" }}
                        />
                    </div>
                </div>

                {/* Services Section */}
                <div className={` my-5 text-center align-items-center `} id="services">
                    <h2
                        className={`${styles.cardH1Font} ${styles.margin} ${styles.glitch}`}
                    >
                        {t("Our services")}
                    </h2>
                    <div className={`row ${styles.services} `}>
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className={`col-md-4 mb-4 ${styles.serviceCard}`}
                            >
                                <a href={`services/${service.route}`} className="text-decoration-none">
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
                                </a>
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
                            {t("Start now :)")}
                        </h1>
                        <div className={`col-md-6 ${styles.formRes} mt-4 mt-md-0`}>
                            <form>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className={`form-control  bg-transparent ${styles.form}`}
                                        placeholder={t("Enter your name")}
                                    />
                                </div>

                                <div className="mb-3">
                                    <input
                                        type="email"
                                        className={`form-control  bg-transparent ${styles.form}`}
                                        placeholder={t("Enter your E-Mail")}
                                    />
                                </div>

                                <div className="row mb-3">
                                    <div className="col">
                                        <input
                                            type="text"
                                            className={`form-control  bg-transparent ${styles.form}`}
                                            placeholder={t("Design ID")}
                                        />
                                    </div>
                                    <div className="col">
                                        <input
                                            type="text"
                                            className={`form-control  bg-transparent ${styles.form}`}
                                            placeholder={t("Phone number")}
                                        />
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <textarea
                                        className={`form-control  bg-transparent ${styles.form} ${styles.form_2}`}
                                        placeholder={t("Description")}
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
                                    {t("Submit")}
                                </button>
                            </form>
                        </div>

                        <div className={`col-md-6 text-center mt-4 mt-md-0 ${(i18n.language === 'en') ? styles['mirror-y'] : ''}`}>
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
