import { Button } from "../../components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../landing-page/theme-provider";
import { Link } from "react-router-dom";

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
              EquiVerseAI
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/catalog"
              className="text-sm text-gray-600  dark:text-gray-300 hover:text-gray-900  dark:hover:text-white transition-colors"
            >
              Tools
            </Link>
            <Link
              to="/guidelines"
              className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Guidelines
            </Link>
            <Link to="/community"
              className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Community
            </Link>
          </nav>

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
            
          </div>
        </div>
      </div>
    </header>
  );
}

export default header;
