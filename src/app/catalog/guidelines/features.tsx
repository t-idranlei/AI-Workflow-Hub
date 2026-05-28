import { Ban, LockIcon, Megaphone } from "lucide-react";
import { Card, CardDescription, CardHeader } from "../../components/ui/card";

const guidelineIcons = [
  {
    icon: LockIcon,
    description:
      "Never input passwords, API keys, credentials, or personal/sensitive data (e.g., names with IDs, health information, or financial records) into any public AI tool.",
  },
  {
    icon: Ban,
    description:
      "Always disclose AI use when submitting work to clients or regulators, and review all AI-generated output before use, as you are responsible for any content you approve or act upon.",
  },
  {
    icon: Megaphone,
    description:
      "Only use approved or recommended AI tools unless authorized by IT Security, and immediately report any AI-related incident, misuse, or data concern to IT Security.",
  },
];

export function features() {
  return (
    <section
      id="universal-guidelines"
      className="bg-gray-50 dark:bg-gray-900 px-6 py-24 sm:py-32 transition-colors"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl! font-bold! font-ubuntu! tracking-tight text-[#002F87]! dark:text-blue-400! sm:text-5xl text-center">
            Universal Safety Rules — Apply to Every Tool & Task{" "}
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {guidelineIcons.map((guidelines) => {
            const Icon = guidelines.icon;
            return (
              <Card className="border dark:border-gray-800 dark:bg-gray-950 hover:shadow-lg dark:hover:shadow-blue-900/10 transition-shadow">
                <CardHeader className="mb-3">
                  <div className="flex justify-center!">
                    <div className="flex size-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900 mb-4">
                      <Icon className="size-6 text-blue-600 dark:text-gray-100" />
                    </div>
                  </div>
                  <CardDescription className="text-base leading-relaxed dark:text-gray-300">
                    {guidelines.description}
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
