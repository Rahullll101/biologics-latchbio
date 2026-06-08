import { useState } from 'react';
import { Sliders, Info, Activity, RefreshCw } from 'lucide-react';

const SCREENSHOTS = {
  leadOptResults: '/screenshots/lead_optimization_results.png',
  admetComplete: '/screenshots/admet_prediction_complete.png',
  admetProgress: '/screenshots/admet_prediction_progress.png'
};

export default function LeadOptimizationPage() {
  const [initialSmiles, setInitialSmiles] = useState('Cc1cc(C)c2c(c1)C(=O)O');
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optStep, setOptStep] = useState(0);
  const [optimizedCompounds, setOptimizedCompounds] = useState([
    { id: 'GENQ-9214-m1', qed: 0.89, solubility: 'High', hergRisk: 'Low', score: 9.4 },
    { id: 'GENQ-9214-m2', qed: 0.82, solubility: 'Moderate', hergRisk: 'Low', score: 8.7 },
    { id: 'GENQ-9214-m3', qed: 0.74, solubility: 'High', hergRisk: 'Moderate', score: 7.9 }
  ]);
  const [constraintPotency, setConstraintPotency] = useState(true);
  const [constraintPermeability, setConstraintPermeability] = useState(true);
  const [constraintSolubility, setConstraintSolubility] = useState(true);
  const [constraintToxicity, setConstraintToxicity] = useState(false);

  const startOptimization = () => {
    if (isOptimizing) return;
    setIsOptimizing(true);
    setOptStep(1);

    setTimeout(() => {
      setOptStep(2);
      setTimeout(() => {
        setOptStep(3);
        setTimeout(() => {
          setIsOptimizing(false);
          setOptStep(0);
          setOptimizedCompounds([
            { id: 'GENQ-OPT-001', qed: 0.94, solubility: 'High', hergRisk: 'Low', score: 9.8 },
            { id: 'GENQ-OPT-002', qed: 0.88, solubility: 'High', hergRisk: 'Low', score: 9.1 },
            { id: 'GENQ-OPT-003', qed: 0.81, solubility: 'Moderate', hergRisk: 'Low', score: 8.4 },
            { id: 'GENQ-OPT-004', qed: 0.78, solubility: 'High', hergRisk: 'Moderate', score: 7.6 }
          ]);
        }, 1200);
      }, 1200);
    }, 1000);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-12 animate-fadeIn relative">
      <div className="absolute top-[20%] right-[10%] w-[350px] h-[350px] rounded-full glow-purple opacity-10 pointer-events-none"></div>

      {/* Page Title */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold">
          <Activity className="w-4.5 h-4.5" />
          GENQUANTAA DRY-LAB SUITE
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
          AI Lead Optimization & ADMET Prediction
        </h1>
        <p className="text-slate-400 max-w-3xl">
          Evolve candidate hit molecules using Reinforcement Learning. Predict ADMET profiles (absorption, distribution, metabolism, excretion, and toxicity) to ensure safety parameters before synthesis.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Controls */}
        <div className="space-y-6">
          
          {/* Optimization parameters */}
          <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-5">
            <h3 className="text-md font-bold text-white flex items-center gap-2">
              <Sliders className="w-5 h-5 text-brand-mint" />
              Scaffold Evolution settings
            </h3>
            
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Base Compound SMILES</label>
              <input
                type="text"
                value={initialSmiles}
                onChange={(e) => setInitialSmiles(e.target.value)}
                placeholder="SMILES string"
                className="w-full px-3 py-2.5 rounded-lg bg-slate-900 border border-white/10 text-xs font-mono text-slate-100 placeholder-slate-500 focus:outline-none focus:border-brand-mint"
              />
            </div>

            <div className="space-y-3 pt-2">
              <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Constraint Metrics</span>
              
              <label className="flex items-center gap-3 cursor-pointer group text-xs text-slate-300">
                <input
                  type="checkbox"
                  checked={constraintPotency}
                  onChange={(e) => setConstraintPotency(e.target.checked)}
                  className="rounded border-slate-700 bg-slate-900 text-brand-mint focus:ring-brand-mint w-4 h-4"
                />
                <span className="group-hover:text-white transition-colors">Target binding affinity (-log Kd)</span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer group text-xs text-slate-300">
                <input
                  type="checkbox"
                  checked={constraintPermeability}
                  onChange={(e) => setConstraintPermeability(e.target.checked)}
                  className="rounded border-slate-700 bg-slate-900 text-brand-mint focus:ring-brand-mint w-4 h-4"
                />
                <span className="group-hover:text-white transition-colors">Caco-2 cell membrane permeability</span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer group text-xs text-slate-300">
                <input
                  type="checkbox"
                  checked={constraintSolubility}
                  onChange={(e) => setConstraintSolubility(e.target.checked)}
                  className="rounded border-slate-700 bg-slate-900 text-brand-mint focus:ring-brand-mint w-4 h-4"
                />
                <span className="group-hover:text-white transition-colors">Aqueous solubility (LogS pH 7.4)</span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer group text-xs text-slate-300">
                <input
                  type="checkbox"
                  checked={constraintToxicity}
                  onChange={(e) => setConstraintToxicity(e.target.checked)}
                  className="rounded border-slate-700 bg-slate-900 text-brand-mint focus:ring-brand-mint w-4 h-4"
                />
                <span className="group-hover:text-white transition-colors">hERG cardiac blockage toxicity risk</span>
              </label>
            </div>

            <button
              onClick={startOptimization}
              disabled={isOptimizing}
              className="w-full py-3 px-4 rounded-lg bg-brand-mint text-brand-navy font-bold text-sm transition-transform hover:scale-102 active:scale-98 flex items-center justify-center gap-2"
            >
              <RefreshCw className={`w-4 h-4 ${isOptimizing ? 'animate-spin' : ''}`} />
              {isOptimizing ? 'Optimizing Compound...' : 'Launch Optimization'}
            </button>
          </div>

          {/* Running optimization logs */}
          <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4">
            <h3 className="text-md font-bold text-white flex items-center gap-2">
              <Info className="w-5 h-5 text-brand-mint" />
              Optimization Status
            </h3>
            {isOptimizing ? (
              <div className="space-y-4">
                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>Generational Loop:</span>
                    <span className="font-mono font-bold text-brand-mint">
                      {optStep === 1 ? 'Step 1: Scaffold Mutation' : optStep === 2 ? 'Step 2: Potency Screening' : 'Step 3: ADMET Profile Check'}
                    </span>
                  </div>
                  <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-mint rounded-full transition-all duration-300" style={{ width: `${optStep * 33.3}%` }}></div>
                  </div>
                </div>
                <div className="bg-black/50 border border-white/5 rounded-lg p-3 font-mono text-[10px] text-cyan-400 h-20 overflow-y-auto leading-normal">
                  {optStep === 1 && '>>> Mutating side chains and functional groups...'}
                  {optStep === 2 && '>>> Evaluating target pocket binders (QED scoring)...'}
                  {optStep === 3 && '>>> Running prediction models for Absorption and Toxicity profiles...'}
                </div>
              </div>
            ) : (
              <div className="space-y-3 font-mono text-xs text-slate-300">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-500">Method:</span>
                  <span className="text-white">REINVENT (RL Scaffold Hop)</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-500">Target Cavity:</span>
                  <span className="text-white">EGFR Pocket-01</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Model Resolution:</span>
                  <span className="text-white">QM/MM High Precision</span>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Display Area for Mock Images */}
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-panel rounded-2xl border border-white/10 overflow-hidden shadow-2xl bg-[#090d16] p-4">
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-500 inline-block"></span>
                ACTIVE WORKSPACE: LEAD SCAFFOLD REFINEMENT
              </div>
              <div className="text-[10px] px-2 py-0.5 rounded bg-brand-mint/15 text-brand-mint font-mono border border-brand-mint/20">
                AI Reinvent Model
              </div>
            </div>
            
            <div className="border border-white/5 rounded-xl overflow-hidden relative">
              <img
                src={isOptimizing ? SCREENSHOTS.admetProgress : SCREENSHOTS.leadOptResults}
                alt="Active Optimization Screen"
                className="w-full object-contain"
              />
            </div>
          </div>

          {/* Table representing generated variants */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Activity className="w-5 h-5 text-brand-mint" />
              Generated Lead Variations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {optimizedCompounds.map((compound, index) => (
                <div key={index} className="glass-panel p-5 rounded-xl border border-white/5 hover:border-brand-mint/30 hover:scale-102 transition-all duration-300">
                  <div className="flex justify-between items-start mb-3">
                    <span className="font-bold text-white text-sm">{compound.id}</span>
                    <span className="text-xs font-bold text-emerald-400 font-mono bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      Score: {compound.score}
                    </span>
                  </div>
                  <div className="space-y-2 font-mono text-[11px] text-slate-400">
                    <div className="flex justify-between border-b border-white/5 pb-1">
                      <span>Quantitative Drug-likeness (QED):</span>
                      <span className="text-white">{compound.qed}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-1">
                      <span>Aqueous Solubility:</span>
                      <span className="text-slate-200">{compound.solubility}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Cardiac Toxicity Risk:</span>
                      <span className="text-slate-200">{compound.hergRisk}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
