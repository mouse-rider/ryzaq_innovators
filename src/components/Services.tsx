import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";
import cubeLeg from "../assets/cube-leg.png";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Web Development",
    description:
      "We create fast, secure, and responsive web solutions tailored to your business goals.🔹 Static & Dynamic Website Design🔹 E-commerce Development (Shopify, WooCommerce, Custom)🔹 Web Applications (CRM, ERP, CMS)🔹 Frontend: React.js, Angular, HTML5, CSS3🔹 Backend: Node.js, Express, Django, PHP🔹 Database: MongoDB, MySQL, Firebase🔹 SEO Optimization & Deployment (AWS, Netlify, Vercel)",
    icon: <ChartIcon />,
  },
  {
    title: "IoT (Internet of Things) Solutions",
    description:
      "We help you build intelligent and connected devices for smarter living and operations.🔹 Embedded System Development (Arduino, ESP32, Raspberry Pi)🔹 Sensor Interfacing and Data Acquisition🔹 IoT Dashboard & Cloud Integration (Blynk, MQTT, Firebase, ThingsBoard)🔹 Applications: Smart Home, Smart Agriculture, Healthcare Monitoring, Industrial IoT🔹 Mobile App + IoT integration🔹 Real-time alerts & remote control via web/mobile",
    icon: <WalletIcon />,
  },
  {
    title: "Artificial Intelligence & Machine Learning",
    description:
      "Empowering businesses with intelligent automation and data-driven insights.🔹 Predictive Analytics & Model Training🔹 Computer Vision (Object Detection, Image Recognition)🔹 Natural Language Processing (Chatbots, Sentiment Analysis🔹 AI-Powered Chatbot Development🔹 Tools & Frameworks: Python, TensorFlow, Scikit-learn, OpenCV🔹 Integration with Web & IoT Platforms",
    icon: <MagnifierIcon />,
  },
];

export const Services = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Our{" "}
            </span>
            Services
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            We specialize in delivering innovative and high-impact technology solutions in three major domains: Web Development, IoT, and AI/ML. Our expertise helps individuals, startups, and enterprises thrive in the digital era.


          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src={cubeLeg}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="About services"
        />
      </div>
    </section>
  );
};
