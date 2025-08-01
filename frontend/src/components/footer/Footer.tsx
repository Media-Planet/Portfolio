

function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
    <div className="container">
      <div className="row">
        {/* Services */}
        <div className="col-md-4 mb-4">
          <h6 className="fst-italic">Our services</h6>
          <ul className="list-unstyled">
            <li className="border-bottom pb-2">Web design & development</li>
            <li className="border-bottom pb-2">Board game design</li>
            <li className="border-bottom pb-2">Digital marketing campaign and content creation</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="col-md-4 mb-4">
          <h6 className="fst-italic">Contact with us</h6>
          <p className="border-bottom pb-2 mb-2">Phone: 01149123115</p>
          <p className="border-bottom pb-2 mb-0">Email: mediaplanet@gmail.com</p>
        </div>

        {/* Social Icons */}
        <div className="col-md-4 mb-4">
          <h6 className="fst-italic">Contact with us</h6>
          <div className="mt-2">
            <a href="#" className="text-light me-3"><i className="bi bi-facebook"></i></a>
            <a href="#" className="text-light me-3"><i className="bi bi-youtube"></i></a>
            <a href="#" className="text-light me-3"><i className="bi bi-linkedin"></i></a>
            <a href="#" className="text-light"><i className="bi bi-instagram"></i></a>
          </div>
        </div>
      </div>

      <hr className="border-secondary" />

      <div className="row">
        <div className="col-md-6">
          <p className="mb-0">&copy; 2025 Media Planet, All Rights Reserved</p>
        </div>
        <div className="col-md-6 text-md-end">
          <a href="#" className="text-light me-3">Terms of Use</a>
          <a href="#" className="text-light me-3">Privacy Policy</a>
          <a href="#" className="text-light">Cookie Policy</a>
        </div>
      </div>
    </div>
  </footer>
  );
}

export default Footer;