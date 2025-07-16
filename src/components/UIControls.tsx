// File: src/components/UIControls.tsx

import { ChangeEvent } from 'react';
import { useVinylStore } from '../store/useVinylStore';

export default function UIControls() {
  const {
    setLabelTexture,
    setVinylColor,
    setVinylWeight,
    setJacketFront,
    setJacketBack,
    setJacketType,
    setJacketColorMode,
    setJacketFinish,
    setShowInnerSleeve,
    setInnerSleeveTexture,
    setVinylSize,
    setRPM,
    setDiscCount,
    setInsertType,
    setOuterwrapType,
    setLabelMode,
  } = useVinylStore();

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>, setter: (url: string) => void) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') setter(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <form className="space-y-4" target="_blank">
      <div>
        <label className="font-semibold">Center Label Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleImageUpload(e, setLabelTexture)}
          className="mt-1 block w-full"
        />
      </div>

      <div>
        <label className="font-semibold">Label Type</label>
        <select onChange={(e) => setLabelMode(e.target.value)} className="mt-1 block w-full border rounded">
          <option value="blank">Blank Label</option>
          <option value="bw">Black and White</option>
          <option value="color">Full Color</option>
        </select>
      </div>

      <div>
        <label className="font-semibold">Vinyl Size</label>
        <select onChange={(e) => setVinylSize(e.target.value)} className="mt-1 block w-full border rounded">
          <option value="12">12"</option>
          <option value="10">10"</option>
          <option value="7">7"</option>
        </select>
      </div>

      <div>
        <label className="font-semibold">RPM</label>
        <select onChange={(e) => setRPM(e.target.value)} className="mt-1 block w-full border rounded">
          <option value="33">33</option>
          <option value="45">45</option>
        </select>
      </div>

      <div>
        <label className="font-semibold">Discs</label>
        <select onChange={(e) => setDiscCount(e.target.value)} className="mt-1 block w-full border rounded">
          <option value="1">Single Vinyl</option>
          <option value="2">Double Vinyl</option>
        </select>
      </div>

      <div>
        <label className="font-semibold">Vinyl Type</label>
        <select onChange={(e) => setVinylColor(e.target.value)} className="mt-1 block w-full border rounded">
          <option value="black">Classic Black</option>
          <option value="red">Color</option>
          <option value="#f4c6c6">Splatter</option>
          <option value="#a5d8ff">Swirl</option>
        </select>
      </div>

      <div>
        <label className="font-semibold">Vinyl Weight</label>
        <select onChange={(e) => setVinylWeight(e.target.value)} className="mt-1 block w-full border rounded">
          <option value="standard">Standard</option>
          <option value="heavyweight">Heavyweight</option>
        </select>
      </div>

      <div>
        <label className="font-semibold">Jacket Type</label>
        <select onChange={(e) => setJacketType(e.target.value as any)} className="mt-1 block w-full border rounded">
          <option value="none">None</option>
          <option value="single">Single Pocket</option>
          <option value="wide">Wide Spine</option>
          <option value="gatefold">Gatefold</option>
          <option value="euro">Euro-Sleeve</option>
        </select>
      </div>

      <div>
        <label className="font-semibold">Jacket Color</label>
        <select onChange={(e) => setJacketColorMode(e.target.value as any)} className="mt-1 block w-full border rounded">
          <option value="bw">Black & White</option>
          <option value="color">Full Color</option>
        </select>
      </div>

      <div>
        <label className="font-semibold">Jacket Finish</label>
        <select onChange={(e) => setJacketFinish(e.target.value)} className="mt-1 block w-full border rounded">
          <option value="gloss">Gloss</option>
          <option value="semi-gloss">Semi-Gloss</option>
          <option value="matte">Matte</option>
          <option value="reverse">Reverse Board</option>
        </select>
      </div>

      <div>
        <label className="font-semibold">Jacket Front Cover</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleImageUpload(e, setJacketFront)}
          className="mt-1 block w-full"
        />
      </div>

      <div>
        <label className="font-semibold">Jacket Back Cover</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleImageUpload(e, setJacketBack)}
          className="mt-1 block w-full"
        />
      </div>

      <div>
        <label className="inline-flex items-center gap-2">
          <input type="checkbox" onChange={(e) => setShowInnerSleeve(e.target.checked)} />
          Show Inner Sleeve
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleImageUpload(e, setInnerSleeveTexture)}
          className="mt-2 block w-full"
        />
      </div>

      <div>
        <label className="font-semibold">Printed Insert</label>
        <select onChange={(e) => setInsertType(e.target.value)} className="mt-1 block w-full border rounded">
          <option value="none">None</option>
          <option value="12x12">12x12</option>
          <option value="24x12">24x12 (Gatefold)</option>
        </select>
      </div>

      <div>
        <label className="font-semibold">Outerwrap Type</label>
        <select onChange={(e) => setOuterwrapType(e.target.value)} className="mt-1 block w-full border rounded">
          <option value="none">None</option>
          <option value="shrink">Shrinkwrap</option>
          <option value="polybag">Polybag</option>
        </select>
      </div>
    </form>
  );
}
