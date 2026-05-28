import { Button } from "../components/ui/button";
import { Moon, Sun, ArrowUpRight } from "lucide-react";
import { useTheme } from "../landing-page/theme-provider";

function header() {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 dark:bg-gray-950/95 backdrop-blur supports-backdrop-filter:bg-white/60 dark:supports-backdrop-filter:bg-gray-950/60 dark:border-gray-800 transition-colors">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <a
              href="/"
              className="text-xl font-bold text-[#002F87] dark:text-blue-400 font-ubuntu no-underline hover:opacity-80"
            >
              AI Workflow Hub
            </a>
          </div>

          

          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {theme === "light" ? (
                <Moon className="size-5" />
              ) : (
                <Sun className="size-5" />
              )}
            </Button>
            <a href = "#features" className = "scroll-smooth">
              <Button className="bg-gray-900 hover:bg-gray-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:text-white ArrowRight">
               Browse
              <ArrowUpRight>
              </ArrowUpRight>
            </Button>
            </a>
            <Button variant="ghost" size="icon" className="md:hidden"></Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default header;
