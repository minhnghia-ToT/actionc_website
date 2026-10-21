
// const projects = [
//   {
//     id: 1,
//     title: "Project One",
//     category: "Web Development",
//     description:
//       "A showcase of my first project, highlighting the development process, key features, and technologies used.",
//     video: "/videos/project-1.mp4",
//     technologies: ["Next.js", "JavaScript", "CSS"],
//   },
//   {
//     id: 2,
//     title: "Project Two",
//     category: "Software Development",
//     description:
//       "An overview of my second project, including its main functionality, technical implementation, and the challenges I solved.",
//     video: "/videos/project-2.mp4",
//     technologies: ["C#", ".NET", "SQL Server"],
//   },
//   {
//     id: 3,
//     title: "Project Three",
//     category: "Creative Work",
//     description:
//       "A presentation of another project, demonstrating my skills, ideas, and approach to building digital products.",
//     video: "/videos/project-3.mp4",
//     technologies: ["JavaScript", "API", "Git"],
//   },
// ];

// export default function WorkSection() {
//   return (
//     <main className="work-page">
//       <header className="work-heading">
//         <p className="work-eyebrow">MY PORTFOLIO</p>
//         <h1>Selected Work<span>.</span></h1>
//         <p className="work-intro">
//           A collection of projects, experiments, and things I have built.
//         </p>
//       </header>

//       <section className="work-projects">
//         {projects.map((project, index) => (
//           <article
//             className={`work-project ${
//               index % 2 === 1 ? "reverse" : ""
//             }`}
//             key={project.id}
//           >
//             <div className="work-video">
//               <video
//                 src={project.video}
//                 controls
//                 playsInline
//                 preload="metadata"
//               >
//                 Your browser does not support video playback.
//               </video>
//             </div>

//             <div className="work-info">
//               <p className="work-category">
//                 {String(project.id).padStart(2, "0")} /{" "}
//                 {project.category}
//               </p>

//               <h2>{project.title}</h2>

//               <p className="work-description">
//                 {project.description}
//               </p>

//               <div className="work-tags">
//                 {project.technologies.map((tech) => (
//                   <span key={tech}>{tech}</span>
//                 ))}
//               </div>
//             </div>
//           </article>
//         ))}
//       </section>
//     </main>
//   );
// }

const projects = [
  {
    id: 1,
    title: "Dương Minh Chiến",
    category: "Đạo diễn",
    description:
      "Dương Minh Chiến là đạo diễn kiêm nhà sáng lập nhóm làm phim Action C, được thành lập vào năm 2019 với niềm đam mê dành cho phim hành động, võ thuật và các nội dung giải trí. Anh từng tham gia nhiều dự án điện ảnh như Lật Mặt của đạo diễn Lý Hải, tích lũy kinh nghiệm từ diễn viên đóng thế (cascadeur) đến trợ lý đạo diễn trước khi trở thành đạo diễn điện ảnh. Năm 2025, anh đảm nhận vai trò đạo diễn phim Truy tìm long diên hương, đánh dấu bước tiến quan trọng trong sự nghiệp và hành trình phát triển của Action C.",
    image: "/images/team.jpg",
    alt: "Dương Minh Chiến",
    // technologies: ["Photography", "Art Direction", "Visual Storytelling"],
  },
  {
    id: 2,
    title: "Trầm Minh Hoàng",
    category: "Đạo diễn hành động",
    description:
      "Trầm Minh Hoàng, còn được biết đến với biệt danh Hoàng Tóc Dài, là diễn viên đóng thế (cascadeur), diễn viên và đạo diễn hành động của nhóm Action C. Anh phụ trách biên đạo, dàn dựng các bài võ thuật, hướng dẫn những động tác khó và góp phần đảm bảo tính chân thực, thẩm mỹ cho các phân cảnh hành động.",
    image: "/images/team1.jpg",
    alt: "Trầm Minh Hoàng",
    // technologies: ["Action Choreography", "Stunt Coordination", "Martial Arts"],
  },
  {
    id: 3,
    title: "Đại Bảo Bảo",
    category: "Đạo diễn hành động",
    description:
      "Đại Bảo Bảo, tên thật là Hoàng Quốc Bảo, sinh năm 1990, là cascadeur, diễn viên và đạo diễn hành động chủ chốt của nhóm Action C. Với khoảng 7 năm kinh nghiệm trong nghề cascadeur theo thông tin báo chí, anh có thế mạnh ở các cảnh hành động cổ trang, những pha té ngã nguy hiểm và dàn dựng võ thuật. Anh cũng đảm nhận vai trò đồng đạo diễn hành động trong phim điện ảnh Truy Tìm Long Diên Hương (2025), góp phần đưa phong cách hành động đặc trưng của Action C lên màn ảnh rộng.",
    image: "/images/team2.jpg",
    alt: "Đại Bảo Bảo",
    // technologies: ["Branding", "Design", "Visual Identity"],
  },
];

export default function WorkSection() {
  return (
    <main className="work-page">
    
<header className="work-heading">
  <div className="work-heading-content">
    <div className="work-heading-text">
      <p className="work-eyebrow">ACTION C PRODUCTION</p>

      <h1>
        TEAM<span>.</span>
      </h1>

      {/* <p className="work-intro">
        A collection of our creative projects, visual stories,
        and distinctive ideas.
      </p> */}
    </div>

    {/* LOGO */}
    <div className="work-heading-logo">
      <img
        src="/images/logo.png"
        alt="ACTION C Production"
      />
    </div>
  </div>
</header>

      <section className="work-projects">
        {projects.map((project, index) => (
          <article
            className={`work-project ${
              index % 2 === 1 ? "reverse" : ""
            }`}
            key={project.id}
          >
            <div className="work-image">
              <img
                src={project.image}
                alt={project.alt}
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>

            <div className="work-info">
              <p className="work-category">
                {String(project.id).padStart(2, "0")} /{" "}
                {project.category}
              </p>

              <h2>{project.title}</h2>

              <p className="work-description">
                {project.description}
              </p>

              {/* <div className="work-tags">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div> */}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
