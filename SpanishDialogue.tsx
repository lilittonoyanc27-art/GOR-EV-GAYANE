import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageCircle, 
  ChevronRight, 
  ChevronLeft, 
  RotateCcw,
  User,
  UserCircle2,
  Sparkles,
  ArrowLeft
} from 'lucide-react';

type Section = 'intro' | 'chat';

const DIALOGUE = [
  {
    speaker: 'Gor',
    spanish: '¡Hola Gayane! ¿Cómo estás?',
    armenian: 'Ողջույն Գայանե: Ինչպե՞ս ես:',
    audio: 'hola_gayane'
  },
  {
    speaker: 'Gayane',
    spanish: '¡Hola Gor! Estoy muy bien, ¿y tú?',
    armenian: 'Ողջույն Գոռ: Ես շատ լավ եմ, իսկ դո՞ւ:',
    audio: 'hola_gor'
  },
  {
    speaker: 'Gor',
    spanish: 'Yo también estoy bien. ¿Qué haces?',
    armenian: 'Ես նույնպես լավ եմ: Ի՞նչ ես անում:',
    audio: 'que_haces'
  },
  {
    speaker: 'Gayane',
    spanish: 'Estoy estudiando español. ¡Es muy divertido!',
    armenian: 'Իսպաներեն եմ սովորում: Այն շատ զվարճալի է:',
    audio: 'estudiando_espanol'
  },
  {
    speaker: 'Gor',
    spanish: '¡Qué bien! Yo quiero aprender contigo.',
    armenian: 'Ինչ լավ է: Ես ուզում եմ սովորել քեզ հետ:',
    audio: 'aprender_contigo'
  },
  {
    speaker: 'Gayane',
    spanish: '¡Claro! Vamos a practicar juntos.',
    armenian: 'Իհարկե: Արի միասին պրակտիկա անենք:',
    audio: 'practicar_juntos'
  },
  {
    speaker: 'Gor',
    spanish: '¡Excelente! ¡Hasta luego!',
    armenian: 'Գերազանց է: Առայժմ:',
    audio: 'hasta_luego'
  },
  {
    speaker: 'Gayane',
    spanish: '¡Adiós Gor!',
    armenian: 'Ցտեսություն Գոռ:',
    audio: 'adios_gor'
  }
];

