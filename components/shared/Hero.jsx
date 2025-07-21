"use client";

const Hero = () => {
  return (
    <section className="mb-48 md:mb-48 mt-52 md:mt-0 w-full h-[600px] md:h-screen flex flex-col xl:flex-row items-center justify-center px-6 md:px-24 xl:px-32 2xl:px-48 py-8 md:py-16 gap-1 xl:gap-20 max-w-[1600px] mx-auto">
      {/* Left: Intro Text */}
      <div className="flex-1 flex flex-col items-start text-center xl:text-left">
        <h1 className="ml-4 md:ml-0  text-4xl md:text-5xl xl:text-6xl font-bold text-white mb-2 md:mb-4 mt-12 md:mt-0 leading-tight">
          Hi, I’m <br />
          <span className="text-[#3399ff]">Doru Floare</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-100 max-w-xl font-semibold">
          Computer Science Student
        </p>
        <p className="ml-4 md:ml-0 text-xl md:text-2xl text-gray-100 max-w-xl font-semibold">
          and Software Engineer
        </p>
      </div>
      {/* Right: Terminal Code Block */}
      <div className="flex-1 w-full max-w-3xl bg-[#0e1117] text-white rounded-xl p-3 md:p-8 shadow-lg border border-[#1f2733] max-h-40 md:max-h-none overflow-hidden md:mt-0">
        <pre className="whitespace-pre-wrap break-words text-[10px] md:text-base font-mono leading-tight md:leading-relaxed">
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
              {"\"Performance-focused development\\n\""}
            </span>
            {";\n  "}
            <span className="text-[#e5c07b]">std::</span>
            <span className="text-[#56b6c2]">cout</span>
            {" << "}
            <span className="text-[#98c379]">
              {"\"Strong fundamentals in DSA\\n\""}
            </span>
            {";\n  "}
            <span className="text-[#e5c07b]">std::</span>
            <span className="text-[#56b6c2]">cout</span>
            {" << "}
            <span className="text-[#98c379]">
              {"\"Complex problem solving\\n\""}
            </span>
            {";\n  "}
            <span className="text-[#e5c07b]">std::</span>
            <span className="text-[#56b6c2]">cout</span>
            {" << "}
            <span className="text-[#98c379]">
              {"\"Pragmatic and clean code\\n\""}
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
