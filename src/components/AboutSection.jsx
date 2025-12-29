import { GraduationCap } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="education" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Education <span className="text-primary"> Journey</span>
        </h2>

        <div className="grid grid-cols-1 gap-8">
          {/* College */}
          <div className="gradient-border p-6 card-hover rounded-xl flex justify-between  hover:scale-102 
                         hover:shadow-[0_4px_20px_rgba(139,92,246,0.4),0_4px_25px_rgba(59,130,246,0.3)]">
            {/* Left side */}
            <div className=" flex flex-col items-start">
              <h3 className="text-xl md:text-2xl font-semibold">
                Birla Institute of Technology, Mesra
              </h3>
              <p className="text-primary font-medium">
                Bachelor of Technology in Artificial Intelligence & Machine Learning
              </p>
              <p className="text-muted-foreground">Ranchi, Jharkhand</p>
            </div>

            {/* Right side */}
            <div className="text-right">
              <p className="text-green-400 font-bold">CGPA: 8.5</p>
              <p className="text-sm text-muted-foreground">Sep 2023 – Present</p>
            </div>
          </div>

          {/* School */}
          <div className="gradient-border p-6 card-hover rounded-xl flex justify-between  hover:scale-102
                         hover:shadow-[0_4px_20px_rgba(139,92,246,0.4),0_4px_25px_rgba(59,130,246,0.3)]">
            {/* Left side */}
            <div className=" flex flex-col items-start">
              <h3 className="text-xl md:text-2xl font-semibold">
                Shri Krishna School
              </h3>
              <p className="text-primary font-medium">Higher Secondary</p>
              <p className="text-muted-foreground">Mahendergarh, Haryana</p>
            </div>

            {/* Right side */}
            <div className="text-right">
              <p className="text-green-400 font-bold">95.8%</p>
              <p className="text-sm text-muted-foreground">Passed 2022</p>
            </div>
          </div>

           <div className="gradient-border p-6 card-hover rounded-xl flex justify-between  hover:scale-102
                         hover:shadow-[0_4px_20px_rgba(139,92,246,0.4),0_4px_25px_rgba(59,130,246,0.3)]">
            {/* Left side */}
            <div className=" flex flex-col items-start">
              <h3 className="text-xl md:text-2xl font-semibold">
                Shri Krishna School
              </h3>
              <p className="text-primary font-medium"> Secondary</p>
              <p className="text-muted-foreground">Mahendergarh, Haryana</p>
            </div>

            {/* Right side */}
            <div className="text-right">
              <p className="text-green-400 font-bold">96.2%</p>
              <p className="text-sm text-muted-foreground">Passed 2020</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
