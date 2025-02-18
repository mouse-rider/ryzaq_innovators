// import { Statistics } from "./Statistics";
import pilot from "../assets/pilot.png";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                Company
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
              At RYZAQ, we are redefining the future with breakthrough innovations in quantum mechanics and nanotechnology. ⚛️✨ Our mission is to push the boundaries of science, transforming cutting-edge research into real-world solutions that revolutionize computing, sensing, and advanced materials.

With expertise in quantum computing, nanomaterials, and next-generation semiconductors, we develop technologies that drive progress across industries—from secure communication and ultra-fast processors to precision medical diagnostics. 🖥️🔬

At RYZAQ, we don’t just follow the future—we create it. 🚀 Join us in shaping a world powered by quantum intelligence and nanoscale engineering!








              </p>
            </div>

            {/* <Statistics /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
