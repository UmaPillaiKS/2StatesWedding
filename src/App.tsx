import { useState, useEffect } from 'react';

export default function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set your exact wedding date and time here
    const weddingDate = new Date('2026-12-14T12:00:00').getTime(); 

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    // The main background (Soft Ivory/Cream)
    <div className="min-h-screen bg-[#FDFBF7] flex flex-col items-center justify-center p-4 sm:p-8 font-sans selection:bg-rose-100">
      
      {/* The Outer Card */}
      <div className="w-full max-w-3xl bg-white p-2 rounded-sm shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
        
        {/* The Inner Border (Creates the traditional invitation feel) */}
        <div className="border-[1.5px] border-amber-600/30 p-8 sm:p-14 md:p-20 text-center relative">
          
          {/* Subtle top decoration */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2 text-amber-600/40 text-xl">
            ❖
          </div>

          <p className="text-sm md:text-base uppercase tracking-[0.3em] text-amber-700 mt-6 mb-6">
            Together with their families
          </p>

          <h1 className="text-5xl md:text-7xl font-serif text-rose-900 mb-6 tracking-wide">
            Uma <span className="text-3xl md:text-5xl text-amber-500 mx-2">&</span> Vivek
          </h1>

          <p className="text-lg md:text-xl font-light tracking-widest text-slate-500 mb-12">
            Are getting married
          </p>
          
          {/* Enhanced Countdown Grid */}
          <div className="flex justify-center gap-6 md:gap-12 my-14">
            <CountdownBlock value={timeLeft.days} label="Days" />
            <CountdownBlock value={timeLeft.hours} label="Hours" />
            <CountdownBlock value={timeLeft.minutes} label="Mins" />
            <CountdownBlock value={timeLeft.seconds} label="Secs" />
          </div>

          {/* Elegant Divider */}
          <div className="flex items-center justify-center gap-4 my-12 opacity-60">
            <div className="h-px w-16 bg-amber-600/50"></div>
            <div className="text-amber-600 text-sm">✧</div>
            <div className="h-px w-16 bg-amber-600/50"></div>
          </div>

          {/* Details Section */}
          <div className="space-y-4 mb-14">
            <h2 className="text-2xl md:text-3xl font-serif text-rose-900">
              The Muhurtham
            </h2>
            <p className="text-slate-600 font-light tracking-wide mt-2">
              December 14, 2026 • 12:00 PM
            </p>
            <p className="text-slate-800 font-medium mt-4 text-lg">Pon Mahal</p>
            <p className="text-slate-500 font-light">
              Near Marthandam, Tamil Nadu
            </p>
          </div>

          {/* Blessings Note */}
          <div className="bg-stone-50 p-6 rounded-md border border-stone-100 inline-block">
            <p className="text-sm md:text-base italic text-slate-500 font-light leading-relaxed">
              Your presence and blessings are the greatest gifts we could ask for. <br className="hidden md:block" />
              We kindly request no boxed gifts.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

// Reusable micro-component for the countdown numbers
function CountdownBlock({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center w-12 md:w-16">
      <span className="text-3xl md:text-5xl font-serif text-rose-900 mb-2">
        {String(value).padStart(2, '0')}
      </span>
      <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-amber-700 font-medium">
        {label}
      </span>
    </div>
  );
}