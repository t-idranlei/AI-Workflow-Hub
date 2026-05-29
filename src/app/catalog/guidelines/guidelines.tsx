import GuidelineHero from "./hero";
import UniversalGuidelines from "./features";
import GuidelineContent from "./content";
import useFetch from "../../../hooks/useFetch";
import { useEffect, useState } from "react";

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

function guidelines() {
  const [guidelineRules, setGuidelineRules] = useState<GuidelineRules[]>([]);
  const [toolStatus, setToolStatuses] = useState<ToolStatus[]>([]);
  const { fetchCsvData } = useFetch();

  useEffect(() => {
    fetchCsvData(`${import.meta.env.BASE_URL}data/EquiVerseAI-GuidelinesRules.csv`, (data) => {
      setGuidelineRules(data);
    });

    fetchCsvData(`${import.meta.env.BASE_URL}data/EquiVerseAI-ToolStatus.csv`, (data) => {
      setToolStatuses(data);
    });
  }, []);

  return (
    <>
      <title>EquiVerseAI - Staff Guidelines</title>
      <GuidelineHero />
      <UniversalGuidelines/>
      <GuidelineContent guidelineRules={guidelineRules} toolStatuses={toolStatus} />
    </>
  );
}

export default guidelines;
