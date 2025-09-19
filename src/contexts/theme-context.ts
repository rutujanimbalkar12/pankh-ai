import { createContext } from 'react';

export interface ThemeProviderState {
  theme: string;
  setTheme: (theme: string) => void;
}

export const ThemeProviderContext = createContext<ThemeProviderState | undefined>(undefined);