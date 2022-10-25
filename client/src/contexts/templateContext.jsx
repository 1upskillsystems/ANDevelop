import { createContext, useEffect, useState } from "react";
import { templates as mockData } from "../mockData";

export const TemplateContext = createContext([]);

export function useTemplateContextValue() {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    const data = mockData; // make call to DB
    setTemplates(data);
  }, []);

  return {
    templates,
  };
}
