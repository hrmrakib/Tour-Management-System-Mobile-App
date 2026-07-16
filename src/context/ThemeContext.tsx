import React, { createContext, useContext } from "react";
import { useColorScheme } from "react-native";
import { Colors, Theme } from "../constants/Colors";

type ThemeContextType = {
  theme: Theme;
  scheme: "light" | "dark";
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const systemScheme = useColorScheme();

  // Safely fallback to "light" if the system scheme is dark-less, null, or unspecified
  const scheme: "light" | "dark" = systemScheme === "dark" ? "dark" : "light";

  const theme: Theme = Colors[scheme];

  return (
    <ThemeContext.Provider value={{ theme, scheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
