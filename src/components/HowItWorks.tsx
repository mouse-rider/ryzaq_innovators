import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "14+",
    description:
      "Years of Experience",
  },
  {
    icon: <MapIcon />,
    title: "450+",
    description:
      "Clients All over India",
  },
  {
    icon: <PlaneIcon />,
    title: "200+",
    description:
      "Tech Experts",
  },
  {
    icon: <GiftIcon />,
    title: "4+",
    description:
      "Honor Awards",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        Our{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Case Studies{" "}
        </span>
        {/* Step-by-Step Guide */}
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
       At InfoSpark, we believe that impact speaks louder than promises. Here are some of our successful project implementations and training outcomes that reflect our commitment to delivering value through technology and education.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
