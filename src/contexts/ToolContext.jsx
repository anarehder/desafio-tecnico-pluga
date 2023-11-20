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

  const addRecentTool = (newTool) => {
    const existingIndex = recentTools.findIndex((tool) => tool.app_id === newTool.app_id);

    if (existingIndex !== -1) {
      const updatedRecentTools = [
        ...recentTools.slice(0, existingIndex),
        ...recentTools.slice(existingIndex + 1),
        newTool,
      ];
      setRecentTools(updatedRecentTools);
    } else {
      const updatedRecentTools = [...recentTools.slice(-2), newTool];
      setRecentTools(updatedRecentTools);
    }
  };

  return (
    <ToolContext.Provider value={{ recentTools, addRecentTool }}>
      {children}
    </ToolContext.Provider>
  );
};
