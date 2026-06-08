1. Platform Overview
GenQuantis is an enterprise-grade, end-to-end Generative Intelligence platform engineered specifically for the demands of modern pharmaceutical research and computational drug discovery. It unifies eight specialized AI-powered application modules into a single, cohesive, web-accessible environment — eliminating the fragmented toolchains, data handoff bottlenecks, and infrastructure overhead that have historically slowed the drug discovery pipeline.
The Problem GenQuantis Solves
Traditional drug discovery is slow, expensive, and heavily dependent on physical laboratory experimentation. Identifying a viable lead compound, validating its binding behavior, confirming its synthesizability, predicting its safety profile, and verifying its novelty against patent literature are discrete, sequential processes — each relying on separate software tools, separate teams, and separate data formats. The result is a pipeline that takes years and hundreds of millions of dollars to produce a single clinical candidate.
GenQuantis compresses this pipeline by replacing each of these sequential laboratory and computational steps with AI-driven modules that operate in minutes, share data natively, and learn continuously from the scientific literature and proprietary assay data.
What the Platform Does
At its core, GenQuantis performs five critical functions across the drug discovery lifecycle:
1. Generative Molecular Design
The platform's generative AI engine designs entirely novel small molecule candidates from scratch, constrained by user-defined binding site geometry, pharmacophoric requirements, and synthetic feasibility rules. Rather than screening a fixed library of existing compounds, GenQuantis generates new chemical matter on demand — producing lead candidates that have never existed before.
2. Physics-Based Validation
Generated candidates are not simply scored by a statistical model and passed along. GenQuantis subjects them to rigorous physics-based validation through its MDFlow molecular dynamics engine and Alchemistry free energy perturbation module. These tools simulate the actual physical behavior of candidate molecules in the presence of their target protein — capturing binding stability, conformational flexibility, residence time, and relative binding affinity with quantitative precision.
3. Synthetic Accessibility and Route Planning
A molecule that cannot be synthesized has no commercial value. The Retrosynthesis module traces actionable, multi-step synthetic pathways for any generated candidate — mapping routes to commercially available building blocks across 2.4 million reaction templates — and the generative engine itself filters candidates against synthetic feasibility catalogs in real time.
4. Predictive ADMET and Property Modeling
The Model Training module enables researchers to build and deploy custom quantitative structure-activity relationship (QSAR) models trained on proprietary biological assay data. These models screen entire compound libraries for solubility, toxicity, bioavailability, binding affinity, and other critical ADMET properties — returning predictions in milliseconds rather than weeks.
5. Intellectual Property Intelligence
The PACE Patent Miner module applies computer vision and natural language processing to automatically extract structured chemical and SAR data from patent documents and scientific literature — providing researchers with a continuously updated competitive landscape and ensuring that generated candidates are positioned for immediate IP protection.
Platform Architecture
GenQuantis is organized as a modular application suite accessible from a unified sidebar navigator. Each module in the sidebar corresponds to a distinct stage of the discovery pipeline:
Module	Pipeline Stage	Core Technology
Generative Chemistry	Hit Generation & Design	Generative AI, Pharmacophore Modeling
MDFlow	Binding Validation	Molecular Dynamics Simulation
Model Training	ADMET Screening	QSAR / Machine Learning
Retrosynthesis	Synthetic Planning	AI Retrosynthetic Tree Search
Alchemistry	Lead Optimization	Free Energy Perturbation (FEP)
Nacho01 (ML Docking)	Deep Learning Inference	Graph Neural Networks, ChemBERTa
MolSpace	Chemical Space Exploration	UMAP, Morgan Fingerprints
PACE Patent Miner	IP Intelligence	Computer Vision, NLP

