import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import SearchTool from "./pages/SearchToolsPage";
import { ToolContextProvider } from "./contexts/ToolContext";

function App() {

  return (
    <ToolContextProvider>
      <AppContainer>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SearchTool />} />
          </Routes>
        </BrowserRouter >
      </AppContainer >
    </ToolContextProvider>
  )
}

export default App

const AppContainer = styled.main`
  display: flex;
  justify-content: center;
  width: calc(100vw - 15px);
  padding: 10px;
`
