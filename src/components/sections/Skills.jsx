import { Container } from "react-bootstrap";

const Skills = () => {
  return (
    <section id="skills" className="py-5">
      <Container>
        <h2 className="text-center mb-5">What I Can Build For You</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0 hover-shadow">
              <div className="card-body text-center">
                <h4 className="card-title">Scalable Web Systems</h4>
                <p>
                  Robust, high-performance apps that grow with your business
                  (MERN + best practices)
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0 hover-shadow">
              <div className="card-body text-center">
                <h4 className="card-title">M-Pesa Integrations</h4>
                <p>Seamless payment gateways for Kenyan businesses & startups</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0 hover-shadow">
              <div className="card-body text-center">
                <h4 className="card-title">Personal & E-commerce Websites</h4>
                <p>Beautiful, fast-loading sites like this one — fully responsive</p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card h-100 shadow-sm border-0 hover-shadow">
              <div className="card-body text-center">
                <h4 className="card-title">KRA & eCitizen Integrations</h4>
                <p>Automated tax & government service connections for efficiency</p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card h-100 shadow-sm border-0 hover-shadow">
              <div className="card-body text-center">
                <h4 className="card-title">Custom Full-Stack Solutions</h4>
                <p>Anything from MVPs to enterprise-grade platforms</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Skills;