
import React from 'react';
import { LetterData } from '../types';

interface SidebarProps {
  data: LetterData;
  updateField: (field: keyof LetterData, value: string) => void;
  onGenerate: () => void;
  onPrint: () => void;
  loading: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ data, updateField, onGenerate, onPrint, loading }) => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Offer Letter Builder</h1>
        <p className="text-sm text-gray-500 mt-1">Fill in the details to customize the offer letter.</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Candidate Name</label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            value={data.candidateName}
            onChange={(e) => updateField('candidateName', e.target.value)}
            placeholder="e.g. Zainab Saqib"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Branch / Department</label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            value={data.branch}
            onChange={(e) => updateField('branch', e.target.value)}
            placeholder="e.g. Computer Science"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">College Name</label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            value={data.collegeName}
            onChange={(e) => updateField('collegeName', e.target.value)}
            placeholder="e.g. MYSORE COLLEGE OF ENGINEERING"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Internship Role</label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            value={data.internshipName}
            onChange={(e) => updateField('internshipName', e.target.value)}
            placeholder="e.g. Data Analytics and AI"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Location/Place</label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            value={data.place}
            onChange={(e) => updateField('place', e.target.value)}
          />
        </div>
      </div>

      <div className="pt-4 space-y-3">
        <button
          onClick={onGenerate}
          disabled={loading}
          className="w-full flex items-center justify-center rounded-md bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow hover:bg-blue-700 focus:outline-none disabled:opacity-50 transition-colors"
        >
          {loading ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Optimizing Role...
            </span>
          ) : (
            "Refine Content with AI"
          )}
        </button>
        
        <button
          onClick={onPrint}
          className="w-full rounded-md bg-white border border-gray-300 px-4 py-3 text-sm font-semibold text-gray-700 shadow hover:bg-gray-50 focus:outline-none transition-colors"
        >
          Download PDF / Print
        </button>
      </div>

      <div className="mt-auto p-4 bg-blue-50 rounded-lg border border-blue-100">
        <p className="text-xs text-blue-700 italic">
          Tip: Enter a specific "Internship Role" and click "Refine Content with AI" to generate customized professional objectives.
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
