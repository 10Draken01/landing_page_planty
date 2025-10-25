// context/AppContext.tsx
import { createContext, useContext } from 'react';
import { HomeProvider } from '../../Features/Home/presentation/provider/HomeProvider';
import { AppTheme } from '../Theme/AppTheme';

const AppContext = createContext<any>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const homeProvider = new HomeProvider();


  
  return (
    <AppContext.Provider value={homeProvider}>
      <AppTheme children={children}/>
    </AppContext.Provider>
  );
}

export function useAppStore() {
  const context = useContext(AppContext); // ← Aquí usa useContext
  if (!context) {
    throw new Error('useAppStore debe usarse dentro de AppProvider');
  }
  return context;
}