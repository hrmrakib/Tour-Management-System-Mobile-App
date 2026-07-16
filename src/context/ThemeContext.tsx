import { useColorScheme as useNativeWindColorScheme } from "nativewind";
import React, { createContext, useContext } from "react";

type ThemeContextType = {
  colorScheme: "light" | "dark";
  isDark: boolean;
  toggleTheme: () => void;
  setColorScheme: (scheme: "light" | "dark") => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { colorScheme, setColorScheme, toggleColorScheme } =
    useNativeWindColorScheme();

  const activeScheme = colorScheme === "dark" ? "dark" : "light";
  const isDark = activeScheme === "dark";

  return (
    <ThemeContext.Provider
      value={{
        colorScheme: activeScheme,
        isDark,
        toggleTheme: toggleColorScheme,
        setColorScheme: (scheme) => setColorScheme(scheme),
      }}
    >
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