Intended Users
GenQuantis is designed for use by medicinal chemists, computational biologists, structural biologists, cheminformaticians, and drug discovery project teams at pharmaceutical companies, biotechnology firms, and academic research institutions. The platform requires no local software installation or infrastructure management — all computation runs on GenQuantis cloud infrastructure with GPU acceleration enabled by default.
How to Use This Manual
This manual is organized by application module, corresponding directly to the sidebar navigation of the GenQuantis platform. Each module section documents:
•	Functional Overview — what the module does and when to use it
•	Input Fields — the purpose, data type, format, and example values for every input
•	Expected Outputs — the specific results, reports, and data artifacts the module produces
•	Reference Screenshots — annotated UI captures for visual guidance
Users are encouraged to read the Generative Chemistry section first, as it serves as the primary entry point for most discovery campaigns and its outputs feed directly into the MDFlow, Alchemistry, and MolSpace modules.
2. Generative Chemistry
Overview
The Generative Chemistry module is the primary entry point for AI-driven drug discovery campaigns. It leverages generative AI to design novel small molecule candidates by learning from user-defined structural and pharmacological constraints. The system explores a vast chemical space to propose high-affinity lead compounds that satisfy binding, synthetic feasibility, and novelty criteria — all in seconds.
**Navigation:** Applications → Generative Chemistry → Experiment Setup Tab

2.1 Target Profile Specification
The Target Profile Specification section is where researchers define the biological and structural constraints that guide the generative model. Every field in this section directly shapes the chemical search space explored by the AI.
 
Figure 2.1a — Generative Chemistry Overview and Design Methodology Selection

2.1.1 Design Methodology
This selector determines the foundational strategy the generative engine uses to design candidate molecules. Two mutually exclusive methodologies are available:
Methodology	Description	Best Used When
Structure Based (SBDD)	Targets explicit 3D macromolecular coordinate pockets sourced from PDB files. The AI designs molecules to physically complement the binding site geometry.	A high-quality 3D crystal structure of the target protein is available.
Ligand Based (LBDD)	Optimizes activity profiles based on chemical similarity mappings derived from known active compounds.	No protein structure is available, but a set of known active ligands exists.

Input Type: Radio Button Selection
Expected Input: Select one methodology card before proceeding.
Output Effect: Changes the set of downstream input fields that become active (e.g., selecting SBDD activates the Binding Site Coordinate field).

 
Figure 2.1b — Target Profile Input Fields and Constraint Toggles

2.1.2 Binding Site Coordinate
Purpose: Precisely defines the spatial region on the target protein where the candidate molecule should bind.
Property	Detail
Input Type	Free-text field
Data Format	Pocket descriptor or residue identifiers
Example Values	ATP pocket, ASP84 / GLY86, Hinge region, Catalytic triad SER-HIS-ASP
Availability	Active only when SBDD methodology is selected

Expected Output: The generative model uses this coordinate descriptor to restrict molecule placement and docking orientation to the specified pocket, ensuring generated candidates are geometrically compatible with the binding site.

2.1.3 Pharmacophore Queries
Purpose: Defines the abstract chemical features (pharmacophores) that must be present in generated molecules to interact effectively with the target. This acts as a chemical blueprint for the AI.
Property	Detail
Input Type	Free-text field
Data Format	Comma-separated pharmacophoric feature descriptors
Example Values	aromatic ring + hydrogen donor, hydrophobic group + negative ionizable, H-bond acceptor + pi-pi stacking

Expected Output: Generated molecules will be scored and filtered to ensure they contain the specified pharmacophoric features, increasing the probability of target engagement.

2.1.4 Mandatory Residue Interactions
Purpose: Specifies explicit molecular interactions that the generated compound must form with named amino acid residues in the target protein. This is a hard constraint — candidates failing to satisfy these interactions are discarded.
Property	Detail
Input Type	Free-text field (comma separated)
Data Format	[Interaction Type] with [Residue Code]
Example Values	H bond with Lys72, Pi stacking with Phe81, Salt bridge with Asp189

Expected Output: The AI generates molecules that are computationally verified to form the specified interaction patterns, resulting in candidates with a high predicted probability of binding to the defined residues.

