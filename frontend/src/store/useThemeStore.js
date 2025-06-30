import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("callify-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("callify-theme", theme);
    set({ theme });
  },
}));
