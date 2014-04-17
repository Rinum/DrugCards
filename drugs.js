var drug_list = [
	'Clopidogrel',
	'Amoxicillin',
	'Atorvastatin',
	'Diltiazem',
	'Drospirenone / ethinyl estradiol',
	'Atenolol',
	'Glyburide',
	'Hydrochlorothiazide/Triamterene',
	'Enoxaparin',
	'Levothyroxine',
	'Enalapril',
	'Conjugated Estrogens',
	'Amlodipine',
	'Fluoxetine',
	'Trimethoprim/Sulfamethoxazole',
	'Verapamil',
	'Warfarin',
	'Losartan',
	'Amiodarone',
	'Cephalexin',
	'Chlorthalidone',
	'Sitagliptin',
	'Furosemide',
	'Hydrochlorothiazide',
	'Metoprolol',
	'Lisinopril',
	'Albuterol HFA',
	'Metformin',
	'Montelukast',
	'Prednisone',
	'Terazosin',
	'Tamoxifen',
	'Ciprofloxacin',
	'Insulin (Regular and NPH)',
	'Valacyclovir',
	'Allopurinol',
	'Sildenafil',
	'Gabapentin',
	'Phenytoin',
	'Tiotropium',
	'Isoniazid',
	'Ketoconazole',
	'Clonidine',
	'Medroxyprogesterone',
	'Metronidazole',
	'Tolterodine',
	'Atazanavir',
	'Sertraline',
	'Tramadol',
	'Benazepril',
	'Carbamazepine',
	'Clarithromycin',
	'Fluticasone / Salmeterol HFA',
	'Clotrimazole',
	'Cyclobenzaprine',
	'Gemfibrozil',
	'Digoxin',
	'Isosorbide Mononitrate',
	'Latanoprost',
	'Nitroglycerin',
	'Glipizide',
	'Pioglitazone',
	'Insulin Lispro',
	'Amitriptyline',
	'Niacin',
	'Lansoprazole',
	'Fexofenadine',
	'Flunisolide',
	'Ketorolac',
	'Methylprednisolone',
	'Glatiramer injection',
	'Potassium Chloride',
	'Timolol',
	'Valproic Acid',
	'Azithromycin',
	'Beclomethasone',
	'Benztropine',
	'Bupropion',
	'Tretinoin',
	'Doxycycline',
	'Fluconazole',
	'Fluticasone',
	'Duloxetine',
	'Risperidone',
	'Aripiprazole',
	'Alendronate',
	'Tenofovir',
	'Prochlorperazine',
	'Raloxifene',
	'Varenecline',
	'Doxazosin',
	'Venlafaxine',
	'Buspirone',
	'Esomeprazole',
	'Levofloxacin',
	'Lithium',
	'Olanzapine',
	'Donepezil',
	'Simvastatin',
	'Cefdinir',
	'Amoxicillin/Clavulanate Potassium',
	'Darunavir',
	'Oxybutynin',
	'Clindamycin',
	'Hydrocodone/acetaminophen 5mg/500mg',
	'Sumatriptan',
	'Rifampin',
	'Quetiapine',
	'Fenofibrate',
	'Insulin Glargine',
	'Eszopiclone',
	'Escitalopram',
	'Lurasidone',
	'Etanercept',
	'Exenatide',
	'Tamsulosin',
	'Ezetimibe/simvastatin',
	'Lisdexamfetamine',
	'Zolpidem',
	'Ziprasidone'
];