2.1.5 Desired Anchor Points
Purpose: Identifies secondary interaction zones within the binding pocket that the candidate molecule should occupy to maximize binding affinity and selectivity.
Property	Detail
Input Type	Free-text field (comma separated)
Data Format	Named regions or sub-pockets within the binding site
Example Values	hydrophobic pocket, catalytic center, solvent-exposed channel, allosteric site

Expected Output: Candidate molecules will be evaluated for sub-pocket occupancy, giving preference to structures that fill multiple anchor regions simultaneously, which is associated with improved potency and selectivity profiles.

2.1.6 Constraint Toggles
Two boolean constraints govern the quality filters applied to all generated molecules:
Require Synthetic Feasibility
Property	Detail
Input Type	Toggle Switch (ON / OFF)
Default State	ON (Enabled)
Mechanism	Cross-references generated SMILES against commercial starting material catalogs and known synthetic reaction templates
Expected Output (ON)	Only molecules that can be plausibly synthesized from commercially available precursors via known reaction pathways are returned. This significantly improves the practical utility of the output.
Expected Output (OFF)	The AI explores a wider chemical space with no synthetic feasibility filter. Useful for theoretical exploration or when internal synthesis capabilities are extensive.

Enforce Strict Novelty
Property	Detail
Input Type	Toggle Switch (ON / OFF)
Default State	ON (Enabled)
Mechanism	Scores each candidate molecule against a corpus of pre-existing cheminformatics patent literature
Expected Output (ON)	Only molecules not previously disclosed in patent databases are returned, ensuring the output is immediately protectable intellectual property.
Expected Output (OFF)	Known compounds may appear in the output. Useful when benchmarking against prior art or for generative exploration without IP constraints.


2.2 Seed Molecule Validation
Before launching a full generative campaign, users can validate a known reference molecule (seed) against cheminformatics physics rules. This ensures the seed molecule is a chemically valid starting point and that the platform can parse and process it correctly.
 
Figure 2.2 — Seed Molecule Validation Interface
2.2.1 Molecular Input
Property	Detail
Input Type	Free-text field
Data Format	SMILES (Simplified Molecular Input Line Entry System) string
Example Values	CCO (Ethanol), CC(=O)Nc1ccc(O)cc1 (Paracetamol), c1ccccc1 (Benzene)
Action Button	Validate & Process

Expected Output: Upon submission, the system performs a series of cheminformatics validation checks including:
•	SMILES string parsing and canonicalization
•	Valence and ring closure verification
•	Molecular weight, LogP, and TPSA calculation
•	Lipinski's Rule of Five compliance check
A validation report is displayed indicating whether the molecule is a valid seed candidate, along with computed physicochemical properties.

2.3 Module Output Summary
Upon executing a generative campaign (via the Initialize Drug Discovery Campaign button), the platform returns:
•	A ranked list of novel candidate molecules in SMILES format
•	Predicted binding scores and affinity metrics
•	Synthetic accessibility scores (SA Score)
•	Patent novelty flags for each candidate
•	An exportable compound table for downstream processing
 
3. MDFlow — Molecular Dynamics Simulation
Overview
MDFlow enables researchers to model and simulate the dynamic behavior of protein-ligand complexes under realistic physical force fields. Rather than treating molecular interactions as static, MDFlow captures the time-evolving conformational landscape of a system — revealing binding stability, residence times, induced fit effects, and transient interaction patterns that static docking cannot detect.
**Navigation:** Applications → MDFlow

3.1 Protein Upload
The first step is to provide the 3D structural data of the target macromolecule.
 
Figure 3.1 — MDFlow Module Overview: Protein Upload and Simulation Results Viewer
Input: Protein Structure File
Property	Detail
Input Type	File Upload (Drag & Drop or Click to Browse)
Accepted Formats	.PDB (Protein Data Bank format), .MOL2 (Tripos Mol2 format)
Data Requirements	File should contain complete heavy atom coordinates. Hydrogen atoms are added automatically by the system during preprocessing.
Recommended Source	RCSB Protein Data Bank (rcsb.org) or internally solved crystal structures

