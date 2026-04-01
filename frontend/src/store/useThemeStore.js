import { create } from "zustand";

const THEME_STORAGE_KEY = "chat-theme";
const DARK_THEME = "chatty-dark";

const applyThemeToDom = () => {
  const root = document.documentElement;
  root.setAttribute("data-theme", DARK_THEME);
  root.classList.add("dark");
  root.style.colorScheme = "dark";
};

export const useThemeStore = create((set) => ({
  theme: DARK_THEME,
  setTheme: () => {
    localStorage.setItem(THEME_STORAGE_KEY, DARK_THEME);
    applyThemeToDom();
    set({ theme: DARK_THEME });
  },
  initializeTheme: () => {
    localStorage.setItem(THEME_STORAGE_KEY, DARK_THEME);
    applyThemeToDom();
    set({ theme: DARK_THEME });
  },
}));
