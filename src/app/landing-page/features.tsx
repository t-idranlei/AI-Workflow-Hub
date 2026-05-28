import {
  Card,
  CardTitle,
  CardDescription,
  CardHeader,
} from "../components/ui/card";
import { Brain, BookOpen, Shield } from "lucide-react";

const featureIcons = [
  {
    icon: Brain,
    title: "Advanced AI Models",
    description:
      "Access cutting-edge AI tools and models designed to enhance productivity and streamline workflows.",
  },
  {
    icon: BookOpen,
    title: "Comprehensive Guidance",
    description:
      "Step-by-step guidelines and best practices to help you implement AI solutions effectively in your daily tasks.",
  },
  {
    icon: Shield,
    title: "Security and Compliance",
    description:
      "Built with Company Data Privacy, and Information Secutrity Guidelines in mind.",
  },
];

export function features() {
  return (
    <section
      id="features"
      className="bg-gray-50 dark:bg-gray-900 px-6 py-24 sm:py-32 transition-colors"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl! font-bold! font-ubuntu! tracking-tight text-[#002F87]! dark:text-blue-400! sm:text-5xl text-center">
            Everything you need to build with AI
          </h2>
          <p className="mt-4 text-lg text-gray-600  mx-auto text-center dark:text-white">
            An easy-to-use AI catalog that helps employees discover the right AI
            tools, learn how to use them effectively, and improve productivity
            in everyday work.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featureIcons.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className=" dark:border-gray-800 dark:bg-gray-950 hover:shadow-lg dark:hover:shadow-blue-900/10 transition-shadow"
              >
                <CardHeader>
                  <div className="flex justify-center!">
                    <div className="flex size-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900 mb-4">
                      <Icon className="size-6 text-blue-600 dark:text-gray-100" />
                    </div>
                  </div>
                  <CardTitle className="font-bold text-xl mb-2 dark:text-white">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed dark:text-gray-300">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default features;