Expected Output: The uploaded protein structure is parsed, preprocessed (protonation state assignment, missing residue completion), and loaded into the simulation engine. A structural summary confirming the number of residues, chains, and ligand co-factors detected is displayed.

3.2 Ligand Selection
Once the protein is uploaded, the user selects a ligand to simulate in complex with the protein.
Input: Select a Molecule (Dropdown)
Property	Detail
Input Type	Dropdown Selection
Data Source	Populated from the candidate molecules generated in the Generative Chemistry module
Example Values	Candidate IDs from a prior generative campaign (e.g., GQ-0042, GQ-0087)

Expected Output: The selected ligand is automatically prepared for simulation (energy minimization, charge assignment) and docked into the protein binding site to form the initial simulation complex.

3.3 Simulation Parameters
 
Figure 3.2 — MDFlow Simulation Parameter Configuration Panel
These parameters define the physical conditions and computational model governing the MD simulation.
3.3.1 Simulation Time (ns)
Property	Detail
Input Type	Numeric field
Unit	Nanoseconds (ns)
Example Value	10
Recommended Range	10–500 ns depending on system complexity and research objective

Expected Output: The simulation runs for the specified duration of simulated physical time. Longer simulations capture slower conformational events (e.g., loop movements, allosteric changes) but require proportionally more compute time.
3.3.2 Temperature (K)
Property	Detail
Input Type	Numeric field
Unit	Kelvin (K)
Example Value	300 (approximately 27°C / 80°F — near physiological temperature)
Common Values	298 (room temperature), 300 (standard MD), 310 (body temperature)

Expected Output: The thermostat maintains the system at the specified temperature throughout the simulation using velocity rescaling algorithms. This directly affects molecular flexibility, diffusion rates, and the energy landscape explored.
3.3.3 Solvent Model
Property	Detail
Input Type	Dropdown Selection
Available Models	TIP3P, TIP4P, SPC/E
Default	TIP3P

Expected Output: The protein-ligand complex is solvated in an explicit water box using the selected water model. TIP3P is the industry standard for most biomolecular simulations and provides a good balance of accuracy and computational efficiency.
3.3.4 Force Field
Property	Detail
Input Type	Dropdown Selection
Available Force Fields	AMBER14, CHARMM36, GROMOS96
Default	AMBER14

Expected Output: All atomic interactions (bonds, angles, torsions, electrostatics, van der Waals) are computed according to the selected force field parameters. AMBER14 is recommended for protein-ligand systems and is validated against a broad range of experimental data.

3.4 Module Output Summary
After clicking Run MD Simulation, the Simulation Results Viewer (Panel 4) populates with:
•	RMSD Plot: Root Mean Square Deviation over time — tracks overall structural stability
•	RMSF Plot: Root Mean Square Fluctuation per residue — identifies flexible vs. rigid regions
•	Protein-Ligand Contact Map: Heatmap of atomic contacts throughout the trajectory
•	Binding Free Energy Estimate (MM-GBSA): Approximate binding affinity derived from the trajectory
•	Trajectory Visualization: Interactive 3D molecular viewer for visual inspection of the simulation
 
4. Model Training — ADMET & QSAR Modeling
Overview
The Model Training module enables researchers to build, fine-tune, and deploy predictive machine learning models tailored to their proprietary biological datasets. Using quantitative structure-activity relationship (QSAR) methodology, this module trains models that can predict physicochemical and biological properties of novel compounds — dramatically reducing the cost and time associated with physical screening campaigns.
**Navigation:** Applications → Model Training

4.1 Step 1: Data Selection — Upload Dataset
 
Figure 4.1 — Model Training: Data Upload and Pipeline Overview
Input: Dataset File
Property	Detail
Input Type	File Upload (Drag & Drop or Browse)
Accepted Formats	.CSV (Comma-Separated Values), .SDF (Structure-Data File)
Required Columns	A column containing SMILES strings and at least one column containing the biological activity values to be predicted
Recommended Dataset Size	Minimum 50 compounds; >500 recommended for high-accuracy models

