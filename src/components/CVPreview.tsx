import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Download, Briefcase, Book, Award, User, Globe } from 'lucide-react';
import type { CVData } from '../types';

interface CVPreviewProps {
  cvData: CVData;
}

const CVPreview: React.FC<CVPreviewProps> = ({ cvData }) => {
  const handleDownload = () => {
    window.print();
  };

  const getTemplateStyles = () => {
    switch (cvData.template) {
      case 'classic':
        return 'max-w-4xl mx-auto bg-white p-8 shadow-lg';
      case 'minimal':
        return 'max-w-4xl mx-auto bg-white p-8 shadow-sm';
      default: // modern
        return 'bg-white p-8 rounded-lg shadow-lg';
    }
  };

  return (
    <div className={getTemplateStyles()}>
      <div className="print:shadow-none">
        <div className="flex justify-between items-start mb-8">
          <div className="flex items-center space-x-4">
            {cvData.personalInfo.photoUrl && (
              <img
                src={cvData.personalInfo.photoUrl}
                alt={cvData.personalInfo.fullName}
                className="w-24 h-24 rounded-full object-cover"
              />
            )}
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {cvData.personalInfo.fullName || 'Your Name'}
              </h1>
              <p className="text-xl text-blue-600 mt-1">
                {cvData.personalInfo.title || 'Professional Title'}
              </p>
            </div>
          </div>
          <button
            onClick={handleDownload}
            className="print:hidden bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700 transition-colors"
          >
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {cvData.personalInfo.email && (
            <div className="flex items-center text-gray-600">
              <Mail className="w-4 h-4 mr-2" />
              <span>{cvData.personalInfo.email}</span>
            </div>
          )}
          {cvData.personalInfo.phone && (
            <div className="flex items-center text-gray-600">
              <Phone className="w-4 h-4 mr-2" />
              <span>{cvData.personalInfo.phone}</span>
            </div>
          )}
          {cvData.personalInfo.location && (
            <div className="flex items-center text-gray-600">
              <MapPin className="w-4 h-4 mr-2" />
              <span>{cvData.personalInfo.location}</span>
            </div>
          )}
        </div>

        <div className="flex space-x-4 mb-8">
          {cvData.personalInfo.github && (
            <a
              href={cvData.personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 flex items-center"
            >
              <Github className="w-4 h-4 mr-1" />
              GitHub
            </a>
          )}
          {cvData.personalInfo.linkedin && (
            <a
              href={cvData.personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 flex items-center"
            >
              <Linkedin className="w-4 h-4 mr-1" />
              LinkedIn
            </a>
          )}
        </div>

        {cvData.summary && (
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <User className="w-5 h-5 mr-2 text-blue-600" />
              <h2 className="text-xl font-semibold text-gray-800">Professional Summary</h2>
            </div>
            <p className="text-gray-600 whitespace-pre-line">{cvData.summary}</p>
          </section>
        )}

        {cvData.experience.length > 0 && cvData.experience[0].company && (
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <Briefcase className="w-5 h-5 mr-2 text-blue-600" />
              <h2 className="text-xl font-semibold text-gray-800">Work Experience</h2>
            </div>
            {cvData.experience.map((exp, index) => (
              <div key={index} className="mb-4">
                <h3 className="font-semibold text-gray-800">{exp.position}</h3>
                <div className="text-blue-600">{exp.company}</div>
                <div className="text-gray-600 text-sm">{exp.duration}</div>
                <p className="text-gray-600 mt-2 whitespace-pre-line">{exp.description}</p>
              </div>
            ))}
          </section>
        )}

        {cvData.education.length > 0 && cvData.education[0].school && (
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <Book className="w-5 h-5 mr-2 text-blue-600" />
              <h2 className="text-xl font-semibold text-gray-800">Education</h2>
            </div>
            {cvData.education.map((edu, index) => (
              <div key={index} className="mb-4">
                <h3 className="font-semibold text-gray-800">{edu.degree}</h3>
                <div className="text-blue-600">{edu.school}</div>
                <div className="text-gray-600 text-sm">
                  {edu.duration}
                  {edu.gpa && ` • GPA: ${edu.gpa}`}
                </div>
              </div>
            ))}
          </section>
        )}

        {cvData.languages.length > 0 && cvData.languages[0].name && (
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <Globe className="w-5 h-5 mr-2 text-blue-600" />
              <h2 className="text-xl font-semibold text-gray-800">Languages</h2>
            </div>
            <div className="flex flex-wrap gap-4">
              {cvData.languages.map((language, index) => (
                <div
                  key={index}
                  className="bg-gray-50 px-4 py-2 rounded-lg"
                >
                  <span className="font-medium text-gray-700">{language.name}</span>
                  <span className="text-gray-500 text-sm ml-2">({language.level})</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {cvData.skills.length > 0 && cvData.skills[0] && (
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <Award className="w-5 h-5 mr-2 text-blue-600" />
              <h2 className="text-xl font-semibold text-gray-800">Skills</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {cvData.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        )}

        {cvData.certifications.length > 0 && cvData.certifications[0] && (
          <section>
            <div className="flex items-center mb-4">
              <Award className="w-5 h-5 mr-2 text-blue-600" />
              <h2 className="text- xl font-semibold text-gray-800">Certifications</h2>
            </div>
            <ul className="list-disc list-inside text-gray-600">
              {cvData.certifications.map((cert, index) => (
                <li key={index}>{cert}</li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
};

export default CVPreview;