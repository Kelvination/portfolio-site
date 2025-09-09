import React from 'react';

interface FormFieldProps {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'url' | 'textarea' | 'select' | 'checkbox';
  value: string | boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  placeholder?: string;
  required?: boolean;
  rows?: number;
  options?: Array<{ value: string; label: string }>;
  className?: string;
  variant?: 'default' | 'cms';
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
  rows = 3,
  options = [],
  className = '',
  variant = 'default'
}) => {
  const baseInputClasses = "w-full px-4 py-3 rounded-lg focus:outline-none transition-all duration-300";
  
  const variantClasses = {
    default: "bg-gray-900/30 border border-gray-600/30 text-white placeholder-gray-400 focus:ring-2 focus:ring-accent-500 focus:border-transparent",
    cms: "px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500"
  };

  const labelClasses = variant === 'cms' 
    ? "block text-sm font-medium text-slate-700 mb-1"
    : "block text-sm font-medium text-gray-300 mb-2";

  const renderInput = () => {
    const inputClassName = `${baseInputClasses} ${variantClasses[variant]}`;

    if (type === 'textarea') {
      return (
        <textarea
          name={name}
          value={value as string}
          onChange={onChange}
          required={required}
          rows={rows}
          placeholder={placeholder}
          className={`${inputClassName} resize-none`}
        />
      );
    }

    if (type === 'select' && options.length > 0) {
      return (
        <select
          name={name}
          value={value as string}
          onChange={onChange}
          required={required}
          className={inputClassName}
        >
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      );
    }

    if (type === 'checkbox') {
      return (
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name={name}
            checked={value as boolean}
            onChange={onChange}
            className="w-4 h-4 text-accent-600"
          />
          <span className="text-sm">{label}</span>
        </label>
      );
    }

    return (
      <input
        type={type}
        name={name}
        value={value as string}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className={inputClassName}
      />
    );
  };

  if (type === 'checkbox') {
    return (
      <div className={className}>
        {renderInput()}
      </div>
    );
  }

  return (
    <div className={className}>
      <label className={labelClasses}>
        {label} {required && '*'}
      </label>
      {renderInput()}
    </div>
  );
};

export default FormField;