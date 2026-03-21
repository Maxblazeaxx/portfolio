export default function Contact() {
  return (
    <section className="relative z-20 w-full bg-[#121212] py-32 px-8 md:px-24 flex flex-col items-center justify-center text-center">
      <h3 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tight max-w-4xl drop-shadow-2xl">
        Let's build something intelligent.
      </h3>
      <div className="flex flex-col md:flex-row gap-6 mt-8">
        <a href="mailto:23etai410004@msruas.ac.in" className="px-8 py-4 bg-white text-black font-medium rounded-full hover:scale-105 transition-transform shadow-lg shadow-white/10">
          Email Me
        </a>
        <a href="https://github.com/Maxblazeaxx" target="_blank" rel="noreferrer" className="px-8 py-4 bg-white/5 border border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition-colors backdrop-blur-md">
          View GitHub
        </a>
      </div>
      <p className="mt-24 text-gray-500 text-sm">
        © {new Date().getFullYear()} Akash A. Bengaluru, India.
      </p>
    </section>
  );
}
