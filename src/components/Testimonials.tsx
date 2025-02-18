import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "Admin",
    userName: "@ryzaq_innovators",
    comment: "This Quantum is awesome!",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Admin",
    userName: "@ryzaq_innovators",
    comment:
      "Non-Classical Logic – Quantum mechanics operates on principles like superposition and entanglement, which don’t align with how we experience reality in daily life. 🚀",
  },

  {
    image: "https://github.com/shadcn.png",
    name: "Admin",
    userName: "@ryzaq_innovators",
    comment:
      "It relies on advanced mathematics, including linear algebra, complex numbers, and differential equations, making it hard for non-experts to grasp. 🔢🤯",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Admin",
    userName: "@ryzaq_innovators",
    comment:
      " Quantum phenomena occur at atomic and subatomic scales, far removed from human perception, making it hard to relate to real-world experiences. 🌍➡️🔬",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Admin",
    userName: "@ryzaq_innovators",
    comment:
      "Measurement changes the system, making it difficult to visualize what's really happening at a microscopic level. 🧐🔬",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Admin",
    userName: "@ryzaq_innovators",
    comment:
      "Despite its complexity, quantum mechanics is essential for modern technology, from semiconductors to quantum computing! 💡🚀",
  },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        Discover Why
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          People Can't{" "}
        </span>
        Understand Quantum World
      </h2>

      {/* <p className="text-xl text-muted-foreground pt-4 pb-8">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non unde error
        facere hic reiciendis illo
      </p> */}

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage
                    alt=""
                    src={image}
                  />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
