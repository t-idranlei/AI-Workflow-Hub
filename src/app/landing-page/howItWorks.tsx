import { Search, FileText, Code} from "lucide-react";
import img1 from '../assets/step-1.jpg';
import img2 from '../assets/step-2.jpg';
import img3 from '../assets/IMG_9629-scaled.jpg';

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Browse and Discover Tools",
    description: "Explore our catalog to find the right AI tools for your needs. Search by category or use case to discover solutions that fit your workflow.",
    image: img1,
  },
  {
    number: "02",
    icon: FileText,
    title: "Check and Review Guidelines",
    description: "Access comprehensive guidelines and best practices. Learn how to use each tool effectively with step-by-step documentation and real examples.",
    image: img2,
  },
  {
    number: "03",
    icon: Code,
    title: "Implement & Integrate",
    description: "Start using AI tools in your daily work with simple integration steps and ready-to-use templates that don't require advanced technical skills.",
    image: img3,
  },
];

export function howItWorks() {
  return (
    <section id="howto" className="bg-white dark:bg-gray-950 px-6 py-24 sm:py-32 transition-colors">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl! font-bold! font-ubuntu! tracking-tight text-[#002F87]! dark:text-blue-600! text-center sm:text-5xl">
            Get Started with 3 steps
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300  mx-auto text-center">
            An easy-to-use AI catalog that helps its users discover the right AI tools that simplifies how AI tools are adopted in everyday tasks.
          </p>
        </div>

        <div className="space-y-20">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={step.number}
                className={`grid gap-12 lg:grid-cols-2 lg:gap-16 items-center ${
                  !isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`flex flex-col gap-4 ${!isEven ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex size-12 items-center justify-center rounded-full bg-blue-600 dark:bg-blue-600">
                      <Icon className="size-6 text-white" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                  <div className="aspect-video overflow-hidden rounded-xl shadow-lg dark:shadow-blue-900/20">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="size-full object-cover"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default howItWorks