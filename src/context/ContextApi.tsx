import React, { useState, useContext, ReactNode } from 'react';

// Define the shape of your context value
interface AppContextType {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppContext = React.createContext<AppContextType | null>(null);

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(true);

  // Define your complete context value here
  const contextValue: AppContextType = {
    loading,
    setLoading,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  const context = useContext(AppContext);
  if (context === null) {
    throw new Error('useGlobalContext must be used within an AppProvider');
  }
  return context;
};

export { AppContext, AppProvider };