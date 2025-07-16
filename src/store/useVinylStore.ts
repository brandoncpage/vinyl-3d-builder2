import { create } from 'zustand';

type VinylState = {
  labelTexture: string;
  vinylColor: string;
  vinylWeight: string;
  jacketFront: string;
  jacketBack: string;
  jacketType: string;
  jacketColorMode: string;
  jacketFinish: string;
  showInnerSleeve: boolean;
  innerSleeveTexture: string;
  vinylSize: string;
  rpm: string;
  discCount: string;
  insertType: string;
  outerwrapType: string;
  labelMode: string;

  setLabelTexture: (url: string) => void;
  setVinylColor: (color: string) => void;
  setVinylWeight: (weight: string) => void;
  setJacketFront: (url: string) => void;
  setJacketBack: (url: string) => void;
  setJacketType: (type: string) => void;
  setJacketColorMode: (mode: string) => void;
  setJacketFinish: (finish: string) => void;
  setShowInnerSleeve: (show: boolean) => void;
  setInnerSleeveTexture: (url: string) => void;
  setVinylSize: (size: string) => void;
  setRPM: (rpm: string) => void;
  setDiscCount: (count: string) => void;
  setInsertType: (type: string) => void;
  setOuterwrapType: (type: string) => void;
  setLabelMode: (mode: string) => void;
};

export const useVinylStore = create<VinylState>((set) => ({
  labelTexture: '',
  vinylColor: 'black',
  vinylWeight: 'standard',
  jacketFront: '',
  jacketBack: '',
  jacketType: 'none',
  jacketColorMode: 'bw',
  jacketFinish: 'gloss',
  showInnerSleeve: false,
  innerSleeveTexture: '',
  vinylSize: '12',
  rpm: '33',
  discCount: '1',
  insertType: 'none',
  outerwrapType: 'none',
  labelMode: 'blank',

  setLabelTexture: (url) => set({ labelTexture: url }),
  setVinylColor: (color) => set({ vinylColor: color }),
  setVinylWeight: (weight) => set({ vinylWeight: weight }),
  setJacketFront: (url) => set({ jacketFront: url }),
  setJacketBack: (url) => set({ jacketBack: url }),
  setJacketType: (type) => set({ jacketType: type }),
  setJacketColorMode: (mode) => set({ jacketColorMode: mode }),
  setJacketFinish: (finish) => set({ jacketFinish: finish }),
  setShowInnerSleeve: (show) => set({ showInnerSleeve: show }),
  setInnerSleeveTexture: (url) => set({ innerSleeveTexture: url }),
  setVinylSize: (size) => set({ vinylSize: size }),
  setRPM: (rpm) => set({ rpm }),
  setDiscCount: (count) => set({ discCount: count }),
  setInsertType: (type) => set({ insertType: type }),
  setOuterwrapType: (type) => set({ outerwrapType: type }),
  setLabelMode: (mode) => set({ labelMode: mode }),
}));