Expected Output: The dataset is ingested and automatically preprocessed. A preprocessing log displays in the right panel showing:
•	Molecular valence validation (via RDKit)
•	SMILES canonicalization
•	Duplicate and invalid structure removal
•	Dataset statistics (compound count, activity distribution)

4.2 Step 2: Features & Configuration
 
Figure 4.2 — Model Training: Feature Configuration and Target Property Setup
4.2.1 Target Property Name
Property	Detail
Input Type	Free-text field
Data Format	Must exactly match the column header in the uploaded dataset
Example Values	Solubility, IC50, Toxicity, LogP, ADMET_score, Binding_Affinity

Expected Output: The model training pipeline designates the specified column as the dependent variable (y). All other molecular descriptors become independent variables (X) used for learning.
4.2.2 Features Utilized (Read-Only Display)
This panel displays the chemical feature representations automatically computed from the uploaded molecules and used as inputs to the model:
Feature Type	Description
Physicochemical Descriptors	MW, LogP, TPSA, HBD/HBA counts, Rotatable Bonds
2D Fingerprints	Morgan/ECFP fingerprints (1024-bit), MACCS keys
Topological Indices	Wiener index, Zagreb indices, graph-theoretic descriptors
Weight & Lipophilicity	Combined descriptors for ADMET profile modeling

Expected Output: The model is trained using the concatenated feature matrix. Users can proceed to Step 3 (Evaluation) to review performance metrics including R², RMSE, cross-validation AUC, and a predicted vs. actual scatter plot.

4.3 Module Output Summary
Upon training completion, the platform delivers:
•	A serialized, deployable predictive model
•	Cross-validation performance report (R², RMSE, ROC-AUC where applicable)
•	Feature importance ranking
•	Applicability domain assessment (identifies compounds similar to the training set)
•	Batch prediction capability for screening new compound libraries
 
5. Retrosynthesis
Overview
The Retrosynthesis module applies AI-driven retrosynthetic analysis to decompose a complex target molecule into simpler, commercially available precursors via a series of known chemical transformations. GenQuantis maps over 2.4 million reaction templates to identify the most efficient, cost-effective, and experimentally validated synthetic routes.
**Navigation:** Applications → Retrosynthesis

5.1 Specify Target Molecule
 
Figure 5.1 — Retrosynthesis: Target Molecule Input and Route Identification
Input: Target Molecule SMILES
Property	Detail
Input Type	Free-text field
Data Format	SMILES (Simplified Molecular Input Line Entry System) string
Example Values	CC(=O)Nc1ccc(O)cc1 (Paracetamol), CC12CCC3C(C1CCC2O)CCC4=CC(=O)CCC34C (Testosterone)
Action Button	Identify Routes

Expected Output: The engine performs a multi-step retrosynthetic tree search and returns:
•	Ranked Synthetic Routes: Multiple complete synthesis pathways ranked by estimated cost, step count, and reaction confidence score
•	Step-by-Step Breakdown: Each disconnection is displayed with the required reagents, reaction conditions (solvent, temperature, catalyst), and the associated reaction template
•	Building Block Sourcing: Each terminal precursor is linked to commercial supplier availability and estimated cost
•	Route Complexity Score: A numeric score representing the overall difficulty of executing the route
 
6. Alchemistry — FEP Lead Optimization
Overview
Alchemistry implements Free Energy Perturbation (FEP) methodology to calculate the relative binding free energies (ΔΔG) between congeneric ligand series. This enables precise, physics-based lead optimization — quantitatively predicting how small structural modifications affect drug binding affinity without running physical experiments.
**Navigation:** Applications → Alchemistry

6.1 Input Configuration
 
