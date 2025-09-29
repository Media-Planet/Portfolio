import { faFacebook, faYoutube, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import { Direction } from '../../util/i18n/Direction';
function Footer() {
	const [t] = useTranslation();
	return (
		<footer className="bg-dark text-light pt-5 pb-3" dir={Direction || "ltr"}>
			<div className="container">
				<div className="row">
					{/* Services */}
					<div className="col-md-4 mb-4">
						<h6 className="fst-italic">{t("Our services")}</h6>
						<ul className="list-unstyled">
							<li className="border-bottom pb-2">{t("Web design & development")}</li>
							<li className="border-bottom pb-2">{t("Board game design")}</li>
							<li className="border-bottom pb-2">{t("Digital marketing campaign and content creation")}</li>
						</ul>
					</div>

					{/* Contact Info */}
					<div className="col-md-4 mb-4">
						<h6 className="fst-italic">{t("Contact us")}</h6>
						<p className="border-bottom pb-2 mb-2">{`${t("Phone")}: 01149123115`}</p>
						<p className="border-bottom pb-2 mb-0">{`${t("Email")}: mediaplanet@gmail.com`}</p>
					</div>

					{/* Social Icons */}
					<div className="col-md-4 mb-4">
						<h6 className="fst-italic">{t("Contact us")}</h6>
						<div className="mt-2 fs-3">
							<a href="#" className="text-light me-3">
								<FontAwesomeIcon icon={faFacebook} />
							</a>
							<a href="#" className="text-light me-3">
								<FontAwesomeIcon icon={faYoutube} />
							</a>
							<a href="#" className="text-light me-3">
								<FontAwesomeIcon icon={faLinkedin} />
							</a>
							<a href="#" className="text-light">
								<FontAwesomeIcon icon={faInstagram} />
							</a>
						</div>
					</div>
				</div>
				<hr className="border-secondary" />

				<div className="row">
					<div className="col-md-6">
						<p className="mb-0"><span>&copy;</span> {`2025 ${t("Media Planet, All Rights Reserved")}`}</p>
					</div>
					<div className="col-md-6 text-md-end">
						<a href="#" className="text-light me-3">{t("Terms of Use")}</a>
						<a href="#" className="text-light me-3">{t("Privacy Policy")}</a>
						<a href="#" className="text-light">{t("Cookie Policy")}</a>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;