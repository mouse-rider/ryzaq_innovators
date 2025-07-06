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
                  About {" "}
                </span>
                InfoSpark 🧠
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
              InfoSpark is a next-generation 💡 IT solutions provider and 📘 training partner committed to solving real-world problems with smart, scalable technology. Headquartered in India 🇮🇳, we partner with leading tech platforms to deliver 🚀 enterprise-grade software and job-oriented training programs.

We blend industry expertise, certified trainers 👨‍🏫, and hands-on project training 🛠️ to nurture tech-savvy professionals and support organizations in achieving their digital transformation goals. 🌐






              </p>
            </div>

            {/* <Statistics /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
