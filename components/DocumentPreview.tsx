
import React from 'react';
import { LetterData } from '../types';

interface DocumentPreviewProps {
  data: LetterData;
}

const LogoHeader = () => (
  <div className="absolute top-0 left-0 w-full z-10 select-none overflow-hidden">
    <img 
      src="https://i.ibb.co/8DLMGLnN/image.png" 
      alt="header" 
      className="w-full h-auto object-contain"
      style={{ border: '0' }}
    />
  </div>
);

const PageFooter = () => (
  <div className="absolute bottom-0 left-0 w-full z-10 bg-white overflow-hidden">
    <img 
      src="https://i.ibb.co/TBSCv8H0/image.png" 
      alt="footer" 
      className="w-full h-auto object-contain"
      style={{ border: '0' }}
    />
  </div>
);

const DocumentPreview: React.FC<DocumentPreviewProps> = ({ data }) => {
  return (
    <div id="capture-root" className="flex flex-col items-center bg-transparent">
      
      {/* PAGE 1 */}
      <div className="a4-page relative !pt-0 !pb-0" id="page-1">
        <LogoHeader />
        
        <div className="flex-1 text-[14px] leading-[1.6] text-gray-800 z-20 font-sans px-[12mm] pt-[52mm] pb-[45mm] flex flex-col justify-start">
          <div className="mb-6 flex justify-between items-start">
            <div>
              <p className="font-semibold">Place: <span className="font-normal">{data.place}</span></p>
             
            </div>
          </div>

          <div className="mb-6 space-y-0.5">
            <p>To,</p>
            <p className="font-bold text-[15px]">{data.candidateName}</p>
            <p>Branch: <span className="font-bold uppercase text-gray-700">{data.branch}</span></p>
            <p>College: <span className="font-bold uppercase text-gray-700">{data.collegeName}</span></p>
          </div>

          <div className="mb-6">
            <p className="font-bold text-[#003893] border-b border-gray-200 pb-1">Subject: Internship Offer at Incanto Dynamics</p>
          </div>

          <p className="mb-4 italic">Dear <span className="font-bold">{data.candidateName},</span></p>

          <p className="mb-4 text-justify">
            We are pleased to offer you a <span className="font-bold text-[#003893]">{data.internshipName}</span> opportunity with <span className="font-bold text-[#003893]">Incanto Dynamics</span>. 
            During the period of internship, you will be engaged as a <span className="font-bold">{data.internshipName}</span> within our organization, 
            gaining hands-on experience and exposure to key functions in:
          </p>

          <ul className="list-none pl-6 space-y-1.5 mb-5 text-sm">
            {data.functions.map((func, idx) => (
              <li key={idx} className="relative flex items-start">
                <span className="mr-3 text-blue-600 font-bold">•</span>
                <span>{func}</span>
              </li>
            ))}
          </ul>

          <p className="mb-4 text-justify">
            As an intern, you will be working closely with our experienced professionals, contributing to impactful 
            data-driven projects, and acquiring valuable insights that will enhance your technical and 
            professional development. Your key responsibilities will include:
          </p>

          <ul className="list-none pl-6 space-y-1.5 mb-6 text-sm">
            {data.responsibilities.map((resp, idx) => (
              <li key={idx} className="relative flex items-start">
                <span className="mr-3 text-blue-600 font-bold">•</span>
                <span>{resp}</span>
              </li>
            ))}
          </ul>

          <p className="text-justify">
            If you have any queries, please feel free to reach out. We look forward to welcoming you to our team 
            and working together towards a successful and enriching experience at <span className="font-bold text-[#003893]">Incanto Dynamics</span>.
          </p>
        </div>
        <PageFooter />
      </div>

      {/* Manual Break for PDF Engine */}
      <div className="page-break"></div>

      {/* PAGE 2 */}
      <div className="a4-page relative !pt-0 !pb-0" id="page-2">
        <LogoHeader />

        <div className="flex-1 text-[14px] leading-[1.6] text-gray-800 z-20 pt-[52mm] pb-[45mm] font-sans px-[12mm] flex flex-col">
          
          <div className="mb-8">
            <p className="mb-4">Yours sincerely,</p>
            
            <div className="space-y-0 text-gray-800">
              <p className="font-bold text-[16px] text-[#003893]">HR Team</p>
              <p className="font-bold text-gray-700">Incanto Dynamics Pvt Ltd</p>
              <p className="text-[14px] text-blue-600">info@incantodynamics.com</p>
            </div>
          </div>

          <div className="mb-6">
            <p className="text-[15px] font-medium italic text-gray-600">Congratulations once again, and welcome to <span className="font-bold text-[#003893] not-italic">Incanto Dynamics</span>.</p>
          </div>

          {/* Acknowledgement Section */}
          <div className="border border-blue-100 rounded-xl p-8 bg-blue-50/10">
            <h3 className="font-bold underline uppercase text-[11px] mb-6 tracking-[0.25em] text-center text-blue-900 opacity-80">Acknowledgment and Acceptance</h3>
            
            <p className="mb-10 leading-relaxed text-center text-gray-700">
              I, <span className="font-bold border-b-2 border-gray-800 px-8 pb-1 inline-block min-w-[200px] text-gray-900">{data.candidateName}</span>, hereby acknowledge and accept the terms and conditions of this internship offer as outlined above.
            </p>
            
            <div className="flex justify-between items-end px-4">
              <div className="flex flex-col gap-1 w-[40%]">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Date of Acceptance</span>
                <div className="border-b border-gray-300 h-8"></div>
              </div>
              <div className="flex flex-col gap-1 w-[40%]">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Candidate Signature</span>
                <div className="border-b border-gray-300 h-8"></div>
              </div>
            </div>
          </div>
        </div>
        <PageFooter />
      </div>

    </div>
  );
};

export default DocumentPreview;
