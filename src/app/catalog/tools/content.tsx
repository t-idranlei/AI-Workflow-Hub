import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Card, CardContent } from "../../components/ui/card";

const modelFilters = [
  "All Models",
  "General Chat",
  "Coding",
  "Automation & Workflow",
  "Search Engine",
  "Productivity & Platform",
  "Media Generation",
];

interface Tool {
  Tools: string;
  Description: string;
  "Main Use Case": string;
  "Latest Model/s": string;
  Link: string;
  Category: string;
  Pricing: string;
}

interface ContentProps {
  tools: Tool[];
}

function content({ tools }: ContentProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All Models");
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);
  if (!Array.isArray(tools) || tools.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-500">No tools available.</p>
      </div>
    );
  }

  const filteredTools = tools.filter((tool) => {
    const matchesSearch =
      tool.Tools?.toLowerCase().includes(searchQuery.toLowerCase()) || false;
    const matchesFilter =
      activeFilter === "All Models" || tool.Category === activeFilter;
    return matchesSearch && matchesFilter;
  });
  return (
    <section id="content" className="bg-linear-to-b from-white to-blue-50 dark:from-gray-950 dark:to-gray-900 mb-auto! ml-auto!">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="max-w-2xl mx-auto relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Search tools..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 h-12"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-3 ">
          {modelFilters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className={
                activeFilter === filter
                  ? "bg-blue-600 hover:bg-[#002F87]! text-white"
                  : ""
              }
            >
              {filter}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredTools.map((tools) => (
            <Card
              key={tools.Tools}
              className="h-full hover:shadow-lg transition-shadow border-2 hover:border-[#002F87] dark:hover:border-blue-600"
              onClick={() => setSelectedTool(tools)}
            >
              <CardContent className="h-full p-6 flex flex-col gap-3 ">
                <div className="flex-1 flex-col gap-1 mb-1! items-center justify-between">
                  <div className="size-12 rounded-full bg-white dark:bg-gray-400 flex items-center! content-center! justify-center shrink-0 mx-auto">
                    <img
                      src={`${import.meta.env.BASE_URL}cardLogos/${tools.Tools.toLowerCase().replace(/[^a-z0-9]/g, "")}.png`}
                      alt={tools.Tools}
                      className="size-8 object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          const fallback = document.createElement("span");
                          fallback.className = "text-white font-bold text-lg";
                          fallback.textContent = tools.Tools.charAt(0);
                          parent.appendChild(fallback);
                        }
                      }}
                    />
                  </div>
                  <h3 className="mb-2! font-bold text-gray-900 text-lg dark:text-gray-400">
                    {tools.Tools}
                  </h3>
                  <span className="text-xs bg-blue-100 text-blue-500 dark:text-black px-2 py-1 rounded-full whitespace-nowrap">
                    {tools.Category}
                  </span>
                </div>

                <p className="-mt-1! text-sm text-gray-600 flex-1 dark:text-gray-400!">
                  {tools["Main Use Case"]}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        {selectedTool && (
          <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedTool(null)}
          >
            <div
              className="bg-white dark:bg-gray-900 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-8"></div>
                <h2 className="text-2xl font-bold text-gray-900! dark:text-white! text-center">
                  {selectedTool.Tools}
                </h2>
                <button
                  onClick={() => setSelectedTool(null)}
                  className="text-gray-500 hover:text-gray-700 text-2xl w-8 text-right"
                >
                  ✕
                </button>
              </div>
              <div className="flex justify-center mb-4">
                <div className="w-3!"></div>
                <div className="size-20 rounded-full bg-white dark:bg-gray-400 flex items-center justify-center shadow-md">
                  <img
                    src={`${import.meta.env.BASE_URL}cardLogos/${selectedTool.Tools.toLowerCase().replace(/[^a-z0-9]/g, "")}.png`}
                    alt={selectedTool.Tools}
                    className="size-12 object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        const fallback = document.createElement("span");
                        fallback.className =
                          "text-gray-900 dark:text-white font-bold text-2xl";
                        fallback.textContent = selectedTool.Tools.charAt(0);
                        parent.appendChild(fallback);
                      }
                    }}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                    {selectedTool.Category}
                  </span>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-700 dark:text-gray-300">
                    Latest Model/s
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {selectedTool["Latest Model/s"]}
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-700 dark:text-gray-300">
                    Main Use Case
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {selectedTool["Main Use Case"]}
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-700 dark:text-gray-300">
                    Pricing
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 whitespace-pre-wrap">
                    {selectedTool.Pricing}
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-700 dark:text-gray-300">
                    Link:{" "}
                    <a
                      href={selectedTool.Link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline dark:text-blue-400 ml-1"
                    >
                      {selectedTool.Link}
                    </a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        )}
        {filteredTools.length === 0 && (
          <p className="text-center text-gray-500 py-16">No tools found.</p>
        )}
      </div>
    </section>
  );
}

export default content;
