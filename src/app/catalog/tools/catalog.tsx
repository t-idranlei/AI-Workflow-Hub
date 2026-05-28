import CatalogHero from "../tools/hero";
import CatalogContent from "./content";
import CatalogMargin from "../tools/margin"
import { useEffect, useState } from "react";
import useFetch  from '../../../hooks/useFetch';

interface Tool {
  Tools: string;
  Description: string;
  "Main Use Case": string;
  "Latest Model/s": string;
  Link: string;
  Category: string;
  Pricing: string;
}
function catalog() {
  const [tools, setTools] = useState<Tool[]>([]);
  const { fetchCsvData } = useFetch();

  useEffect(() => {
    fetchCsvData("/data/EquiVerseAI-assistants.csv", (data) => {
      setTools(data);
    });
  }, []);
  
  return (
    <>
    <title>EquiVerseAI - Tools Catalog</title>
      <CatalogHero />
      <CatalogContent tools={tools} />
      <CatalogMargin/>
    </>
  );
}

export default catalog;
