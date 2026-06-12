import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  Binary,
  ShieldCheck,
  Cpu,
  FlaskConical,
  Beaker,
  CheckCircle2,
  Layers,
  FileSearch,
  Network,
  Microscope,
  Clock,
  Database,
  BoxSelect,
  Activity,
  Dna,
  BarChart,
  Brain,
  Zap,
} from 'lucide-react';

export interface Step {
  id: string;
  title: string;
  icon: React.ComponentType<any>;
  action: string;
  output: string;
}

export interface Phase {
  id: string;
  title: string;
  steps: Step[];
}

export interface WorkflowData {
  id: string;
  name: string;
  description: string;
  color: string;
  direction: 'TB' | 'LR';
  phases: Phase[];
}

export const workflowData: WorkflowData[] = [
  {
    id: 'biologics',
    name: 'GQ Discovery',
    description: 'An enterprise-grade drug discovery operating system moving from target to clinical candidate.',
    color: '#0066FF',
    direction: 'TB',
    phases: [
      {
        id: 'p1',
        title: 'Phase 1: Discovery & Triage',
        steps: [
          { id: 'b1', title: '1. Target Identification', icon: Search, action: 'Resolves protein sequence (UniProt) and 3D structure (PDB/AlphaFold).', output: 'Biological Dossier & Binding Pockets' },
          { id: 'b2', title: '2. Virtual Hit Screening', icon: Binary, action: 'Screens million-compound libraries using 2,400D fingerprinting.', output: 'Top 100 Scored Compounds' },
          { id: 'b3', title: '3. Molecular Docking', icon: BoxSelect, action: 'Physics-based simulation calculating Gibbs Free Energy (ΔG).', output: 'Thermodynamic Stability Score' },
        ],
      },
      {
        id: 'p2',
        title: 'Phase 2: Optimization & Safety',
        steps: [
          { id: 'b4', title: '4. Lead Optimization', icon: Zap, action: 'Generative AI evolves hits into leads while enforcing synthesizability.', output: 'Optimized Synthesizable Leads' },
          { id: 'b5', title: '5. ADMET Intelligence', icon: ShieldCheck, action: 'Predicts absorption, metabolism, and toxicity using GNN models.', output: 'Pharmacological Passport' },
        ],
      },
      {
        id: 'p3',
        title: 'Phase 3: Validation & Formulation',
        steps: [
          { id: 'b6', title: '6. Robotic Validation', icon: Cpu, action: 'Translates leads into protocols for Opentrons OT-2 robots.', output: 'Validated Assay Results' },
          { id: 'b7', title: '7. Preformulation Analysis', icon: FlaskConical, action: 'Predicts solubility, pKa, and chemical stability risks.', output: 'IND-Ready Physicochemical Profile' },
          { id: 'b8', title: '8. Formulation Design', icon: Beaker, action: 'Recommends dosage form and excipients for delivery.', output: 'Drug Product Design' },
        ],
      },
      {
        id: 'p4',
        title: 'Phase 4: Nomination',
        steps: [
          { id: 'b9', title: '9. Clinical Candidate Selection', icon: CheckCircle2, action: 'Synthesizes all data to rank final candidates for trials.', output: 'Ranked Clinical Candidates' },
        ],
      },
    ],
  },
  {
    id: 'chemistry',
    name: 'GQ Chemistry',
    description: 'Expert-level chemical space navigation and generative design engine.',
    color: '#00D1FF',
    direction: 'LR',
    phases: [
      {
        id: 'c-p1',
        title: 'Phase 1: Intelligence',
        steps: [
          { id: 'c1', title: 'PACE Extraction', icon: FileSearch, action: 'AI-driven extraction of structures and SAR data from patents.', output: 'Competitive Dataset & Potency Table' },
          { id: 'c2', title: 'MolSpace Explorer', icon: Network, action: 'UMAP visualization of high-dimensional chemical spaces.', output: 'Interactive Chemical IP Map' },
        ],
      },
      {
        id: 'c-p2',
        title: 'Phase 2: Design',
        steps: [
          { id: 'c3', title: 'Experiment Setup', icon: Layers, action: 'Defines SBDD/LBDD constraints and pharmacophore targets.', output: 'Unique Experiment UUID' },
          { id: 'c4', title: 'Generative Chemistry', icon: Activity, action: 'Ensemble of LSTM, VAE, and Transformers designing molecules.', output: 'Deduplicated Candidate Pool' },
          { id: 'c5', title: 'Reward Engine', icon: Zap, action: '9-step filter for Lipinski, ADMET, Novelty, and Binding.', output: 'Ranked Shortlist' },
        ],
      },
      {
        id: 'c-p3',
        title: 'Phase 3: Deep Validation',
        steps: [
          { id: 'c6', title: 'GNN and Transformers', icon: Microscope, action: 'Fine-tunes foundation models on project-specific data.', output: 'High-Accuracy Target Predictions' },
          { id: 'c7', title: 'GQ AI Chemistry', icon: Binary, action: 'OpenMM molecular dynamics for physical binding energy.', output: 'Gibbs Free Energy (ΔG)' },
          { id: 'c8', title: 'Retrosynthesis', icon: Clock, action: 'Tree-search backward planning to starting materials.', output: 'Validated Synthetic Routes' },
        ],
      },
    ],
  },
  {
    id: 'wallah',
    name: 'GQ GPT',
    description: 'Foundation models for aging research, multi-omics synthesis, and in-silico drug discovery.',
    color: '#7000FF',
    direction: 'TB',
    phases: [
      {
        id: 'w-p1',
        title: 'Phase 1: Target Identification',
        steps: [
          { id: 'w1', title: '1. Target Identification', icon: Dna, action: "Identify mTOR dysregulation signatures and Alzheimer's risk factors using GQ GPT 1.", output: 'Ranked Therapeutic Targets' },
        ],
      },
      {
        id: 'w-p2',
        title: 'Phase 2: Data Expansion',
        steps: [
          { id: 'w2', title: '2. Synthetic Scaling', icon: BarChart, action: 'Generate 5,000 synthetic RNA-Seq profiles with GQ GPT 2 for privacy-safe model training.', output: 'Synthetic Multi-Omics Data' },
        ],
      },
      {
        id: 'w-p3',
        title: 'Phase 3: Digital Screening',
        steps: [
          { id: 'w3', title: '3. Virtual HTS', icon: Brain, action: 'Run a 60,000 compound screen in minutes to find lead candidates with high selectivity.', output: 'Digital Hit Profiles' },
        ],
      },
    ],
  },
  {
    id: 'pandaomics',
    name: 'PandaOmics (GQ Discovery)',
    description: 'Digital laboratory for aging biology, target discovery, and mechanistic simulation.',
    color: '#FF00A2',
    direction: 'TB',
    phases: [
      {
        id: 'po-p1',
        title: 'Phase 1: Biological Insight',
        steps: [
          { id: 'po1', title: '1. Biological Aging Clock', icon: Clock, action: 'Analyzes epigenetic markers to calculate Biological Age.', output: 'Age Acceleration Score' },
          { id: 'po2', title: '2. Senescence Mapping', icon: Search, action: 'Identifies cellular drivers of aging and biological decline.', output: 'Senescence Risk Profile' },
          { id: 'po3', title: '3. Target Ranking', icon: Activity, action: 'Prioritizes high-value targets for anti-aging intervention.', output: 'Ranked Therapeutic Targets' },
        ],
      },
      {
        id: 'po-p2',
        title: 'Phase 2: Data Expansion',
        steps: [
          { id: 'po4', title: '4. Synthetic Omics Generator', icon: Database, action: 'Synthesizes 20k-feature RNA-Seq or methylation datasets.', output: 'HIPAA-Compliant Synthetic Data' },
          { id: 'po5', title: '5. Privacy Validation', icon: ShieldCheck, action: 'Ensures statistical fidelity with zero data leakage risk.', output: 'Validated Research Dataset' },
        ],
      },
      {
        id: 'po-p3',
        title: 'Phase 3: Digital Screening',
        steps: [
          { id: 'po6', title: '6. Digital Discovery Engine', icon: Cpu, action: 'High-throughput virtual screening of 60k+ compounds.', output: 'Virtual Hit Candidates' },
          { id: 'po7', title: '7. Perturbation Mapping', icon: Network, action: 'Visualizes pathway-level mechanistic effects.', output: 'Gene Expression Maps' },
          { id: 'po8', title: '8. MoA Analysis', icon: Binary, action: 'Predicts primary efficacy and off-target safety risks.', output: 'Mechanistic Safety Profile' },
          { id: 'po9', title: '9. Digital Nomination', icon: CheckCircle2, action: 'Finalizes candidate profiles for laboratory validation.', output: 'Digital Lead Profiles' },
        ],
      },
    ],
  },
];

