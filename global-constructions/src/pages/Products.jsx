// import "../styles/products.css";

// function Products() {
//   return (
//     <section className="products-page">

//       {/* ================= HERO ================= */}
//       <div className="products-hero">
//         <div className="overlay"></div>
//         <div className="hero-content">
//           <h1>Construction Materials & Stone Products</h1>
//           <p>
//             We supply high-quality stone metal, sand, and aggregates for roads,
//             buildings, and infrastructure projects across Maharashtra.
//           </p>
//         </div>
//       </div>

//       <div className="container">

//         {/* ================= PRODUCT LIST ================= */}
//         <section className="products-list">

//           <h2>Our Products</h2>

//           <div className="products-grid">

//             <div className="product-card">
//               <h3>06mm Stone Metal</h3>
//               <p>Used for fine construction work and surface finishing.</p>
//             </div>

//             <div className="product-card">
//               <h3>10mm Stone Metal (VSI)</h3>
//               <p>Commonly used for bitumen roads and high-strength construction work.</p>
//             </div>

//             <div className="product-card">
//               <h3>20mm Stone Metal</h3>
//               <p>Widely used in concrete mixes and RMC plants.</p>
//             </div>

//             <div className="product-card">
//               <h3>40mm Stone Metal</h3>
//               <p>Used in heavy construction, road base, and infrastructure projects.</p>
//             </div>

//             <div className="product-card">
//               <h3>60mm Stone Metal</h3>
//               <p>Suitable for large-scale foundation and road construction works.</p>
//             </div>

//             <div className="product-card">
//               <h3>Railway Ballast</h3>
//               <p>Used in railway track laying and infrastructure development.</p>
//             </div>

//             <div className="product-card">
//               <h3>GSB (Granular Sub Base)</h3>
//               <p>Essential layer material for road construction projects.</p>
//             </div>

//             <div className="product-card">
//               <h3>Artificial Sand</h3>
//               <p>High-quality sand used for plastering and construction purposes.</p>
//             </div>

//             <div className="product-card">
//               <h3>Engineering Wash Sand</h3>
//               <p>Processed sand used in RMC plants and high-grade construction.</p>
//             </div>

//           </div>
//         </section>

//         {/* ================= PRODUCT DETAILS ================= */}
//         <section className="product-details">

//           <h2>Product Usage & Specifications</h2>

//           <p>
//             Different sizes of stone metal are used based on the type of construction work.
//             <strong> 10mm VSI stone</strong> is widely used for bitumen roads,
//             while <strong>10mm + 20mm aggregates and washed sand</strong> are used in RMC plants.
//             Oversized aggregates are used in large road and infrastructure projects.
//             Sizes depend on project requirements and site conditions.
//           </p>

//         </section>

//         {/* ================= BULK SUPPLY ================= */}
//         <section className="bulk-supply">

//           <h2>Bulk Supply & Projects</h2>

//           <p>
//             We supply materials in bulk and have successfully delivered materials
//             for major infrastructure projects across Maharashtra.
//           </p>

//         </section>

//         {/* ================= QUALITY ================= */}
//         <section className="quality">

//           <h2>Quality & Testing</h2>

//           <p>
//             All materials are tested in government-affiliated polytechnic colleges
//             to ensure strength, durability, and compliance with construction standards.
//           </p>

//         </section>

//         {/* ================= DELIVERY ================= */}
//         <section className="delivery">

//           <h2>Delivery Areas</h2>

//           <p>
//             We deliver construction materials across multiple regions including
//             Nashik, Dhule, Malegaon, Shirpur, Jalgaon, and nearby areas.
//           </p>

//         </section>

//         {/* ================= PRICING ================= */}
//         <section className="pricing">

//           <h2>Pricing & Orders</h2>

//           <p>
//             Pricing depends on quantity, transportation distance, and project requirements.
//             Contact us for customized pricing and bulk order details.
//           </p>

//         </section>

//         {/* ================= CTA ================= */}
//         <section className="products-cta">

//           <h2>Need Materials for Your Project?</h2>

//           <div className="cta-buttons">
//             <a href="tel:+918087132879" className="btn">
//               Call Now
//             </a>

//             <a
//               href="https://wa.me/918087132879?text=Hi%20I%20need%20construction%20materials%20for%20my%20project.%20Please%20share%20details."
//               className="btn outline"
//               target="_blank"
//               rel="noreferrer"
//             >
//               WhatsApp
//             </a>
//           </div>

//         </section>

//       </div>
//     </section>
//   );
// }

// export default Products;


import "../styles/products.css";

