import { createContext, useReducer } from "react";

export const MedicineContext = createContext({
  allMedications: [],
  allUnits: [],
  allFrequencies: [],
  allTimesADayValues: [],
  availableMedications: [],
  medication: { id: "", value: "", IsValid: false },
  strength: { value: "", IsValid: false },
  units: { value: "", IsValid: false },
  frequency: { id: "", value: "" },
  timesAday: { id: "" },
  addMedication: () => {},
  checkMedication: () => {},
  addStrength: () => {},
  addUnit: () => {},
});

const initialState = {
  allMedications: [
    {
      id: new Date().toString() + Math.random().toString(),
      name: "alendronate tablet",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "acyclovir capsule",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "acyclovir tablet",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "albuterol inhalation solution",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "albuterol sulfate",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "alclometasone dipropionate cream",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "alfuzosin hcl",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "alitretinoin",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "allopurinol tablet",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "alprazolam	Xanax",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "altretamine	Hexalen",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "amiodarone tablet",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "amitriptyline tablet",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "amlodipine and valsartan",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "amlodipine besylate	Norvasc",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "amlodipine, valsartan, hydrochlorothiazide",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Amlodipine/Benazepril capsule",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "amoxapine tablet",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "anastrazole",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "antihypertensive",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Arsenic Trioxide",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "artificial tears",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "aspirin EC tablet (OTC)",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "atenolol tablet",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "atenolol/chlorthalidone tablet",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "atorvastatin calcium",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "augmented betamethasone dipropionate",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "azathioprine",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "azelastine",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Azelastine nasal spray",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "baclofen tablet",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Belladonna",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "benazepril",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "benazepril tablet",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "benzonatate	Tessalon",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "benzonatate capsule",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "benztropine tablet",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "bethanechol tablet",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "bicalutamide",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "bisoprolol/HCTZ tablet",
    },
    { id: new Date().toString() + Math.random().toString(), name: "Bleomycin" },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Bortezomib",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "brimonidine tartrate",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "bromocriptine tablet",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "budesonide inhalation suspension",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "bupropion hcl",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "bupropion hcl",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "bupropion HCL tablet",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "buspirone tablet",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Calcitonin-salmon (rDNA origin)",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "calcitriol capsule",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "calcium acetate	PhosLo",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "candesartan cilexetil-hydrochlorothiazide",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "candesartan cilextil",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "capsaicin cream",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "captopril tablet",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "carbamazepine tablet",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "carbidopa/levo SR tablet",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "carbidopa/levo tablet",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "carvedilol",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "cetirizine",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "cevimeline HCl",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "chlordiazepoxide capsule",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "chlorpromazine HCL",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "chlorthalidone tablet",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "cholestyramine",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "cilostazol tablet",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "citalopram tablet",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Cladribine",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "clindamycin phosphate",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Clofarabine",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "clomipramine hcl",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "clonazepam tablet",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "clonidine HCL tablets",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "clonidine patch	Catapres",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "clopidogrel bisulfate tablets",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "clotrimazole/betamethasone cream",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "colestipol hcl",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Cytarabine",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "decitabine",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Dexmethylphenidate HCl tablet",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "dextroamphetamine sulfate ER capsule",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "dextroamphetamine-amphetamine ER capsule",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "dextroamphetamine-amphetamine tablet",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "diazepam tablet",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "diclofenac EC tablet",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "diclofenac ER tablet",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "dicyclomine capsule",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "dicyclomine tablet",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "digoxin tablets",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "diltiazem ER capsule",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "diltiazem hcl cd",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "diphenoxylate hydrochloride/atropine sulfate",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "diphenoxylate/atropine tablet",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Divalproex DR tablet",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "donepezil HCI",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "dorzolamide HCL",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "doxazosin mesylate",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "doxepin capsule	Doxepin",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Doxorubicin	Doxorubicin",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "enalapril maleate tablet",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "enalapril maleate-hydrochlorothiazide",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "epinephrine auto injector",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "eplerenone tablet",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "escitalopram oxalate",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "escitalopram oxalate",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "escitalopram oxalate",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "esomeprazole DR capsule",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "estradiol tablet",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "estropipate tablet",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "eszopiclone	Lunesta",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "etodolac capsule",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "etodolac tablet",
    },
    { id: new Date().toString() + Math.random().toString(), name: "Etoposide" },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "famotidine tablet",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "felodipine ER tablet",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "fenofibrate	Tricor",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "fenofibrate",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "fenofibric acid DR capsule",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "ferrous sulfate EC tablet",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "finasteride tablet",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "flecainide acetate tablet",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "fluconazole",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Fludarabine Phosphate",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "fluoxetine capsule",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "fluticasone nasal spray",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "fluvoxamine maleate tablet	Fluvoxamine Maleate tablet",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "zafirlukast",
    },
    { id: new Date().toString() + Math.random().toString(), name: "zaleplon" },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "zidovudine tablet",
    },
    {
      id: new Date().toString() + Math.random().toString(),
      name: "Zoledronic Acid",
    },
    { id: new Date().toString() + Math.random().toString(), name: "Zolpidem" },
  ],
  allUnits: [
    {
      id: 1,
      name: "g",
    },
    {
      id: 2,
      name: "IU",
    },
    {
      id: 3,
      name: "mcg",
    },
    {
      id: 4,
      name: "mcg/hr",
    },
    {
      id: 5,
      name: "mcg/ml",
    },
    {
      id: 6,
      name: "mEq",
    },
    {
      id: 7,
      name: "mg",
    },
    {
      id: 8,
      name: "mg/cm2",
    },
    {
      id: 9,
      name: "mg/g",
    },
    {
      id: 10,
      name: "mg/ml",
    },
    {
      id: 11,
      name: "mL",
    },
    {
      id: 12,
      name: "%",
    },
  ],
  allFrequencies: [
    { id: 1, value: "Every Day" },
    { id: 2, value: "Specific Days" },
    { id: 3, value: "Days Interval" },
  ],
  allHowOftenDays: [
    { id: 1, value: 2 },
    { id: 2, value: 3 },
    { id: 3, value: 4 },
    { id: 4, value: 5 },
    { id: 5, value: 6 },
  ],
  allTimesADayValues: [
    { id: 1, value: 1, text: "Once a Day" },
    { id: 2, value: 2, text: "Twice a Day" },
    { id: 3, value: 3, text: "Three times a Day" },
    { id: 4, value: 4, text: "Four times a Day" },
    { id: 5, value: 5, text: "Five times a Day" },
    { id: 6, value: 6, text: "Six times a Day" },
  ],

  availableMedications: [],
  medication: { id: "", value: "", IsValid: false },
  strength: { value: "", IsValid: false },
  units: { id: "", IsValid: false },
  frequency: { id: 3, value: "Days Interval" },
  howOften: { id: 1, value: 2 },
  timesADay: { id: 1, value: "Once a Day" },
};

