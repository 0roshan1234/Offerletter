
import React from 'react';
import { LetterData } from '../types';

interface DocumentPreviewProps {
  data: LetterData;
}

const LogoHeader = () => (
  <div className="flex flex-col mb-6 relative z-10 select-none items-center w-full">
    {/* Large Watermark Arrow in Top Right */}
    <div className="absolute -top-10 -right-10 opacity-[0.07] pointer-events-none select-none z-0">
      <svg width="220" height="220" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 80 L20 40 L40 40 L40 20 L80 50 L40 80 L40 60 L20 60 Z" fill="#333" transform="rotate(-45 50 50)" />
      </svg>
    </div>

    <div className="flex flex-col items-center relative z-10">
      {/* OFFICIAL LOGO IMAGE */}
      <img 
        src="https://i.ibb.co/m54sSB9r/Digital-maven-logo.png" 
        alt="Digital maven logo" 
        className="w-[300px] h-auto object-contain"
        style={{ border: '0' }}
      />
    </div>
    
    <div className="h-[2px] w-full bg-gray-300 mt-6 opacity-60"></div>
  </div>
);

const PageFooter = () => (
  <div className="absolute bottom-0 left-0 w-full px-[20mm] pb-8 z-10 bg-white">
    <div className="h-[1.5px] w-full bg-gray-200 mb-4 overflow-hidden">
        <div className="h-full w-1/4 bg-orange-500"></div>
    </div>
    <div className="flex justify-between items-center text-[9px] text-gray-400 font-bold uppercase tracking-wider">
      <div className="flex gap-6">
        <span>+91 81470 26848 / 42848</span>
        <span>INFO@DIGITALMAVEN.CO.IN</span>
      </div>
      <div>
        <span>WWW.DIGITALMAVEN.CO.IN</span>
      </div>
    </div>
  </div>
);

const DocumentPreview: React.FC<DocumentPreviewProps> = ({ data }) => {
  return (
    <div id="capture-root" className="flex flex-col items-center bg-transparent">
      
      {/* PAGE 1 */}
      <div className="a4-page relative" id="page-1">
        <LogoHeader />
        
        <div className="flex-1 text-[14.5px] leading-[1.5] text-gray-800 z-10 font-sans px-2 pt-2">
          <div className="mb-6">
            <p>Place: <span className="font-medium">{data.place}</span></p>
          </div>

          <div className="mb-6 space-y-0.5">
            <p>To <span className="font-bold">{data.candidateName},</span></p>
            <p>Branch: <span className="font-bold uppercase">{data.branch}</span></p>
            <p>College: <span className="font-bold uppercase">{data.collegeName}</span></p>
          </div>

          <div className="mb-8">
            <p className="font-bold">Subject: Internship Offer at <span className="font-bold">Digital Maven (Unit of Incanto Dynamics Pvt Ltd).</span></p>
          </div>

          <p className="mb-4">Dear <span className="font-bold">{data.candidateName},</span></p>

          <p className="mb-4">
            We are pleased to offer you a <span className="font-bold">{data.internshipName}</span> opportunity with <span className="font-bold text-[#003893]">Digital Maven (Unit of Incanto Dynamics Pvt Ltd)</span>. 
            During the period of internship, you will be engaged as a <span className="font-bold">{data.internshipName}</span> within our organization, 
            gaining hands-on experience and exposure to key functions in:
          </p>

          <ul className="list-none pl-8 space-y-2 mb-6">
            {data.functions.map((func, idx) => (
              <li key={idx} className="relative flex items-start">
                <span className="mr-3 font-bold">•</span>
                <span>{func}</span>
              </li>
            ))}
          </ul>

          <p className="mb-4">
            As an intern, you will be working closely with our experienced professionals, contributing to impactful 
            data-driven projects, and acquiring valuable insights that will enhance your technical and 
            professional development. Your key responsibilities will include, but are not limited to:
          </p>

          <ul className="list-none pl-8 space-y-2 mb-4">
            {data.responsibilities.map((resp, idx) => (
              <li key={idx} className="relative flex items-start">
                <span className="mr-3 font-bold">•</span>
                <span>{resp}</span>
              </li>
            ))}
          </ul>
          
          <p className="mt-6 mb-8">throughout the internship.</p>

          <p>
            If you have any queries, please feel free to reach out. We look forward to welcoming you to our team 
            and working together towards a successful and enriching experience at <span className="font-bold">Digital Maven (Unit of Incanto Dynamics Pvt Ltd).</span>
          </p>
        </div>
        <PageFooter />
      </div>

      {/* Manual Break for PDF Engine */}
      <div className="page-break"></div>

      {/* PAGE 2 */}
      <div className="a4-page relative" id="page-2">
        <LogoHeader />

        <div className="flex-1 text-[14.5px] leading-[1.5] text-gray-800 z-10 pt-4 font-sans px-2">
          
          <p className="mb-8">Yours sincerely,</p>

          <div className="mb-10">
            <p className="font-bold text-[18px] text-[#003893]">Team Digital Maven</p>
            <p className="text-[14px] text-blue-600 font-medium">(Unit Of Incanto Dynamics)</p>
          </div>

          <div className="mb-14">
            <p className="text-[16px]">Congratulations once again, and welcome to <span className="font-bold text-[#003893]">Digital Maven!</span></p>
          </div>

          <div className="mt-auto border border-gray-200 rounded-lg p-10 bg-gray-50/20">
            <p className="font-bold underline uppercase text-[10px] mb-8 tracking-[0.25em] text-center text-gray-800">Acknowledgment and Acceptance</p>
            <p className="mb-14 leading-relaxed">
              I, <span className="font-bold border-b border-gray-900 px-6 inline-block min-w-[240px] text-center">{data.candidateName}</span>, acknowledge and accept the terms and conditions of this internship offer as stated above.
            </p>
            
            <div className="grid grid-cols-2 gap-24">
              <div className="flex flex-col gap-2">
                <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Date</span>
                <div className="border-b border-gray-300 h-8"></div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Signature</span>
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
