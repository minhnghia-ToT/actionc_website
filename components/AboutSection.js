
const aboutItems = [
  {
    id: "01",
    eyebrow: "WHO WE ARE",
    title: "Chúng tôi là ai?",
    description:
      "Action C là nhóm sản xuất phim hành động và cascadeur nổi tiếng tại Việt Nam, do đạo diễn Dương Minh Chiến sáng lập. Nhóm gây ấn tượng mạnh nhờ các video võ thuật mãn nhãn kết hợp yếu tố hài hước trên YouTube và chính thức bước lên màn ảnh rộng với phim điện ảnh 'Truy Tìm Long Diên Hương' đạt doanh thu hơn 206 tỷ đồng.",
    image: "/images/about-1.jpg",
    alt: "Đội ngũ sản xuất phim tại phim trường",
  },
  {
    id: "02",
    eyebrow: "OUR VISION",
    title: "Tầm nhìn sáng tạo",
    description:
      "ACTION C hướng đến trở thành một production house chuyên nghiệp, nơi những ý tưởng sáng tạo được chuyển hóa thành các sản phẩm hình ảnh có giá trị, mang dấu ấn riêng và tạo ra sự kết nối cảm xúc với khán giả.",
    image: "/images/about-2.jpg",
    alt: "Đạo diễn làm việc cùng máy quay điện ảnh",
  },
  {
    id: "03",
    eyebrow: "OUR VALUES",
    title: "Giá trị của chúng tôi",
    description:
      "Giá trị cốt lõi của ACTION C được xây dựng dựa trên năm yếu tố: sáng tạo, chuyên nghiệp, chất lượng, hợp tác và đổi mới. ACTION C không ngừng phát triển những ý tưởng độc đáo, đảm bảo quy trình sản xuất chỉn chu, tạo ra các sản phẩm hình ảnh chất lượng, đồng thời đề cao sự hợp tác với khách hàng và ứng dụng công nghệ hiện đại để tạo nên những dấu ấn khác biệt.",
    image: "/images/about-3.jpg",
    alt: "Quá trình hậu kỳ và chỉnh màu phim",
  },
];

export default function AboutSection() {
  return (
    <main className="about-page">
      {/* HERO BANNER */}
  <section className="about-hero">
    <div className="about-hero-content">
      {/* <p className="about-eyebrow">
        DREAM BIG WORK <span>HARD.</span>
      </p> */}

      <div className="about-hero-layout">
        <h1>
          WE ARE
          <br />
          ACTION C
        </h1>

        {/* LOGO / IMAGE */}
        <div className="about-hero-logo">
          <img
            src="/images/logo.png"
            alt="ACTION C Production Logo"
          />
        </div>
      </div>
    </div>
  </section>

      {/* ABOUT PANELS */}
      <section className="about-panels">
        {aboutItems.map((item, index) => (
          <article
            className={`about-panel ${
              index % 2 === 1 ? "reverse" : ""
            }`}
            key={item.id}
          >
            <div className="about-panel-image">
              <img
                src={item.image}
                alt={item.alt}
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>

            <div className="about-panel-content">
              <p className="about-panel-eyebrow">
                {item.id} / {item.eyebrow}
              </p>

              <h2>{item.title}</h2>

              <p className="about-panel-description">
                {item.description}
              </p>

              <span className="about-panel-number">
                {item.id}
              </span>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