export default function SpanishDialogue() {
  const [section, setSection] = useState<Section>('intro');
  const [step, setStep] = useState(0);

  const nextStep = () => {
    if (step < DIALOGUE.length - 1) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const reset = () => {
    setStep(0);
  };

  return (
    <div className="min-h-screen bg-indigo-50 font-sans selection:bg-indigo-200">
      {/* Header */}
      <header className="bg-white border-b-4 border-indigo-100 p-6 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-xl font-black text-slate-900 uppercase tracking-tight">Գոռ և Գայանե</h1>
            </div>
          </div>
          <div className="px-4 py-2 bg-indigo-100 rounded-full text-xs font-black text-indigo-600 uppercase tracking-widest">
            Իսպաներեն Զրույց
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-6 md:p-12">
        <AnimatePresence mode="wait">
          {section === 'intro' && (
            <motion.div 
              key="intro"
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
              className="text-center space-y-12"
            >
              <div className="space-y-6">
                <div className="flex justify-center gap-8">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center shadow-xl border-4 border-white">
                      <User className="w-12 h-12 text-white" />
                    </div>
                    <span className="text-2xl font-black text-slate-900">Գոռ</span>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-24 h-24 bg-pink-500 rounded-full flex items-center justify-center shadow-xl border-4 border-white">
                      <UserCircle2 className="w-12 h-12 text-white" />
                    </div>
                    <span className="text-2xl font-black text-slate-900">Գայանե</span>
                  </div>
                </div>
                <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tight">
                  Արի լսենք նրանց զրույցը
                </h2>
                <p className="text-slate-500 text-xl font-medium max-w-md mx-auto">
                  Գոռը և Գայանեն խոսում են իսպաներեն: Սեղմիր կոճակը՝ սկսելու համար:
                </p>
              </div>

              <button 
                onClick={() => setSection('chat')}
                className="px-12 py-6 bg-indigo-600 text-white rounded-[32px] font-black text-2xl shadow-xl shadow-indigo-600/30 hover:bg-indigo-700 transition-all active:scale-95 flex items-center gap-4 mx-auto"
              >
                ՍԿՍԵԼ ԶՐՈՒՅՑԸ
                <ChevronRight className="w-8 h-8" />
              </button>
            </motion.div>
          )}

          {section === 'chat' && (
            <motion.div 
              key="chat"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              {/* Chat Container */}
              <div className="bg-white rounded-[48px] p-8 md:p-12 border-4 border-indigo-100 shadow-2xl min-h-[400px] flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Sparkles className="w-32 h-32 text-indigo-600" />
                </div>

                <AnimatePresence mode="wait">
                  <motion.div 
                    key={step}
                    initial={{ opacity: 0, x: DIALOGUE[step].speaker === 'Gor' ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: DIALOGUE[step].speaker === 'Gor' ? 20 : -20 }}
                    className={`flex flex-col gap-6 ${DIALOGUE[step].speaker === 'Gor' ? 'items-start' : 'items-end'}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-md ${DIALOGUE[step].speaker === 'Gor' ? 'bg-blue-500' : 'bg-pink-500'}`}>
                        {DIALOGUE[step].speaker === 'Gor' ? <User className="text-white" /> : <UserCircle2 className="text-white" />}
                      </div>
                      <span className="text-xl font-black text-slate-900 uppercase tracking-widest">{DIALOGUE[step].speaker}</span>
                    </div>

                    <div className={`max-w-[80%] p-8 rounded-[32px] shadow-lg ${
                      DIALOGUE[step].speaker === 'Gor' 
                        ? 'bg-indigo-600 text-white rounded-tl-none' 
                        : 'bg-slate-100 text-slate-900 rounded-tr-none'
                    }`}>
                      <p className="text-3xl md:text-4xl font-black leading-tight mb-4">
                        {DIALOGUE[step].spanish}
                      </p>
                      <div className={`h-1 w-12 rounded-full mb-4 ${DIALOGUE[step].speaker === 'Gor' ? 'bg-white/30' : 'bg-slate-300'}`} />
                      <p className={`text-xl font-bold ${DIALOGUE[step].speaker === 'Gor' ? 'text-indigo-100' : 'text-slate-500'}`}>
                        {DIALOGUE[step].armenian}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-between gap-4">
                <button 
                  onClick={prevStep}
                  disabled={step === 0}
                  className="p-6 bg-white border-4 border-slate-100 rounded-[32px] text-slate-400 hover:text-indigo-600 hover:border-indigo-200 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>

                <div className="flex-1 flex justify-center gap-4">
                  {step === DIALOGUE.length - 1 ? (
                    <button 
                      onClick={reset}
                      className="px-12 py-6 bg-indigo-600 text-white rounded-[32px] font-black text-2xl shadow-xl hover:bg-indigo-700 transition-all active:scale-95 flex items-center gap-4"
                    >
                      ԿՐԿՆԵԼ
                      <RotateCcw className="w-8 h-8" />
                    </button>
                  ) : (
                    <button 
                      onClick={nextStep}
                      className="px-12 py-6 bg-indigo-600 text-white rounded-[32px] font-black text-2xl shadow-xl hover:bg-indigo-700 transition-all active:scale-95 flex items-center gap-4"
                    >
                      ՀԱՋՈՐԴԸ
                      <ChevronRight className="w-8 h-8" />
                    </button>
                  )}
                </div>

                <div className="hidden md:block px-6 py-2 bg-white rounded-full border-2 border-slate-100 text-xs font-black text-slate-400 uppercase tracking-widest">
                  Քայլ {step + 1} / {DIALOGUE.length}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
