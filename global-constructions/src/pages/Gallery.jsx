import { useState, useEffect } from "react";
import "../styles/gallery.css";

const data = [
  {
    img: "/images/gallery1.jpg",
    title: "Crusher Plant Setup",
    desc: "High-capacity stone crushing plant used for large construction projects."
  },
  {
    img: "/images/gallery2.jpg",
    title: "Heavy Machinery",
    desc: "Advanced machines used for efficient stone processing and production."
  },
  {
    img: "/images/gallery3.jpg",
    title: "Premium Stone Material",
    desc: "High-quality aggregates and khadi used in strong foundations."
  },
  {
    img: "/images/gallery4.jpg",
    title: "Fast Loading System",
    desc: "Efficient loading system for quick dispatch and delivery."
  },
  {
    img: "/images/gallery5.jpg",
    title: "Construction Site Work",
    desc: "On-site material supply for ongoing construction projects."
  },
  {
    img: "/images/gallery6.jpg",
    title: "Project Progress",
    desc: "Continuous work monitoring and quality-controlled operations."
  }
];

function Gallery() {
  const [selected, setSelected] = useState(null);
  const [current, setCurrent] = useState(0);

  const carouselImages = [
    {
      img: "/images/gallery3.jpg",
      title: "Main Crusher Plant",
      desc: "High performance crushing system"
    },
    {
      img: "/images/carousel2.jpg",
      title: "Heavy Equipment",
      desc: "Advanced machinery in action"
    },
    {
      img: "/images/carousel3.jpg",
      title: "Material Processing",
      desc: "Premium quality output"
    },
    {
      img: "/images/carousel4.jpg",
      title: "Site Operations",
      desc: "Efficient on-site workflow"
    },
    {
      img: "/images/carousel5.jpg",
      title: "Bulk Delivery",
      desc: "Fast transportation system"
    }
  ];

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <section className="gallery-page">
      <div className="container">



        {/* ================= CAROUSEL ================= */}
        <div className="carousel" data-aos="fade-up">

          <div className="carousel-image">
            <img src={carouselImages[current].img} alt="gallery" />

            <div className="carousel-overlay">
              <h2>{carouselImages[current].title}</h2>
              <p>{carouselImages[current].desc}</p>
            </div>
          </div>

          {/* DOTS */}
          <div className="carousel-dots">
            {carouselImages.map((_, index) => (
              <span
                key={index}
                className={index === current ? "active" : ""}
                onClick={() => setCurrent(index)}
              ></span>
            ))}
          </div>

        </div>

        {/* ================= ZIGZAG ================= */}
        <div className="zigzag">

          {data.map((item, index) => (
            <div
              key={index}
              className={`zigzag-item ${index % 2 === 0 ? "left" : "right"}`}
              data-index={`0${index + 1}`}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={index * 100}
            >

              {/* IMAGE */}
              <div className="zigzag-img" onClick={() => setSelected(item)}>
                <img src={item.img} alt={item.title} />
              </div>

              {/* CONTENT */}
              <div className="zigzag-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>

                <button onClick={() => setSelected(item)}>
                  View Details
                </button>
              </div>

            </div>
          ))}

        </div>

        {/* ================= MODAL ================= */}
        {selected && (
          <div className="modal" onClick={() => setSelected(null)}>

            <div
              className="modal-box"
              onClick={(e) => e.stopPropagation()}
            >

              {/* IMAGE */}
              <div className="modal-image">
                <img src={selected.img} alt={selected.title} />
              </div>

              {/* CONTENT */}
              <div className="modal-content">

                <h2>{selected.title}</h2>

                <p className="desc">{selected.desc}</p>

                <div className="info-grid">
                  <div>
                    <span>Category</span>
                    <p>Construction Material</p>
                  </div>

                  <div>
                    <span>Usage</span>
                    <p>Roads, Buildings, Infrastructure</p>
                  </div>

                  <div>
                    <span>Quality</span>
                    <p>High Grade</p>
                  </div>

                  <div>
                    <span>Delivery</span>
                    <p>On-site Available</p>
                  </div>
                </div>

                <button onClick={() => setSelected(null)}>
                  Close Details
                </button>

              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
}

export default Gallery;

