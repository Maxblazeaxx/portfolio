import Image from "next/image";

export default function Projects() {
  const projects = [
    { 
      title: "Pothole Detection & Road Surface Classification", 
      role: "Deep Learning & Computer Vision", 
      tech: "Python, PyTorch, OpenCV, ResNet-18",
      year: "2024",
      image: "/pothole_cv_model.png"
    }
  ];

  return (
    <section className="relative z-20 w-full bg-[#121212] pt-24 pb-16 px-8 md:px-24">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl md:text-5xl font-bold text-white mb-16 tracking-tight font-[family-name:var(--font-playfair)]">
          Selected Works
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative p-8 h-96 rounded-2xl flex flex-col justify-end overflow-hidden transition-all duration-500 hover:scale-[1.02] border border-white/10 bg-white/5 backdrop-blur-md cursor-pointer shadow-2xl"
            >
              {project.image && (
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover absolute inset-0 z-0 opacity-40 group-hover:opacity-80 transition-opacity duration-500 mix-blend-screen grayscale group-hover:grayscale-0"
                />
              )}
              {/* Subtle hover glow using absolute positioning layer */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10 transition-opacity duration-500" />
              
              <div className="relative z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-cyan-300 text-sm mb-2 font-mono tracking-wider uppercase">{project.year} &mdash; {project.role}</p>
                <h4 className="text-2xl md:text-3xl font-semibold text-white mb-2 leading-tight font-[family-name:var(--font-playfair)]">{project.title}</h4>
                <p className="text-gray-400 text-sm">{project.tech}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
