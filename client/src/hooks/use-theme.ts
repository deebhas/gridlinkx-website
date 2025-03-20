import { useEffect, useState } from "react";
import { z } from "zod";

const themeSchema = z.object({
  variant: z.enum(["professional", "tint", "vibrant"]),
  primary: z.string(),
  appearance: z.enum(["light", "dark", "system"]),
  radius: z.number(),
});

type Theme = z.infer<typeof themeSchema>;

export function useTheme() {
  const [theme, setThemeState] = useState<Theme["appearance"]>(() => {
    // Check if theme was stored in localStorage
    const stored = localStorage.getItem("theme");
    if (stored) return stored as Theme["appearance"];
    
    // Check system preference
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    
    return "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }
    
    localStorage.setItem("theme", theme);
  }, [theme]);

  return {
    theme,
    setTheme: setThemeState,
  };
}
