import { createContext, useEffect, useState } from "react";
import { templates as templateData } from "../mockData";

export const TemplateContext = createContext([]);

export function useTemplateContextValue() {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    const data = templateData; // make call to DB
    setTemplates(data);
  }, []);

  return {
    templates,
  };
}
