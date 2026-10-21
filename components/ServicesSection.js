
const services = [
  {
    id: 1,
    title: "TRUY TÌM LONG DIÊN HƯƠNG",
    category: "01 / MOVIE",
    description:
      "Truy tìm long diên hương là một bộ phim điện ảnh Việt Nam ra mắt năm 2025 thuộc thể loại hài – hành động – chính kịch, do Dương Minh Chiến đảm nhận vai trò đạo diễn.",
    image: "/images/service-1.jpg",
    alt: "Film production and cinematic storytelling",
    // features: ["Creative Direction", "Filming", "Post-production"],
  },
  {
    id: 2,
    title: "",
    category: "02 / SHORT PROMOTIONAL FILMS",
    description:
      "Chúng tôi đã sản xuất short promotional films theo hướng hành động hài, những sản phẩm của chúng tôi đạt được lượt xem và tương tác cao trên Youtube",
    image: "/images/service-2.jpg",
    alt: "Professional photography and creative imagery",
    features: ["Commercial", "Editorial", "Brand Campaigns"],
  },
];

export default function ServicesSection() {
  return (
    <main className="work-page services-page">
      <header className="work-heading">
        <p className="work-eyebrow">WHAT WE DID ?</p>

        <h1>
          PRODUCTS<span>.</span>
        </h1>

        <p className="work-intro">
          We specialize in producing short promotional films and feature-length movies in an action-comedy style; here are some of our projects.
        </p>
      </header>

      <section className="work-projects">
        {services.map((service, index) => (
          <article
            className={`work-project ${
              index % 2 === 1 ? "reverse" : ""
            }`}
            key={service.id}
          >
            <div className="work-image">
              <img
                src={service.image}
                alt={service.alt}
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>

            <div className="work-info">
              <p className="work-category">
                {service.category}
              </p>

              <h2>{service.title}</h2>

              <p className="work-description">
                {service.description}
              </p>

              {/* <div className="work-tags">
                {service.features.map((feature) => (
                  <span key={feature}>{feature}</span>
                ))}
              </div> */}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
