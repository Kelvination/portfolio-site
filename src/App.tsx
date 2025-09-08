import ModernTheme from './components/ModernTheme';
import { portfolioData } from './data/portfolioData';

function App() {
  return (
    <div className="min-h-screen">
      <ModernTheme data={portfolioData} />
    </div>
  );
}

export default App;
