import { useState } from 'react';

interface UseFormOptions<T> {
  initialValues: T;
  onSubmit?: (values: T) => Promise<void> | void;
}

export function useForm<T extends Record<string, string | boolean | number>>(options: UseFormOptions<T>) {
  const [formData, setFormData] = useState<T>(options.initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (options.onSubmit) {
      setIsSubmitting(true);
      try {
        await options.onSubmit(formData);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const resetForm = () => {
    setFormData(options.initialValues);
  };

  const updateField = (name: keyof T, value: T[keyof T]) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return {
    formData,
    isSubmitting,
    handleChange,
    handleSubmit,
    resetForm,
    updateField,
    setFormData
  };
}