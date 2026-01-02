import Link from "next/link";
export default function Footer({data}) {
  const {
  primaryLinks,
  utilityLinks,
  socialLinks,
  languageSelector,
  copyright,
  externalNote,
} = data;
  return (
    <footer className="bbc-footer border-top border-black mt-5">
      <div className="container py-4">

        {/* Logo + Primary links */}
        <div className="mb-3">
          <div className="fw-bold fs-4 d-flex gap-2 mb-3">
            <span className="BBC_Logo">B</span>
            <span className="BBC_Logo">B</span>
            <span className="BBC_Logo">C</span>
          </div>

          <ul className="list-unstyled d-flex flex-column flex-md-row flex-wrap gap-3 footer-main-links">

            {primaryLinks.map((item, i) => (
              <li key={i}>
                <Link href="/" className="footer-link fs-14 fw-semibold">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Language selector */}
        <div className="mb-4">
          <button className="btn btn-light border d-flex align-items-center gap-2">
            {languageSelector.label}
            <i className="bi bi-caret-down-fill"></i>
          </button>
        </div>

        <hr />

        {/* Social links */}
        <div className="mb-3 d-flex flex-wrap align-items-center gap-3">
          <span className="fw-semibold">Follow BBC on:</span>
          {socialLinks.map((item, i) => (
            <i key={i} className={`bi bi-${item.toLowerCase()}`}></i>
          ))}
        </div>

        {/* Utility / Legal links */}
        <ul className="list-unstyled d-flex flex-wrap gap-3 footer-legal-links mb-3">
          {utilityLinks.map((item, i) => (
            <li key={i}>
              <Link href="/" className="footer-link fs-12">
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Copyright */}
        <p className="small text-muted mb-0 fs-12">
          {copyright}{" "}
          <Link href="/" className="footer-link fw-semibold ">
            {externalNote}
          </Link>
        </p>

      </div>
    </footer>
  );
}
