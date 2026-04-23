// import "../styles/about.css";

// function About() {
//   return (
//     <section className="about-page">

//       {/* ================= HERO ================= */}
//       <div className="about-hero">
//         <div className="overlay"></div>
//         <div className="hero-content">
//           <h1>Building Strong Foundations with Quality & Trust</h1>
//           <p>
//             Global Construction and REVA Realty delivers reliable construction,
//             railway, and material supply solutions across Maharashtra.
//           </p>
//         </div>
//       </div>

//       <div className="container">

//         {/* ================= INTRO ================= */}
//         <section className="about-intro">
//           <h2>Who We Are</h2>
//           <p>
//             <strong>Global Construction and REVA Realty</strong>, established in 2021,
//             is a growing construction company specializing in government projects,
//             railway infrastructure, and material supply.
//           </p>
//           <p>
//             With over <strong>10+ years of experience</strong>, we have built a strong
//             reputation for quality, reliability, and timely project delivery.
//           </p>
//         </section>

//         {/* ================= STORY ================= */}
//         <section className="about-story">
//           <div className="story-text">
//             <h2>Our Journey</h2>
//             <p>
//               Our journey began with a vision to deliver dependable construction
//               services and quality materials. Starting small, we expanded into
//               crusher plants, logistics, and large-scale railway projects.
//             </p>
//             <p>
//               Today, we proudly serve multiple cities and continue to grow as a
//               trusted partner in infrastructure development.
//             </p>
//           </div>
//           <div className="story-img">
//             <img src="/images/gallery1.jpg" alt="journey" />
//           </div>
//         </section>

//         {/* ================= SERVICES ================= */}
//         <section className="about-services">
//           <h2>What We Do</h2>

//           <div className="services-grid">
//             <div className="card">🏗️ Govt Contractor</div>
//             <div className="card">🚆 Railway Works</div>
//             <div className="card">🪨 Crusher Plants</div>
//             <div className="card">🧱 Material Supply</div>
//             <div className="card">🚚 Transport & Logistics</div>
//           </div>
//         </section>

//         {/* ================= STATS ================= */}
//         <section className="about-stats">
//           <div className="stat">
//             <h3>1000+</h3>
//             <p>Projects Completed</p>
//           </div>
//           <div className="stat">
//             <h3>10+</h3>
//             <p>Years Experience</p>
//           </div>
//           <div className="stat">
//             <h3>10+</h3>
//             <p>Machines</p>
//           </div>
//           <div className="stat">
//             <h3>6+</h3>
//             <p>Cities Served</p>
//           </div>
//         </section>

//         {/* ================= WHY US ================= */}
//         <section className="about-why">
//           <h2>Why Choose Us</h2>

//           <div className="why-grid">
//             <div>✔ Govt & Railway Expertise</div>
//             <div>✔ Timely Project Delivery</div>
//             <div>✔ High Quality Materials</div>
//             <div>✔ Trusted by 1000+ Clients</div>
//           </div>
//         </section>

//         {/* ================= OWNER ================= */}
//         <section className="about-owner">
//           <div className="owner-img">
//             <img src="/images/owner.jpg" alt="owner" />
//           </div>

//           <div className="owner-text">
//             <h2>Leadership</h2>
//             <p>
//               Under the leadership of <strong>Jayesh G. Deore</strong>, the company
//               continues to grow with a strong focus on quality and long-term client trust.
//             </p>
//             <p>
//               Associated with <strong>Railtek Solution Pvt Ltd</strong> for advanced
//               railway and infrastructure projects.
//             </p>
//           </div>
//         </section>

//         {/* ================= CTA ================= */}
//         <section className="about-cta">
//           <h2>Let’s Build Something Strong Together</h2>
//           <div className="cta-buttons">
//             <a href="tel:+918087132879" className="btn">Call Now</a>
//             <a href="https://wa.me/918087132879" className="btn outline">
//               WhatsApp
//             </a>
//           </div>
//         </section>

//       </div>
//     </section>
//   );
// }

// export default About;


import "../styles/about.css";