var data = [
	{
		"Generic Name": "Amoxicillin",
		"Brand Name": ["Amoxil"],
		"Indications": ["Ear, nose, and throat infections"],
		"Dosage Forms": ["Tablet","Tablet Chewable","Tablet Extended Release","Capsule","Powder for Suspension"],
		"Dosing Regimen": ["500 mg by mouth every 12 hours"],
		"Mechanism of Action": ["Inhibits bacterial cell wall mucopeptide synthesis."],
		"Drug Interactions": ["Probenecid - Probenecid decreases the renal tubular secretion of amoxicillin. Concurrent use with amoxicillin may result in increased and prolonged blood levels."],
		"Side Effects": ["Nausea","Hypersensitivity"],
		"Monitoring Parameters": ['SCr','LFTs','Bacteriologic studies should be done to determine causative organism and their respective susceptibility'],
		"Counseling Points": [
			"Patients should be counseled that antibacterial drugs, including amoxicillin, should only be used to treat bacterial infections.",
			"Patients should be told that although it is common to feel better early in the course of therapy, the medication should be taken exactly as directed."
		],
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Atorvastatin",
		"Brand Name": ["Lipitor"],
		"Indications": ["Hypercholesterolemia"],
		"Dosage Forms": ["Tablet"],
		"Dosing Regimen": ["10 mg by mouth once daily"],
		"Mechanism of Action": ["Selective, competitive inhibitor of HMG-CoA reductase, the rate-limiting enzyme that converts HMG-CoA to mevalonate, a precursor of sterols, including cholesterol."],
		"Drug Interactions": ["Rifampin (CYP3A4 Inhibitor) - Decreases plasma concentration, decreasing the pharmacologic effect."],
		"Side Effects": ["Arthralgia (6.9%)","Diarrhea (6.8%)","Nausea (4%)"],
		"Monitoring Parameters": ["LFTs", "Lipid Levels"],
		"Counseling Points": ["Promptly report unexplained muscle pain, tenderness, or weakness, particularly if accompanied by malaise or fever.", "Coadministration with large quantities of grapefruit juice (at least 1 quart daily) may result in increased plasma levels of atorvastatin, increasing the risk of myopathy. Avoid concurrent use.", "Contact their health care provider if they become pregnant, and advise the patient of the harmful effects to the developing fetus."],
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Diltiazem",
		"Brand Name": ["Cardizem"],
		"Indications": ["Hypertension"],
		"Dosage Forms": ["Tablet", "Tablet Extended Release", "Capsule Extended Release"],
		"Dosing Regimen": ["180 mg by mouth once daily, extended release"],
		"Mechanism of Action": ["Inhibits Ca Influx in cardiac and smooth muscles resulting in vasodilation of vascular smooth muscle and a decrease in peripheral vascular resistance."],
		"Drug Interactions": ["Rifampin (CYP3A4 Inhibitor) - Decreases plasma concentration, decreasing the pharmacologic effect."],
		"Side Effects": ["Headache (5%)", "Edema (5%)"],
		"Monitoring Parameters": ["LFTs", "Blood Pressure", "Heart Rate", "SCr"],
		"Counseling Points": ["Caution patient to swallow ER products whole and not to crush or chew.", "Report to physician if any of the following occur: irregular heart beat, SOB, swelling of hands or feet, pronounced dizziness, constipation, nausea, or hypotension."],
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Drospirenone / ethinyl estradiol",
		"Brand Name": ["Yaz"],
		"Indications": ["Contraceptive"],
		"Dosage Forms": ["Tablet"],
		"Dosing Regimen": ["One tablet by mouth daily. 3mg/20mcg"],
		"Mechanism of Action": ["Inhibits ovulation by supression gonadotropins, FSH and LH. Thickens the mucus in the cervix, inhibits sperm penetration, and alters edometrium, inhbiting implantation."],
		"Drug Interactions": ["Captopril (ACE inhibitors). With concurrent use, serum potassium concentrations may be elevated, increasing the risk of hyperkalemia."],
		"Side Effects": ["Breast Tenderness", "Nausea", "Headache", "Weight Gain"],
		"Monitoring Parameters": ["Blood Pressure in patients with hypertension", "Blood glucose in diabetic patients"],
		"Counseling Points": [
			"This product does not protect against HIV/Aids infections or any other STDs",
			"Use a second form of birth control during the first week of oral contraceptive use or during broad spectrum antibiotic use",
			"If you miss 1 dose of this medicine, take it as soon as you remember. Take your next dose at the regular time. This means you may take 2 doses on the same day. You do not need to use a backup form of birth control if you only miss 1 pill."
		],
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Atenolol",
		"Brand Name": ["Tenormin"],
		"Indications": ["Hypertension"],
		"Dosage Forms": ["Tablet"],
		"Dosing Regimen": ["50 mg by mouth once daily"],
		"Mechanism of Action": ["Cardioselective Beta 1 receptor blocker, preventing norepinephrine from binding. Results in lower HR, lower BP, and lower Oxygen demand."],
		"Drug Interactions": ["Rifampin - Decreases plasma concentration, decreasing the pharmacologic effect."],
		"Side Effects": ["Nausea (4%)", "Bradycardia (3%)"],
		"Monitoring Parameters": ["Blood Pressure", "Heart Rate"],
		"Counseling Points": ["May cause dizziness or drowsiness, worsens with alcohol", "Abrupt discontinuation of therapy may cause chest pain or heart attack. Dosage must be tapered slowly before stopping."],
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Glyburide",
		"Brand Name": ["Diabeta"],
		"Indications": ["Type 2 Diabetes"],
		"Dosage Forms": ["Tablet", "Micronized Tablet"],
		"Dosing Regimen": ["2.5 mg by mouth once daily with breakfast"],
		"Mechanism of Action": ["Stimulates pancreatic Beta cells thus increases secretion of insulin and lowering blood glucose."],
		"Drug Interactions": ["Aspirin (NSAID's) can increase the effectiveness of glyburide, increasing the risk of hypoglycemia."],
		"Side Effects": ["Nausea", "Heartburn"],
		"Monitoring Parameters": ["Fasting Blood Gucose", "Hemoglobin A1c"],
		"Counseling Points": [
			"Signs and symptoms of hypoglycemia (blurred vision, cold sweats, dizziness). How to treat hypoglycemia (blood glucose below 70): 15-15 rule - Eat or drink something equal to 15 grams of carbohydrate, then rest for 15 minutes. Repeat until above 70.",
			"Importance of adherence to dietary instructions, of a regular exercise program, and of regular testing of blood glucose."
		],
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Hydrochlorothiazide/Triamterene",
		"Brand Name": ["Maxzide"],
		"Indications": ["Hypertension","Edema"],
		"Dosage Forms": ["Tablet", "Capsule"],
		"Dosing Regimen": ["One tablet by mouth daily. Hydrochlorothiazide (25 mg) Triamterene (37.5mg)."],
		"Mechanism of Action": ["Hydrochlorothiazide inhibits reabsorption of sodium and chloride in ascending loop of Henle and early distal tubules. Triamterene interferes with sodium reabsorption at distal tubule."],
		"Drug Interactions": ["Captopril (ACE inhibitors).  With concurrent use, serum potassium concentrations may be elevated, increasing the risk of hyperkalemia."],
		"Side Effects": ["Nausea", "Dizziness", "Headache"],
		"Monitoring Parameters": ["Electrolytes (Potassium)", "Blood Pressure"],
		"Counseling Points": ["Will increase urination, so take early in the day.", "May cause photosensitivity due to hydrochlorothiazide, use sunscreen and wear protective clothing.", "Try and limit sodium intake."],
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Enoxaparin",
		"Brand Name": ["Lovenox"],
		"Indications": ["Prophylaxis of deep vein thrombosis", "Acute ST-segment elevation myocardial infarction (STEMI)"],
		"Dosage Forms": ["Solution for injection"],
		"Dosing Regimen": ["40 mg subcutaneously once daily for DVT prophylaxis"],
		"Mechanism of Action": ["Causes higher anti?actor Xa to antithrombin activities (anti-factor IIa) ratio than heparin, which may prevent thrombosis.", "Accelerates antithrombin activity."],
		"Drug Interactions": ["Aspirin (NSAIDs) - Enhanced anticoagulant effects. Increased Risk of Bleeding"],
		"Side Effects": ["Nausea", "Major hemorrhage"],
		"Monitoring Parameters": ["Complete blood count (CBC)", "Anti-factor Xa", "SCr", "Monitor patients frequently for signs and symptoms of neurological impairment"],
		"Counseling Points": ["Use of aspirin or other NSAID's may increase bleeding risk.", "Inform healthcare provider/dentist before any surgery."],
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Levothyroxine",
		"Brand Name": ["Levoxyl"],
		"Indications": ["Hypothyroidism"],
		"Dosage Forms": ["Tablet", "Capsule", "Solution"],
		"Dosing Regimen": ["50 mcg by mouth daily"],
		"Mechanism of Action":["Levothyroxine is a synthetic T4. The physiological actions of thyroid hormones are produced predominantly by T3, the majority of which (approximately 80%) is derived from T4 by deiodination in peripheral tissues. Thyroid hormones regulate multiple metabolic processes and play an essential role in normal growth and development, and normal maturation of the central nervous system and bone."],
		"Drug Interactions": ["Amiodarone - decreases T4-deiodinase activity, reducing the peripheral conversion of T4 to T3"],
		"Side Effects": ["Tachycardia", "Headache"],
		"Monitoring Parameters": ["TSH Levels", "Free T4"],
		"Counseling Points": [
			"Take levothyroxine as a single dose, preferably on an empty stomach, 30 minutes to 1 hour before breakfast. Levothyroxine absorption is increased on an empty stomach.",
			"The levothyroxine in this medicine is intended to replace a hormone that is normally produced by your thyroid gland. Generally, replacement therapy is to be taken for life, except in cases of transient hypothyroidism, which is usually associated with an inflammation of the thyroid gland (thyroiditis)."
		],
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Enalapril",
		"Brand Name": "Vasotec",
		"Indications": "Hypertension",
		"Dosage Forms": "Tablet",
		"Dosing Regimen": "10 mg/day",
		"Mechanism of Action": "Prevents the conversion of Angiotensin I to angiotensin II by inhibiting Ace thus decreasing Aldoesterone and causing anti-hypertensive effect.",
		"Drug Interactions": "Diuretics, synergistic effect. Can cause hypotensive effect.",
		"Side Effects": "Nausea and headache.",
		"Monitoring Parameters": "BP, K+",
		"Counseling Points": "(1) Take each dose at the same time each day. (2). Monitor and record BP and pulse at home. (3) Stop taking if angioedema occurs",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Conjugated Estrogens",
		"Brand Name": "Premarin",
		"Indications": "Prevention of postmenopausal osteoporosis.",
		"Dosage Forms": "Tablets, Cream, Ring",
		"Dosing Regimen": "0.3 mg/day by mouth",
		"Mechanism of Action": "Binds to estrogen-receptors exerting estrogen-like effects.",
		"Drug Interactions": "Rifampin (Decrease). Reduce levels of Conjugated Estrogens",
		"Side Effects": "Nausea and headache.",
		"Monitoring Parameters": "Blood Pressure, and Thyroid function.",
		"Counseling Points": "(1) Pap smear every 6 to 12 month while undergoing therapy. (2). N/V/D remove ring and contact physician.",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Amlodipine",
		"Brand Name": "Norvasc",
		"Indications": "Hypertension/Chronic Stable Angina",
		"Dosage Forms": "Tablet",
		"Dosing Regimen": "10 mg once daily",
		"Mechanism of Action": "CCB, Inhibits influx of calcium ions into vascular smooth muscle and cardiac muscles. Causing vasodilation thus decreasing BP.",
		"Drug Interactions": "Sildenafil, Synergistic lowering of BP. May cause hypotension.",
		"Side Effects": "Nausea and headache.",
		"Monitoring Parameters": "BP, ECG reading, and Liver Function Tests.",
		"Counseling Points": "(1) Drug may cause drowsiness, use caution when driving. (2). Monitor BP daily.",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Fluoxetine",
		"Brand Name": "Prozac",
		"Indications": "Depression",
		"Dosage Forms": "Tablet,Capsule, DR Capsule,Solution",
		"Dosing Regimen": "10mg by mouth daily",
		"Mechanism of Action": "Prevents pre-synaptic uptake of serotonin, thus increasing its concentration in the synapse.",
		"Drug Interactions": "Warfarin, Increased risk of bleeding.",
		"Side Effects": "Nausea and headache.",
		"Monitoring Parameters": "Electrolytes (Hyponatremia), Clinical signs of suicide or change in behavior.",
		"Counseling Points": "1) Do not stop medication even if you feel better. (2). Tell family/Caregiver to monitor for signs of mood changes or suicidal thoughts.",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Trimethoprim/Sulfamethoxazole",
		"Brand Name": "Bactrim",
		"Indications": "UTI",
		"Dosage Forms": "Tablets, Suspension",
		"Dosing Regimen": "800 mg Sulfa and 160mg tri every 12 hours for 2 weeks.",
		"Mechanism of Action": "Sulfa inhibits bacterial synthesis of dihydrofolic acid by competing with p-aminobenzoic acid. Tri->Blocks the production of tetrahydrofolic acid. Two important steps in the biosynthesis of nucleic acids and proteins get blocked.",
		"Drug Interactions": "Warfarin, Increased risk of bleeding.",
		"Side Effects": "Nausea and headache.",
		"Monitoring Parameters": "CBC, Renal Function, S/Sx of rash.",
		"Counseling Points": "(1) complete course of therapy. (2). Take tablet with full glass of water.",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Verapamil",
		"Brand Name": "Verelan, Calan, Isoptin",
		"Indications": "Hypertension",
		"Dosage Forms": "Tablet, ER Tablet, ER Capsules",
		"Dosing Regimen": "180 mg daily",
		"Mechanism of Action": "Inhibits influx of Ca+, decreases contraction of hearth and VSM, therefore decrease in impulse and Conduction velocity.",
		"Drug Interactions": "Rifampin (Decrease). Decreases the effect of Veraamil",
		"Side Effects": "Nausea and headache.",
		"Monitoring Parameters": "BP, HR",
		"Counseling Points": "(1) Report any irregular heartbeat, shortness of breath, dizziness. (2) Limit caffeine consumption",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Warfarin",
		"Brand Name": "Coumadin",
		"Indications": "Prophylaxis of pulmonary embolism",
		"Dosage Forms": "Tablet",
		"Dosing Regimen": "5 mg daily",
		"Mechanism of Action": "Warfarin and other coumarin anticoagulants act by inhibiting the synthesis of vitamin K?ependent clotting factors, which include factors II, VII, IX, and X, and the anticoagulant proteins C and S.",
		"Drug Interactions": "Rifampin (Decrease). Decreases the effect of Warfarin, Amiodarone increase in anticoagulant effect",
		"Side Effects": "Bleeding, nercosis of skin.",
		"Monitoring Parameters": "INR, Vitamin K.",
		"Counseling Points": "(1) Monitor dietary Vitamin K. (2) Don't take while pregnant.",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Losartan",
		"Brand Name": "Cozaar",
		"Indications": "Hypertension",
		"Dosage Forms": "Tablet",
		"Dosing Regimen": "50 mg daily",
		"Mechanism of Action": "Selectively prevents the binding angiotensin-II to the angiotensin II receptor in vascular smooth muscle and adrenal gland.",
		"Drug Interactions": "Rifampin (Decrease). Decreases the effect of Losartan",
		"Side Effects": "Nausea and headache.",
		"Monitoring Parameters": "BP, HR, Serum Potassium",
		"Counseling Points": "(1) Take each dose at about the same time each day. (2). Contact health care provider if persistent cough develops.  (3) consult provider on taking potassium supplements",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Amiodarone",
		"Brand Name": "Pacerone",
		"Indications": "Ventricular arrhythmia",
		"Dosage Forms": "Tablet/Powder/Solution",
		"Dosing Regimen": "800 mg/day for 1-3 weeks",
		"Mechanism of Action": "Noncompetitive inhibitor of alpha and beta adrenergic receptors. Prolongs action potential,duration, and refractory period in myocardial cells.",
		"Drug Interactions": "Rifampin (Decrease). Decreases the effect of Amiodarone",
		"Side Effects": "Nausea and pulmonary fibrosis.",
		"Monitoring Parameters": "Chest X-ray, TSH.",
		"Counseling Points": "(1) Avoid drinking grape fruit juice ~ alter absorption. (2) Avoid becoming pregnant while on this medication. (3) Photosensitivity",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Cephalexin",
		"Brand Name": "Keflex",
		"Indications": "Treatment of respiratory tract infections caused by Streptococcus pneumoniae and Streptococcus pyogenes.",
		"Dosage Forms": "Tablet, Capsule, Suspension",
		"Dosing Regimen": "500 mg every 12 hours",
		"Mechanism of Action": "Inhibits mucopeptide synthesis in bacterial cell wall of Gram Positive bacteria",
		"Drug Interactions": "Probenecid, increase in keflex serum levels through inhibiting excretion.",
		"Side Effects": "Nausea and headache.",
		"Monitoring Parameters": "(1) Pro - Thrombin time(2) Hypersensitivity.CBC / Hepatic / Renal function",
		"Counseling Points": "(1) Take full course of therapy. (2).Check body temperature daily. (3) GI upset, take with food / milk",
		"Notes / Mnemonics": null
	},
	{
		"Generic Name": "Chlorthalidone",
		"Brand Name": ["Thalitone"],
		"Indications": ["Hypertension", "Edema"],
		"Dosage Forms": ["Tablet"],
		"Dosing Regimen": ["25 mg by mouth once daily"],
		"Mechanism of Action": ["Inhibits reabsorption of sodium and chloride in proximal portion of distal convoluted tubules."],
		"Drug Interactions": ["Lithium - Lithium renal clearance is reduced by chlorthalidone, increasing the risk of lithium toxicity."],
		"Side Effects": ["Nausea", "headache"],
		"Monitoring Parameters": ["K+ (Serum electrolytes)", "Blood Pressure"],
		"Counseling Points": [
			"Follow low-sodium diet to enhance action of medication.",
			"Avoid exposure to sunlight and to use sunscreen or wear protective clothing to avoid photosensitivity."
		],
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Sitagliptin",
		"Brand Name": ["Januvia"],
		"Indications": ["Type 2 Diabetes Mellitus"],
		"Dosage Forms": ["Tablet"],
		"Dosing Regimen": ["25mg by mouth daily", "50 mg by mouth daily", "100mg by mouth daily"],
		"Mechanism of Action": ["Dipeptidyl peptidase-4 (DPP-4) inhibitor which slows the inactivation of incretin hormones,  increasing insulin synthesis and release from pancreatic beta cells and suppresses the release of glucagon by the alpha cells of the pancreas.  This drives blood glucose levels towards normal."],
		"Drug Interactions": ["No Clinically Significant interactions"],
		"Side Effects": ["Diarrhea", "Headache"],
		"Monitoring Parameters": ["Blood Glucose", "Renal function"],
		"Counseling Points": [
			"Signs and symptoms of hypoglycemia (blurred vision, cold sweats, dizziness). How to treat hypoglycemia (blood glucose below 70): 15-15 rule - Eat or drink something equal to 15 grams of carbohydrate, then rest for 15 minutes. Repeat until above 70.",
			"Drug is not substitute for diet and exercise. Importance of adherence to dietary instructions, of a regular exercise program, and of regular testing of blood glucose."
		],
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Furosemide",
		"Brand Name": ["Lasix"],
		"Indications": ["Hypertension"],
		"Dosage Forms": ["Tablet", "Solution"],
		"Dosing Regimen": ["20 mg by mouth daily"],
		"Mechanism of Action": ["Inhibits reabsorption of sodium and chloride in proximal and distal tubules and loop of henle."],
		"Drug Interactions": ["Amiodarone. Additive with Lasix, prolong QT interval."],
		"Side Effects": ["Nausea", "Headache"],
		"Monitoring Parameters": ["Blood Pressure", "K+"],
		"Counseling Points": [
			"Drug increases in urination so take it early in the day, not at bedtime.",
			"Manage postural hypotension by getting up slowly."
		],
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Hydrochlorothiazide",
		"Brand Name": ["Microzide"],
		"Indications": ["Hypertension"],
		"Dosage Forms": ["Tablet", "Capsule"],
		"Dosing Regimen": ["50 mg by mouth daily"],
		"Mechanism of Action": ["Enhances excretion of sodium, chloride, and water by interfering with transport of sodium ions across renal tubular epithelium."],
		"Drug Interactions": ["Antihypertensive drugs, additive effect."],
		"Side Effects": ["Nausea", "headache"],
		"Monitoring Parameters": ["Serum electrolytes", "Blood pressure"],
		"Counseling Points": [
			"Manage postural hypotension by getting up slowly.",
			"Monitor weight daily"
		],
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Metoprolol",
		"Brand Name": ["Lopressor"],
		"Indications": ["Hypertension"],
		"Dosage Forms": ["Tablet", "Extended Release Tablet"],
		"Dosing Regimen": ["100 mg by mouth daily"],
		"Mechanism of Action": ["At low dose blocks beta-1 receptors => decrease HR, contractility, and Blood pressure. At High doses blocks beta-2 receptors (lungs-> bronchospasm)."],
		"Drug Interactions": ["Rifampin - Metoprolol plasma concentrations may be reduced, decreasing the pharmacologic effect."],
		"Side Effects": ["Nausea", "Headache"],
		"Monitoring Parameters": ["Blood Pressure", "Heart Rate"],
		"Counseling Points": [
			"Monitor Pulse and BP",
			"Contact physician if HR is less than 50 bpm",
			"Contact health care provider if any difficulty breathing occurs"
		],
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Lisinopril",
		"Brand Name": ["Prinivil","Zestril"],
		"Indications": ["Hypertension","Heart Failure","Acute Myocardial Infarction"],
		"Dosage Forms": ["Tablet"],
		"Dosing Regimen": ["10 mg by mouth daily"],
		"Mechanism of Action": ["Competitively inhibits ACE, preventing angiotensin I conversion to angiotensin II, a potent vasoconstrictor that also stimulates aldosterone secretion. Results in decrease in sodium and fluid retention, decrease in BP."],
		"Drug Interactions": ["NSAIDs (Ibuprofen) - Specifically, the combination may result in a significant decrease in renal function. Nonsteroidal Anti-Inflammatory Agents may diminish the antihypertensive effect of ACE Inhibitors."],
		"Side Effects": ["Nausea", "Headache"],
		"Monitoring Parameters": ["Blood Pressure", "K+"],
		"Counseling Points": [
			"Instruct patient to inform health care provider if a persistent cough develops while taking this medication",
			"Inform patients that angioedema, including laryngeal edema, may occur. Advise patients of this risk and tell them to report immediately any signs or symptoms suggesting angioedema (eg, difficulty in swallowing or breathing; swelling of face, extremities, eyes, lips, or tongue) and to discontinue lisinopril until they have consulted with their health care provider."],
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Albuterol HFA",
		"Brand Name": ["ProAir HFA"],
		"Indications": ["Asthma"],
		"Dosage Forms": ["Aerosol Solution", "Nebulization Solution"],
		"Dosing Regimen": ["1 to 2 inhalations every 4 hours as needed. 90 mcg per inhalation"],
		"Mechanism of Action": ["Produces bronchodilation by relaxing bronchial smooth muscle through beta-2 receptor stimulation."],
		"Drug Interactions": ["Propranolol (B-Blocker), Decrease effectiveness of Albuterol."],
		"Side Effects": ["Nausea", "Headache"],
		"Monitoring Parameters": ["RR", "HR"],
		"Counseling Points": [
			"Instruct patients or their caregivers to prime the aerosol inhaler before using the first time",
			"Advise patients or their caregivers that if the actuator should become blocked (little or no medication coming out of the mouthpiece), the blockage may be removed by washing the actuator with warm water for 30 seconds and drying thoroughly"
		],
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Metformin",
		"Brand Name": ["Glucophage"],
		"Indications": "Type 2 DM",
		"Dosage Forms": ["Tablet", "Extended Release Tablet","Solution"],
		"Dosing Regimen": ["500 mg by mouth daily"],
		"Mechanism of Action": ["Decreases blood glucose by decreasing hepatic glucose production, decreasing intestinal absorption of glucose, and increase response to insulin"],
		"Drug Interactions": ["Isoniazid - Reduces Metformin's effectiveness because it tends to produce hyperglycemia and may lead to loss of glycemic control"],
		"Side Effects": ["Nausea", "Headache"],
		"Monitoring Parameters": ["Blood Glucose", "A1C"],
		"Counseling Points": [
			"Advise patient using ER tablets to swallow tablets whole. Caution patient not to crush, chew, or break the tablets",
			"Drug is not substitute for diet and exercise. Importance of adherence to dietary instructions, of a regular exercise program, and of regular testing of blood glucose."
		],
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Montelukast",
		"Brand Name": ["Singulair"],
		"Indications": ["Asthma"],
		"Dosage Forms": ["Tablet", "Tablet Chewable", "Packet"],
		"Dosing Regimen": ["10 mg by mouth daily"],
		"Mechanism of Action": ["Binds to cysteinyl leukotriene type 1 (CysLT1) receptor in the upper and lower airways to prevent leukotriene-mediated effects associated with asthma and allergic rhinitis (airway edema, smooth muscle contraction, and altered cellular activity associated with the inflammatory process)."],
		"Drug Interactions": ["Rifampin (CYP-450 Inducers) - Montelukast plasma concentrations may be reduced, decreasing the pharmacologic effect."],
		"Side Effects": ["Nausea", "Headache"],
		"Monitoring Parameters": ["Mood Changes", "Suicidal Behavior"],
		"Counseling Points": [
			"Advise patients to take montelukast daily as prescribed, even when they are asymptomatic, as well as during periods of worsening asthma, and to contact their health care provider if their asthma is not well controlled.",
			"Advise patients that montelukast is not for the treatment of acute asthma attacks. Tell patients to have appropriate short-acting inhaled beta-agonist medication available to treat asthma exacerbations."
		],
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Prednisone",
		"Brand Name": ["Rayos"],
		"Indications": ["Allergies"],
		"Dosage Forms": ["Tablet", "Delayed Release Tablet", "Solution"],
		"Dosing Regimen": ["10 mg by mouth daily"],
		"Mechanism of Action": ["Prednisone is a synthetic adrenocortical steroid drug (glucocorticoid) with predominantly corticosteroid properties. It depresses formation, release, and activity of endogenous mediators of inflammation, including prostaglandins, kinins, histamine, liposomal enzymes, and complement system."],
		"Drug Interactions": ["Rifampin - Prednisone plasma concentrations may be reduced, decreasing the pharmacologic effect."],
		"Side Effects": ["Nausea", "Headache"],
		"Monitoring Parameters": ["Blood Pressure", "Body Weight"],
		"Counseling Points": [
			"Instruct patient to take medication with meals or snack to avoid GI irritation.",
			"Advise patients to discuss with their health care provider if they have had recent or ongoing infections or if they have recently received a vaccine."
		],
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Terazosin",
		"Brand Name": ["Not listed in F&C", "Hytrin"],
		"Indications": ["Hypertension"],
		"Dosage Forms": ["Capsule"],
		"Dosing Regimen": ["10 mg by mouth daily"],
		"Mechanism of Action": ["Selectively blocks postsynaptic alpha1-adrenergic receptors, resulting in dilation of arterials and veins."],
		"Drug Interactions": ["No Clinical Significant interaction"],
		"Side Effects": ["Nausea", "Headache"],
		"Monitoring Parameters": ["Not listed in F&C", "BP", "Benign prostatic hyperplasia (BPH) Symptoms"],
		"Counseling Points": [
			"Instruct patient to report these symptoms to health care provider: dizziness, visual changes, palpitations",
			"Advise patient to follow up with health care provider to monitor BP"
		],
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Ketorolac",
		"Brand Name": ["Sprix"],
		"Indications": ["Moderately severe acute pain (Usually for post-operative anelgesia)"],
		"Dosage Forms": ["Tablet", "Solution"],
		"Dosing Regimen": ["30 mg by mouth daily"],
		"Mechanism of Action": ["Decreases inflammation, pain, and fever through inhibition of prostaglandin synthesis"],
		"Drug Interactions": ["Warfarin (Anticoagulats) - Increased risk of bleeding"],
		"Side Effects": ["Nausea", "Headache"],
		"Monitoring Parameters": ["CBC", "S/Sx of GI Bleeding"],
		"Counseling Points": [
			"Advise patients that ketorolac, like other NSAIDs, can cause GI discomfort and, rarely, serious GI adverse effects, such as ulcers and bleeding, which may result in hospitalization and even death. Although serious GI tract ulcerations and bleeding can occur without warning symptoms, advise patients to be alert for the signs and symptoms of ulcerations and bleeding, and instruct patients to seek medical advice when observing any indicative sign or symptoms, including epigastric pain, dyspepsia, melena, and hematemesis. Apprise patients of the importance of this follow-up.",
			"The total duration of ketorolac therapy is not to exceed 5 days in adults."
		],
		"Notes/Mnemonics": ""
	},
	{
		"Generic Name": "Alendronate",
		"Brand Name": "Fosamax",
		"Indications": "Osteoporosis",
		"Dosage Forms": "Tablets, Solution",
		"Dosing Regimen": "10 mg/day",
		"Mechanism of Action": "Inhibits bone resorption and increases bone density.",
		"Drug Interactions": "Calcium (Decrease)/ Interferes with absorbtion of the drug",
		"Side Effects": "Nausea and headache.",
		"Monitoring Parameters": "serum calcium , Bone Density",
		"Counseling Points": "1. Instruct patient using tablet to swallow tablet whole with a full glass (6 to 8 oz) of plain water. Caution patient not to chew or suck on tablet. 2. Instruct patient to discontinue therapy and seek medical care if any of the following occur: difficulty swallowing; pain behind breastbone; new or worsening heartburn.",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Allopurinol",
		"Brand Name": ["Zyloprim"],
		"Indications": ["Gout"],
		"Dosage Forms": ["Tablet"],
		"Dosing Regimen": ["200 mg by mouth daily"],
		"Mechanism of Action": [" It is an inhibitor of xanthine oxidase, the enzyme responsible for the conversion of hypoxanthine to xanthine and of xanthine to uric acid, the end product of purine metabolism in man."],
		"Drug Interactions": ["Amoxicillin - An increase in the frequency of skin rash has been reported among patients receiving ampicillin or amoxicillin concurrently with allopurinol compared to patients who are not receiving both drugs. The cause of the reported association has not been established."],
		"Side Effects": ["Nausea", "Headache"],
		"Monitoring Parameters": ["Serum Uric Acid", "Renal function"],
		"Counseling Points": [
			"Allopurinol is better tolerated if taken with food or milk.",
			"Increase fluid intake during therapy to prevent renal stones."
		],
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Amitriptyline",
		"Brand Name": "Elavil",
		"Indications": "Depression",
		"Dosage Forms": "Tablet",
		"Dosing Regimen": "100 mg daily",
		"Mechanism of Action": "Inhibits presynaptic reuptake of norepinephrine and serotonin in CNS.",
		"Drug Interactions": "Amiodarone and quinidine- may prolong the QT interval and increase the risk of\nlife-threatening cardiac arrhythmias.",
		"Side Effects": "Nausea and headache.",
		"Monitoring Parameters": "ECG, LFT",
		"Counseling Points": "1) Explain that drug effects may not be evident for 4 to 6 wk but that side effects are usually noted early. 2) Warn patient of the risk of seizure 3). May cause photosensitivity, wear sunscreen",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Amoxicillin/Clavulanate Potassium",
		"Brand Name": "Augmentin",
		"Indications": "Otitis media",
		"Dosage Forms": "Tablets, ER Tablets, Suspension",
		"Dosing Regimen": "500 mg/125 mg every 12 hours",
		"Mechanism of Action": "Amoxicillin inhibits bacterial cell wall mucopeptide synthesis. Clavulanic acid inactivates a wide range of beta-lactam enzymes found in bacteria resistant to penicillins and cephalosporins.",
		"Drug Interactions": "Oral Contraceptives. Reduces the efficacy of contraceptives",
		"Side Effects": "Nausea and headache.",
		"Monitoring Parameters": "LFT, Renal Function",
		"Counseling Points": "1.Reinforce to patient or caregiver the need to take exactly as prescribed and to complete the entire course of therapy, even if symptoms of infection have disappeared.2.Instruct patient to notify health care provider if infection does not appear to be improving or is worsening.",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Aripiprazole",
		"Brand Name": "Abilify",
		"Indications": "Schizophrenia",
		"Dosage Forms": "Tablet,Solution",
		"Dosing Regimen": "10 mg/day",
		"Mechanism of Action": "Partial agonist at dopamine D2 and serotonin 5-HT1A receptors, and antagonist at serotonin 5-HT2A receptor.",
		"Drug Interactions": "ketoconazole (Increase) or Rifampin (decreases)",
		"Side Effects": "Nausea and headache.",
		"Monitoring Parameters": "CBC, Glucose",
		"Counseling Points": "1. Instruct patient to take prescribed dose once daily without regard to meals, but to take with food if stomach upset occurs 2. Don't stop if feeling better",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Atazanavir",
		"Brand Name": "Reyataz",
		"Indications": "HIV-1 infection",
		"Dosage Forms": "Capsule",
		"Dosing Regimen": "300 mg with ritonavir 100 mg once daily",
		"Mechanism of Action": "Inhibits HIV-1 protease, the enzyme required to form functional proteins in HIV-1?nfected cells.",
		"Drug Interactions": "Warfarin, Increased risk of bleeding",
		"Side Effects": "Nausea and headache.",
		"Monitoring Parameters": "HIV RNA Load, CD4+ Count",
		"Counseling Points": "1) Atazanavir may interact with some drugs; therefore, advise patients to report to their health care providers the use of any other prescription or nonprescription medication 2) Inform patients to take atazanavir with food to enhance absorption",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Azithromycin",
		"Brand Name": "Zmax",
		"Indications": "community-acquired pneumonia",
		"Dosage Forms": "Tablet, Suspension, Packet",
		"Dosing Regimen": "500 mg/day",
		"Mechanism of Action": "Azithromycin acts by binding to the 50S ribosomal subunit of susceptible microorganisms and, thus, interfering with microbial protein synthesis.",
		"Drug Interactions": "Warfarin, Increased risk of bleeding.",
		"Side Effects": "Nausea and headache.",
		"Monitoring Parameters": "Hypersensitivity, QT interval",
		"Counseling Points": "1) Instruct patient using tablets to take prescribed dose with a full glass of water. 2) Instruct patient to complete entire course of therapy, even if symptoms of infection have disappeared.",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Beclomethasone",
		"Brand Name": "Qvar",
		"Indications": "Chronic Asthma",
		"Dosage Forms": "Aerosol Solution",
		"Dosing Regimen": "80 mcg twice daily  OR 160 mcg daily",
		"Mechanism of Action": "Has potent anti-inflammatory effect on respiratory tract and in nasal passages.",
		"Drug Interactions": "None",
		"Side Effects": "Nausea and headache.",
		"Monitoring Parameters": "RR and growth development for children",
		"Counseling Points": "1) Warn patient that drug is an asthma controller and is not to be used to treat an acute asthma attack.  2) Advise patient to notify health care provider if oral, nasal, or pharyngeal irritation occurs, or if symptoms worsen.",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Benazepril",
		"Brand Name": "Lotensin",
		"Indications": "Hypertension",
		"Dosage Forms": "Tablet",
		"Dosing Regimen": "10 mg daily",
		"Mechanism of Action": "Competitively inhibits ACE, resulting in decreased conversion of angiotensin I to angiotensin II, a potent vasoconstrictor that stimulates aldosterone secretion. This results in decreased vasopressor activity and decreased aldosterone secretion.",
		"Drug Interactions": "spironolactone. The risk of hyperkalemia is increased. If these agents are coadministered",
		"Side Effects": "Nausea and headache.",
		"Monitoring Parameters": "CBC, Renal Function, BP",
		"Counseling Points": "1 ) Caution patient to avoid sudden position changes to prevent orthostatic hypotension. 2) Do not use potassium supplements or salt substitutes containing potassium without\nconsulting physician.",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Benztropine",
		"Brand Name": "Cogentin",
		"Indications": "Parkinsonism",
		"Dosage Forms": "Tablet, Solution",
		"Dosing Regimen": "4 mg once per day orally",
		"Mechanism of Action": "Thought to act by competitively antagonizing acetylcholine receptors in corpus striatum to restore neuromuscular balance.",
		"Drug Interactions": "When benztropine is given concomitantly haloperidol. advise patients to report GI complaints, fever, or heat intolerance promptly",
		"Side Effects": "Nausea and Dilated Pupils",
		"Monitoring Parameters": "Tachycardia and IOP",
		"Counseling Points": "1. If GI upset occurs take with food\n2. May cause dry mouth, sucking on hard candy such as jolly ranchers and drinking lots of fluids may help resolve this",
		"Notes / Mnemonics": null
	},
	{
		"Generic Name": "Bupropion",
		"Brand Name": "Zyban",
		"Indications": "Smoking cessation OR  Major depressive disorder",
		"Dosage Forms": "Tablet, ER Tablet",
		"Dosing Regimen": "450 mg/day (Tablet)",
		"Mechanism of Action": "Exact mechanism is unknown, but it is presumed to be mediated by noradrenergic and/or dopaminergic mechanisms.",
		"Drug Interactions": "Rifampin (Decrease). Decreases the effect of Bupropion",
		"Side Effects": "Nausea and headache.",
		"Monitoring Parameters": "Blood Pressure, Renal Function",
		"Counseling Points": "1) Advise patients using bupropion as a smoking deterrent that counseling and support during cessation and for a period of time afterwards are an important part of therapy and increase the chance of successfully quitting smoking. 2) Advise patients to take frequent sips of water, suck on ice chips or sugarless hard candy, or chew sugarless gum if dry mouth occurs",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Buspirone",
		"Brand Name": "BuSpar",
		"Indications": "Anxiety",
		"Dosage Forms": "Tablet",
		"Dosing Regimen": "15 mg daily",
		"Mechanism of Action": "Mechanism unknown",
		"Drug Interactions": "Rifampin (Decrease)",
		"Side Effects": "Nausea and headache.",
		"Monitoring Parameters": "Liver Function, Renal Function OR Hypersensitivity",
		"Counseling Points": "1. Instruct patient to avoid alcoholic beverages and other depressants while taking this medication.\n2. Instruct patient to contact health care provider if symptoms do not appear to be getting better, are getting worse, or if bothersome side effects (eg, drowsiness, dizziness) occur.",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Carbamazepine",
		"Brand Name": "Carbatrol",
		"Indications": "Epilepsy",
		"Dosage Forms": "Tablet, ER Tablet, ER Capsules, Suspension",
		"Dosing Regimen": "1,600 mg/day.",
		"Mechanism of Action": "Appears to provide anticonvulsant effects by reducing post-synaptic responses and blocking posttetanic potentiation. Mechanism of action for other effects is unknown.",
		"Drug Interactions": "Rifampin (Decrease). Decreases the effect of Carbamazepine",
		"Side Effects": "Nausea and headache.",
		"Monitoring Parameters": "CBC, Carbamazepine serum level, Eye Exam",
		"Counseling Points": "1) Advise patient to avoid alcoholic beverages and other depressants while taking this medication. 2)Caution patient to avoid grapefruit products while taking carbamazepine because of risk of toxicity.",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Cefdinir",
		"Brand Name": "Omnicef",
		"Indications": "Community-acquired pneumonia",
		"Dosage Forms": "Capsule, Suspension",
		"Dosing Regimen": "600 mg q 24 h for 10 days",
		"Mechanism of Action": "Inhibits mucopeptide synthesis in bacterial cell wall.",
		"Drug Interactions": "Aluminum\nhydroxide antacids, decreased cefdinir effect because decreased oral absorption",
		"Side Effects": "Nausea and headache.",
		"Monitoring Parameters": "Hypersensitivity, Renal Function.",
		"Counseling Points": "1. Instruct patient to take cefdinir 2 h before or after antacids containing magnesium or aluminum 2. Instruct patient to notify health care provider if infection does not appear to be improving or is worsening.",
		"Notes / Mnemonics": null
	},
	{
		"Generic Name": "Ciprofloxacin",
		"Brand Name": ["Cipro"],
		"Indications": ["Treatment of urinary tract infections, skin and skin structure infections, respiratory tract infections, etc. caused by <i>E. coli, K. pneumoniae, E. cloacae, P. mirabilis, P. aeruginosa, H. influenzae, Haemophilus parainfluenzae, S. pneumoniae</i>, etc."],
		"Dosage Forms": ["Tablet", "Extended Release Tablet", "Solution", "Suspension"],
		"Dosing Regimen": ["500 mg by mouth every 12 hours"],
		"Mechanism of Action": ["Ciprofloxacin, a fluoroquinolone, is a synthetic broad-spectrum antimicrobial agent. The bactericidal action of ciprofloxacin results from inhibition of the enzymes topoisomerase II (DNA gyrase) and topoisomerase IV (both Type II topoisomerases), which are required for bacterial DNA replication, transcription, repair, and recombination."],
		"Drug Interactions": ["Sevelamer - May decrease absorption of Ciprofloxacin, decreasing its efficacy"],
		"Side Effects": ["Nausea", "Headache"],
		"Monitoring Parameters": ["Liver Function Tests", "Renal Function Tests"],
		"Counseling Points": [
			"Patients should be told that although it is common to feel better early in the course of therapy, the medication should be taken exactly as directed.",
			"Inform patients that photosensitivity/phototoxicity has been reported. Advise patients to minimize or avoid exposure to natural or artificial sunlight (tanning beds or UVA/B treatment). If patients need to be outdoors, they should wear loose-fitting clothes that protect skin from sun exposure and discuss other sun protection measures with their health care provider. If a sunburn-like reaction or skin eruption occurs, advise patients to contact their health care provider."
		],
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Clarithromycin",
		"Brand Name": "Biaxin",
		"Indications": "community-acquired pneumonia",
		"Dosage Forms": "Tablet, Suspension, ER Tablet",
		"Dosing Regimen": "250mg q12h for 10 days",
		"Mechanism of Action": "Binds to the 50S ribosomal subunit of susceptible microorganisms, resulting in inhibition of protein synthesis. Active in vitro against a variety of aerobic and anaerobic gram-positive and gram-negative microorganisms, as well as most Mycobacterium avium complex (MAC) microorganisms.",
		"Drug Interactions": "Warfarin, Increased risk of bleeding.",
		"Side Effects": "Nausea and headache.",
		"Monitoring Parameters": "Resolution of fever, S/Sx allergic reaction",
		"Counseling Points": "1)Counsel patients or caregivers about the need to take clarithromycin exactly as prescribed and complete the entire course of therapy, even if symptoms of infection have disappeared. 2) Advise patients taking ER tablets to take each dose with food. Caution patient to swallow whole and not to chew, crush, split, or break the tablet.",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Clindamycin",
		"Brand Name": "Cleocin",
		"Indications": "septicemia, pneumococci infections",
		"Dosage Forms": "Capsule, Solution, Cream, Suppository",
		"Dosing Regimen": "600 mg/day",
		"Mechanism of Action": "Suppresses bacterial protein synthesis.",
		"Drug Interactions": "Erythromycin. Antagonism Occurs.",
		"Side Effects": "Nausea and Jaundice",
		"Monitoring Parameters": "Renal Function, LFT",
		"Counseling Points": "1.Reinforce to patient or caregiver the need to take exactly as prescribed and complete the entire course of therapy, even if symptoms of infection have disappeared. Caution patient or caregiver that skipping doses or not completing the full course of therapy may allow the infection to worsen and increase the possibility that the bacteria will become resistant to the antibiotic, which may cause infections that will not be treatable in the future.\n2.Instruct patient to notify health care provider if infection does not appear to be improving or appears to be getting worse",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Clonidine",
		"Brand Name": "Catapres",
		"Indications": "Hypertension",
		"Dosage Forms": "Tablet , ER Tablet, ER Liquid, Patches",
		"Dosing Regimen": "2.4 mg/day (immediate release)",
		"Mechanism of Action": "Stimulates central alpha-adrenergic receptors to inhibit sympathetic cardioaccelerator and vasoconstrictor centers.",
		"Drug Interactions": "Alcohol. Clonidine may potentiate the CNS depressant effects of sedating drugs.",
		"Side Effects": "Nausea and headache.",
		"Monitoring Parameters": "BP, HR, Renal Function",
		"Counseling Points": "1) ER tablets may be taken with or without food and should be swallowed whole and never crushed, cut, or chewed. 2) Advise breast-feeding women taking modified-release tablets not to breast-feed.",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Clopidogrel",
		"Brand Name": ["Plavix"],
		"Indications": ["Myocardial infarction"],
		"Dosage Forms": ["Tablet"],
		"Dosing Regimen": ["75 mg by mouth daily"],
		"Mechanism of Action": ["Clopidogrel is an inhibitor of platelet activation and aggregation through the irreversible binding of its active metabolite to the P2Y12 class of adenosine diphosphate (ADP) receptors on platelets"],
		"Drug Interactions": ["Rifampin - The antiplatelet effect of clopidogrel may be enhanced."],
		"Side Effects": ["Major Bleeding", "Hypotension"],
		"Monitoring Parameters": ["Hemoglobin", "S/Sx of bleeding (stool)"],
		"Counseling Points": [
			"Advise patients that it may take longer than usual to stop bleeding and that they may bruise and/or bleed more easily when they take clopidogrel or clopidogrel combined with aspirin.",
			"Have patient report immediately to prescriber angina, stroke symptoms (eg, change in strength on one side, trouble speaking or thinking, change in balance, blurred vision), dyspnea, asthenia, illogical thinking, sudden change in eyesight, jaundice, or rash."
		],
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Clotrimazole",
		"Brand Name": "Lotrimin AF",
		"Indications": "Vaginal Yeast infections (Candidiasis)",
		"Dosage Forms": "Topical cream, vaginal cream, trochees, vaginal suppositories, lotion, Lozenge",
		"Dosing Regimen": "Apply a thin layer over affected area morning and evening for 4 weeks or as directed by a health care provider.",
		"Mechanism of Action": "Inhibits yeast growth by increasing cell membrane permeability by binding\nto sterols ~ leakage of intracellular component",
		"Drug Interactions": "No Clinical Significant interaction",
		"Side Effects": "Blistering, peeling.",
		"Monitoring Parameters": "Liver Function Tests, Hypersensitivity",
		"Counseling Points": "1) For external use only 2) Keep out of reach of children. If swallowed, get medical help or contact poison control immediately. (Cream For Both)",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Cyclobenzaprine",
		"Brand Name": "Flexeril",
		"Indications": "Muscle spasm",
		"Dosage Forms": "Tablet, ER Capsule",
		"Dosing Regimen": "5 mg 3 times a day (Tablet)",
		"Mechanism of Action": "Relieves skeletal muscle spasms of local origin without interfering with muscle function by acting within CNS at brain stem. Structurally and pharmacologically related to tricyclic antidepressants.",
		"Drug Interactions": "Alcohol. Cyclobenzaprine may enhance the effects of CNS depressants.",
		"Side Effects": "Nausea and headache.",
		"Monitoring Parameters": "Muscle Pain, Drowsiness",
		"Counseling Points": "1) Inform patient that this medication makes injury temporarily feel better. 2)Caution patient to rise slowly from a sitting or standing position to avoid injury.",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Darunavir",
		"Brand Name": "Prezista",
		"Indications": "HIV-1 infection",
		"Dosage Forms": "Tablet",
		"Dosing Regimen": "Darunavir 800 mg taken with ritonavir 100 mg once daily with food",
		"Mechanism of Action": "Inhibits HIV-1 protease, the enzyme required to form functional proteins in HIV-infected cells.",
		"Drug Interactions": "Rifampin (Decrease)",
		"Side Effects": "Nausea and headache.",
		"Monitoring Parameters": "hyperglycemia, CD4 Count",
		"Counseling Points": "1.Inform patients that darunavir is not a cure for HIV infection and that they may continue to develop opportunistic infections and other complications associated with HIV disease. Inform patients that there are currently no data demonstrating that therapy with darunavir can reduce the risk of transmitting HIV to others. 2. Inform patients that sustained decreases in plasma HIV RNA have been associated with a reduced risk of progression to AIDS and death. Instruct patients to remain under the care of a health care provider while using darunavir.",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Digoxin",
		"Brand Name": "Lanoxin",
		"Indications": "Heart failure",
		"Dosage Forms": "Tablet, Solution",
		"Dosing Regimen": "0.5 mg once daily.",
		"Mechanism of Action": "Increases force and velocity of myocardial systolic contraction (positive inotropic action), slows heart rate, decreases conduction velocity through AV node, and decreases the degree of activation of the sympathetic nervous system and renin-angiotensin system. All actions are mediated through effects on sodium-potassium ATPase.",
		"Drug Interactions": "Rifampin (Decrease). Decreases the effect of digoxin",
		"Side Effects": "Nausea and headache.",
		"Monitoring Parameters": "serum electrolytes and renal functions",
		"Counseling Points": "1) Instruct patient to take digoxin at same time each day to ensure steady-state dosing 2)Caution patient to avoid taking OTC medications without consulting health care provider",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Donepezil",
		"Brand Name": "Aricept",
		"Indications": "Alzheimer disease",
		"Dosage Forms": "Tablet",
		"Dosing Regimen": "10 mg daily",
		"Mechanism of Action": "Increases acetylcholine by inhibiting acetylcholinesterase, thereby increasing cholinergic function.",
		"Drug Interactions": "Rifampin (Decrease)",
		"Side Effects": "Nausea and headache.",
		"Monitoring Parameters": "Mental Status, GI bleeding",
		"Counseling Points": "1. Advise patient to take prescribed dose once daily in the evening just before bedtime. 2. Advise patient or caregiver that this drug does not alter the Alzheimer process and that the effectiveness of the medication may lessen in time.",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Doxazosin",
		"Brand Name": "Cardura",
		"Indications": "Hypertension",
		"Dosage Forms": "Tablet, ER Tablet",
		"Dosing Regimen": "8 mg once daily",
		"Mechanism of Action": "Selectively blocks postsynaptic alpha-1 adrenergic receptors, resulting in dilation of arterioles and veins.",
		"Drug Interactions": "No Clinical Significant interaction",
		"Side Effects": "Nausea and headache.",
		"Monitoring Parameters": "Bp, peripheral edema",
		"Counseling Points": "1. Advise patient to take prescribed dose every day, morning or evening, without regard to meals but to take with food if stomach upset occurs. 2. Instruct hypertensive patient to continue taking other BP medications as prescribed by health care provider.",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Doxycycline",
		"Brand Name": "Adoxa, Doryx",
		"Indications": "Treatment of infections caused by susceptible strains of gram-positive and gram-negative bacteria",
		"Dosage Forms": "Tablet, Capsule, DR Capsule",
		"Dosing Regimen": "100 mg twice daily for at least 10 days.",
		"Mechanism of Action": "Inhibits bacterial protein synthesis by binding to the 30S ribosomal subunit in the mRNA translation complex.",
		"Drug Interactions": "Rifampin (Decrease)",
		"Side Effects": "Nausea and headache.",
		"Monitoring Parameters": "Renal Function, Hepatic Function",
		"Counseling Points": "1) Instruct patient using tablets or capsules to take prescribed dose with a full glass of water.\n2) Advise patient to take without regard to meals but to take with food if GI upset occurs.",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Duloxetine",
		"Brand Name": "Cymbalta",
		"Indications": "Depression",
		"Dosage Forms": "DR Capsule",
		"Dosing Regimen": "60 mg once daily",
		"Mechanism of Action": "Potent inhibitor of neuronal serotonin and norepinephrine reuptake and a less potent inhibitor of dopamine reuptake.",
		"Drug Interactions": "Warfarin, Increased risk of bleeding.",
		"Side Effects": "Nausea and headache.",
		"Monitoring Parameters": "BP, Sexual Adverse Effects",
		"Counseling Points": "1. Inform patient that it may take 1 to 4 wk to note improvement in symptoms and to continue with prescribed therapy once improvement has been noted.2. Instruct patient to notify health care provider if symptoms do not appear to be getting better or are getting worse, or if bothersome adverse reactions",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Enoxaparin",
		"Brand Name": "Lovenox",
		"Indications": "Prophylaxis of deep vein thrombosis",
		"Dosage Forms": "Solution",
		"Dosing Regimen": "40 mg  subcutaneously daily",
		"Mechanism of Action": "Causes higher anti-factor Xa to antithrombin activities (anti-factor IIa) ratio than heparin, which may prevent thrombosis.",
		"Drug Interactions": "Warfarin, Increased Risk of Bleeding",
		"Side Effects": "Nausea, Major Bleeding",
		"Monitoring Parameters": "CBC. s/sx of neurologic impairment.",
		"Counseling Points": "1) Use of aspirin or other NSAID's may increase bleeding risk. (2). Inform healthcare provider/dentist before any surgery",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Erythromycin",
		"Brand Name": "Ery-Tab",
		"Indications": "Acne",
		"Dosage Forms": "Ointment, Tablet, Suspension, Solution",
		"Dosing Regimen": "Apply to the affected area twice daily, morning and evening",
		"Mechanism of Action": "Interferes with microbial protein synthesis by binding to the 50S subunit of bacterial ribosomes.",
		"Drug Interactions": "Rifampin (Decrease)",
		"Side Effects": "Nausea,QT Prolongation",
		"Monitoring Parameters": "Hypersensitivity, Resolution of Infection",
		"Counseling Points": "1. Instruct patient using tablets and capsules to take prescribed dose with a full glass of water and to swallow whole and not to crush, chew, break, or open 2. Advise patient to notify health care provider if infection does not improve or appears to worsen.",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Escitalopram",
		"Brand Name": "Lexapro",
		"Indications": "anxiety disorder",
		"Dosage Forms": "Tablet, Solution",
		"Dosing Regimen": "10 mg once daily",
		"Mechanism of Action": "Inhibits the CNS neuronal uptake of serotonin, potentiating serotonergic activity.",
		"Drug Interactions": "Warfarin, Increased risk of bleeding.",
		"Side Effects": "Nausea and headache.",
		"Monitoring Parameters": "Suicidal Thoughts, Serotonin Syndrome",
		"Counseling Points": "1. Advise patient that it may take 1 to 4 wk to note improvement in symptoms and to continue with the prescribed therapy once improvement has been noted.\n2. Instruct patient to notify health care provider if symptoms do not appear to be getting better or are getting worse",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Esomeprazole",
		"Brand Name": "Nexium",
		"Indications": "H. Pylori Eradication, Symptomatic GERD",
		"Dosage Forms": "Packet, DR Capsule",
		"Dosing Regimen": "20 mg daily",
		"Mechanism of Action": "Suppresses gastric acid secretion by blocking proton pump within gastric parietal cells.",
		"Drug Interactions": "Warfarin, Increased risk of bleeding.",
		"Side Effects": "Nausea and headache.",
		"Monitoring Parameters": "Liver Function, Hypersensitivity",
		"Counseling Points": "1. Instruct patients to take each dose on an empty stomach at least 1 h before eating. 2.Instruct patients to swallow the capsule whole and not to crush or chew it.",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Eszopiclone",
		"Brand Name": "Lunesta",
		"Indications": "insomnia",
		"Dosage Forms": "Tablet",
		"Dosing Regimen": "2 mg immediately before bedtime",
		"Mechanism of Action": "UNKnown",
		"Drug Interactions": "Rifampin (Decrease)",
		"Side Effects": "Nausea and headache.",
		"Monitoring Parameters": "Renal Function, LFT",
		"Counseling Points": "1. Review lifestyle changes that may improve sleep  2. Advise patient to take prescribed dose immediately before going to bed to reduce the risk of falling.",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Etanercept",
		"Brand Name": "Enbrel",
		"Indications": "Rheumatoid arthritis",
		"Dosage Forms": "Solution, Kit",
		"Dosing Regimen": "50 mg weekly subcutaneously",
		"Mechanism of Action": "Binds specifically to tumor necrosis factor (TNF), blocking its interaction with cell surface TNF receptors and modulating biological responses induced or regulated by TNF.",
		"Drug Interactions": "Abatacept. Concurrent therapy resulted in an increased incidence of serious adverse reactions, including infection",
		"Side Effects": "Rash, Diarrhea",
		"Monitoring Parameters": "S/Sx of Infection. Skin Examination for cancer",
		"Counseling Points": "1. Instruct patients to seek medical evaluation immediately if they develop symptoms of a severe allergic reaction.\n2.Inform patients that etanercept may lower the ability of their immune system to fight infections.",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Exenatide",
		"Brand Name": "Byetta 10 MCG Pen",
		"Indications": "Type 2 Diabetes",
		"Dosage Forms": "Solution, Suspension",
		"Dosing Regimen": "Exenatide (2 mg/dose) should be administered once every 7 days (weekly)",
		"Mechanism of Action": "Glucagon-like peptide-1 agonist that enhances glucose-dependent insulin secretion, suppresses inappropriately elevated glucagon secretion, and slows gastric emptying.",
		"Drug Interactions": "Warfarin, Increased risk of bleeding.",
		"Side Effects": "Nausea and headache.",
		"Monitoring Parameters": "A1C, Blood Glucose",
		"Counseling Points": "1. Advise patients to inform their health care provider if they are pregnant or intend to become pregnant. 2. Do NOT use after meals. Give 60 minutes before a meal",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Ezetimibe/simvastatin",
		"Brand Name": "Vytorin",
		"Indications": "hyperlipidemia",
		"Dosage Forms": "Tablets",
		"Dosing Regimen": "Ezetimibe 10 mg/simvastatin 40 mg in the evening.",
		"Mechanism of Action": "E: blocks intestinal absorption of cholesterol\nS: Inhibits rate limiting step in cholesterol production (prevents mevalonic acid production ? inhibits cholesterol production",
		"Drug Interactions": "Rifampin (Decrease)",
		"Side Effects": "Nausea and headache.",
		"Monitoring Parameters": "Lipid Panel, LFT",
		"Counseling Points": "1 Avoid Grapefruit Juice, 2. Use Contraceptives",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Fenofibrate",
		"Brand Name": "Tricor",
		"Indications": "Hypertriglyceridemia",
		"Dosage Forms": "Tablet, Capsule, DR Capsule",
		"Dosing Regimen": "200 mg/day",
		"Mechanism of Action": "Decreases plasma levels of triglycerides by decreasing synthesis. Also reduces plasma levels of VLDL cholesterol by reducing its release into the circulation and increasing catabolism. Reduces serum uric acid levels by increasing urinary excretion of uric acid.",
		"Drug Interactions": "Warfarin, Increased risk of bleeding.",
		"Side Effects": "Nausea and headache.",
		"Monitoring Parameters": "Serum Lipids, LFT",
		"Counseling Points": "1. Advise patient to try to take each dose at about the same time each day. 2. Emphasize to patient the importance of dietary changes",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Fexofenadine",
		"Brand Name": "Allegra",
		"Indications": "Seasonal allergic rhinitis",
		"Dosage Forms": "Tablet, Suspension, Tablet Dispersible",
		"Dosing Regimen": "180 mg once daily",
		"Mechanism of Action": "Competitively antagonizes histamine at the H1-receptor site.",
		"Drug Interactions": "Rifampin (Decrease). Decreases the effect of Fexofenadine",
		"Side Effects": "Nausea and headache.",
		"Monitoring Parameters": "Renal Function, Hypersensitivity",
		"Counseling Points": "1) Advise patient to take without regard to meals but to take with food if stomach upset occurs.\n2) Advise patient that if allergy symptoms are not controlled not to increase the dose of medication or frequency of use but to inform health care provider.",
		"Notes/Mnemonics": "antihistamine"
	},
	{
		"Generic Name": "Fluconazole",
		"Brand Name": "Diflucan",
		"Indications": "Vaginal candidiasis",
		"Dosage Forms": "Tablet, Solution,Suspension",
		"Dosing Regimen": "150 mg single dose.",
		"Mechanism of Action": "Interferes with the formation of fungal cell membrane, causing leakage of cellular contents and cell death.",
		"Drug Interactions": "Rifampin (Decrease)",
		"Side Effects": "Nausea and headache.",
		"Monitoring Parameters": "Hepatic Function, hypersensitivity",
		"Counseling Points": "1) Remind patient to complete entire course of therapy, even if symptoms of infection have disappeared.\n2) Advise patient to inform health care provider if infection does not im",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Flunisolide",
		"Brand Name": "AeroBid",
		"Indications": "Allergic rhinitis",
		"Dosage Forms": "Solution",
		"Dosing Regimen": "2 sprays in each nostril 2 times per day",
		"Mechanism of Action": "Has potent anti-inflammatory effects on respiratory tract and nasal mucosa.",
		"Drug Interactions": "None",
		"Side Effects": "Nausea and headache.",
		"Monitoring Parameters": "Improvement of Therapy, Pulmonary Function Tests",
		"Counseling Points": "1) Advise patient that if a dose is missed to take the next scheduled dose when it is due. Caution patient not to double the dose to catch up. 2) Review proper administration technique. Have patient demonstrate technique to ensure ability to use the inhalation aerosol effectively.",
		"Notes/Mnemonics": "steroids"
	},
	{
		"Generic Name": "Fluticasone",
		"Brand Name": "Flonase",
		"Indications": "Allergic Rhinitis",
		"Dosage Forms": "Nasal Suspension, Aerosol for Inhalation",
		"Dosing Regimen": "2 sprays in each nostril daily (200 mcg/day)",
		"Mechanism of Action": "Exerts potent anti-inflammatory effect on nasal passages, inhibiting multiple cell types (eg, mast cells, eosinophils, basophils, lymphocytes, macrophages, and neutrophils) and mediator production/secretion (eg, histamine, eicosanoids, leukotrienes, and cytokines) involved in the asthmatic response.",
		"Drug Interactions": "Ketoconazole- Coadministration may inhibit metabolism and increase systemic exposure of intranasal fluticasone",
		"Side Effects": "Nausea and headache.",
		"Monitoring Parameters": "FEV, evidence of Candida infection",
		"Counseling Points": "1) Advise patient to rinse mouth with water after inhalations are complete. Instruct patient to spit rinse water out and not to swallow rinse water. 2) Warn patient that drug is an ?sthma controller?and is not to be used to treat an acute asthma attack.",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Fluticasone / Salmeterol HFA",
		"Brand Name": "Advair HFA",
		"Indications": "Asthma",
		"Dosage Forms": "Aerosol; inhalation",
		"Dosing Regimen": "2 inhalations of 250 mcg/50 mcg twice daily",
		"Mechanism of Action": "Fluticasone (CorticoSteroids): Inhibits multiple cell types (eg, mast cells) and mediator production or secretion (eg, histamine) involved in the asthmatic response. Salmeterol: Produces bronchodilation by relaxing bronchial smooth muscle through beta-2 receptor stimulation.",
		"Drug Interactions": "propranolol (Decrease). Decreases the Effect of Advair HFA.Beta-blockers block the pulmonary effects of beta-agonists and may produce severe bronchospasm in patients with asthma or COPD.",
		"Side Effects": "Nausea and headache.",
		"Monitoring Parameters": "lung function (FEV1), Fever/Chills, and Glaucoma",
		"Counseling Points": "1) Instruct patient to continue using other medications for asthma or COPD as prescribed by health care provider. 2)Advise patient never to administer Advair Diskus with a spacer device.",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Fluticasone-salmeterol",
		"Brand Name": "Advair Diskus",
		"Indications": "Asthma",
		"Dosage Forms": "Powder",
		"Dosing Regimen": "1 inhalation of 500 mcg/50 mcg twice daily",
		"Mechanism of Action": "Fluticasone: Inhibits multiple cell types (eg, mast cells) and mediator production or secretion (eg, histamine) involved in the asthmatic response.\nSalmeterol: Produces bronchodilation by relaxing bronchial smooth muscle through beta - 2 receptor stimulation.",
		"Drug Interactions": " propranolol(Decrease).Decreases the Effect of Advair Diskus.Beta - blockers block the pulmonary effects of beta - agonists and may produce severe bronchospasm in patients with asthma or COPD.",
		"Side Effects": "Nausea and headache.",
		"Monitoring Parameters": "FEV, glaucoma",
		"Counseling Points": "1.Advise patient never to administer Advair Diskus with a spacer device. 2. Warn patient that this drug is an asthma controller and is not to be used to treat an acute asthma attack.",
		"Notes / Mnemonics": null
	},
	{
		"Generic Name": "Gabapentin",
		"Brand Name": ["Neurontin"],
		"Indications": ["Epilepsy"],
		"Dosage Forms": ["Tablet", "Capsule", "Solution"],
		"Dosing Regimen": ["300 mg by mouth three times daily"],
		"Mechanism of Action": ["Gabapentin is structurally related to the neurotransmitter gamma-aminobutyric acid (GABA), but it does not modify GABA-A or GABA-B radioligand binding, it is not converted metabolically into GABA or a GABA agonist, and it is not an inhibitor of GABA uptake or degradation. GABA acts at inhibitory synapses in the brain by binding to specific transmembrane receptors in the plasma membrane of both pre- and postsynaptic neuronal processes."],
		"Drug Interactions": ["Antacids - Antacids reduced the bioavailability of gabapentin by approximately 20%. This decrease in bioavailability was approximately 5% when gabapentin was given 2 hours after the antacid. Administer gabapentin at least 2 hours following antacid administration."],
		"Side Effects": ["Dizziness","Headache"],
		"Monitoring Parameters": ["Monitor patients treated with any AED for any indication for the emergence or worsening of depression, suicidal thoughts or behavior, and/or any unusual changes in mood or behavior."],
		"Counseling Points": [
			"Counsel patients, their caregivers, and families that AEDs, including gabapentin, may increase the risk of suicidal thoughts and behavior, and advise them of the need to be alert for the emergence or worsening of symptoms of depression, any unusual changes in mood or behavior, or the emergence of suicidal thoughts, behavior, or thoughts about self-harm. Advise them to report behaviors of concern immediately to health care providers.",
			"Accordingly, advise them not to drive a car or operate other complex machinery until they have gained sufficient experience on gabapentin to gauge whether or not it affects their mental and/or motor performance adversely."
		],
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Gemfibrozil",
		"Brand Name": "Lopid",
		"Indications": "Hypertriglyceridemia",
		"Dosage Forms": "Tablet",
		"Dosing Regimen": "1,200 mg administered in 2 divided doses 30 minutes before the morning and evening meals.",
		"Mechanism of Action": "Decreases blood levels of triglycerides and VLDL by decreasing their production. Also decreases cholesterol and increases HDL",
		"Drug Interactions": "Warfarin, Increased risk of bleeding.",
		"Side Effects": "Nausea and headache.",
		"Monitoring Parameters": "TG, LFT",
		"Counseling Points": "1)Inform patient of the need to restrict dietary intake of fats; teach patient dietary restrictions to follow. 2) Advise patient that drug may cause dizziness or blurred vision",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Glatiramer injection",
		"Brand Name": "Copaxone",
		"Indications": "Multiple sclerosis",
		"Dosage Forms": "Kit",
		"Dosing Regimen": "20 mg/day subcutaneously",
		"Mechanism of Action": "Unknown",
		"Drug Interactions": "None",
		"Side Effects": "Nausea and Palpitations",
		"Monitoring Parameters": "Lipoatrophy, hypersensitivity",
		"Counseling Points": "1) Instruct patient to notify health care provider immediately if any of the following occur: hives, skin rash with irritation, dizziness, sweating, chest pain, trouble breathing, or severe pain at injection site. 2) Advise patient that injection-site reactions (eg, redness, pain, swelling, itching, or lump at injection site) are the most common adverse reactions and to inform health care provider if they occur and are bothersome.",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Glipizide",
		"Brand Name": "Glucotrol",
		"Indications": "Type 2 Diabetes",
		"Dosage Forms": "Tablet, ER Tablet",
		"Dosing Regimen": "20 mg/day (ER)",
		"Mechanism of Action": "Decreases blood glucose by stimulating insulin release from pancreas and by increasing tissue sensitivity to insulin.",
		"Drug Interactions": "NSAID's increase the risk of hypoglycemia.",
		"Side Effects": "Nausea and headache.",
		"Monitoring Parameters": "Blood Glucose, A1C",
		"Counseling Points": "1) Remind patient to take medication on empty stomach 30 min before meals. 2) Teach patient to self-monitor blood glucose",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Hydrocodone/acetaminophen 5mg/500mg",
		"Brand Name": "Vicodin",
		"Indications": "Moderate to moderately severe pain",
		"Dosage Forms": "Solution, Tablet, Capsules",
		"Dosing Regimen": "1 tablets every 4 hrs",
		"Mechanism of Action": "Inhibits synthesis of prostaglandins and binds to opiate receptors in CNS and peripherally blocks pain impulse generation; produces antipyresis by direct action on hypothalamic heat-regulating center; causes cough suppression by direct central action in medulla; may produce generalized CNS depression.",
		"Drug Interactions": "May cause CNS toxicity. Avoid concurrent use with alcohol.",
		"Side Effects": "Nausea and dizziness",
		"Monitoring Parameters": "LFT, Hypotension",
		"Counseling Points": "1. When medication is being used for acute pain, advise patient of possible addiction and explain that drug should be used for short term only. 2.Instruct patient to take before pain becomes severe.",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Insulin Glargine",
		"Brand Name": "Lantus",
		"Indications": "Type 2 Diabetes",
		"Dosage Forms": "Subcutaneous",
		"Dosing Regimen": "100 units total daily dose",
		"Mechanism of Action": "Receptor-bound insulin lowers blood glucose by facilitating cellular uptake of glucose into skeletal muscle and fat and inhibiting the output of glucose from the liver. Receptor-bound insulin also inhibits lipolysis in adipocytes, inhibits proteolysis, and enhances protein synthesis.",
		"Drug Interactions": "Beta-blockers, Mask Signs of Hypoglycemia",
		"Side Effects": "Injection site reaction, and hypoglycemia",
		"Monitoring Parameters": "Blood Glucose, A1C",
		"Counseling Points": "1.Educate patient or caregiver regarding diabetes and its management, including target ranges for blood sugar control. Instruct patient that insulin is not a substitute for diet and exercise, and to continue to follow prescribed regimens.\n2. Educate patient or caregiver regarding potential long-term complications of diabetes and need for regularly scheduled general physical and eye examinations.",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Insulin (Regular and NPH)",
		"Brand Name": ["Humulin 70/30"],
		"Indications": ["Type 2 Diabetes"],
		"Dosage Forms": ["Suspension"],
		"Dosing Regimen": ["0.5 to 1 units/kg/day in two divided daily doses subcutaneously"],
		"Mechanism of Action": ["Insulin acts via specific membrane-bound receptors on target tissues to regulate metabolism of carbohydrate, protein, and fats. Target organs for insulin include the liver, skeletal muscle, and adipose tissue. Insulin and its analogs lower blood glucose levels by stimulating peripheral glucose uptake, especially by skeletal muscle and fat, and by inhibiting hepatic glucose production. Insulin inhibits lipolysis, proteolysis, and enhances protein synthesis."],
		"Drug Interactions": ["Atenolol (Beta-blockers) - May enhance the hypoglycemic effect of Insulin."],
		"Side Effects": ["Nausea", "Headache"],
		"Monitoring Parameters": ["Plasma Glucose", "HbA1c"],
		"Counseling Points": [
			"Inform patients that the insulin should be uniformly cloudy or milky after gentle mixing. They should not use the insulin if the white material stays at the bottom of the vial or if clumps are present after gentle mixing.",
			"Advise patients to wear diabetic identification (Medic-Alert) so appropriate treatment can be given if complications occur away from home."
		],
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Insulin Lispro",
		"Brand Name": "Humalog",
		"Indications": "Type 2 Diabetes",
		"Dosage Forms": "Vial, KwikPen (both for injection)",
		"Dosing Regimen": "Humalog Mix 75/25: Individualize dosage subcutaneously",
		"Mechanism of Action": "Receptor-bound insulin lowers blood glucose by facilitating cellular uptake of glucose into skeletal muscle and fat and inhibiting the output of glucose from the liver. Receptor-bound insulin also inhibits lipolysis in adipocytes, inhibits proteolysis, and enhances protein synthesis.",
		"Drug Interactions": "niacin (Decrease). The hypoglycemic response to insulin may be decreased",
		"Side Effects": "Nausea and headache.",
		"Monitoring Parameters": "Blood Glucose, A1C",
		"Counseling Points": "1)Caution patient not to inject or place infusion catheter into skin sites that are red or itchy, or show signs of lipodystrophy 2) Advise patient that dose(s) of insulin will usually be adjusted based on the results of home glucose HbA1c monitoring",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Isoniazid",
		"Brand Name": "Nydrazid",
		"Indications": "Treatment of all forms of tuberculosis.",
		"Dosage Forms": "Tablet, Syrup, Solution",
		"Dosing Regimen": "300 mg daily",
		"Mechanism of Action": "Isoniazid inhibits the synthesis of mycoloic acids, an essential component of the bacterial cell wall. Bactericidal",
		"Drug Interactions": "Acetaminophen (Increase). Isoniazid inducer of P450, increasing toxic Acetaminophen metabolites ~ Hepatotoxicity.",
		"Side Effects": "Nausea, Hepatitis",
		"Monitoring Parameters": "LFT, TB Skin Test, Neuropathy",
		"Counseling Points": "1 ) Advise patient to minimize daily alcohol consumption while taking isoniazid because of the increased risk of hepatitis. 2)Emphasize to patient that treatment will be lengthy and that patient must complete entire course of therapy.",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Isosorbide Mononitrate",
		"Brand Name": "Monoket",
		"Indications": "Angina pectoris",
		"Dosage Forms": "Tablet, ER Tablet",
		"Dosing Regimen": "20 mg twice daily, with the 2 doses given 7 hours apart (Tablet)",
		"Mechanism of Action": "Relaxes vascular smooth muscle and dilation of peripheral arteries and veins. Especially the latter = decreased Pre-Load and After-Load",
		"Drug Interactions": "Viagra : Both drugs are powerful vasodilators that can result in a dangerously low blood pressure. AVOID combination",
		"Side Effects": "Nausea, Hypotension, and headache.",
		"Monitoring Parameters": "BP, Chest Pain",
		"Counseling Points": "1)Advise patient that headaches are a common adverse reaction of therapy 2) Advise patient to notify health care provider if angina symptoms increase in frequency or severity",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Ketoconazole",
		"Brand Name": "Nizoral",
		"Indications": "systemic fungal infections",
		"Dosage Forms": "Tablet, shampoo, foam, gel",
		"Dosing Regimen": "200 mg once daily",
		"Mechanism of Action": "Impairs synthesis of ergosterol, allowing increased permeability in fungal cell membrane and leakage of cellular components.",
		"Drug Interactions": "Rifampin (Decrease). Decreases the effect of Ketoconazole",
		"Side Effects": "Nausea and headache.",
		"Monitoring Parameters": "LFT, ECG (Prolonged QT)",
		"Counseling Points": "1)Patients should not take ketoconazole with antacids; this may cause dizziness. 2) Instruct patient not to take OTC medications, including antihistamines, without consulting health care provider. 3). Shampoo/Cream/Gel for external use only",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Lansoprazole",
		"Brand Name": "Prevacid (Proton Pump Inhibitor)",
		"Indications": "Helicobacter pylori",
		"Dosage Forms": "Suspension, Tablet Dispersible, DR Capsule",
		"Dosing Regimen": "15 mg once daily",
		"Mechanism of Action": "Suppresses gastric acid secretion by blocking ?cid (proton) pump?within gastric parietal cells.",
		"Drug Interactions": "sucralfate. absorption of Lansoprazole was delayed and bioavailability was reduced",
		"Side Effects": "Nausea and headache.",
		"Monitoring Parameters": "LFT, Improvement of Ulcers",
		"Counseling Points": "1) Instruct patient to take each oral dose before a meal. 2)\nRemind patient that lansoprazole is to be taken every day as prescribed, not only when needed or symptoms are present.",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Latanoprost",
		"Brand Name": "Xalatan",
		"Indications": "Elevated intraocular pressure",
		"Dosage Forms": "Ophthalmic solution",
		"Dosing Regimen": "1 drop into each eye once daily",
		"Mechanism of Action": "Prostaglandin F2? analog that reduces IOP by increasing the output of aqueous humor.",
		"Drug Interactions": "Thimerosal. Co-administration cause precipitation.",
		"Side Effects": "Eye pigmentation changes\nBlurred vision",
		"Monitoring Parameters": "IOP, pigmentation changes",
		"Counseling Points": "1) Patients should be advised about the potential for increased brown pigmentation of the iris 2) Patients should be advised that if they develop any ocular reactions, particularly conjunctivitis and lid reactions, they should immediately seek their physician's advice",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Levofloxacin",
		"Brand Name": "Levaquin",
		"Indications": "Community-acquired pneumonia",
		"Dosage Forms": "Tablet, Solution",
		"Dosing Regimen": "500 mg Daily for 7 days",
		"Mechanism of Action": "It is a fluroquinolone antibiotic which prevents the synthesis of bacterial DNA by interfering with the DNA gyrase enzyme ad topoisomerase IV, which are required for bacterial DNA replication, transcription, repair, and recombination leading to cell death.",
		"Drug Interactions": "Warfarin, Increased risk of bleeding.",
		"Side Effects": "Nausea and headache.",
		"Monitoring Parameters": "Liver Function, Renal Function",
		"Counseling Points": "1. Remind patient that levofloxacin is an antibiotic that should only be used to treat bacterial infections and does not treat viral infections 2. Advise patient to contact health care provider if infection does not improve or worsens.",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Lithium",
		"Brand Name": "Lithobid",
		"Indications": "Bipolar disorder",
		"Dosage Forms": "Tablet, ER Tablet, Capsule, Solution",
		"Dosing Regimen": "1,200 mg daily",
		"Mechanism of Action": "Specific mechanism unknown; alters sodium transport in nerve and muscle cells and effects shift toward intraneuronal metabolism of catecholamines.",
		"Drug Interactions": "NSAIDs (Ibuprofen). Increase Lithium Concentration",
		"Side Effects": "Nausea and headache.",
		"Monitoring Parameters": "Lithium Levels, Renal Function",
		"Counseling Points": "1. Explain that therapeutic improvement will be noted in 1 to 3 wk.\n2. Instruct patient to take medication regularly even if feeling well. Symptoms may return if medication is discontinued.",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Medroxyprogesterone",
		"Brand Name": "Provera",
		"Indications": "Secondary amenorrhea",
		"Dosage Forms": "Suspension, Tablet",
		"Dosing Regimen": "10 mg daily for 10 days",
		"Mechanism of Action": "Inhibits secretion of pituitary gonadotropins, thereby preventing follicular maturation and ovulation (contraceptive effect); inhibits spontaneous uterine contraction; transforms proliferative endometrium into secretory endometrium; produces antineoplastic effect in advanced endometrial or renal carcinoma.",
		"Drug Interactions": "Aminoglutethimide administered with medroxyprogesterone may significantly depress the bioavailability of medroxyprogesterone .",
		"Side Effects": "Nausea and headache.",
		"Monitoring Parameters": "Pap smear; pelvic exam",
		"Counseling Points": "1)Instruct diabetic patient taking estrogen and medroxyprogesterone to monitor blood glucose more frequently when therapy is started and to inform health care provider of significant changes in readings. 2)Advise patient that follow-up visits and examinations, including Pap smear, at least once a year, will be required to monitor therapy and to keep appointments.",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Methylprednisolone",
		"Brand Name": "Medrol",
		"Indications": "Seasonal allergic rhinitis",
		"Dosage Forms": "Tablet",
		"Dosing Regimen": "4 mg daily",
		"Mechanism of Action": "Depresses formation, release, and activity of endogenous mediators of inflammation, including prostaglandins, kinins, histamine, liposomal enzymes, and complement system. Modifies body's immune response.",
		"Drug Interactions": "Rifampin (Decrease). Decreases the effect of methylprednisolone",
		"Side Effects": "Headache,  suppression of growth in children",
		"Monitoring Parameters": "Cushing syndrome, and hyperglycemia",
		"Counseling Points": "1) Encourage patient to eat low-sodium, low-fat foods. 2) arn patient regarding increasing appetite and consequent weight gain. Instruct patient to weigh self daily.",
		"Notes/Mnemonics": "Glucocorticoid"
	},
	{
		"Generic Name": "Metronidazole",
		"Brand Name": "Flagyl, Metrogel",
		"Indications": "Anaerobic infections (Bacterial Vaginosis)",
		"Dosage Forms": "Gel, Topical,  Tablet, Capsule, Solution, ER Tablet, Cream, Lotion",
		"Dosing Regimen": "500 mg 3 times daily for 10 days.",
		"Mechanism of Action": "Enters bacterial or protozoal cell and impairs synthesis of DNA, resulting in cell death.",
		"Drug Interactions": "Warfarin, Increased risk of bleeding.",
		"Side Effects": "Nausea and headache.",
		"Monitoring Parameters": "Renal function, Liver Function Tests",
		"Counseling Points": "1) Instruct patient to notify health care provider if infection does not appear to be improving or appears to be getting worse. 2) This medicine is fo vaginal use only. 3). Long term or repeated use may cause second infection",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Niacin",
		"Brand Name": "Niaspan (Nicotinic Acid)",
		"Indications": "Hypertriglyceridemia",
		"Dosage Forms": "Tablet, ER Tablet, Capsule, ER Capsule",
		"Dosing Regimen": "500 mg daily",
		"Mechanism of Action": "At pharmacologic doses, reduces total cholesterol, LDL cholesterol, apolipoprotein B (ApoB), and triglycerides, while increasing HDL cholesterol. Also causes peripheral vasodilation, especially cutaneous vessels.",
		"Drug Interactions": "?       \nAspirin: Concomitant aspirin may decrease the metabolic clearance of nicotinic acid.",
		"Side Effects": "Nausea and headache.",
		"Monitoring Parameters": "LFT, Blood Glucose",
		"Counseling Points": "1) Caution patient that taking this medication on an empty stomach increases the risk of flushing, itching, and stomach distress. 2) Caution patient that drinking alcohol or hot drinks around the time of medication administration will increase the risk of flushing. 3) If diabetic, notify\nphysician of changes in blood glucose.",
		"Notes / Mnemonics": "Vitamin B3"
	},
	{
		"Generic Name": "Nitroglycerin",
		"Brand Name": "Nitrostat",
		"Indications": "Angina pectoris",
		"Dosage Forms": "SL tabs, ER caps, lingual spray, patch, ointment, solution",
		"Dosing Regimen": "1 metered dose spray onto or under the tongue, 2.5\nto 6.5 mg capsules po 3 or 4 times daily",
		"Mechanism of Action": "Relaxation of vascular smooth muscle and dilation of peripheral arteries and veins.",
		"Drug Interactions": "Viagra : Both drugs are powerful vasodilators that can result in a dangerously low blood pressure. AVOID combination",
		"Side Effects": "Headache, Hypotension",
		"Monitoring Parameters": "BP, HR",
		"Counseling Points": "1) Discuss with patients the contraindication of nitroglycerin lingual spray with concurrent sildenafil (Viagra) 2) Take caution after rising from a sitting position because light headedness may result on standing",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Olanzapine",
		"Brand Name": "Zyprexa",
		"Indications": "Schizophrenia",
		"Dosage Forms": "Tablet, Solution, Suspension",
		"Dosing Regimen": "10  mg daily",
		"Mechanism of Action": "Unknown. May control psychotic symptoms through antagonism of selected dopamine and serotonin receptors in the CNS.",
		"Drug Interactions": "Rifampin (Decrease)",
		"Side Effects": "Nausea and headache.",
		"Monitoring Parameters": "Suicide, Renal Function",
		"Counseling Points": "1. Instruct patient to take prescribed dose daily without regard to meals, but to take with food if GI upset occurs. 2. Instruct patient not to stop taking olanzapine when feeling better.",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Oxybutynin",
		"Brand Name": "Oxytrol, Ditropan XL",
		"Indications": "Overactive bladder",
		"Dosage Forms": "Tablet, ER Tablet, Gel, Syrup, TD Patch",
		"Dosing Regimen": "10 mg/day",
		"Mechanism of Action": "Increases bladder capacity, diminishes frequency of uninhibited contractions of detrusor muscle, and delays initial desire to void.",
		"Drug Interactions": "Digoxin (Increase)",
		"Side Effects": "Nausea and headache.",
		"Monitoring Parameters": "LFT, Renal Function",
		"Counseling Points": "1. Instruct patient to take sips of water frequently, suck on ice chips or sugarless hard candy, or chew sugarless gum if dry mouth occurs.\n2. Teach patient to use bladder massage to empty bladder.",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Phenytoin",
		"Brand Name": ["Dilantin"],
		"Indications": ["Seizures"],
		"Dosage Forms": ["Capsule", "Suspension", "Tablet Chewable"],
		"Dosing Regimen": ["100 mg by mouth three times daily"],
		"Mechanism of Action": ["Phenytoin is an AED. The primary site of action appears to be the motor cortex, where the spread of seizure activity is inhibited. Possibly by promoting sodium efflux from neurons, phenytoin tends to stabilize the threshold against hyperexcitability caused by excessive stimulation or environmental changes capable of reducing the membrane sodium gradient. This includes the reduction of posttetanic potentiation at synapses. Loss of posttetanic potentiation prevents cortical seizure foci from detonating adjacent cortical areas. Phenytoin reduces the maximal activity of brain stem centers responsible for the tonic phase of tonic-clonic seizures."],
		"Drug Interactions": ["Rifampin - Decreases the effect of phenytoin due to deacreasing the serum concentration of phenytoin"],
		"Side Effects": ["Nausea", "Headache"],
		"Monitoring Parameters": ["Serum phenytoin levels", "Monitor patients for the emergence or worsening of depression, suicidal thoughts or behavior, and/or any unusual changes in mood or behavior."],
		"Counseling Points": [
			"Inform patients of the early toxic signs and symptoms of potential hematologic, dermatologic, hypersensitivity, or hepatic reactions. These symptoms may include, but are not limited to, fever, sore throat, rash, ulcers in the mouth, easy bruising, lymphadenopathy and petechial or purpuric hemorrhage, and in the case of liver reactions, anorexia, nausea/vomiting, or jaundice. Advise patients that because these signs and symptoms may signal a serious reaction, they must report any occurrence immediately to a health care provider. In addition, advise patients to report these signs and symptoms even if mild or when occurring after extended use.",
			"Counsel patients, their caregivers, and families that AEDs, including gabapentin, may increase the risk of suicidal thoughts and behavior, and advise them of the need to be alert for the emergence or worsening of symptoms of depression, any unusual changes in mood or behavior, or the emergence of suicidal thoughts, behavior, or thoughts about self-harm. Advise them to report behaviors of concern immediately to health care providers.",
			"Avoid alcohol for increased dizziness or blurred vision"
		],
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Pioglitazone",
		"Brand Name": "Actos",
		"Indications": "Type 2 Diabetes",
		"Dosage Forms": "Tablet",
		"Dosing Regimen": "15 mg once daily",
		"Mechanism of Action": "Increases insulin sensitivity in muscle and adipose tissue, and inhibits hepatic gluconeogenesis.",
		"Drug Interactions": "Rifampin (Decrease). Decreases the effect of Pioglitazone",
		"Side Effects": "Edema and Headache. Hypoglycemia???",
		"Monitoring Parameters": "Blood Glucose, A1C",
		"Counseling Points": "1)Advise patient to take every day without regard to meals. 2) Instruct patient that this drug is not a substitute for diet and exercise and to follow prescribed regimens.",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Potassium Chloride",
		"Brand Name": "Effer-K",
		"Indications": "Hypokalemia",
		"Dosage Forms": "Liquid, Powder, ER Tablet, Tablet, effervescent tablet",
		"Dosing Regimen": "100 mEq/day",
		"Mechanism of Action": "Major intracellular cation, essential in maintaining acid-base balance and isotonicity within cells. Potassium functions in gastric secretion, metabolism, muscle contraction, nerve impulse transmission, and renal function.",
		"Drug Interactions": "Spironolactone, Severe hypokalemia may occur",
		"Side Effects": "Nausea, Hyperkalemia",
		"Monitoring Parameters": "serum potassium, ECG's",
		"Counseling Points": "1) Instruct patient to take oral medication after meals or with food and a full glass of water.\n2) Warn patient not to use salt substitutes and to avoid salt-free food unless approved by health care provider.",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Prochlorperazine",
		"Brand Name": "Compro",
		"Indications": "Schizophrenia",
		"Dosage Forms": "Tablet, Suppository, Injection, Solution",
		"Dosing Regimen": "10 mg  4 times daily",
		"Mechanism of Action": "Effects apparently related to dopamine receptor blocking in CNS. Antiemetic activity may be caused by direct inhibition on medullary chemoreceptor trigger zone.",
		"Drug Interactions": "Propranolol: Concomitant administration of propranolol with phenothiazines results in increased plasma levels of both drugs.",
		"Side Effects": "Nausea and headache.",
		"Monitoring Parameters": "Mental Status, Glucose",
		"Counseling Points": "1. Advise patient, family, or caregiver not to change the dose or stop taking unless advised by health care provider. 2. Instruct patient, family, or caregiver to immediately report fainting or loss of consciousness, palpitations, dizziness, high fever, muscle rigidity, altered mental status, irregular pulse, sore throat, unusual bruising, yellowing of the skin or eyes.",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Quetiapine",
		"Brand Name": "SEROquel",
		"Indications": "Bipolar disorder",
		"Dosage Forms": "Tablet, ER Tablet",
		"Dosing Regimen": "800 mg/day",
		"Mechanism of Action": "UNKNOWN",
		"Drug Interactions": "Rifampin (Decrease)",
		"Side Effects": "Nausea and headache.",
		"Monitoring Parameters": "Suicidal Thoughts, CBC",
		"Counseling Points": "1. Instruct patient not to stop taking quetiapine when feeling better. 2. Advise patient to take frequent sips of water, suck on ice chips or sugarless hard candy, or chew sugarless gum if dry mouth occurs",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Raloxifene",
		"Brand Name": "Evista",
		"Indications": "Reduction in the risk of invasive breast cancer, Osteoporosis",
		"Dosage Forms": "Tablet",
		"Dosing Regimen": "60 mg daily",
		"Mechanism of Action": "Actions mediated largely through binding to estrogen receptors, which results in activation of certain estrogenic pathways and blockade of others. Appears to act as an estrogen agonist in bone. Decreases bone resorption and turnover, increases bone mineral density.",
		"Drug Interactions": "Warfarin: Raloxifene may decrease anticoagulant effect.",
		"Side Effects": "Nausea and headache.",
		"Monitoring Parameters": "serum triglycerides, Mammograms",
		"Counseling Points": "1. Instruct patient to take supplemental calcium 2. Advise patient that drug is taken once a day without regard to meals.",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Rifampin",
		"Brand Name": "Rifadin",
		"Indications": "Tuberculosis",
		"Dosage Forms": "Capsule.",
		"Dosing Regimen": "600 mg/day",
		"Mechanism of Action": "Rifampin inhibits DNA-dependent RNA polymerase activity in susceptible cells. Specifically, it interacts with bacterial RNA polymerase but does not inhibit the mammalian enzyme.",
		"Drug Interactions": "Warfarin Concentration is Decreased",
		"Side Effects": "Nausea and headache.",
		"Monitoring Parameters": "LFT, CBC",
		"Counseling Points": "1. Instruct patient to take drug on empty stomach, 1 h before or 2 h after meals. 2. Inform patient that body fluids may turn red-orange in color and that soft contact lenses may become permanently stained.",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Risperidone",
		"Brand Name": "RisperDAL",
		"Indications": "Schizophrenia",
		"Dosage Forms": "Tablet, Solution,Suspension",
		"Dosing Regimen": "5 mg/day",
		"Mechanism of Action": "Has antipsychotic effect, apparently caused by dopamine- and serotonin-receptor blocking in CNS",
		"Drug Interactions": "Rifampin (Decrease)",
		"Side Effects": "Nausea and headache.",
		"Monitoring Parameters": "CBC, Glucose",
		"Counseling Points": "1. Instruct patient not to stop taking risperidone when feeling better. 2.Instruct patient to avoid alcoholic beverages and sedatives (eg, diazepam) while taking risperidone",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Sertraline",
		"Brand Name": "Zoloft",
		"Indications": "Panic disorder, Major Depressive Disorder",
		"Dosage Forms": "Tablet, Concentrate",
		"Dosing Regimen": "50 mg daily",
		"Mechanism of Action": "Selectively blocks reuptake of serotonin, enhancing serotonergic function.",
		"Drug Interactions": "Warfarin, Increased risk of bleeding.",
		"Side Effects": "Nausea, Insomnia, and headache.",
		"Monitoring Parameters": "Weight Loss, Suicidal Thoughts",
		"Counseling Points": "1) Caution patient or caregiver that oral concentrate must be diluted before administration 2) Instruct patient to notify health care provider if symptoms do not appear to be getting better, or if they worsen, or if bothersome adverse reactions",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Sildenafil",
		"Brand Name": ["Viagra"],
		"Indications": ["Erectile Dysfunction"],
		"Dosage Forms": ["Tablet"],
		"Dosing Regimen": ["100 mg by mouth daily"],
		"Mechanism of Action": ["Enhances the effect of nitric oxide by inhibiting phosphodiesterase type 5 (PDE5) in the corpus cavernosum of the penis. This results in vasodilation and increased inflow of blood into the corpus cavernosum, with ensuing penile erection upon sexual stimulation."],
		"Drug Interactions": ["Rifampin (CYP3A4 Inhibitors) - Decreases the effect of sildenafil due to reduction in sildenafil plasma concentration"],
		"Side Effects": ["Headache", "Flushing"],
		"Monitoring Parameters": ["Blood Pressure", "Duration of Erection"],
		"Counseling Points": [
			"Advise patients to seek medical attention in the event of a sudden decrease or loss of hearing.",
			"In the event of an erection that persists long than 4 hours, advise the patient to seek immediate medical assistance."
		],
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Simvastatin",
		"Brand Name": "Zocor",
		"Indications": "Hyperlipidemia",
		"Dosage Forms": "Tablet",
		"Dosing Regimen": "10 mg daily",
		"Mechanism of Action": "Increases the rate at which the body removes cholesterol from blood and reduces production of cholesterol by inhibiting the enzyme (HMG-CoA Reductase) that catalyzes an early rate-limiting step in cholesterol synthesis.",
		"Drug Interactions": "Rifampin (Decrease)",
		"Side Effects": "Nausea and headache.",
		"Monitoring Parameters": "LFT, Lipid Panel",
		"Counseling Points": "1. Advise all patients of the risk of myopathy, including rhabdomyolysis, and to promptly report any unexplained muscle pain, tenderness, or weakness. 2. Inform patients that fasting lipid panels and liver function tests should be preformed before the initiation of therapy and thereafter when clinically indicated.",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Sumatriptan",
		"Brand Name": "Imitrex",
		"Indications": "migraine attacks",
		"Dosage Forms": "Solution, Tablet",
		"Dosing Regimen": "100 mg Once",
		"Mechanism of Action": "Selective agonist for vascular serotonin (5-HT1) receptor subtype, causing vasoconstriction of cranial arteries.",
		"Drug Interactions": "fluoxetine (Increase), life-threatening serotonin syndrome (eg, hyperreflexia, incoordination, weakness)",
		"Side Effects": "Nausea and headache.",
		"Monitoring Parameters": "ECG, LFT",
		"Counseling Points": "1. Sumatriptan is intended to relieve migraine but not to prevent or reduce the number of attacks. Use only to treat an actual migraine attack. 2.Instruct patients to tell a health care provider if feelings of dizziness, drowsiness, flushing (redness of face lasting a short time), heat, heaviness, pressure, sickness, tingling, or tiredness develop.",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Tamoxifen",
		"Brand Name": ["Soltamox"],
		"Indications": ["Reduction in risk of breast cancer in high-risk women"],
		"Dosage Forms": ["Tablet", "Solution"],
		"Dosing Regimen": ["20 mg by mouth daily"],
		"Mechanism of Action": ["A nonsteroidal agent with antiestrogenic properties. The antiestrogenic effects may be related to its ability to compete with estrogen for binding sites in target tissues such as the breast."],
		"Drug Interactions": ["Rifampin - Decreases the effect of Tamoxifen due to a reduction in Tamoxifen plasma concentration"],
		"Side Effects": ["Nausea", "Headache"],
		"Monitoring Parameters": ["CBC", "Liver Function Tests"],
		"Counseling Points": [
			"Advise patients that tamoxifen reduces the incidence of breast cancer but may not eliminate risk.",
			"Women who are pregnant or who plan to become pregnant should not take tamoxifen to reduce the risk of breast cancer"
		],
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Tamsulosin",
		"Brand Name": "Flomax",
		"Indications": "Benign prostatic hyperplasia (BPH)",
		"Dosage Forms": "Capsule",
		"Dosing Regimen": "0.4 mg once daily 30 minutes following the same meal each day",
		"Mechanism of Action": "Selectively blocks alpha1-adrenergic receptors causing relaxation of prostate smooth muscle resulting in an increase in urinary flow rate and a reduction in symptoms of benign prostatic hypertrophy.",
		"Drug Interactions": "CIMETIDINE: increases tamsulosin effects",
		"Side Effects": "Nausea and headache.",
		"Monitoring Parameters": "Urine Flow, hypersensitivity",
		"Counseling Points": "1. Advise about the possibility of priapism 2. Hypotension",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Timolol",
		"Brand Name": "Betimol",
		"Indications": "Elevated intraocular pressure",
		"Dosage Forms": "Solution, Tablet",
		"Dosing Regimen": "1 drop of 0.25% in the affected eye(s) twice daily.",
		"Mechanism of Action": "Blocks beta-receptors, which primarily affect heart (slows rate), vascular musculature (decreases BP), and lungs (reduces function). Reduces elevated and normal IOP via decreasing production of aqueous humor or increasing flow.",
		"Drug Interactions": "Epinephrine ophthalmic: Although timolol used alone has little or no effect on pupil size, mydriasis resulting from concomitant therapy with timolol and epinephrine has been reported occasionally",
		"Side Effects": "Nausea and burning and stinging",
		"Monitoring Parameters": "IOP, BP",
		"Counseling Points": "1) Tell patient to consult health care provider before using OTC cough, cold, or allergy medications, including nasal decongestants. 2) Teach patient how to instill eye drops:",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Tiotropium",
		"Brand Name": ["Spiriva"],
		"Indications": ["Chronic obstructive pulmonary disease (COPD)"],
		"Dosage Forms": ["Capsule"],
		"Dosing Regimen": ["Contents of 1 capsule (18 mcg) inhaled once daily using HandiHaler device. Note: To ensure drug delivery the contents of each capsule should be inhaled twice."],
		"Mechanism of Action": ["Tiotropium is a long-acting, antimuscarinic agent, which is often referred to as an anticholinergic. It has similar affinity to the subtypes of muscarinic receptors, M1 to M5. In the airways, it exhibits pharmacological effects through inhibition of M3 receptors at the smooth muscle leading to bronchodilation."],
		"Drug Interactions": ["Hydrochlorothiazide (Thiazide diuretics) - Anticholinergic agents may increase the serum concentration of thiazide diuretics. Thiazide absorption may be delayed but increased overall."],
		"Side Effects": ["Dry Mouth", "Headache"],
		"Monitoring Parameters": ["S/Sx of Narrow Angle Glaucoma", "S/Sx of Urinary Retention"],
		"Counseling Points": [
			"Inform patients that the contents of the capsules are for oral inhalation only and must not be swallowed.",
			"Inform patients that eye pain or discomfort, blurred vision, visual halos or colored images in association with red eyes from conjunctival congestion and corneal edema may be signs of acute narrow-angle glaucoma; advise patients to immediately consult their health care provider should these signs and symptoms develop."
		],
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Tolterodine",
		"Brand Name": "Detrol",
		"Indications": "Overactive bladder",
		"Dosage Forms": "Tablet, ER Capsules",
		"Dosing Regimen": "4 mg once daily",
		"Mechanism of Action": "Antagonizes muscarinic receptor, which mediates urinary bladder contraction.",
		"Drug Interactions": "Warfarin, Increased risk of bleeding.",
		"Side Effects": "Dry Mouth, Headache",
		"Monitoring Parameters": "Renal function, Liver Function Tests",
		"Counseling Points": "1) Inform patients that antimuscarinic agents (eg, tolterodine) may produce blurred vision, dizziness, or drowsiness. 2) Advise patients to swallow ER capsule whole.",
		"Notes/Mnemonics": "(Tolte-- > Toilet)"
	},
	{
		"Generic Name": "Tramadol",
		"Brand Name": "Ultram",
		"Indications": "Pain",
		"Dosage Forms": "Tablet, ER Capsule, ER Tablet",
		"Dosing Regimen": "25 mg/day in the morning",
		"Mechanism of Action": "Binds to mu-opioid receptors and inhibits reuptake of norepinephrine and serotonin; exact mechanism of action unknown.",
		"Drug Interactions": "Rifampin (Decrease). Decreases the effect of Tramadol",
		"Side Effects": "Nausea and headache.",
		"Monitoring Parameters": "Resolution of Pain, Addiction",
		"Counseling Points": "1) Inform patients not to take tramadol with alcohol-containing beverages. 2) Instruct female patients to inform their health care provider if they are pregnant, think they might become pregnant, or are trying to become pregnant.",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Tretinoin",
		"Brand Name": "Retin-A",
		"Indications": "Acne",
		"Dosage Forms": "Gel,Cream",
		"Dosing Regimen": "Apply lightly to affected area once daily before bedtime.",
		"Mechanism of Action": "Decreases cohesiveness and stimulates mitotic activity and turnover of follicular epithelial cells, resulting in decreased formation and increased extrusion of comedones.",
		"Drug Interactions": "salicylic acid: concomitant use will result in skin irritation",
		"Side Effects": "peeling, dry skin",
		"Monitoring Parameters": "Hypersensitivity, Skin Irritation",
		"Counseling Points": "1) Advise patient to apply medication once daily, using enough medication to cover the affected area(s) lightly, before bedtime.  2) Instruct patient to thoroughly, but gently, cleanse area with mild, non-medicated soap and allow to dry for 20 to 30 min before applying tretinoin",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Valacyclovir",
		"Brand Name": ["Valtrex"],
		"Indications": ["Genital herpes"],
		"Dosage Forms": ["Tablet"],
		"Dosing Regimen": ["1 g by mouth twice daily for 10 days"],
		"Mechanism of Action": ["Valacyclovir, a nucleoside analogue DNA polymerase inhibitor (inhibits viral DNA replication), is rapidly converted to acyclovir, which has demonstrated antiviral activity against HSV-1 and HSV-2 and VZV both in vitro and in vivo."],
		"Drug Interactions": ["Probenecid - Increase in valtrex serum levels through inhibiting renal excretion."],
		"Side Effects": ["Nausea", "Headache"],
		"Monitoring Parameters": ["Herpes Outbreak", "CNS Changes (agitation, hallucinations, confusion, delirium, seizures, encephalopathy)"],
		"Counseling Points": [
			"Inform patients that valacyclovir is not a cure for genital herpes",
			"Advise patients to initiate treatment at the earliest symptom of a cold sore"
		],
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Valproic Acid",
		"Brand Name": "Depacon",
		"Indications": "Complex partial seizures",
		"Dosage Forms": "Capsule, Syrup, ER Tablet, DR Tablet, Solution",
		"Dosing Regimen": "15 mg/kg/day",
		"Mechanism of Action": "unknown",
		"Drug Interactions": "Rifampin (Decrease). Decreases the effect of Valproic acid",
		"Side Effects": "Nausea and headache.",
		"Monitoring Parameters": "LFT, Coagulation Tests",
		"Counseling Points": "1) Instruct patient, family, or caregiver to take (give) exactly as prescribed and not change the dose or discontinue therapy unless advised by health care provider. 2) Caution women of childbearing potential that medication may be harmful if taken while pregnant and to use effective contraception to avoid becoming pregnant.",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Valsartan",
		"Brand Name": "Diovan",
		"Indications": "Hypertension",
		"Dosage Forms": "Tablets",
		"Dosing Regimen": "80 mg once daily",
		"Mechanism of Action": "Binds to the angiotensin-II-receptor preventing ANG II (a powerful vasoconstrictor) from binding to its receptor, thus preventing vasoconstriction",
		"Drug Interactions": "VALSARTAN + SPIRONOLACTONE: Combination of the two drugs make increase K+ levels. Hyperkalemia increases risk of cardiac arrhythmias.",
		"Side Effects": "Nausea and headache.",
		"Monitoring Parameters": "BP, K+",
		"Counseling Points": "1.Instruct the patient in BP- and pulse-measuring skills.r. Instruct patient not to decrease or increase dosage. 2. Avoid salt substitutes",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Varenecline",
		"Brand Name": "Chantix",
		"Indications": "Smoking cessation",
		"Dosage Forms": "Tablet",
		"Dosing Regimen": "1 mg twice daily",
		"Mechanism of Action": "Binds with high affinity and selectivity to neuronal nicotinic acetylcholine receptors, which produces agonist activity while preventing nicotine binding to receptors.",
		"Drug Interactions": "Cimetidine,Coadministration increased the systemic exposure of varenicline by 29% because of a reduction in varenicline renal clearance",
		"Side Effects": "Nausea and headache.",
		"Monitoring Parameters": "neuropsychiatric symptoms, and Renal Function",
		"Counseling Points": "1. Instruct patient to set a date to quit smoking and to initiate varenicline treatment 1 wk before the date.\n2. Advise patient to take the dose after eating and with a full glass of water.",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Venlafaxine",
		"Brand Name": "Effexor",
		"Indications": "Depression",
		"Dosage Forms": "Tablet, ER Capsule, ER Tablet",
		"Dosing Regimen": "375 mg/day in 3 divided doses",
		"Mechanism of Action": "Potentiates norepinephrine, serotonin, and dopamine neurotransmitter activity in the CNS by inhibiting their neuronal reuptake",
		"Drug Interactions": "Warfarin, Increased risk of bleeding.",
		"Side Effects": "Nausea and headache.",
		"Monitoring Parameters": "suicidal tendency, vital signs (HR, Bp, RR)",
		"Counseling Points": "1) May experience insomnia, anxiety.  If severe notify physician. \n2)Avoid alcohol while of therapy.",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Ziprasidone",
		"Brand Name": "Geodon",
		"Indications": "Schizophrenia",
		"Dosage Forms": "Capsule, Solution",
		"Dosing Regimen": "160 mg/day",
		"Mechanism of Action": "Unknown",
		"Drug Interactions": "sotalol. May increase the risk of life-threatening arrhythmias, including torsades de pointes",
		"Side Effects": "Nausea and headache.",
		"Monitoring Parameters": "BG, schizophrenic episodes",
		"Counseling Points": "1. Advise patients to avoid strenuous activity during periods of high temperature or humidity.\n2. Advise patients taking antihypertensives to monitor BP at regular intervals",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Zolpidem",
		"Brand Name": "Ambien",
		"Indications": "Insomnia",
		"Dosage Forms": "Tablet, ER Tablet, Solution",
		"Dosing Regimen": "10 mg immediately before bedtime",
		"Mechanism of Action": "unknown",
		"Drug Interactions": "Rifampin (Decrease)",
		"Side Effects": "Nausea and headache.",
		"Monitoring Parameters": "LFT, Drug Abuse",
		"Counseling Points": "1. Advise patient to take prescribed dose immediately before going to bed 2. Caution patient not to take zolpidem unless planning to get 7 to 8 h of sleep before being active again",
		"Notes/Mnemonics": null
	},
	{
		"Generic Name": "Tenofovir",
		"Brand Name": ["Viread"],
		"Indications": ["Chronic Hepatitis B", "HIV infection"],
		"Dosage Forms": ["Tablet", "Powder"],
		"Dosing Regimen": ["300 mg by mouth daily"],
		"Mechanism of Action": ["Tenofovir disoproxil fumarate, nucleotide reverse transcriptase inhibitor, is an analog of adenosine 5′-monophosphate; it interferes with the HIV viral RNA-dependent DNA polymerase, resulting in inhibition of viral replication."],
		"Drug Interactions": ["Atazanavir - May increase the serum concentration of Tenofovir. Tenofovir may decrease the serum concentration of Atazanavir. Management: When combined use required, tenofovir 300 mg and atazanavir 300 mg should be used with ritonavir 100 mg (adult doses), all given in single daily dose with food. Atazanavir without ritonavir should not be used with tenofovir. Consider therapy modification"],
		"Side Effects": ["Abdominal Paid", "Nausea"],
		"Monitoring Parameters": ["Serum phosphorus", "Serum creatinine", "CBC", "LFTs"],
		"Counseling Points": [
			"Have patient report immediately signs of infection, dyspnea, severe dizziness or syncope, tachycardia, significant dyspepsia, inability to eat, severe myalgia, discolored urine, jaundice, or cold intolerance.", 
			"Educate patients about signs of a significant reaction (eg, wheezing; chest tightness; fever; itching; bad cough; blue skin color; seizures; swelling of face, lips, tongue, or throat)."
		],
		"Notes/Mnemonics": null
	}
];