function flattenSteps(
  workflow: WorkflowData
): { step: Step; phaseTitle: string; isPhaseFirst: boolean }[] {
  const result: { step: Step; phaseTitle: string; isPhaseFirst: boolean }[] = [];
  for (const phase of workflow.phases) {
    phase.steps.forEach((step, i) => {
      result.push({ step, phaseTitle: phase.title, isPhaseFirst: i === 0 });
    });
  }
  return result;
}

const PipelineCard = ({
  step,
  color,
  phaseTitle,
  isPhaseFirst,
  index,
}: {
  step: Step;
  color: string;
  phaseTitle: string;
  isPhaseFirst: boolean;
  index: number;
}) => (
  <motion.div
    className="relative group flex-shrink-0"
    style={{ width: 240 }}
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.4, delay: index * 0.055 }}
  >
    {isPhaseFirst && (
      <div
        className="absolute flex items-center gap-1.5 opacity-50"
        style={{ top: -22, left: 0, whiteSpace: 'nowrap' }}
      >
        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
        <span
          className="font-black uppercase text-white"
          style={{ fontSize: 9, letterSpacing: '0.22em' }}
        >
          {phaseTitle}
        </span>
      </div>
    )}

    <div
      className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl pointer-events-none"
      style={{ backgroundColor: color }}
    />

    <div className="relative bg-slate-900 border border-white/10 rounded-2xl p-5 shadow-2xl overflow-hidden flex flex-col">
      <div className="absolute top-0 right-0 w-28 h-28 bg-white/5 blur-3xl -mr-14 -mt-14 pointer-events-none" />

      <div className="flex items-center gap-3 mb-3">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center border-2 flex-shrink-0"
          style={{ borderColor: `${color}44`, backgroundColor: `${color}11` }}
        >
          <step.icon className="w-5 h-5" style={{ color }} />
        </div>
        <h4 className="font-bold text-white text-xs leading-tight">{step.title}</h4>
      </div>

      <p className="text-slate-400 leading-relaxed flex-grow text-[11px]">
        {step.action}
      </p>

      <div className="pt-3 border-t border-white/5 mt-3">
        <span
          className="font-bold text-slate-500 uppercase tracking-widest block mb-1 text-[9px]"
        >
          Architecture Output
        </span>
        <div
          className="font-semibold px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-[11px]"
          style={{ color }}
        >
          {step.output}
        </div>
      </div>
    </div>
  </motion.div>
);

