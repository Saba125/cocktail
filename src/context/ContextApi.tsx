import React, { useState, useContext, ReactNode, useEffect } from "react";

// Define the shape of your context value
interface AppContextType {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  setCocktails: React.Dispatch<React.SetStateAction<Cocktail[]>>;
  cocktail: Cocktail[]
}

interface Cocktail {
  idDrink: number;
  strDrink: string;
  strCategory: string;
  strDrinkThumb: string
}

const AppContext = React.createContext<AppContextType | null>(null);

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [cocktail, setCocktails] = useState<Cocktail[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`;
  // Define your complete context value here

  const fetchCocktails = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      if(data.drinks) {
        setCocktails(data.drinks);
      } else {
        setCocktails([])
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCocktails();
  }, [searchTerm]);
  const contextValue: AppContextType = {
    loading,
    setLoading,
    setSearchTerm,
    cocktail,
    setCocktails
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(AppContext);
  if (context === null) {
    throw new Error("useGlobalContext must be used within an AppProvider");
  }
  return context;
};

export { AppContext, AppProvider };
