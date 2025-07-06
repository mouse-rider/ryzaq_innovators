import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/growth.png";
import image3 from "../assets/reflecting.png";
import image4 from "../assets/looking-ahead.png";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Our Vision 👁️‍🗨️",
    description:
      "To be a globally recognized leader in IT solutions and training, driving innovation, empowering careers, and enabling businesses through smart technology. 🌍💼",
    image: image4,
  },

  {
    title: "  Our Mission 🎯",
    description:
      "To deliver high-quality software development 💻, consulting 🧑‍💼, and cloud-based services ☁️ to help businesses scale and succeed. To bridge the gap between education and employment through industry-aligned training programs 📚. To promote a culture of continuous learning 📈, adaptability 🔄, and innovation 🧠. To create value-driven partnerships with clients, students, and institutions 🤝.",
    image: image3,
  },

  {
    title: "Our Core Values 🛡️",
    description:
      "💡 Innovation – We embrace change and lead with creativity. 🔒 Commitment – We deliver on our promises with integrity and passion. 📚 Knowledge – We believe in lifelong learning and skill enhancement. 🤝 Collaboration – We grow through strong partnerships and teamwork. 🌟 Excellence – We strive for the highest standards in everything we do.",
    image: image,
  },
];

const featureList: string[] = [
  "Contact form",
  "Our team",
  "Responsive design",
  "Newsletter",
 
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Many{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Great Features
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
