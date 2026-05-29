import { useState } from "react";
import {
  Search,
  Bot,
  CodeXml,
  Monitor,
  ImagePlay,
  GitForkIcon,
  ChevronDown,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Card, CardContent } from "../../components/ui/card";

interface GuidelineRules {
  Category: string;
  Tools: string;
  RuleDescription: string;
  RuleType: string;
}

interface ToolStatus {
  Tool: string;
  Category: string;
  ToolStatus: string;
}

interface CategoryConfig {
  key: string;
  label: string;
  Icon: React.ElementType;
}

interface ContentProps {
  guidelineRules: GuidelineRules[];
  toolStatuses: ToolStatus[];
}

const categories: CategoryConfig[] = [
  { key: "General Chat", label: "General chat", Icon: Bot },
  { key: "Coding", label: "Coding", Icon: CodeXml },
  {
    key: "Automation & Workflow",
    label: "Automation & workflow",
    Icon: GitForkIcon,
  },
  { key: "Search Engine", label: "Search engine", Icon: Search },
  {
    key: "Productivity & Platform",
    label: "Productivity & Platform",
    Icon: Monitor,
  },
  { key: "Media Generation", label: "Media generation", Icon: ImagePlay },
];

const ruleColor: Record<string, string> = {
  "Data Rule": "bg-green-50 text-green-700",
  "Review Required": "bg-blue-50 text-blue-700",
  Risky: "bg-amber-50 text-amber-700",
  Prohibited: "bg-red-50 text-red-700",
  "Special Case": "bg-indigo-50 text-indigo-700",
};

const toolBadge: Record<string, string> = {
  "Clear for Usage": "bg-green-100 text-green-800",
  "Evaluation Required": "bg-amber-100 text-amber-800",
};

const ruleLegend = [
  { icon: "✅", label: "Data rule" },
  { icon: "🔵", label: "Review required" },
  { icon: "⚠️", label: "Risky" },
  { icon: "🚫", label: "Prohibited" },
  { icon: "🟣", label: "Special Case" },
];

function Legend() {
  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-700">
      <span className="font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wide text-xs">
        Legend:
      </span>

      <span className="flex items-center gap-1.5 dark:text-gray-200">
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-green-400 text-xs font-medium bg-green-100 text-green-800">
          <span className="size-1.5 rounded-full bg-green-400 inline-block" />
          ChatGPT
        </span>
        Cleared for use
      </span>

      <span className="flex items-center gap-1.5 dark:text-gray-200">
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-amber-400 text-xs font-medium bg-amber-100 text-amber-800">
          <span className="size-1.5 rounded-full bg-amber-400 inline-block" />
          ChatGPT
        </span>
        Evaluation Required
      </span>

      <span className="text-gray-300 dark:text-white">|</span>

      {ruleLegend.map(({ icon, label }) => (
        <span key={label} className="flex items-center gap-1.5 dark:text-gray-200">
          <span className="text-base ">{icon}</span> {label}
        </span>
      ))}
    </div>
  );
}

function Content({ guidelineRules, toolStatuses }: ContentProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All Models");

  console.log("guidelineRules sample:", guidelineRules.slice(0, 3));
  console.log("toolStatuses sample:", toolStatuses.slice(0, 3));

  const filterTabs = ["All Models", ...categories.map((c) => c.key)];

  const filteredTools = toolStatuses.filter((tool) => {
    const matchesSearch = tool.Tool.toLowerCase().includes(
      searchQuery.toLowerCase(),
    );
    const matchesFilter =
      activeFilter === "All Models" || tool.Category === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-7xl space-y-8">
        <Legend />
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

        <div className="flex flex-wrap justify-center gap-2">
          {filterTabs.map((tab) => (
            <Button
              key={tab}
              variant={activeFilter === tab ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(tab)}
              className={
                activeFilter === tab
                  ? "bg-blue-600 hover:bg-[#002F87]! text-white"
                  : ""
              }
            >
              {tab}
            </Button>
          ))}
        </div>

        {/* <div className="text-center text-sm text-gray-500">
          Showing {filteredTools.length} of {toolStatuses.length} tools
        </div> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map(({ key, label, Icon }) => {
            const catTools = filteredTools.filter((t) => t.Category === key);
            const catRules = guidelineRules.filter((r) => r.Category === key);
            if (catTools.length === 0) return null;
            if (activeFilter !== "All Models" && activeFilter !== key)
              return null;

            return (
              <CategoryCard
                key={key}
                label={label}
                Icon={Icon}
                tools={catTools}
                rules={catRules}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CategoryCard({
  label,
  Icon,
  tools,
  rules,
}: {
  label: string;
  Icon: React.ElementType;
  tools: ToolStatus[];
  rules: GuidelineRules[];
}) {
  const [expanded, setExpanded] = useState(false);
  return (
    <Card className="border border-gray-200 rounded-xl">
      <CardContent className="p-4 space-y-3">
        <div className="flex items-center gap-2 font-medium text-sm text-blue-900 dark:text-blue-50">
          <Icon className="size-4" />
          {label}
        </div>

        <div className="flex flex-wrap gap-1.5">
          {tools.map((tool) => (
            <span
              key={tool.Tool}
              className={`text-xs px-2 py-0.5 rounded-full font-medium
                ${toolBadge[tool.ToolStatus] ?? "bg-gray-100 text-gray-600"}`}
            >
              {tool.Tool}
            </span>
          ))}
        </div>

        <div className="border-t pt-2">
          <button
            onClick={() => setExpanded(!expanded)}
            className="w-full flex items-center justify-between
             text-[10px] uppercase tracking-wide text-gray-400 
             hover:text-gray-600 transition-colors"
          >
            Safety rules
            <ChevronDown
              className={`size-3 transition-transform duration-200 
                  ${expanded ? "rotate-180" : ""}`}
            />
          </button>
          {expanded && (
            <div className="space-y-2 mt-2">
              {rules.map((rule, i) => (
                <div
                  key={i}
                  className={`rounded text-xs px-3 py-2 leading-snug
          ${ruleColor[rule.RuleType] ?? "bg-gray-50 text-gray-600"}`}
                >
                  {rule.RuleDescription}
                </div>
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default Content;