function About() {
  return (
    <section className="about-page">

      {/* ================= HERO ================= */}
      <div className="about-hero">
        <div className="overlay"></div>

        <div className="hero-content">
          <h1 data-aos="fade-up">
            Building Strong Foundations with Quality & Trust
          </h1>

          <p data-aos="fade-up" data-aos-delay="200">
            Global Construction and REVA Realty delivers reliable construction,
            railway, and material supply solutions across Maharashtra.
          </p>
        </div>
      </div>

      <div className="container">

        {/* ================= INTRO ================= */}
        <section className="about-intro" data-aos="fade-up">
          <h2>Who We Are</h2>

          <p data-aos="fade-up" data-aos-delay="100">
            <strong>Global Construction and REVA Realty</strong>, established in 2021,
            is a growing construction company specializing in government projects,
            railway infrastructure, and material supply.
          </p>

          <p data-aos="fade-up" data-aos-delay="200">
            With over <strong>10+ years of experience</strong>, we have built a strong
            reputation for quality, reliability, and timely project delivery.
          </p>
        </section>

        {/* ================= STORY ================= */}
        <section className="about-story">
          <div className="story-text" data-aos="fade-right">
            <h2>Our Journey</h2>

            <p data-aos="fade-right" data-aos-delay="100">
              Our journey began with a vision to deliver dependable construction
              services and quality materials. Starting small, we expanded into
              crusher plants, logistics, and large-scale railway projects.
            </p>

            <p data-aos="fade-right" data-aos-delay="200">
              Today, we proudly serve multiple cities and continue to grow as a
              trusted partner in infrastructure development.
            </p>
          </div>

          <div className="story-img" data-aos="fade-left">
            <img src="/images/gallery1.jpg" alt="journey" />
          </div>
        </section>

        {/* ================= SERVICES ================= */}
        <section className="about-services">
          <h2 data-aos="fade-up">What We Do</h2>

          <div className="services-grid">
            <div className="card" data-aos="zoom-in" data-aos-delay="100">
              🏗️ Govt Contractor
            </div>

            <div className="card" data-aos="zoom-in" data-aos-delay="200">
              🚆 Railway Works
            </div>

            <div className="card" data-aos="zoom-in" data-aos-delay="300">
              🪨 Crusher Plants
            </div>

            <div className="card" data-aos="zoom-in" data-aos-delay="400">
              🧱 Material Supply
            </div>

            <div className="card" data-aos="zoom-in" data-aos-delay="500">
              🚚 Transport & Logistics
            </div>
          </div>
        </section>

        {/* ================= STATS ================= */}
        <section className="about-stats">

          <div className="stat" data-aos="fade-up" data-aos-delay="100">
            <h3>1000+</h3>
            <p>Projects Completed</p>
          </div>

          <div className="stat" data-aos="fade-up" data-aos-delay="200">
            <h3>10+</h3>
            <p>Years Experience</p>
          </div>

          <div className="stat" data-aos="fade-up" data-aos-delay="300">
            <h3>10+</h3>
            <p>Machines</p>
          </div>

          <div className="stat" data-aos="fade-up" data-aos-delay="400">
            <h3>6+</h3>
            <p>Cities Served</p>
          </div>

        </section>

        {/* ================= WHY US ================= */}
        <section className="about-why">
          <h2 data-aos="fade-up">Why Choose Us</h2>

          <div className="why-grid">
            <div data-aos="fade-up" data-aos-delay="100">
              ✔ Govt & Railway Expertise
            </div>

            <div data-aos="fade-up" data-aos-delay="200">
              ✔ Timely Project Delivery
            </div>

            <div data-aos="fade-up" data-aos-delay="300">
              ✔ High Quality Materials
            </div>

            <div data-aos="fade-up" data-aos-delay="400">
              ✔ Trusted by 1000+ Clients
            </div>
          </div>
        </section>

        {/* ================= OWNER ================= */}
        <section className="about-owner">
          <div className="owner-img" data-aos="fade-right">
            <img src="/images/owner.jpg" alt="owner" />
          </div>

          <div className="owner-text" data-aos="fade-left">
            <h2>Leadership</h2>

            <p data-aos="fade-left" data-aos-delay="100">
              Under the leadership of <strong>Jayesh G. Deore</strong>, the company
              continues to grow with a strong focus on quality and long-term client trust.
            </p>

            <p data-aos="fade-left" data-aos-delay="200">
              Associated with <strong>Railtek Solution Pvt Ltd</strong> for advanced
              railway and infrastructure projects.
            </p>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="about-cta" data-aos="zoom-in">
          <h2>Let’s Build Something Strong Together</h2>

          <div className="cta-buttons">
            <a href="tel:+918087132879" className="btn">
              Call Now
            </a>

            <a
              href="https://wa.me/918087132879"
              className="btn outline"
            >
              WhatsApp
            </a>
          </div>
        </section>

      </div>
    </section>
  );
}

export default About;