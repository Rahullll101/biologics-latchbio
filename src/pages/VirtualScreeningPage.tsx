import { useState } from 'react';
import { Sliders, Info, Activity, Database, RefreshCw } from 'lucide-react';

const SCREENSHOTS = {
  dockingResults: '/screenshots/molecular_docking_results.png',
  blindedScreen: '/screenshots/bLINDEDSCREEN.png',
  hitScreening: '/screenshots/HITSCREENING.png'
};

export default function VirtualScreeningPage() {
  const [exhaustiveness, setExhaustiveness] = useState(8);
  const [compoundCount, setCompoundCount] = useState(500);
  const [isDocking, setIsDocking] = useState(false);
  const [dockProgress, setDockProgress] = useState(0);
  const [dockedList, setDockedList] = useState([
    { rank: 1, id: 'GENQ-9214', smiles: 'Cc1cc(C)c2c(c1)C(=O)O...', affinity: '-9.8 kcal/mol', status: 'High Binder' },
    { rank: 2, id: 'GENQ-4109', smiles: 'O=C(Cc1ccccc1)N...', affinity: '-9.2 kcal/mol', status: 'High Binder' },
    { rank: 3, id: 'GENQ-7182', smiles: 'CN(C)C(=O)NC1...', affinity: '-8.8 kcal/mol', status: 'Moderate Binder' }
  ]);
  const [currentDockingItem, setCurrentDockingItem] = useState('');

  const runScreening = () => {
    if (isDocking) return;
    setIsDocking(true);
    setDockProgress(0);
    setDockedList([]);

    const compounds = [
      { id: 'GENQ-0182', smiles: 'CNC(=O)c1ccc(cc1)NC(=O)...', affinity: '-10.2 kcal/mol', status: 'High Binder' },
      { id: 'GENQ-8812', smiles: 'Cc1noc(C)c1S(=O)(=O)N...', affinity: '-9.5 kcal/mol', status: 'High Binder' },
      { id: 'GENQ-5431', smiles: 'O=C(NC1CC1)c2ccc(cc2)...', affinity: '-8.9 kcal/mol', status: 'Moderate Binder' },
      { id: 'GENQ-2194', smiles: 'COc1cc(cc(c1)OC)C2C3...', affinity: '-8.4 kcal/mol', status: 'Moderate Binder' },
      { id: 'GENQ-3310', smiles: 'C1CCN(CC1)S(=O)(=O)...', affinity: '-7.2 kcal/mol', status: 'Low Binder' }
    ];

    let currentIdx = 0;
    const interval = setInterval(() => {
      if (currentIdx >= compounds.length) {
        clearInterval(interval);
        setIsDocking(false);
        setDockProgress(100);
        return;
      }
      
      const item = compounds[currentIdx];
      setCurrentDockingItem(`Docking compound ${item.id} (SMILES: ${item.smiles.substring(0, 15)}...)`);
      
      setDockedList(prev => {
        const newList = [...prev, { rank: currentIdx + 1, ...item }];
        return newList.sort((a, b) => parseFloat(a.affinity) - parseFloat(b.affinity));
      });

      setDockProgress(Math.round(((currentIdx + 1) / compounds.length) * 100));
      currentIdx++;
    }, 1200);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-12 animate-fadeIn relative">
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] rounded-full glow-blue opacity-10 pointer-events-none"></div>

      {/* Page Title */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold">
          <Database className="w-4.5 h-4.5" />
          GENQUANTAA DRY-LAB SUITE
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
          Molecular Docking & Virtual Screening
        </h1>
        <p className="text-slate-400 max-w-3xl">
          Model ligand conformations within target pockets, compute binding free energies using Autodock Vina, and filter out low-potency binders in high-throughput.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Controls */}
        <div className="space-y-6">
          
          {/* Docking Configuration */}
          <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-5">
            <h3 className="text-md font-bold text-white flex items-center gap-2">
              <Sliders className="w-5 h-5 text-brand-mint" />
              Docking Parameters
            </h3>
            
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-slate-400">
                <span>Vina Exhaustiveness:</span>
                <span className="font-mono text-white font-bold">{exhaustiveness}</span>
              </div>
              <input
                type="range"
                min="8"
                max="64"
                step="8"
                value={exhaustiveness}
                onChange={(e) => setExhaustiveness(parseInt(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-mint"
              />
              <div className="flex justify-between text-[9px] text-slate-500 font-mono">
                <span>8 (Fast screening)</span>
                <span>64 (High precision)</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs text-slate-400">
                <span>Compounds to Screen:</span>
                <span className="font-mono text-white font-bold">{compoundCount}</span>
              </div>
              <input
                type="range"
                min="100"
                max="10000"
                step="100"
                value={compoundCount}
                onChange={(e) => setCompoundCount(parseInt(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-mint"
              />
              <div className="flex justify-between text-[9px] text-slate-500 font-mono">
                <span>100 molecules</span>
                <span>10,000 (Batch)</span>
              </div>
            </div>

            <button
              onClick={runScreening}
              disabled={isDocking}
              className="w-full py-3 px-4 rounded-lg bg-brand-mint text-brand-navy font-bold text-sm transition-transform hover:scale-102 active:scale-98 flex items-center justify-center gap-2"
            >
              <RefreshCw className={`w-4 h-4 ${isDocking ? 'animate-spin' : ''}`} />
              {isDocking ? 'Simulating Docking...' : 'Run Virtual Screen'}
            </button>
          </div>

          {/* Screening Run details */}
          <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4">
            <h3 className="text-md font-bold text-white flex items-center gap-2">
              <Info className="w-5 h-5 text-brand-mint" />
              Docking Run Information
            </h3>
            {isDocking ? (
              <div className="space-y-4">
                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>Batch Progress:</span>
                    <span className="font-mono font-bold text-brand-mint">{dockProgress}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-mint rounded-full transition-all duration-300" style={{ width: `${dockProgress}%` }}></div>
                  </div>
                </div>
                <div className="bg-black/50 border border-white/5 rounded-lg p-3 font-mono text-[10px] text-cyan-400 h-20 overflow-y-auto leading-normal">
                  {currentDockingItem}
                </div>
              </div>
            ) : (
              <div className="space-y-3 font-mono text-xs text-slate-300">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-500">Target Pocket:</span>
                  <span className="text-white">Pocket-01 (ATP site)</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-500">Box Center:</span>
                  <span className="text-white">x: 16.5, y: -2.3, z: 28.1</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-500">Box Dimension:</span>
                  <span className="text-white">20 x 20 x 20 Å</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Grid Spacing:</span>
                  <span className="text-white">0.375 Å</span>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Mockups Display */}
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-panel rounded-2xl border border-white/10 overflow-hidden shadow-2xl bg-[#090d16] p-4">
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 inline-block"></span>
                ACTIVE WORKSPACE: MOLECULAR DOCKING RUN
              </div>
              <div className="text-[10px] px-2 py-0.5 rounded bg-brand-mint/15 text-brand-mint font-mono border border-brand-mint/20">
                AutoVina V1.2
              </div>
            </div>
            
            <div className="border border-white/5 rounded-xl overflow-hidden relative">
              <img
                src={SCREENSHOTS.dockingResults}
                alt="Active Docking Screen"
                className="w-full object-contain"
              />
            </div>
          </div>

          {/* Sorted screening hitlist */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Activity className="w-5 h-5 text-brand-mint" />
              Docking Hit Table
            </h3>
            <div className="glass-panel rounded-xl border border-white/15 overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-900/60 border-b border-white/10 text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">
                    <th className="py-3 px-4">Rank</th>
                    <th className="py-3 px-4">Compound ID</th>
                    <th className="py-3 px-4">SMILES Structure</th>
                    <th className="py-3 px-4 text-right">Binding Affinity</th>
                    <th className="py-3 px-4 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-xs font-mono text-slate-300">
                  {dockedList.map((item, idx) => (
                    <tr key={idx} className="hover:bg-white/5 transition-colors">
                      <td className="py-3 px-4 font-bold text-brand-mint">0{item.rank}</td>
                      <td className="py-3 px-4 text-white font-semibold">{item.id}</td>
                      <td className="py-3 px-4 text-slate-500 font-sans truncate max-w-[150px]">{item.smiles}</td>
                      <td className="py-3 px-4 text-right text-emerald-400 font-bold">{item.affinity}</td>
                      <td className="py-3 px-4 text-right">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${item.status === 'High Binder' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/25' : item.status === 'Moderate Binder' ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/25' : 'bg-slate-800 text-slate-400 border border-slate-700'}`}>
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
