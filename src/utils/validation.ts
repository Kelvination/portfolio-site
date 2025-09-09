export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const isNotEmpty = (value: string): boolean => {
  return value.trim().length > 0;
};

export const hasMinLength = (value: string, minLength: number): boolean => {
  return value.trim().length >= minLength;
};

export const validateContactForm = (formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  const errors: Record<string, string> = {};

  if (!isNotEmpty(formData.name)) {
    errors.name = 'Name is required';
  }

  if (!isNotEmpty(formData.email)) {
    errors.email = 'Email is required';
  } else if (!isValidEmail(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!isNotEmpty(formData.subject)) {
    errors.subject = 'Subject is required';
  }

  if (!isNotEmpty(formData.message)) {
    errors.message = 'Message is required';
  } else if (!hasMinLength(formData.message, 10)) {
    errors.message = 'Message must be at least 10 characters long';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};