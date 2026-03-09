import { createContext } from "react";

interface AppContextType {
  //主题
  darkMode: boolean;
  toggleDarkMode: () => void;
  ballOn: boolean;
  setBallOn: (value: boolean) => void;
  visible: boolean;
  setVisible: (value: boolean) => void;
}

export const AppContext = createContext<AppContextType>({} as AppContextType);