$(document).ready(function(){

for(var i in drug_list){
	var drug = drug_list[i];

	var found = false;

	for(var j in data){
		if(data[j]["Generic Name"] == drug){
			drug_list[i] = data[j];
			found = true;
			break;
		}
	}

	if(!found){
		drug_list[i] = null;
	}
}

//Output to csv string
brand_name = "";
dosage_forms = "";
dosing_regimen = "";
accepted_indications = "";
mechanism_of_action = "";
side_effects = "";
counseling_points = "";
drug_interactions = "";
monitoring_parameters = "";
for(var k in drug_list){
	if(!drug_list[k] || k >= 100){
		//continue;
	}

	var html = '<div class="drug_card">';

	//Header
	html += '<div style="background-color:#283A50; border: #051529 solid 1px; margin:10px; margin-bottom: 0; padding: 20px;"><h2 style="margin:0; padding:0;">' + (parseInt(k) + 1) + '. ' + drug_list[k]["Generic Name"] + ' <a href="javascript: void(0);"  style="float:right;" class="toggle toggle_btn">+/-</a></h2></div>';

	//Card
	html += '<div class="drug_card_content" style="display:none;background-color:rgb(56, 56, 56); border: #051529 solid 1px; border-top: none; margin:10px; margin-top: 0; padding: 20px;">';
	html += '<div style="display:table;width:100%;">';

	//Convert arrays
	for(var i in drug_list[k]){
		if(drug_list[k][i] instanceof Array){
			drug_list[k][i] = drug_list[k][i].join('<br /><br />');
		}

		html += '<div class="' + i + '" style="display:table-row;width:100%;">';
		html += '<div style="display:table-cell; width: 20%; font-weight: bold; padding: 10px; border-bottom: #e9e9e9 solid 1px;">' + i + '</div>';
		html += '<div style="display:table-cell; width: 80%; padding: 10px; border-bottom: #e9e9e9 solid 1px;">' + drug_list[k][i] + '</div>';
		html += '</div>';
	}

	html += '</div>';
	html += '</div>';

	brand_name += "\"Write a brand name for <b>" + drug_list[k]["Generic Name"] + "</b>\", \"" + drug_list[k]["Brand Name"] + "\"\n";
	dosage_forms += "\"List the commercially available dosage forms for <b>" + drug_list[k]["Generic Name"] + "</b>\", \"" + drug_list[k]["Dosage Forms"] + "\"\n";
	dosing_regimen += "\"Write a usual dosing regimen for <b>" + drug_list[k]["Generic Name"] + "</b>\", \"" + drug_list[k]["Dosing Regimen"] + "\"\n";
	accepted_indications += "\"Name one accepted indication for <b>" + drug_list[k]["Generic Name"] + "</b>\", \"" + drug_list[k]["Indications"] + "\"\n";
	mechanism_of_action += "\"Describe the mechanism of action/pharmacology of <b>" + drug_list[k]["Generic Name"] + "</b>\", \"" + drug_list[k]["Mechanism of Action"] + "\"\n";
	side_effects += "\"State two side effects of <b>" + drug_list[k]["Generic Name"] + "</b>\", \"" + drug_list[k]["Side Effects"] + "\"\n";
	counseling_points += "\"State two items that you must include when counseling a patient in the use of <b>" + drug_list[k]["Generic Name"] + "</b>\", \"" + drug_list[k]["Counseling Points"] + "\"\n";
	drug_interactions += "\"Describe one drug-drug interaction involving <b>" + drug_list[k]["Generic Name"] + "</b>\", \"" + drug_list[k]["Drug Interactions"] + "\"\n";
	monitoring_parameters += "\"Name two common monitoring parameters for therapy with <b>" + drug_list[k]["Generic Name"] + "</b>\", \"" + drug_list[k]["Monitoring Parameters"] + "\"\n";

	html += '</div>';

	$('#drug_cards').append(html);
}

var blah = brand_name +
	dosage_forms +
	dosing_regimen +
	accepted_indications +
	mechanism_of_action +
	side_effects +
	counseling_points +
	drug_interactions +
	monitoring_parameters

console.log(blah);

$(document).on('click', '.toggle', function(){
	var card = $(this).closest('.drug_card');
	card.find('.drug_card_content').slideToggle();
});

$('.expand_all').click(function(){
	$('.drug_card_content').slideDown();
});

$('.collapse_all').click(function(){
	$('.drug_card_content').slideUp();
});

});
