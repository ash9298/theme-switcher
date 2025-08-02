import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { useTheme } from "./hooks/useTheme";
import { themes } from "./theme";
import { MainContent, PageWrapper } from "./styles";

const App: React.FC = () => {
  const { themeName } = useTheme();
  const theme = themes[themeName];

  return (
    <>
      <Header />
      <MainContent $layout={theme.layout}>
        {theme.layout === "darkSidebar" && <Sidebar />}
        <PageWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </PageWrapper>
      </MainContent>
    </>
  );
};

export default App;