const HArrow = ({ color, reversed }: { color: string; reversed: boolean }) => (
  <div
    className="flex-shrink-0 flex items-center"
    style={{ width: 44, opacity: 0.55 }}
  >
    <svg
      width="44"
      height="16"
      viewBox="0 0 44 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: reversed ? 'scaleX(-1)' : 'none' }}
    >
      <line x1="2" y1="8" x2="36" y2="8" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M33 3L41 8L33 13" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  </div>
);

const SnakeBridge = ({ color, fromRight }: { color: string; fromRight: boolean }) => {
  const c60 = `${color}60`;
  return (
    <div className="relative w-full flex-shrink-0" style={{ height: 72 }}>
      <div
        className="absolute top-0"
        style={{
          width: 2,
          height: '50%',
          backgroundColor: c60,
          ...(fromRight ? { right: 0 } : { left: 0 }),
        }}
      />
      <div
        className="absolute left-0 right-0"
        style={{ height: 2, backgroundColor: c60, top: '50%' }}
      />
      <div
        className="absolute bottom-0"
        style={{
          width: 2,
          height: '50%',
          backgroundColor: c60,
          ...(fromRight ? { left: 0 } : { right: 0 }),
        }}
      />
      <div
        className="absolute"
        style={{
          width: 10,
          height: 10,
          borderRadius: '50%',
          border: `2px solid ${color}`,
          background: '#020617',
          top: 0,
          transform: `translate(${fromRight ? '50%' : '-50%'}, -50%)`,
          ...(fromRight ? { right: 0 } : { left: 0 }),
          opacity: 0.75,
        }}
      />
      <div
        className="absolute"
        style={{
          width: 10,
          height: 10,
          borderRadius: '50%',
          border: `2px solid ${color}`,
          background: '#020617',
          bottom: 0,
          transform: `translate(${fromRight ? '-50%' : '50%'}, 50%)`,
          ...(fromRight ? { left: 0 } : { right: 0 }),
          opacity: 0.75,
        }}
      />
    </div>
  );
};

