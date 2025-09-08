import { useState } from 'react';
import ModernTheme from './components/ModernTheme';
import CMSPanel from './components/CMSPanel';
import { portfolioData } from './data/portfolioData';
import type { PortfolioData } from './types';

function App() {
  const [data, setData] = useState<PortfolioData>(portfolioData);

  return (
    <div className="min-h-screen">
      <ModernTheme data={data} />
      <CMSPanel data={data} onDataUpdate={setData} />
    </div>
  );
}

export default App;