const medicineReducer = (state, action) => {
  switch (action.type) {
    case "ADD MEDICATION":
      const newMedication = { ...state.medication };
      newMedication.value = action.payload;
      newMedication.IsValid = false;
      let newAvailableMedications;
      if (!action.payload.length) {
        newAvailableMedications = [];
      } else {
        newAvailableMedications = state.allMedications.filter((medication) =>
          medication.name.startsWith(action.payload)
        );
      }
      return {
        ...state,
        availableMedications: newAvailableMedications,
        medication: newMedication,
      };
    case "CHECK MEDICATION":
      const medicationCopy = { ...state.medication };
      const medicationValue = medicationCopy.value;
      const valueIsValid = medicationValue.length > 0;

      if (valueIsValid) {
        return {
          ...state,
          medication: {
            id: new Date().toString() + Math.random().toString(),
            value: medicationValue,
            IsValid: valueIsValid,
          },
        };
      } else {
        return {
          ...state,
          medication: {
            ...medicationCopy,
            IsValid: valueIsValid,
          },
        };
      }
    case "CHOOSE MEDICATION":
      return {
        ...state,
        availableMedications: [],
        medication: {
          id: action.payload.id,
          value: action.payload.value,
          IsValid: true,
        },
      };

    case "ADD STRENGTH":
      return {
        ...state,
        strength: {
          value: action.payload,
          IsValid: !isNaN(action.payload) && action.payload > 0,
        },
      };
    case "ADD UNITS":
      return {
        ...state,
        units: {
          value: action.payload,
          IsValid: true,
        },
      };
    default:
      return state;
  }
};

const MedicineContextProvider = ({ children }) => {
  const [medicineState, dispatch] = useReducer(medicineReducer, initialState);

  const addMedication = (medicationValue) => {
    dispatch({
      type: "ADD MEDICATION",
      payload: medicationValue,
    });
  };

  const checkMedication = () => {
    dispatch({ type: "CHECK MEDICATION" });
  };

  const chooseMedication = (id, value) => {
    dispatch({
      type: "CHOOSE MEDICATION",
      payload: { id: id, value: value },
    });
  };

  const addStrength = (strengthValue) => {
    dispatch({ type: "ADD STRENGTH", payload: strengthValue });
  };

  const addUnit = (id) => {
    dispatch({ type: "ADD UNITS", payload: id });
  };

  return (
    <MedicineContext.Provider
      value={{
        ...medicineState,
        addMedication: addMedication,
        checkMedication: checkMedication,
        chooseMedication: chooseMedication,
        addStrength: addStrength,
        addUnit: addUnit,
      }}
    >
      {children}
    </MedicineContext.Provider>
  );
};

export default MedicineContextProvider;
