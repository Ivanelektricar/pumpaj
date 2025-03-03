import React from 'react';
import { ExternalLink } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="o-protestu" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">О Студентском Протесту</h2>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 md:p-8">
            <h3 className="text-2xl font-bold mb-4">Шта значи "Пумпај"?</h3>
            <p className="text-gray-700 mb-6">
              "Пумпај" је постао симбол студентског покрета у Србији. Овај израз представља позив на акцију, 
              на подизање енергије и интензитета протеста. Када студенти узвикују "Пумпај!", они позивају на 
              јачање гласа народа и повећање притиска на власт да испуни њихове захтеве.
            </p>
            
            <h3 className="text-2xl font-bold mb-4">Зашто протестујемо?</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>За боље услове студирања и смештаја</li>
              <li>Против корупције у образовном систему</li>
              <li>За веће студентске стипендије</li>
              <li>За транспарентност у раду универзитета</li>
              <li>За квалитетније образовање и боље шансе за запослење</li>
            </ul>
            
            <h3 className="text-2xl font-bold mb-4">Хронологија протеста</h3>
            <div className="space-y-4 mb-6">
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-bold">xx.xx.xxxx.</h4>
                <p className="text-gray-700">Почетак протеста на Филозофском факултету у Београду</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-bold">xx.xx.xxxx.</h4>
                <p className="text-gray-700">Протест се шири на Нови Сад и Ниш</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-bold">xx.xx.xxxx.</h4>
                <p className="text-gray-700">Велики скуп испред Владе Србије</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-bold">xx.xx.xxxx.</h4>
                <p className="text-gray-700">Протести се шире на све веће градове у Србији</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-bold">Данас</h4>
                <p className="text-gray-700">Протест се наставља - Пумпај!</p>
              </div>
            </div>
            
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <h3 className="text-xl font-bold mb-2 text-red-700">Како се укључити?</h3>
              <p className="text-gray-700 mb-4">
                Придружи се протесту у твом граду! Прати наше друштвене мреже за најновије информације о 
                времену и месту окупљања.
              </p>
              <div className="flex flex-wrap gap-3">
                <a 
                  href="#" 
                  className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
                >
                  Instagram <ExternalLink size={16} className="ml-1" />
                </a>
                <a 
                  href="#" 
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                >
                  Facebook <ExternalLink size={16} className="ml-1" />
                </a>
                <a 
                  href="#" 
                  className="inline-flex items-center px-4 py-2 bg-sky-400 text-white rounded-full hover:bg-sky-500 transition-colors"
                >
                  Twitter <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;