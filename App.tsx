
import React, { useState } from 'react';
import { LetterData } from './types';
import { generateLetterContent } from './services/geminiService';
import Sidebar from './components/Sidebar';
import DocumentPreview from './components/DocumentPreview';

const App: React.FC = () => {
  const [data, setData] = useState<LetterData>({
    candidateName: 'Zainab Saqib',
    branch: 'Computer Science & Engineering',
    collegeName: 'MYSORE COLLEGE OF ENGINEERING AND MANAGEMENT, MYSURU',
    internshipName: 'Data Analytics and AI',
    date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }),
    place: 'Bangalore - 560086',
    functions: [
      "Assist in real-time data analytics projects.",
      "Work under the guidance of industry experts.",
      "Learn and apply analytical, statistical, and machine learning concepts to practical business problems.",
      "Participate in team discussions and training sessions."
    ],
    responsibilities: [
      "Assisting in data analysis, research, and development tasks.",
      "Collaborating on data cleaning, modelling, analysis, and implementation of solutions.",
      "Coordinating with teams for seamless execution of analytical and operational activities."
    ]
  });

  const [loading, setLoading] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const handleUpdateField = (field: keyof LetterData, value: string) => {
    setData(prev => ({ ...prev, [field]: value }));
  };

  const handleGenerateAI = async () => {
    setLoading(true);
    try {
      const result = await generateLetterContent(data.internshipName);
      setData(prev => ({
        ...prev,
        functions: result.functions,
        responsibilities: result.responsibilities
      }));
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handlePrint = async () => {
    const element = document.getElementById('capture-root');
    if (!element) return;

    setDownloading(true);
    document.body.classList.add('capturing');
    
    const scrollContainer = element.closest('.overflow-y-auto');
    if (scrollContainer) scrollContainer.scrollTop = 0;
    
    await new Promise(resolve => setTimeout(resolve, 500));

    const opt = {
      margin: 0,
      filename: `Offer_Letter_${data.candidateName.replace(/\s+/g, '_')}.pdf`,
      image: { type: 'jpeg', quality: 1.0 },
      html2canvas: { 
        scale: 2, 
        useCORS: true, 
        letterRendering: true,
        scrollY: 0,
        scrollX: 0,
        backgroundColor: '#ffffff',
        logging: false
      },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      pagebreak: { mode: 'css', after: '.page-break' }
    };

    try {
      // @ts-ignore
      await html2pdf().from(element).set(opt).save();
    } catch (error) {
      console.error("PDF Generation failed:", error);
    } finally {
      document.body.classList.remove('capturing');
      setDownloading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      <div className="w-full md:w-96 bg-white border-r border-gray-200 p-6 no-print overflow-y-auto max-h-screen shadow-xl z-50">
        <Sidebar 
          data={data} 
          updateField={handleUpdateField} 
          onGenerate={handleGenerateAI}
          onPrint={handlePrint}
          loading={loading || downloading}
        />
      </div>

      <div className="flex-1 p-4 md:p-10 overflow-y-auto flex justify-center bg-gray-200 custom-scrollbar">
        <div className="w-full max-w-[850px]">
          <DocumentPreview data={data} />
        </div>
      </div>
    </div>
  );
};

export default App;
