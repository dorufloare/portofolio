"use client";

const Hero = () => {
  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-24 lg:px-48 py-16 gap-8">
      {/* Left: Intro Text */}
      <div className="flex-1 flex flex-col items-start text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Hi, I’m <br /> <span className="text-[#3399ff]">Doru Floare</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-100 max-w-xl font-semibold">
          Computer Science Student
        </p>
        <p className="text-lg md:text-xl text-gray-100 max-w-xl font-semibold">
          and Software Engineer
        </p>
      </div>

      {/* Right: Terminal Code Block */}
      <div className="flex-1 w-full max-w-3xl bg-[#0e1117] text-white rounded-xl p-5 shadow-lg border border-[#1f2733]">
        <pre className="whitespace-pre-wrap break-words text-xs md:text-sm font-mono leading-relaxed">
          <code>
            <span className="text-[#c678dd]">#include</span>{" "}
            <span className="text-[#98c379]">&lt;iostream&gt;</span>
            {"\n\n"}
            <span className="text-[#61afef]">int</span> main() {"{\n"}
            {"  "}
            <span className="text-[#e5c07b]">std::</span>
            <span className="text-[#56b6c2]">cout</span>
            {" << "}
            <span className="text-[#98c379]">
              "Performance-focused development\n"
            </span>
            {";\n  "}
            <span className="text-[#e5c07b]">std::</span>
            <span className="text-[#56b6c2]">cout</span>
            {" << "}
            <span className="text-[#98c379]">
              "Strong fundamentals in DSA\n"
            </span>
            {";\n  "}
            <span className="text-[#e5c07b]">std::</span>
            <span className="text-[#56b6c2]">cout</span>
            {" << "}
            <span className="text-[#98c379]">
              "Complex problem solving\n"
            </span>
            {";\n  "}
            <span className="text-[#e5c07b]">std::</span>
            <span className="text-[#56b6c2]">cout</span>
            {" << "}
            <span className="text-[#98c379]">
              "Pragmatic and clean code\n"
            </span>
            {";\n\n  "}
            <span className="text-[#61afef]">return</span>{" "}
            <span className="text-[#d19a66]">0</span>;
            {"\n}"}
          </code>
        </pre>
      </div>
    </section>
  );
};

export default Hero;
