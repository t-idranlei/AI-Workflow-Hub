import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { ArrowDown } from "lucide-react";


function hero() {
  return (
    <section id = "catalog" className="relative overflow-hidden bg-linear-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 px-6 py-24 sm:py-32 transition-colors">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h1 className="text-8xl! sm:text-5xl lg:text-6xl font-bold! tracking-tight text-[#002F87]! dark:text-blue-400!  transition-colors">
                Explore our AI Catalog
              </h1>
              <p className="mt-4! -pt-[2rem]! text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto! text-center!">
                Discover the most effective AI assistants and tools for
                improving your workflow and productivity.
              </p>
            </div>
            <div className="flex justify-center flex-col sm:flex-row gap-4">
              <Link to = "#content" className = "scroll-smooth">
                <Button
                  size="lg"
                  className="border border-black text-black text-base bg-white hover:bg-gray-800 hover:text-white dark:bg-blue-600 dark:hover:bg-blue-700 dark:text-white"
                >
                  Explore Tools
                  <ArrowDown></ArrowDown>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default hero;
