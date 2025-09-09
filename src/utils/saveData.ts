import type { PortfolioData } from '../types';

export const formatPortfolioData = (data: PortfolioData): string => {
  // Helper function to properly escape strings for TypeScript
  const escapeString = (str: string): string => {
    return str
      .replace(/\\/g, '\\\\') // Escape backslashes first
      .replace(/'/g, "\\'")   // Escape single quotes
      .replace(/\n/g, '\\n')  // Escape newlines
      .replace(/\r/g, '\\r')  // Escape carriage returns
      .replace(/\t/g, '\\t'); // Escape tabs
  };

  // Recursively format the data with proper escaping
  const formatValue = (value: unknown, indent: string = ''): string => {
    if (value === null) return 'null';
    if (value === undefined) return 'undefined';
    if (typeof value === 'boolean') return value.toString();
    if (typeof value === 'number') return value.toString();
    if (typeof value === 'string') return `'${escapeString(value)}'`;
    
    if (Array.isArray(value)) {
      if (value.length === 0) return '[]';
      const items = value.map(item => `${indent}  ${formatValue(item, indent + '  ')}`);
      return `[\n${items.join(',\n')}\n${indent}]`;
    }
    
    if (typeof value === 'object') {
      const entries = Object.entries(value).filter(([, v]) => v !== undefined);
      if (entries.length === 0) return '{}';
      
      const props = entries.map(([key, val]) => {
        const formattedKey = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(key) ? key : `'${key}'`;
        return `${indent}  ${formattedKey}: ${formatValue(val, indent + '  ')}`;
      });
      
      return `{\n${props.join(',\n')}\n${indent}}`;
    }
    
    return String(value);
  };

  const formattedData = formatValue(data, '');
  
  return `import type { PortfolioData } from '../types';

export const portfolioData: PortfolioData = ${formattedData};
`;
};

export const savePortfolioData = async (data: PortfolioData): Promise<boolean> => {
  try {
    const formattedData = formatPortfolioData(data);
    
    // Try to save to file via our save server
    try {
      const response = await fetch('http://localhost:3001/api/save-portfolio-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: formattedData }),
      });
      
      if (response.ok) {
        return true;
      }
    } catch {
      console.log('Save server not running, falling back to clipboard');
    }
    
    // Fallback: copy to clipboard
    await navigator.clipboard.writeText(formattedData);
    return false; // Indicates clipboard copy, not file save
  } catch (error) {
    console.error('Error saving portfolio data:', error);
    throw error;
  }
};