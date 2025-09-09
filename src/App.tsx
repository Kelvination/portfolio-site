import ModernTheme from "./components/ModernTheme";
import CMSPanel from "./components/CMSPanel";
import { PerformanceProvider } from "./contexts/PerformanceContext";
import { portfolioData } from "./data/portfolioData";
import { usePortfolioData } from "./hooks/usePortfolioData";

function App() {
  const portfolioDataHook = usePortfolioData(portfolioData);

  return (
    <PerformanceProvider>
      <div className="min-h-screen">
        <ModernTheme data={portfolioDataHook.data} />
        <CMSPanel portfolioDataHook={portfolioDataHook} />
      </div>
    </PerformanceProvider>
  );
}

export default App;
