import React, { useState } from 'react';
import { Search, Info, Sliders, Dna, HelpCircle, Activity, Play, CheckCircle } from 'lucide-react';

const SCREENSHOTS = {
  explorerEgfr: '/screenshots/target_explorer_egfr.png',
  explorerInfo: '/screenshots/target_explorer_info.png',
  pocketResults: '/screenshots/pocket_discovery_results.png',
  pocketScanning: '/screenshots/pocket_discovery_scanning.png'
};

export default function TargetExplorerPage() {
  const [searchQuery, setSearchQuery] = useState('EGFR_HUMAN');
  const [selectedTarget, setSelectedTarget] = useState({
    name: 'Epidermal Growth Factor Receptor (EGFR)',
    uniprot: 'P00533',
    organism: 'Homo sapiens (Human)',
    length: '1210 amino acids',
    pLDDT: '92.4% (AlphaFold High Confidence)',
    druggablePockets: 3
  });
  const [isScanning, setIsScanning] = useState(false);
  const [scanStep, setScanStep] = useState(0);
  const [foundPockets, setFoundPockets] = useState([
    { id: 1, name: 'Pocket-01 (ATP Binding Site)', volume: '482 Å³', druggability: '0.88 (High)', residueRange: 'Leu718 - Asp855' },
    { id: 2, name: 'Pocket-02 (Allosteric Hinge)', volume: '310 Å³', druggability: '0.62 (Moderate)', residueRange: 'Glu762 - Met790' },
    { id: 3, name: 'Pocket-03 (Juxtamembrane)', volume: '185 Å³', druggability: '0.41 (Low)', residueRange: 'Arg645 - Val667' }
  ]);
  const [minDruggability, setMinDruggability] = useState(0.4);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsScanning(true);
    setScanStep(1);
    
    setTimeout(() => {
      setScanStep(2);
      setTimeout(() => {
        setIsScanning(false);
        setScanStep(0);
        if (searchQuery.toUpperCase().includes('HER2') || searchQuery.toUpperCase().includes('ERBB2')) {
          setSelectedTarget({
            name: 'Receptor tyrosine-protein kinase erbB-2 (HER2)',
            uniprot: 'P04626',
            organism: 'Homo sapiens (Human)',
            length: '1255 amino acids',
            pLDDT: '94.1% (AlphaFold High Confidence)',
            druggablePockets: 2
          });
          setFoundPockets([
            { id: 1, name: 'Pocket-01 (Kinase Hinge)', volume: '412 Å³', druggability: '0.82 (High)', residueRange: 'Leu726 - Asp863' },
            { id: 2, name: 'Pocket-02 (Sub-Pocket C)', volume: '220 Å³', druggability: '0.54 (Moderate)', residueRange: 'Thr798 - Leu820' }
          ]);
        } else {
          setSelectedTarget({
            name: 'Epidermal Growth Factor Receptor (EGFR)',
            uniprot: 'P00533',
            organism: 'Homo sapiens (Human)',
            length: '1210 amino acids',
            pLDDT: '92.4% (AlphaFold High Confidence)',
            druggablePockets: 3
          });
          setFoundPockets([
            { id: 1, name: 'Pocket-01 (ATP Binding Site)', volume: '482 Å³', druggability: '0.88 (High)', residueRange: 'Leu718 - Asp855' },
            { id: 2, name: 'Pocket-02 (Allosteric Hinge)', volume: '310 Å³', druggability: '0.62 (Moderate)', residueRange: 'Glu762 - Met790' },
            { id: 3, name: 'Pocket-03 (Juxtamembrane)', volume: '185 Å³', druggability: '0.41 (Low)', residueRange: 'Arg645 - Val667' }
          ]);
        }
      }, 1500);
    }, 1200);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-12 animate-fadeIn relative">
      <div className="absolute top-[10%] right-[10%] w-[350px] h-[350px] rounded-full glow-teal opacity-10 pointer-events-none"></div>

      {/* Page Title */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
          <Dna className="w-4.5 h-4.5" />
          GENQUANTAA DRY-LAB SUITE
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
          Target Explorer & Pocket Discovery
        </h1>
        <p className="text-slate-400 max-w-3xl">
          Retrieve receptors from UniProt or AlphaFold DB, scan 3D conformations, and locate druggable pocket cavities using automated machine learning models.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Sidebar Controls */}
        <div className="space-y-6">
          
          {/* Query Form */}
          <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4">
            <h3 className="text-md font-bold text-white flex items-center gap-2">
              <Search className="w-5 h-5 text-brand-mint" />
              Target Ingestion
            </h3>
            <form onSubmit={handleSearch} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-1.5">UniProt Entry / Gene ID</label>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="e.g. EGFR_HUMAN or HER2"
                  className="w-full px-3 py-2.5 rounded-lg bg-slate-900 border border-white/10 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-brand-mint"
                />
              </div>
              <button
                type="submit"
                disabled={isScanning}
                className="w-full py-3 px-4 rounded-lg bg-brand-mint text-brand-navy font-bold text-sm transition-transform hover:scale-102 active:scale-98 flex items-center justify-center gap-2"
              >
                <Play className="w-4 h-4 fill-current" />
                {isScanning ? 'Retrieving Structure...' : 'Retrieve Target'}
              </button>
            </form>
          </div>

          {/* Details Card */}
          <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4">
            <h3 className="text-md font-bold text-white flex items-center gap-2">
              <Info className="w-5 h-5 text-brand-mint" />
              Target Parameters
            </h3>
            {isScanning ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-8 h-8 border-4 border-brand-mint border-t-transparent rounded-full animate-spin mx-auto"></div>
                <div className="text-xs font-mono text-slate-400">
                  {scanStep === 1 ? 'Fetching UniProt metadata...' : 'Building AlphaFold PDB mesh...'}
                </div>
              </div>
            ) : (
              <div className="space-y-3 font-mono text-xs text-slate-300">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-500">Name:</span>
                  <span className="text-white text-right max-w-[180px] font-sans truncate">{selectedTarget.name}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-500">UniProt ID:</span>
                  <span className="text-white">{selectedTarget.uniprot}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-500">Organism:</span>
                  <span className="text-white">{selectedTarget.organism}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-500">Size:</span>
                  <span className="text-white">{selectedTarget.length}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-500">AF Confidence:</span>
                  <span className="text-emerald-400">{selectedTarget.pLDDT}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Druggable Cavities:</span>
                  <span className="text-white font-bold">{selectedTarget.druggablePockets}</span>
                </div>
              </div>
            )}
          </div>

          {/* Filtering */}
          <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4">
            <h3 className="text-md font-bold text-white flex items-center gap-2">
              <Sliders className="w-5 h-5 text-brand-mint" />
              Cavity Scan Filters
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-slate-400">
                <span>Min Druggability:</span>
                <span className="font-mono text-white font-bold">{minDruggability}</span>
              </div>
              <input
                type="range"
                min="0.1"
                max="0.9"
                step="0.05"
                value={minDruggability}
                onChange={(e) => setMinDruggability(parseFloat(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-mint"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>0.1 (All)</span>
                <span>0.9 (ATP-like site)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Mockup screen display */}
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-panel rounded-2xl border border-white/10 overflow-hidden shadow-2xl bg-[#090d16] p-4 flex flex-col justify-between">
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
                ACTIVE WORKSPACE: TARGET EXPLORER
              </div>
              <div className="text-[10px] px-2 py-0.5 rounded bg-brand-mint/15 text-brand-mint font-mono border border-brand-mint/20">
                GPU-Mesh: Active
              </div>
            </div>
            
            {/* Target Explorer Main Screenshot */}
            <div className="border border-white/5 rounded-xl overflow-hidden relative group">
              <img
                src={isScanning ? SCREENSHOTS.pocketScanning : SCREENSHOTS.explorerInfo}
                alt="Active Target Screen"
                className="w-full object-contain"
              />
              {isScanning && (
                <div className="absolute inset-0 bg-brand-navy/60 backdrop-blur-sm flex flex-col items-center justify-center space-y-4">
                  <Activity className="w-12 h-12 text-brand-mint animate-pulse" />
                  <span className="text-sm font-bold text-white tracking-widest font-mono uppercase animate-pulse">Running Cavity Scans...</span>
                </div>
              )}
            </div>
          </div>

          {/* Discovered pockets list matching filter */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-brand-mint" />
              Identified Cavity Profiles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {foundPockets
                .filter((p) => parseFloat(p.druggability) >= minDruggability)
                .map((pocket) => (
                  <div
                    key={pocket.id}
                    className="glass-panel p-5 rounded-xl border border-white/5 hover:border-brand-mint/30 hover:scale-102 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-semibold text-white text-sm">{pocket.name}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-brand-teal/20 text-brand-teal font-bold font-mono">
                          Cavity {pocket.id}
                        </span>
                      </div>
                      <div className="space-y-1.5 font-mono text-[11px] text-slate-400 mt-3">
                        <div className="flex justify-between">
                          <span>Volume:</span>
                          <span className="text-slate-200">{pocket.volume}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Residues:</span>
                          <span className="text-slate-200">{pocket.residueRange}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 border-t border-white/5 pt-3 flex justify-between items-center">
                      <span className="text-[11px] text-slate-500">Druggability Score:</span>
                      <span className="text-xs font-bold text-brand-mint">{pocket.druggability}</span>
                    </div>
                  </div>
                ))}
              {foundPockets.filter((p) => parseFloat(p.druggability) >= minDruggability).length === 0 && (
                <div className="col-span-2 text-center py-10 glass-panel border border-dashed border-white/10 rounded-xl text-xs text-slate-500 font-mono">
                  <HelpCircle className="w-6 h-6 mx-auto mb-2" />
                  No cavities match current Druggability Filter ({minDruggability})
                </div>
              )}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
