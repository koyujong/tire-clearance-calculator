"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Info, AlertTriangle, Link2, Copy, Check, TrendingUp } from "lucide-react";
import { Language } from "@/lib/translations";
import { extraTranslations } from "@/lib/extraTranslations";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface TireSpec {
  width: number;
  aspectRatio: number;
  wheel: number;
}

interface CalcResult {
  sidewall: {
    mm: number;
    inch: number;
  };
  diameter: {
    mm: number;
    inch: number;
  };
  circumference: {
    mm: number;
    inch: number;
  };
  revsPerKm: number;
  revsPerMile: number;
}

const parseTire = (spec: string): TireSpec | null => {
  const match = spec.match(/(\d{3})\/(\d{2})R(\d{2})/i);
  if (match) {
    return {
      width: parseInt(match[1]),
      aspectRatio: parseInt(match[2]),
      wheel: parseInt(match[3])
    };
  }
  return null;
};

const formatTire = (spec: TireSpec): string => {
  return `${spec.width}/${spec.aspectRatio}R${spec.wheel}`;
};

const calculateTire = (spec: TireSpec): CalcResult => {
  // src/app/page.tsx
  const sidewallMm = spec.width * (spec.aspectRatio / 100);
  const sidewallInch = sidewallMm / 25.4;
  
  const wheelMm = spec.wheel * 25.4;
  
  const diameterMm = (sidewallMm * 2) + wheelMm;
  const diameterInch = diameterMm / 25.4;
  
  const circumferenceMm = diameterMm * Math.PI;
  const circumferenceInch = diameterInch * Math.PI;
  
  const revsPerKm = 1000000 / circumferenceMm;
  const revsPerMile = 63360 / circumferenceInch;
  
  return {
    sidewall: { mm: sidewallMm, inch: sidewallInch },
    diameter: { mm: diameterMm, inch: diameterInch },
    circumference: { mm: circumferenceMm, inch: circumferenceInch },
    revsPerKm,
    revsPerMile
  };
};

