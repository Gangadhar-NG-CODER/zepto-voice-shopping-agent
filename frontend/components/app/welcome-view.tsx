'use client';

import { Button } from '@/components/livekit/button';
import { Microphone, ChartBar, Receipt, Lightning } from '@phosphor-icons/react';

function ZeptoLogo() {
  return (
    <div className="flex items-center gap-3 mb-8">
      <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg">
        <svg
          width="32"
          height="32"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 16L16 48H48L52 16H12Z"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="rgba(255,255,255,0.3)"
          />
          <path
            d="M22 16V12C22 9.79086 23.7909 8 26 8H38C40.2091 8 42 9.79086 42 12V16"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="24" cy="54" r="2.5" fill="white" />
          <circle cx="44" cy="54" r="2.5" fill="white" />
        </svg>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-white">Zepto</h2>
        <p className="text-sm text-gray-400">Voice Shopping</p>
      </div>
    </div>
  );
}

interface WelcomeViewProps {
  startButtonText: string;
  onStartCall: () => void;
}

export const WelcomeView = ({
  startButtonText,
  onStartCall,
  ref,
}: React.ComponentProps<'div'> & WelcomeViewProps) => {
  return (
    <div ref={ref} className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Top Right Badge */}
      <div className="absolute top-6 right-6 text-xs text-gray-400 font-mono">
        BUILT WITH LIVEKIT AGENTS
      </div>

      <div className="flex min-h-screen">
        {/* Left Section */}
        <div className="flex-1 flex flex-col justify-center px-12 lg:px-20">
          <ZeptoLogo />

          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Groceries in
            <br />
            <span className="text-amber-400">10 minutes</span>
          </h1>

          <p className="text-lg text-gray-300 mb-8 max-w-lg">
            Order groceries, snacks & fresh produce using just your voice. No typing, no clicking.
          </p>

          {/* Stats */}
          <div className="flex gap-12 mb-10">
            <div>
              <div className="text-3xl font-bold text-white">10 min</div>
              <div className="text-sm text-gray-400">Delivery</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">25,000+</div>
              <div className="text-sm text-gray-400">Products</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-sm text-gray-400">Available</div>
            </div>
          </div>

          {/* CTA Button */}
          <Button
            variant="primary"
            size="lg"
            onClick={onStartCall}
            className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-900 px-8 py-4 text-lg font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 w-fit"
          >
            ⚡ {startButtonText}
          </Button>

          {/* Features */}
          <div className="flex gap-4 mt-8 text-sm text-gray-400">
            <span className="flex items-center gap-1">
              <Microphone size={16} weight="fill" /> Speak naturally
            </span>
            <span className="flex items-center gap-1">
              <ChartBar size={16} weight="fill" /> Smart cart
            </span>
            <span className="flex items-center gap-1">
              <Receipt size={16} weight="fill" /> Recipe mode
            </span>
          </div>
        </div>

        {/* Right Section - Feature Cards */}
        <div className="flex-1 flex flex-col justify-center px-12 lg:px-20 space-y-6">
          {/* Smart Cart Card */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-amber-500/50 transition-all">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center">
                <ChartBar size={24} weight="duotone" className="text-amber-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-2">Smart Cart</h3>
                <p className="text-sm text-gray-400">
                  Add, remove, or modify items with voice
                </p>
              </div>
            </div>
          </div>

          {/* Recipe Mode Card */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-amber-500/50 transition-all">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center">
                <Receipt size={24} weight="duotone" className="text-orange-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-2">Recipe Mode</h3>
                <p className="text-sm text-gray-400">
                  Say "pasta" and we add all ingredients
                </p>
              </div>
            </div>
          </div>

          {/* 10-Min Delivery Card */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-amber-500/50 transition-all">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
                <Lightning size={24} weight="duotone" className="text-green-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-2">10-Min Delivery</h3>
                <p className="text-sm text-gray-400">
                  Ultra-fast delivery guaranteed
                </p>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center gap-8 pt-6">
            <div className="flex items-center gap-2 text-sm">
              <span className="text-green-400">✓</span>
              <span className="text-gray-300">Secure</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-yellow-400">⭐</span>
              <span className="text-gray-300">4.8★</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-blue-400">👥</span>
              <span className="text-gray-300">10M+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
