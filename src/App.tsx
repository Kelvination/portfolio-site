import ModernTheme from './components/ModernTheme';
import CMSPanel from './components/CMSPanel';
import { portfolioData } from './data/portfolioData';
import { usePortfolioData } from './hooks/usePortfolioData';

function App() {
  const portfolioDataHook = usePortfolioData(portfolioData);

  return (
    <div className="min-h-screen">
      <ModernTheme data={portfolioDataHook.data} />
      <CMSPanel portfolioDataHook={portfolioDataHook} />
    </div>
  );
}

export default App;
