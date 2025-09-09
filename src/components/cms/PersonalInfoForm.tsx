import React from 'react';
import type { PersonalInfo } from '../../types';
import FormField from '../ui/FormField';

interface PersonalInfoFormProps {
  personalInfo: PersonalInfo;
  updatePersonalInfo: (field: string, value: string) => void;
}

const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({ 
  personalInfo, 
  updatePersonalInfo 
}) => {
  return (
    <div className="space-y-4">
      <FormField
        label="Name"
        name="name"
        type="text"
        value={personalInfo.name}
        onChange={(e) => updatePersonalInfo('name', e.target.value)}
        variant="cms"
      />
      
      <FormField
        label="Title"
        name="title"
        type="text"
        value={personalInfo.title}
        onChange={(e) => updatePersonalInfo('title', e.target.value)}
        variant="cms"
      />
      
      <FormField
        label="Bio"
        name="bio"
        type="textarea"
        value={personalInfo.bio}
        onChange={(e) => updatePersonalInfo('bio', e.target.value)}
        rows={4}
        variant="cms"
      />
      
      <FormField
        label="Location"
        name="location"
        type="text"
        value={personalInfo.location}
        onChange={(e) => updatePersonalInfo('location', e.target.value)}
        variant="cms"
      />
      
      <FormField
        label="Email"
        name="email"
        type="email"
        value={personalInfo.email}
        onChange={(e) => updatePersonalInfo('email', e.target.value)}
        variant="cms"
      />
      
      <FormField
        label="GitHub"
        name="github"
        type="url"
        value={personalInfo.github || ''}
        onChange={(e) => updatePersonalInfo('github', e.target.value)}
        placeholder="https://github.com/username"
        variant="cms"
      />
      
      <FormField
        label="LinkedIn"
        name="linkedin"
        type="url"
        value={personalInfo.linkedin || ''}
        onChange={(e) => updatePersonalInfo('linkedin', e.target.value)}
        placeholder="https://linkedin.com/in/username"
        variant="cms"
      />
      
      <FormField
        label="Twitter"
        name="twitter"
        type="url"
        value={personalInfo.twitter || ''}
        onChange={(e) => updatePersonalInfo('twitter', e.target.value)}
        placeholder="https://twitter.com/username"
        variant="cms"
      />
      
      <FormField
        label="Website"
        name="website"
        type="url"
        value={personalInfo.website || ''}
        onChange={(e) => updatePersonalInfo('website', e.target.value)}
        placeholder="https://yourwebsite.com"
        variant="cms"
      />
      
      <FormField
        label="Resume URL"
        name="resumeUrl"
        type="url"
        value={personalInfo.resumeUrl || ''}
        onChange={(e) => updatePersonalInfo('resumeUrl', e.target.value)}
        placeholder="https://link-to-your-resume.pdf"
        variant="cms"
      />
    </div>
  );
};

export default PersonalInfoForm;