export default function Home() {
  const [lang, setLang] = useState<Language>("en");
  const [copied, setCopied] = useState(false);
  
  const [factoryTire, setFactoryTire] = useState<TireSpec>({ width: 235, aspectRatio: 75, wheel: 15 });
  const [newTire, setNewTire] = useState<TireSpec>({ width: 31, aspectRatio: 10.5, wheel: 15 }); // Wait, typically standard metric is used.
  // Actually, let's use standard metric for both defaults
  const [metricFactory, setMetricFactory] = useState<TireSpec>({ width: 265, aspectRatio: 75, wheel: 16 });
  const [metricNew, setMetricNew] = useState<TireSpec>({ width: 285, aspectRatio: 75, wheel: 16 });
  
  const [calc1, setCalc1] = useState<CalcResult>(calculateTire(metricFactory));
  const [calc2, setCalc2] = useState<CalcResult>(calculateTire(metricNew));

  /* 
  useEffect(() => {
    // Detect browser language
    if (typeof navigator !== "undefined") {
      const browserLang = navigator.language;
      if (browserLang.toLowerCase().includes("ko")) setLang("ko");
      else if (browserLang.toLowerCase().includes("es")) setLang("es");
      else setLang("en");
    }
  }, []);
  */

  useEffect(() => {
    setCalc1(calculateTire(metricFactory));
    setCalc2(calculateTire(metricNew));
  }, [metricFactory, metricNew]);

  const t = extraTranslations[lang];

  const handleCopyUrl = async () => {
    const url = `${window.location.origin}?f=${formatTire(metricFactory)}&n=${formatTire(metricNew)}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const copyToClipboard = () => {
    const diff = ((calc2.diameter.inch / calc1.diameter.inch) - 1) * 100;
    const text = lang === "ko" 
      ? `[타이어 튜닝 결과]\n순정: ${formatTire(metricFactory)} (외경 ${calc1.diameter.inch.toFixed(1)}인치)\n변경: ${formatTire(metricNew)} (외경 ${calc2.diameter.inch.toFixed(1)}인치)\n차고 변화: +오차 ${(diff/2).toFixed(1)}\n속도계 오차: ${diff.toFixed(1)}%\n계산기 링크: ${window.location.href}`
      : `[Tire Upgrade]\nFactory: ${formatTire(metricFactory)} (${calc1.diameter.inch.toFixed(1)} inch)\nNew: ${formatTire(metricNew)} (${calc2.diameter.inch.toFixed(1)} inch)\nRide Height: +${((calc2.diameter.inch - calc1.diameter.inch)/2).toFixed(2)}"\nSpeedo Error: ${diff.toFixed(1)}%\nCalc Link: ${window.location.href}`;
    
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const diameterDiff = calc2.diameter.inch - calc1.diameter.inch;
  const speedoError = ((calc2.diameter.inch / calc1.diameter.inch) - 1) * 100;
  
  // Speed comparisons
  const speed60mph = 60 * (calc2.diameter.inch / calc1.diameter.inch);
  const speed100kmh = 100 * (calc2.diameter.inch / calc1.diameter.inch);

  // Labels based on lang
  const l = {
    title: lang === "ko" ? "타이어 튜닝 외경 계산기" : lang === "es" ? "Calculadora de Neumáticos" : "Lifted Truck Tire Clearance Calc",
    factory: lang === "ko" ? "순정 타이어" : lang === "es" ? "Neumático de fábrica" : "Factory Tire",
    newTire: lang === "ko" ? "변경 타이어" : lang === "es" ? "Nuevo Neumático" : "New Tire",
    width: lang === "ko" ? "단면폭" : lang === "es" ? "Ancho" : "Width",
    aspect: lang === "ko" ? "편평비" : lang === "es" ? "Perfil" : "Profile",
    wheel: lang === "ko" ? "휠 크기" : lang === "es" ? "Llanta" : "Wheel",
    compare: lang === "ko" ? "제원 비교" : lang === "es" ? "Comparación" : "Comparison",
    diameter: lang === "ko" ? "전체 외경" : lang === "es" ? "Diámetro" : "Overall Diameter",
    sidewall: lang === "ko" ? "사이드월" : lang === "es" ? "Perfil" : "Sidewall",
    circum: lang === "ko" ? "둘레" : lang === "es" ? "Circunferencia" : "Circumference",
    revsMile: lang === "ko" ? "마일당 회전수" : lang === "es" ? "Revs por Milla" : "Revs/Mile",
    revsKm: lang === "ko" ? "km당 회전수" : lang === "es" ? "Revs por Km" : "Revs/Km",
    diff: lang === "ko" ? "차이" : lang === "es" ? "Diferencia" : "Difference",
    clearance: lang === "ko" ? "최저지상고 변화" : lang === "es" ? "Cambio de Altura" : "Ground Clearance Change",
    speedo: lang === "ko" ? "속도계 정보" : lang === "es" ? "Velocímetro" : "Speedometer Info",
    actualSpeed: lang === "ko" ? "계기판 대비 실제 속도" : lang === "es" ? "Velocidad real" : "Actual speed vs Speedometer",
    whenReading: lang === "ko" ? "계기판 표시" : lang === "es" ? "Cuando marca" : "When reading",
    actualIs: lang === "ko" ? "실제 주행속도" : lang === "es" ? "La real es" : "Actual speed",
    warning3: lang === "ko" ? "외경 차이가 3%를 초과합니다. 브레이크 고장 위험 및 연비 저하가 발생할 수 있습니다." : lang === "es" ? "La diferencia supera el 3%. Riesgo de fallo de frenos." : "Diameter difference exceeds 3%. Risk of brake/ABS malfunction and poor MPG.",
    warningGood: lang === "ko" ? "외경 차이가 3% 이내로 안정적입니다." : lang === "es" ? "La diferencia está dentro del 3%." : "Diameter difference is within the safe 3% limit.",
    shareForum: lang === "ko" ? "포럼에 공유하기 (복사)" : lang === "es" ? "Copiar para Foro" : "Copy to Forum / Reddit",
    shopDeals: lang === "ko" ? "타이어 특가 확인하기" : lang === "es" ? "Ver Ofertas de Neumáticos" : "Shop Tire Deals"
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header lang={lang} setLang={setLang} title={l.title} />

      <main className="flex-grow w-full max-w-4xl mx-auto px-4 py-24 space-y-8">
        
        {/* AdSense Top Placeholder */}
        <div className="w-full bg-slate-100 rounded-lg p-4 text-center text-sm text-slate-400 border border-slate-200">
           [AdSense Slot Top]
        </div>

        {/* Input Region */}
        <div className="grid md:grid-cols-2 gap-6 relative">
          
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-slate-300"></div>
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2"><span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 text-sm">1</span> {l.factory}</h2>
            
            <div className="flex items-center gap-2 mb-2">
               <div className="w-24">
                  <label className="text-xs font-semibold text-slate-500 uppercase">{l.width}</label>
                  <input type="number" value={metricFactory.width} onChange={e => setMetricFactory({...metricFactory, width: parseInt(e.target.value) || 0})} className="w-full text-xl font-bold bg-slate-50 border border-slate-200 rounded p-2 focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
               </div>
               <span className="text-2xl font-light text-slate-300 pt-4">/</span>
               <div className="w-20">
                  <label className="text-xs font-semibold text-slate-500 uppercase">{l.aspect}</label>
                  <input type="number" value={metricFactory.aspectRatio} onChange={e => setMetricFactory({...metricFactory, aspectRatio: parseInt(e.target.value) || 0})} className="w-full text-xl font-bold bg-slate-50 border border-slate-200 rounded p-2 focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
               </div>
               <span className="text-2xl font-light text-slate-300 pt-4">R</span>
               <div className="w-20">
                  <label className="text-xs font-semibold text-slate-500 uppercase">{l.wheel}</label>
                  <input type="number" value={metricFactory.wheel} onChange={e => setMetricFactory({...metricFactory, wheel: parseInt(e.target.value) || 0})} className="w-full text-xl font-bold bg-slate-50 border border-slate-200 rounded p-2 focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
               </div>
            </div>
            <p className="text-sm text-slate-400 font-medium">{calc1.diameter.inch.toFixed(1)}" {l.diameter}</p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-blue-200 p-6 relative overflow-hidden ring-1 ring-blue-50">
             <div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2 text-blue-900"><span className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-sm">2</span> {l.newTire}</h2>
            
            <div className="flex items-center gap-2 mb-2">
               <div className="w-24">
                  <label className="text-xs font-semibold text-slate-500 uppercase">{l.width}</label>
                  <input type="number" value={metricNew.width} onChange={e => setMetricNew({...metricNew, width: parseInt(e.target.value) || 0})} className="w-full text-xl font-bold bg-blue-50 border border-blue-200 text-blue-900 rounded p-2 focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
               </div>
               <span className="text-2xl font-light text-slate-300 pt-4">/</span>
               <div className="w-20">
                  <label className="text-xs font-semibold text-slate-500 uppercase">{l.aspect}</label>
                  <input type="number" value={metricNew.aspectRatio} onChange={e => setMetricNew({...metricNew, aspectRatio: parseInt(e.target.value) || 0})} className="w-full text-xl font-bold bg-blue-50 border border-blue-200 text-blue-900 rounded p-2 focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
               </div>
               <span className="text-2xl font-light text-slate-300 pt-4">R</span>
               <div className="w-20">
                  <label className="text-xs font-semibold text-slate-500 uppercase">{l.wheel}</label>
                  <input type="number" value={metricNew.wheel} onChange={e => setMetricNew({...metricNew, wheel: parseInt(e.target.value) || 0})} className="w-full text-xl font-bold bg-blue-50 border border-blue-200 text-blue-900 rounded p-2 focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
               </div>
            </div>
            <p className="text-sm text-blue-500 font-medium">{calc2.diameter.inch.toFixed(1)}" {l.diameter}</p>
          </div>
          
          <div className="hidden md:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md items-center justify-center border border-slate-100 z-10">
             <ArrowRight className="text-slate-400 w-5 h-5" />
          </div>
        </div>

        {/* Warning Badge */}
        {Math.abs(speedoError) > 3 ? (
          <div className="bg-red-50 text-red-700 p-4 rounded-xl flex items-start gap-3 border border-red-100">
            <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5 text-red-500" />
            <div>
               <p className="font-semibold text-sm">{l.warning3}</p>
            </div>
          </div>
        ) : (
          <div className="bg-emerald-50 text-emerald-700 p-4 rounded-xl flex items-start gap-3 border border-emerald-100">
            <Check className="w-5 h-5 shrink-0 mt-0.5 text-emerald-500" />
            <div>
               <p className="font-semibold text-sm">{l.warningGood}</p>
            </div>
          </div>
        )}

        {/* Visualizer & Speedo */}
        <div className="grid md:grid-cols-2 gap-6">
           <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <h3 className="font-bold text-lg mb-6">{l.speedo}</h3>
              
              <div className="space-y-4">
                 <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <div>
                      <p className="text-sm text-slate-500 mb-1">{l.whenReading}</p>
                      <p className="text-xl font-bold text-slate-700">60 mph</p>
                    </div>
                    <ArrowRight className="text-slate-300" />
                    <div className="text-right">
                      <p className="text-sm text-slate-500 mb-1">{l.actualIs}</p>
                      <p className={`text-2xl font-black ${speed60mph > 60 ? 'text-red-500' : 'text-slate-800'}`}>{speed60mph.toFixed(1)} mph</p>
                    </div>
                 </div>

                 <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <div>
                      <p className="text-sm text-slate-500 mb-1">{l.whenReading}</p>
                      <p className="text-xl font-bold text-slate-700">100 km/h</p>
                    </div>
                    <ArrowRight className="text-slate-300" />
                    <div className="text-right">
                      <p className="text-sm text-slate-500 mb-1">{l.actualIs}</p>
                      <p className={`text-2xl font-black ${speed100kmh > 100 ? 'text-red-500' : 'text-slate-800'}`}>{speed100kmh.toFixed(1)} km/h</p>
                    </div>
                 </div>
                 
                 <div className="pt-2 text-center text-sm">
                    <span className="text-slate-500">Speedometer Discrepancy: </span>
                    <span className={`font-bold ${speedoError > 0 ? 'text-red-500' : 'text-blue-500'}`}>
                       {speedoError > 0 ? '+' : ''}{speedoError.toFixed(2)}%
                    </span>
                 </div>
              </div>
           </div>

           <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex flex-col items-center justify-center relative overflow-hidden">
              <h3 className="font-bold text-lg mb-auto w-full text-left">{l.clearance}</h3>
              
              <div className="relative w-48 h-48 my-8 flex items-center justify-center">
                 {/* Visual concentric circles */}
                 {(() => {
                    const r1 = 100;
                    const ratio = calc2.diameter.inch / calc1.diameter.inch;
                    const r2 = Math.min(100 * ratio, 140); // cap max size
                    const r1_scaled = r2 > 140 ? 140 / ratio : r1;
                    
                    return (
                       <>
                         <div className="absolute rounded-full border-4 border-slate-200 border-dashed" style={{width: `${r1_scaled*2}%`, height: `${r1_scaled*2}%`, opacity: 0.8}}></div>
                         <div className="absolute rounded-full border-[6px] border-blue-500" style={{width: `${r2*2}%`, height: `${r2*2}%`, opacity: 0.9}}></div>
                         <div className="absolute text-center bg-white/90 backdrop-blur px-3 py-1 rounded-full border border-blue-100 shadow-sm text-sm font-bold text-blue-800 z-10">
                            {diameterDiff > 0 ? '+' : ''}{(diameterDiff/2).toFixed(2)}"
                         </div>
                       </>
                    )
                 })()}
              </div>
              
              <p className="text-sm text-slate-500 text-center px-4">
                 {l.clearance} = {(diameterDiff/2).toFixed(2)} inches
              </p>
           </div>
        </div>

        {/* Detailed Comparison Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
           <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                 <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold uppercase text-xs">
                    <tr>
                       <th className="p-4 rounded-tl-2xl">{l.compare}</th>
                       <th className="p-4">{l.factory}</th>
                       <th className="p-4">{l.newTire}</th>
                       <th className="p-4 rounded-tr-2xl text-right">{l.diff}</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-slate-100">
                    <tr className="hover:bg-slate-50 transition-colors">
                       <td className="p-4 font-medium text-slate-800">{l.diameter}</td>
                       <td className="p-4 text-slate-600">{calc1.diameter.inch.toFixed(2)}" ({calc1.diameter.mm.toFixed(0)}mm)</td>
                       <td className="p-4 text-blue-600 font-medium">{calc2.diameter.inch.toFixed(2)}" ({calc2.diameter.mm.toFixed(0)}mm)</td>
                       <td className="p-4 text-right font-bold text-slate-800">{diameterDiff > 0 ? '+' : ''}{diameterDiff.toFixed(2)}"</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                       <td className="p-4 font-medium text-slate-800">{l.width}</td>
                       <td className="p-4 text-slate-600">{(metricFactory.width / 25.4).toFixed(2)}" ({metricFactory.width}mm)</td>
                       <td className="p-4 text-blue-600 font-medium">{(metricNew.width / 25.4).toFixed(2)}" ({metricNew.width}mm)</td>
                       <td className="p-4 text-right font-bold text-slate-800">{metricNew.width > metricFactory.width ? '+' : ''}{(metricNew.width - metricFactory.width)}mm</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                       <td className="p-4 font-medium text-slate-800">{l.sidewall}</td>
                       <td className="p-4 text-slate-600">{calc1.sidewall.inch.toFixed(2)}" ({calc1.sidewall.mm.toFixed(0)}mm)</td>
                       <td className="p-4 text-blue-600 font-medium">{calc2.sidewall.inch.toFixed(2)}" ({calc2.sidewall.mm.toFixed(0)}mm)</td>
                       <td className="p-4 text-right font-bold text-slate-800">{(calc2.sidewall.inch > calc1.sidewall.inch ? '+' : '')}{(calc2.sidewall.inch - calc1.sidewall.inch).toFixed(2)}"</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                       <td className="p-4 font-medium text-slate-800">{l.circum}</td>
                       <td className="p-4 text-slate-600">{calc1.circumference.inch.toFixed(1)}"</td>
                       <td className="p-4 text-blue-600 font-medium">{calc2.circumference.inch.toFixed(1)}"</td>
                       <td className="p-4 text-right font-bold text-slate-800">{(calc2.circumference.inch > calc1.circumference.inch ? '+' : '')}{(calc2.circumference.inch - calc1.circumference.inch).toFixed(1)}"</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                       <td className="p-4 font-medium text-slate-800">{l.revsMile}</td>
                       <td className="p-4 text-slate-600">{calc1.revsPerMile.toFixed(0)}</td>
                       <td className="p-4 text-blue-600 font-medium">{calc2.revsPerMile.toFixed(0)}</td>
                       <td className="p-4 text-right font-bold text-slate-800">{(calc2.revsPerMile - calc1.revsPerMile).toFixed(0)}</td>
                    </tr>
                 </tbody>
              </table>
           </div>
        </div>

        {/* Affiliate Placeholder & Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mt-8 pt-8 border-t border-slate-200">
           <button 
             onClick={copyToClipboard}
             className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-900 text-white font-semibold py-3 px-6 rounded-xl w-full sm:w-auto transition-all shadow-sm"
           >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {l.shareForum}
           </button>
           
           <a 
             href={`https://www.ebay.com/sch/i.html?_nkw=${metricNew.width}+${metricNew.aspectRatio}+R${metricNew.wheel}+tires`}
             target="_blank" 
             rel="noreferrer"
             className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-xl w-full sm:w-auto transition-all shadow-sm"
           >
              {l.shopDeals}: {metricNew.width}/{metricNew.aspectRatio}R{metricNew.wheel}
           </a>
        </div>

        {/* AdSense Bottom Placeholder */}
        <div className="w-full bg-slate-100 rounded-lg p-4 mt-8 text-center text-sm text-slate-400 border border-slate-200">
           [AdSense Slot Bottom]
        </div>

      </main>
      
      {/* Basic Footer Link Array */}
      <Footer lang={lang} />
    </div>
  );
}