export const SnakePipeline = ({ workflow }: { workflow: WorkflowData }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) =>
      setContainerWidth(entry.contentRect.width)
    );
    ro.observe(el);
    setContainerWidth(el.getBoundingClientRect().width);
    return () => ro.disconnect();
  }, []);

  const CARD_W = 240;
  const GAP_W = 40;
  const PAD = 48;
  const PHASE_HEADROOM = 28;

  const flatItems = flattenSteps(workflow);

  const innerW = Math.max(containerWidth - PAD, CARD_W);
  const cardsPerRow = Math.max(1, Math.floor((innerW + GAP_W) / (CARD_W + GAP_W)));

  const rows: typeof flatItems[] = [];
  for (let i = 0; i < flatItems.length; i += cardsPerRow) {
    rows.push(flatItems.slice(i, i + cardsPerRow));
  }

  return (
    <div ref={containerRef} className="w-full">
      <div
        className="relative bg-[#050814] border border-white/5 shadow-inner blueprint-grid"
        style={{ borderRadius: '3rem', padding: '32px 24px 28px' }}
      >
        {rows.map((row, rowIdx) => {
          const isEven = rowIdx % 2 === 0;
          const displayRow = isEven ? row : [...row].reverse();

          return (
            <React.Fragment key={rowIdx}>
              {rowIdx > 0 && (
                <SnakeBridge
                  color={workflow.color}
                  fromRight={(rowIdx - 1) % 2 === 0}
                />
              )}

              <div
                className="flex items-start"
                style={{
                  justifyContent: isEven ? 'flex-start' : 'flex-end',
                  paddingTop: displayRow.some(item => item.isPhaseFirst)
                    ? PHASE_HEADROOM
                    : 8,
                  gap: 0,
                }}
              >
                {displayRow.map((item, cardIdx) => {
                  const globalIdx =
                    rowIdx * cardsPerRow +
                    (isEven ? cardIdx : row.length - 1 - cardIdx);
                  const isLastCard = cardIdx === displayRow.length - 1;

                  return (
                    <React.Fragment key={item.step.id}>
                      <PipelineCard
                        step={item.step}
                        color={workflow.color}
                        phaseTitle={item.phaseTitle}
                        isPhaseFirst={item.isPhaseFirst}
                        index={globalIdx}
                      />
                      {!isLastCard && (
                        <div className="self-center flex-shrink-0">
                          <HArrow color={workflow.color} reversed={!isEven} />
                        </div>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </React.Fragment>
          );
        })}
      </div>

      <style>{`
        .blueprint-grid {
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 30px 30px;
        }
      `}</style>
    </div>
  );
};