Figure 6.1 — Alchemistry: Protein Structure and Ligand Dataset Upload
6.1.1 Protein Structure Upload
Property	Detail
Input Type	File Upload (Drag & Drop or Browse)
Accepted Format	.PDB only
Requirements	Structure must include the binding site coordinates; a co-crystallized ligand is recommended but not required
Label	"Upload Target Protein (PDB)"

Expected Output: The protein is parsed, protonated, and prepared for FEP calculations. A system status indicator confirms successful structure loading.
6.1.2 Ligand Dataset Upload
Property	Detail
Input Type	File Upload (Drag & Drop or Browse)
Accepted Formats	.SDF (Structure-Data File), .CSV (with SMILES column)
Requirements	A series of structurally related (congeneric) ligands with known or hypothesized activity data
Label	"Upload Ligand Series (SDF/CSV)"

Expected Output: Ligands are parsed, enumerated, and prepared for perturbation path mapping.

6.2 Module Output Summary
After clicking Start Alchemical Pipeline, the platform computes and returns:
•	ΔΔG Matrix: Pairwise relative binding free energy differences for all ligand pairs
•	Absolute ΔG Estimates: Absolute binding free energies calibrated against reference compounds
•	Convergence Analysis: Statistical error bars and hysteresis checks confirming simulation reliability
•	Lead Compound Ranking: Ligands ranked by predicted binding affinity improvement over the reference compound
•	Selectivity Profile: Cross-target ΔG estimates where multiple protein structures are provided
 
7. Nacho01 — ML Docking & Deep Learning Inference
Overview
Nacho01 is GenQuantis's state-of-the-art deep learning inference engine. It enables users to fine-tune pre-trained foundation models — including Graph Neural Networks (GNNs) and chemical transformers — on proprietary molecular datasets. Once fine-tuned, the model can infer biological properties of new compounds in milliseconds, replacing expensive physical assays with accurate computational predictions.
**Navigation:** Applications → Nacho01 (ML Docking)

7.1 Step 01: Dataset Upload
 
Figure 7.1 — Nacho01: Dataset Upload and System Configuration
Input: Molecular Dataset
Property	Detail
Input Type	File Upload (Drag & Drop or Click to Browse)
Accepted Formats	.CSV (with SMILES column), .SDF
Format Badges	CSV and SDF badges displayed in the upload panel header for quick reference

System Configuration Panel (Right Side — Read-Only)
Parameter	Value
Model Precision	FP32 / BF16 (automatically selected based on dataset size)
GPU Acceleration	Enabled (A100)
Data Dimensions	Auto-detected from uploaded file

Expected Output: The dataset is loaded into GPU memory. A preprocessing log in the right panel reports:
•	RDKit validation of molecular structures
•	3D conformer generation via ETKDGv3 engine
•	Morgan fingerprint generation (1024-bit)
•	Data split confirmation (train/validation/test)

7.2 Step 02: Fine-Tuning Configuration
 
Figure 7.2 — Nacho01: Fine-Tuning Configuration and Architecture Selection
7.2.1 Target Property Column
Property	Detail
Input Type	Free-text field
Data Format	Must exactly match a column header in the uploaded dataset
Example Values	sol (aqueous solubility), binding_affinity, logp, IC50_nM

Expected Output: The model learns to predict the values in this column. The field must contain continuous numerical values (for regression tasks) or binary labels (for classification tasks).
7.2.2 Foundation Architecture
Property	Detail
Input Type	Dropdown Selection
Available Options	GNN (Graph Neural Network), ChemBERTa, MPNN (Message Passing Neural Network)
Default	GNN (Graph Neural Network)

Architecture Notes:
*Nacho01 utilizes a hybrid graph-transformer architecture. Fine-tuning the attention heads on proprietary data allows the model to gain domain-specific sensitivity while retaining the chemical "commonsense" learned from large pre-training corpora.*
Expected Output: The model fine-tuning process initializes, with real-time training metrics (loss curves, validation RMSE) displayed. Upon completion, the fine-tuned model is saved and available for batch inference.

