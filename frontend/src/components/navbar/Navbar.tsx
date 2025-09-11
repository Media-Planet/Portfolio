import { useTranslation } from "react-i18next";
import { handleDirection } from "../../util/i18n/Direction";

function Navbar() {

    const [t, i18n] = useTranslation()

    function handleENLang() {
        i18n.changeLanguage('en');
        handleDirection(i18n.language)
    }

    function handleARLang() {
        i18n.changeLanguage('ar');
        handleDirection(i18n.language)
    }


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-black">
            <div className="container-fluid">
                {/* Logo - Left */}
                <a className="navbar-brand text-light" href="/">Media Planet</a>

                {/* Toggle for mobile */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Nav content */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    {/* Left - EN and AR */}
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <span className="nav-link text-light btn"
                                onClick={() => handleENLang()}>
                                EN
                            </span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link text-light btn"
                                onClick={() => handleARLang()}>
                                AR
                            </span>
                        </li>
                    </ul>

                    {/* Right - Home, Servers, Gallery */}
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link text-light" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="web-development">Servers</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="about">about</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;