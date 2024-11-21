import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import PhotoUpload from './PhotoUpload';
import LanguageSection from './LanguageSection';
import type { CVData } from '../types';

interface CVFormProps {
  cvData: CVData;
  setCvData: (data: CVData) => void;
}

const CVForm: React.FC<CVFormProps> = ({ cvData, setCvData }) => {
  const handlePersonalInfoChange = (field: string, value: string) => {
    setCvData({
      ...cvData,
      personalInfo: { ...cvData.personalInfo, [field]: value },
    });
  };

  const handlePhotoChange = (photoUrl: string) => {
    setCvData({
      ...cvData,
      personalInfo: { ...cvData.personalInfo, photoUrl },
    });
  };

  const addListItem = (section: keyof Pick<CVData, 'experience' | 'education' | 'skills' | 'certifications'>) => {
    setCvData({
      ...cvData,
      [section]: [...cvData[section], section === 'experience' 
        ? { company: '', position: '', duration: '', description: '' }
        : section === 'education'
        ? { school: '', degree: '', duration: '', gpa: '' }
        : ''],
    });
  };

  const removeListItem = (section: keyof Pick<CVData, 'experience' | 'education' | 'skills' | 'certifications'>, index: number) => {
    setCvData({
      ...cvData,
      [section]: cvData[section].filter((_, i) => i !== index),
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Personal Information</h2>
        <PhotoUpload
          photoUrl={cvData.personalInfo.photoUrl}
          onPhotoChange={handlePhotoChange}
        />
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            value={cvData.personalInfo.fullName}
            onChange={(e) => handlePersonalInfoChange('fullName', e.target.value)}
          />
          <input
            type="text"
            placeholder="Professional Title"
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            value={cvData.personalInfo.title}
            onChange={(e) => handlePersonalInfoChange('title', e.target.value)}
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              type="email"
              placeholder="Email"
              className="p-2 border rounded focus:ring-2 focus:ring-blue-500"
              value={cvData.personalInfo.email}
              onChange={(e) => handlePersonalInfoChange('email', e.target.value)}
            />
            <input
              type="tel"
              placeholder="Phone"
              className="p-2 border rounded focus:ring-2 focus:ring-blue-500"
              value={cvData.personalInfo.phone}
              onChange={(e) => handlePersonalInfoChange('phone', e.target.value)}
            />
          </div>
          <input
            type="text"
            placeholder="Location"
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            value={cvData.personalInfo.location}
            onChange={(e) => handlePersonalInfoChange('location', e.target.value)}
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="GitHub URL"
              className="p-2 border rounded focus:ring-2 focus:ring-blue-500"
              value={cvData.personalInfo.github}
              onChange={(e) => handlePersonalInfoChange('github', e.target.value)}
            />
            <input
              type="text"
              placeholder="LinkedIn URL"
              className="p-2 border rounded focus:ring-2 focus:ring-blue-500"
              value={cvData.personalInfo.linkedin}
              onChange={(e) => handlePersonalInfoChange('linkedin', e.target.value)}
            />
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Professional Summary</h2>
        <textarea
          placeholder="Write a compelling professional summary..."
          className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 h-32"
          value={cvData.summary}
          onChange={(e) => setCvData({ ...cvData, summary: e.target.value })}
        />
      </section>

      <section className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Work Experience</h2>
          <button
            onClick={() => addListItem('experience')}
            className="flex items-center text-blue-600 hover:text-blue-700"
          >
            <Plus className="w-4 h-4 mr-1" /> Add Experience
          </button>
        </div>
        {cvData.experience.map((exp, index) => (
          <div key={index} className="mb-4 p-4 border rounded relative">
            <button
              onClick={() => removeListItem('experience', index)}
              className="absolute top-2 right-2 text-red-500 hover:text-red-700"
            >
              <Trash2 className="w-4 h-4" />
            </button>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Company"
                className="w-full p-2 border rounded"
                value={exp.company}
                onChange={(e) => {
                  const newExp = [...cvData.experience];
                  newExp[index].company = e.target.value;
                  setCvData({ ...cvData, experience: newExp });
                }}
              />
              <input
                type="text"
                placeholder="Position"
                className="w-full p-2 border rounded"
                value={exp.position}
                onChange={(e) => {
                  const newExp = [...cvData.experience];
                  newExp[index].position = e.target.value;
                  setCvData({ ...cvData, experience: newExp });
                }}
              />
              <input
                type="text"
                placeholder="Duration (e.g., 2019 - Present)"
                className="w-full p-2 border rounded"
                value={exp.duration}
                onChange={(e) => {
                  const newExp = [...cvData.experience];
                  newExp[index].duration = e.target.value;
                  setCvData({ ...cvData, experience: newExp });
                }}
              />
              <textarea
                placeholder="Description of your role and achievements"
                className="w-full p-2 border rounded h-24"
                value={exp.description}
                onChange={(e) => {
                  const newExp = [...cvData.experience];
                  newExp[index].description = e.target.value;
                  setCvData({ ...cvData, experience: newExp });
                }}
              />
            </div>
          </div>
        ))}
      </section>

      <section className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Education</h2>
          <button
            onClick={() => addListItem('education')}
            className="flex items-center text-blue-600 hover:text-blue-700"
          >
            <Plus className="w-4 h-4 mr-1" /> Add Education
          </button>
        </div>
        {cvData.education.map((edu, index) => (
          <div key={index} className="mb-4 p-4 border rounded relative">
            <button
              onClick={() => removeListItem('education', index)}
              className="absolute top-2 right-2 text-red-500 hover:text-red-700"
            >
              <Trash2 className="w-4 h-4" />
            </button>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="School/University"
                className="w-full p-2 border rounded"
                value={edu.school}
                onChange={(e) => {
                  const newEdu = [...cvData.education];
                  newEdu[index].school = e.target.value;
                  setCvData({ ...cvData, education: newEdu });
                }}
              />
              <input
                type="text"
                placeholder="Degree"
                className="w-full p-2 border rounded"
                value={edu.degree}
                onChange={(e) => {
                  const newEdu = [...cvData.education];
                  newEdu[index].degree = e.target.value;
                  setCvData({ ...cvData, education: newEdu });
                }}
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Duration"
                  className="p-2 border rounded"
                  value={edu.duration}
                  onChange={(e) => {
                    const newEdu = [...cvData.education];
                    newEdu[index].duration = e.target.value;
                    setCvData({ ...cvData, education: newEdu });
                  }}
                />
                <input
                  type="text"
                  placeholder="GPA (optional)"
                  className="p-2 border rounded"
                  value={edu.gpa}
                  onChange={(e) => {
                    const newEdu = [...cvData.education];
                    newEdu[index].gpa = e.target.value;
                    setCvData({ ...cvData, education: newEdu });
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </section>

      <LanguageSection
        languages={cvData.languages}
        onChange={(languages) => setCvData({ ...cvData, languages })}
      />

      <section className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Skills</h2>
          <button
            onClick={() => addListItem('skills')}
            className="flex items-center text-blue-600 hover:text-blue-700"
          >
            <Plus className="w-4 h-4 mr-1" /> Add Skill
          </button>
        </div>
        {cvData.skills.map((skill, index) => (
          <div key={index} className="mb-2 flex items-center">
            <input
              type="text"
              placeholder="Skill"
              className="flex-1 p-2 border rounded"
              value={skill}
              onChange={(e) => {
                const newSkills = [...cvData.skills];
                newSkills[index] = e.target.value;
                setCvData({ ...cvData, skills: newSkills });
              }}
            />
            <button
              onClick={() => removeListItem('skills', index)}
              className="ml-2 text-red-500 hover:text-red-700"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </section>

      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Certifications</h2>
          <button
            onClick={() => addListItem('certifications')}
            className="flex items-center text-blue-600 hover:text-blue-700"
          >
            <Plus className="w-4 h-4 mr-1" /> Add Certification
          </button>
        </div>
        {cvData.certifications.map((cert, index) => (
          <div key={index} className="mb-2 flex items-center">
            <input
              type="text"
              placeholder="Certification"
              className="flex-1 p-2 border rounded"
              value={cert}
              onChange={(e) => {
                const newCerts = [...cvData.certifications];
                newCerts[index] = e.target.value;
                setCvData({ ...cvData, certifications: newCerts });
              }}
            />
            <button
              onClick={() => removeListItem('certifications', index)}
              className="ml-2 text-red-500 hover:text-red-700"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default CVForm;