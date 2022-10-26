import { createContext, useEffect, useState } from "react";

export const TemplateContext = createContext([]);

export function useTemplateContextValue() {
  const [templates, setTemplates] = useState([]);

  const baseURL = "http://localhost:5001/templates";
  const fetchTemplates = async () => {
    const res = await fetch(baseURL);
    const templateList = await res.json();
    setTemplates(templateList);
  };

  useEffect(() => {
    fetchTemplates(); // make call to backend service
  }, []);

  return {
    templates,
  };
}
