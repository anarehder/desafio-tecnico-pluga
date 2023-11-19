import { createContext, useContext, useState } from 'react';

const ToolContext = createContext();

export const useToolContext = () => {
  const context = useContext(ToolContext);
  if (!context) {
    throw new Error('useToolContext must be used within a ToolContextProvider');
  }
  return context;
};

// eslint-disable-next-line react/prop-types
export const ToolContextProvider = ({ children }) => {
  const [recentTools, setRecentTools] = useState([]);

  const addRecentTool = (tool) => {
    // Mantenha apenas as últimas 3 ferramentas
    const updatedRecentTools = [...recentTools.slice(-2), tool];
    setRecentTools(updatedRecentTools);
  };
  console.log(recentTools);
  return (
    <ToolContext.Provider value={{ recentTools, addRecentTool }}>
      {children}
    </ToolContext.Provider>
  );
};
