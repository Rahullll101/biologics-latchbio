import { useState } from 'react';
import { Info, Activity, RefreshCw, FileCode } from 'lucide-react';

const SCREENSHOTS = {
  wetLab: '/screenshots/wet_lab.png',
  roboticCode: '/screenshots/robotic_validation_code.png',
  roboticInput: '/screenshots/robotic_validation_input.png',
  validateWetlab: '/screenshots/validate_wetlab.png',
  formulation: '/screenshots/FORMULATION.png',
  preformulation: '/screenshots/PREFORMULATION.png',
  preformulation2: '/screenshots/PERFORMULATION-2.png'
};

export default function WetLabValidationPage() {
  const [isCompiling, setIsCompiling] = useState(false);
  const [pythonCode, setPythonCode] = useState(`from opentrons import protocol_api

metadata = {
    'protocolName': 'GenQuantaa Kinase Assay Validation',
    'author': 'Orchestrator V2.0',
    'description': 'Automated serial dilution of optimized EGFR inhibitors',
    'apiLevel': '2.13'
}

def run(protocol: protocol_api.ProtocolContext):
    # Load labware
    plate_96 = protocol.load_labware('corning_96_wellplate_360ul_flat', '2')
    tiprack = protocol.load_labware('opentrons_96_tiprack_300ul', '1')
    p300 = protocol.load_instrument('p300_single_gen2', 'left', tip_racks=[tiprack])
    
    # Run Dilution
    for i in range(8):
        p300.transfer(20, plate_96.wells_by_name()['A1'], plate_96.wells_by_name()[f'A{i+2}'], mix_after=(3, 50))`);
  
  const [selectedWell, setSelectedWell] = useState<string | null>('A1');
  const [wellContents, setWellContents] = useState({
    name: 'GENQ-OPT-001',
    concentration: '10.0 μM',
    ph: '7.4 (HEPES)',
    solubility: '98%',
    absorbance: '0.482'
  });

  const compileProtocol = () => {
    if (isCompiling) return;
    setIsCompiling(true);

    setTimeout(() => {
      setTimeout(() => {
        setIsCompiling(false);
        alert('Protocol successfully compiled and sent to Opentrons robot queue (OT-2 Unit B)');
      }, 1500);
    }, 1200);
  };

  const handleWellClick = (row: string, col: number) => {
    const wellName = `${row}${col}`;
    setSelectedWell(wellName);
    
    // Randomize slightly for effect
    const conc = (10 / col).toFixed(2);
    const abs = (0.5 / col).toFixed(3);
    setWellContents({
      name: col === 1 ? 'GENQ-OPT-001' : col === 2 ? 'GENQ-OPT-002' : 'GENQ-OPT-003',
      concentration: `${conc} μM`,
      ph: '7.4 (HEPES)',
      solubility: `${(98 - col * 2)}%`,
      absorbance: abs
    });
  };

  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  const cols = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-12 animate-fadeIn relative">
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] rounded-full glow-green opacity-10 pointer-events-none"></div>

      {/* Page Title */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
          <Activity className="w-4.5 h-4.5" />
          GENQUANTAA WET-LAB INTERFACE
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
          Robotic Validation & Wet Lab Orchestration
        </h1>
        <p className="text-slate-400 max-w-3xl">
          Convert optimized compounds directly into liquid handler instructions. Compile Python protocol scripts for Opentrons robots and sync plate assays (absorbance/SPR) back to the central registry.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Controls / Code Editor */}
        <div className="space-y-6">
          
          {/* Code Compiler */}
          <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4">
            <h3 className="text-md font-bold text-white flex items-center gap-2">
              <FileCode className="w-5 h-5 text-brand-mint" />
              Opentrons Protocol Compiler
            </h3>
            
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Protocol Code (Python)</label>
              <textarea
                value={pythonCode}
                onChange={(e) => setPythonCode(e.target.value)}
                rows={10}
                className="w-full p-3 rounded-lg bg-slate-950 border border-white/10 text-[10px] font-mono text-slate-300 focus:outline-none focus:border-brand-mint resize-none"
              />
            </div>

            <button
              onClick={compileProtocol}
              disabled={isCompiling}
              className="w-full py-3 px-4 rounded-lg bg-brand-mint text-brand-navy font-bold text-sm transition-transform hover:scale-102 active:scale-98 flex items-center justify-center gap-2"
            >
              <RefreshCw className={`w-4 h-4 ${isCompiling ? 'animate-spin' : ''}`} />
              {isCompiling ? 'Compiling Code...' : 'Compile & Dispatch to Lab'}
            </button>
          </div>

          {/* Well details */}
          <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4">
            <h3 className="text-md font-bold text-white flex items-center gap-2">
              <Info className="w-5 h-5 text-brand-mint" />
              Well Information ({selectedWell})
            </h3>
            <div className="space-y-3 font-mono text-xs text-slate-300">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-slate-500">Compound ID:</span>
                <span className="text-white font-sans">{wellContents.name}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-slate-500">Concentration:</span>
                <span className="text-white">{wellContents.concentration}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-slate-500">Buffer Environment:</span>
                <span className="text-white font-sans">{wellContents.ph}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-slate-500">Aqueous Solubility:</span>
                <span className="text-emerald-400">{wellContents.solubility}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Absorbance (OD 600):</span>
                <span className="text-white font-bold">{wellContents.absorbance}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Plate / Screen display */}
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-panel rounded-2xl border border-white/10 overflow-hidden shadow-2xl bg-[#090d16] p-6 space-y-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-mint inline-block"></span>
                ACTIVE INSTRUMENT: OT-2 UNIT-B 96-WELL PLATE LAYOUT
              </div>
              <div className="text-[10px] px-2 py-0.5 rounded bg-brand-mint/15 text-brand-mint font-mono border border-brand-mint/20">
                Connected
              </div>
            </div>

            {/* Interactive plate wells */}
            <div className="bg-[#0b0f19]/80 border border-white/5 rounded-xl p-6 overflow-x-auto">
              <div className="min-w-[480px] space-y-3">
                {/* Column Headers */}
                <div className="flex items-center gap-2.5 pl-6">
                  {cols.map((c) => (
                    <div key={c} className="w-8 text-center text-[10px] font-bold text-slate-500 font-mono">
                      {c}
                    </div>
                  ))}
                </div>
                {/* Rows */}
                {rows.map((row) => (
                  <div key={row} className="flex items-center gap-2.5">
                    <div className="w-4 text-xs font-bold text-slate-500 font-mono text-center">
                      {row}
                    </div>
                    {cols.map((col) => {
                      const wellName = `${row}${col}`;
                      const isSelected = selectedWell === wellName;
                      return (
                        <div
                          key={wellName}
                          onClick={() => handleWellClick(row, col)}
                          title={`Well ${wellName}`}
                          className={`w-8 h-8 rounded-full border cursor-pointer flex items-center justify-center text-[8px] font-mono font-bold transition-all hover:scale-110 active:scale-95 ${isSelected ? 'bg-brand-mint border-brand-mint text-brand-navy shadow-lg shadow-brand-mint/20' : 'bg-slate-900 border-white/10 text-slate-400 hover:border-slate-400'}`}
                        >
                          {col}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Preformulation and lab validations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-panel rounded-2xl border border-white/10 overflow-hidden bg-[#090d16] p-4 flex flex-col justify-between">
              <span className="text-[10px] font-mono text-slate-400 block mb-2">VALIDATED PLATE BIO-ASSAYS</span>
              <img src={SCREENSHOTS.validateWetlab} alt="Validate Wetlab Data" className="rounded-xl w-full" />
            </div>
            <div className="glass-panel rounded-2xl border border-white/10 overflow-hidden bg-[#090d16] p-4 flex flex-col justify-between">
              <span className="text-[10px] font-mono text-slate-400 block mb-2">FORMULATION recipe solubility dashboard</span>
              <img src={SCREENSHOTS.formulation} alt="Formulation dashboard details" className="rounded-xl w-full" />
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
