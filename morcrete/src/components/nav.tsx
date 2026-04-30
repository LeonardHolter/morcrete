import { Logo, ArrowRight } from "./icons";

export function Nav() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a href="#" className="nav-logo">
          <Logo height={36} />
        </a>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#builders">For Builders</a>
          <a href="#process">Process</a>
          <a href="#gallery">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="nav-cta">
          <a href="tel:3609072558" className="nav-phone">
            <span className="pill">CALL</span>
            (360) 907-2558
          </a>
          <a href="#contact" className="btn btn-primary">
            Request a Bid <ArrowRight />
          </a>
        </div>
      </div>
    </nav>
  );
}
