export default function Skills() {
  const skills = [
    { category: "Programming", items: ["Python", "C++"] },
    { category: "ML & AI", items: ["CNNs", "Transfer Learning", "Model Evaluation"] },
    { category: "Libraries & Tools", items: ["PyTorch", "OpenCV", "NumPy", "Scikit-learn", "Git", "Google Colab", "Matplotlib"] },
    { category: "Currently Exploring", items: ["Advanced CV", "Model Optimization", "Real-time AI systems", "3D + AI integration"] }
  ];

  return (
    <section className="relative z-20 w-full bg-[#121212] pt-16 pb-24 px-8 md:px-24">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl md:text-5xl font-bold text-white mb-16 tracking-tight">
          Technical Arsenal
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {skills.map((skillGroup, idx) => (
            <div key={idx} className="flex flex-col space-y-4">
              <h4 className="text-xl font-semibold text-white border-b border-white/10 pb-4">
                {skillGroup.category}
              </h4>
              <ul className="flex flex-col space-y-2">
                {skillGroup.items.map((item, i) => (
                  <li key={i} className="text-gray-400 font-light tracking-wide">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