7.3 Module Output Summary
Upon fine-tuning completion:
•	A deployable fine-tuned model checkpoint
•	Training and validation loss curves
•	Held-out test set predictions vs. actuals (scatter plot)
•	Inference endpoint for batch screening of new compound libraries
•	SHAP feature attribution for model interpretability
 
8. MolSpace — Chemical Space Explorer
Overview
MolSpace provides an interactive visualization platform for exploring the chemical space of large molecular libraries. It applies UMAP (Uniform Manifold Approximation and Projection) dimensionality reduction on high-dimensional Morgan fingerprints to generate a 2D or 3D interactive chemical map — enabling researchers to visually identify scaffold clusters, diversity gaps, and novel bioactive regions.
**Navigation:** Applications → MolSpace

8.1 Initialize Chemical Space
 
Figure 8.1 — MolSpace: Chemical Space Initialization Interface
Input: Molecular Library File
Property	Detail
Input Type	File Upload (Drag & Drop or Click to Browse)
Accepted Formats	SMILES flat file (.smi), .SDF multi-molecule file
Recommended Size	100 to 10,000,000+ compounds supported
Action Button	Start Mapping

Expected Output: The platform processes the molecular library through the following pipeline:
1.	SMILES parsing and validation
2.	Morgan fingerprint generation (radius 2, 1024-bit)
3.	UMAP dimensionality reduction to 2D coordinates
4.	Density clustering (HDBSCAN) to identify scaffold families
The result is an interactive 2D chemical space map where:
•	Each point represents one molecule
•	Spatial proximity indicates chemical similarity
•	Color coding differentiates activity clusters, scaffold families, or user-defined properties
•	Clicking a point displays the molecule's structure, SMILES, and associated properties
•	Users can select regions of interest for export or downstream processing

8.2 Module Output Summary
•	Interactive UMAP projection of the full molecular library
•	Scaffold cluster assignments for all compounds
•	Diversity metrics (Tanimoto-based library diversity score)
•	Exportable compound subsets by cluster, activity range, or user-defined filters
•	Direct pipeline integration to pass selected compounds to Generative Chemistry or Retrosynthesis
 
9. PACE Patent Miner
Overview
PACE Patent Miner deploys advanced computer vision and natural language processing models to automatically extract chemical intelligence from unstructured patent documents, scientific literature, and clinical trial reports. It reconstructs tabular Structure-Activity Relationship (SAR) data directly from figures and text — a process that previously required days of manual extraction.
**Navigation:** Applications → PACE Patent Miner

9.1 Upload Patent PDF
 
Figure 9.1 — PACE Patent Miner: Document Upload and Processing Interface
Input: Patent or Literature Document
Property	Detail
Input Type	File Upload (Drag & Drop or Click to Browse)
Accepted Formats	.PDF, .PNG, .JPG
Maximum File Size	50 MB per document
Bulk Upload	Multiple documents can be queued via the New Analysis button

Processing Logs Panel
Immediately after upload, the Processing Logs panel (left side) displays real-time extraction progress:
Log Entry	Meaning
Awaiting document...	No document uploaded yet
Parsing document structure...	Document layout analysis in progress
Extracting chemical structures...	Visual neural net scanning figures and schemes
Reconstructing SAR table...	NLP model assembling activity data from text
Extraction complete	Results ready for review and export

Expected Output: Upon processing completion, the platform delivers:
•	Reconstructed SAR Table: A structured table of compound identifiers, SMILES structures, and associated biological activity values extracted from the document
•	Chemical Structure Gallery: All chemical structures identified in the document, rendered with SMILES and compound IDs
•	Key Claim Extraction: The primary chemical claims and scope of protection identified from the patent claims section
•	Comparative Novelty Report: Cross-reference against the GenQuantis Generative Chemistry output to identify freedom-to-operate opportunities
•	Export Options: Full SAR dataset exportable as .CSV or .SDF for immediate use in Model Training or MolSpace
