import ModernTheme from "./components/ModernTheme";
import { PerformanceProvider } from "./contexts/PerformanceContext";
import { portfolioData } from "./data/portfolioData";
import { usePortfolioData } from "./hooks/usePortfolioData";

function App() {
  const portfolioDataHook = usePortfolioData(portfolioData);

  return (
    <PerformanceProvider>
      <div className="min-h-screen">
        <ModernTheme data={portfolioDataHook.data} />
      </div>
    </PerformanceProvider>
  );
}

export default App;