function Products() {
  return (
    <section className="products-page">

      {/* ================= HERO ================= */}
      <div className="products-hero">
        <div className="overlay"></div>
        <div className="hero-content" data-aos="fade-up">
          <h1 data-aos="fade-up" data-aos-delay="100">
            Construction Materials & Stone Products
          </h1>
          <p data-aos="fade-up" data-aos-delay="200">
            We supply high-quality stone metal, sand, and aggregates for roads,
            buildings, and infrastructure projects across Maharashtra.
          </p>
        </div>
      </div>

      <div className="container">

        {/* ================= PRODUCT LIST ================= */}
        <section className="products-list">

          <h2 data-aos="fade-up">Our Products</h2>

          <div className="products-grid">

            <div className="product-card" data-aos="zoom-in" data-aos-delay="100">
              <img src="/images/6mm.jpg" alt="06mm Stone Metal" />
              <h3>06mm Stone Metal</h3>
              <p>Used for fine construction work and surface finishing.</p>
            </div>

            <div className="product-card" data-aos="zoom-in" data-aos-delay="150">
              <img src="/images/10mm.jpg" alt="10mm Stone Metal VSI" />
              <h3>10mm Stone Metal (VSI)</h3>
              <p>Commonly used for bitumen roads and high-strength construction work.</p>
            </div>

            <div className="product-card" data-aos="zoom-in" data-aos-delay="200">
              <img src="/images/20mm.jpg" alt="20mm Stone Metal" />
              <h3>20mm Stone Metal</h3>
              <p>Widely used in concrete mixes and RMC plants.</p>
            </div>

            <div className="product-card" data-aos="zoom-in" data-aos-delay="250">
              <img src="/images/40mm.jpg" alt="40mm Stone Metal" />
              <h3>40mm Stone Metal</h3>
              <p>Used in heavy construction, road base, and infrastructure projects.</p>
            </div>

            <div className="product-card" data-aos="zoom-in" data-aos-delay="300">
              <img src="/images/60mm.jpg" alt="60mm Stone Metal" />
              <h3>60mm Stone Metal</h3>
              <p>Suitable for large-scale foundation and road construction works.</p>
            </div>

            <div className="product-card" data-aos="zoom-in" data-aos-delay="350">
              <img src="/images/ballast.jpg" alt="Railway Ballast" />
              <h3>Railway Ballast</h3>
              <p>Used in railway track laying and infrastructure development.</p>
            </div>

            <div className="product-card" data-aos="zoom-in" data-aos-delay="400">
              <img src="/images/gsb.jpg" alt="GSB Material" />
              <h3>GSB (Granular Sub Base)</h3>
              <p>Essential layer material for road construction projects.</p>
            </div>

            <div className="product-card" data-aos="zoom-in" data-aos-delay="450">
              <img src="/images/sand.jpg" alt="Artificial Sand" />
              <h3>Artificial Sand</h3>
              <p>High-quality sand used for plastering and construction purposes.</p>
            </div>

            <div className="product-card" data-aos="zoom-in" data-aos-delay="500">
              <img src="/images/washsand.jpg" alt="Engineering Wash Sand" />
              <h3>Engineering Wash Sand</h3>
              <p>Processed sand used in RMC plants and high-grade construction.</p>
            </div>

          </div>
        </section>

        {/* ================= PRODUCT DETAILS ================= */}
        <section className="product-details" data-aos="fade-up">

          <h2>Product Usage & Specifications</h2>

          <p>
            Different sizes of stone metal are used based on the type of construction work.
            <strong> 10mm VSI stone</strong> is widely used for bitumen roads,
            while <strong>10mm + 20mm aggregates and washed sand</strong> are used in RMC plants.
            Oversized aggregates are used in large road and infrastructure projects.
            Sizes depend on project requirements and site conditions.
          </p>

        </section>

        {/* ================= BULK SUPPLY ================= */}
        <section className="bulk-supply" data-aos="fade-up">

          <h2>Bulk Supply & Projects</h2>

          <p>
            We supply materials in bulk and have successfully delivered materials
            for major infrastructure projects across Maharashtra.
          </p>

        </section>

        {/* ================= QUALITY ================= */}
        <section className="quality" data-aos="fade-up">

          <h2>Quality & Testing</h2>

          <p>
            All materials are tested in government-affiliated polytechnic colleges
            to ensure strength, durability, and compliance with construction standards.
          </p>

        </section>

        {/* ================= DELIVERY ================= */}
        <section className="delivery" data-aos="fade-up">

          <h2>Delivery Areas</h2>

          <p>
            We deliver construction materials across multiple regions including
            Nashik, Dhule, Malegaon, Shirpur, Jalgaon, and nearby areas.
          </p>

        </section>

        {/* ================= PRICING ================= */}
        <section className="pricing" data-aos="fade-up">

          <h2>Pricing & Orders</h2>

          <p>
            Pricing depends on quantity, transportation distance, and project requirements.
            Contact us for customized pricing and bulk order details.
          </p>

        </section>

        {/* ================= CTA ================= */}
        <section className="products-cta" data-aos="zoom-in">

          <h2>Need Materials for Your Project?</h2>

          <div className="cta-buttons">
            <a href="tel:+918087132879" className="btn">
              Call Now
            </a>

            <a
              href="https://wa.me/918087132879?text=Hi%20I%20need%20construction%20materials%20for%20my%20project.%20Please%20share%20details."
              className="btn outline"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </div>

        </section>

      </div>
    </section>
  );
}

export default Products;