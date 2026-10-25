import React, { useState } from 'react';
import { 
  CloudRain, 
  Wind, 
  Trees, 
  Layers, 
  ShieldAlert, 
  Sun, 
  Droplet,
  Info,
  CheckCircle2
} from 'lucide-react';

export const IndianWaterConservationVisualizer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'atmosphere' | 'traditional-water' | 'agriculture' | 'ozone-vs-climate'>('atmosphere');

  const atmosphereLayers = [
    { name: 'Exosphere', altitude: '> 700 km', temp: 'Variable', desc: 'Uppermost atmospheric fringe where satellites orbit and atoms escape into interplanetary vacuum.' },
    { name: 'Thermosphere', altitude: '80 – 700 km', temp: 'Up to 2,000 °C', desc: 'Contains the ionosphere. High-energy X-rays and UV absorb here, creating auroras (Northern/Southern lights) and enabling long-distance radio bounce.' },
    { name: 'Mesosphere', altitude: '50 – 80 km', temp: '-90 °C (Coldest)', desc: 'Meteors burn up due to friction with gas molecules. Coldest natural point in Earth atmosphere.' },
    { name: 'Stratosphere', altitude: '12 – 50 km', temp: '-60 °C to 0 °C', desc: 'Home of the vital OZONE LAYER (O₃) which absorbs lethal solar ultraviolet-B (UV-B) radiation. Calm dry air where commercial jets fly.' },
    { name: 'Troposphere', altitude: '0 – 12 km', temp: '15 °C to -60 °C', desc: 'Contains 75% of atmospheric mass and 99% of water vapor. All terrestrial life, clouds, storms, rain, and weather systems occur here.' }
  ];

  const waterSystems = [
    {
      name: 'Stepwells (Baolis & Vavs)',
      region: 'Rajasthan & Gujarat (e.g. Rani ki Vav, Chand Baori)',
      desc: 'Architectural multi-tiered subterranean stone wells with steps leading down to fluctuating water tables, serving as cool community spaces and year-round groundwater reservoirs.',
      engineeringFeature: 'Lined with porous lime mortar allowing natural filtration; deep subterranean shade prevents evaporation losses under desert sun.'
    },
    {
      name: 'Tankas (Underground Cisterns)',
      region: 'Thar Desert / Bikaner / Jodhpur',
      desc: 'Circular underground rainwater harvesting tanks built in house courtyards or agricultural fields, collecting pristine seasonal runoff from plastered catchment areas (Agors).',
      engineeringFeature: 'Inlet fitted with wire mesh and silt traps; sealed with lime plaster to keep drinking water clean, dark, and cool for an entire dry year without microbial growth.'
    },
    {
      name: 'Johads & Bunds',
      region: 'Alwar & Shekhawati (Rajasthan)',
      desc: 'Simple earthen check-dams constructed across seasonal streams to slow monsoon runoff, allowing floodwaters to percolate and recharge depleted underground aquifers.',
      engineeringFeature: 'Raises regional groundwater tables, reviving dried rivers like the Arvari River through community-managed low-cost masonry.'
    }
  ];

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-xl text-white">
      {/* Header */}
      <div className="bg-slate-800/80 px-4 py-3 border-b border-slate-700 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Wind className="w-5 h-5 text-emerald-400" />
          <span className="font-semibold text-sm sm:text-base text-slate-100">
            Atmospheric Layers & Indian Indigenous Environmental Systems
          </span>
        </div>

        {/* Tab switch */}
        <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
          <button
            onClick={() => setActiveTab('atmosphere')}
            className={`px-3 py-1.5 rounded-lg transition-all font-medium ${
              activeTab === 'atmosphere' ? 'bg-emerald-600 text-white shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            Atmosphere Layers
          </button>
          <button
            onClick={() => setActiveTab('traditional-water')}
            className={`px-3 py-1.5 rounded-lg transition-all font-medium ${
              activeTab === 'traditional-water' ? 'bg-emerald-600 text-white shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            Traditional Water Systems
          </button>
          <button
            onClick={() => setActiveTab('ozone-vs-climate')}
            className={`px-3 py-1.5 rounded-lg transition-all font-medium ${
              activeTab === 'ozone-vs-climate' ? 'bg-emerald-600 text-white shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            Ozone vs Global Warming
          </button>
        </div>
      </div>

      <div className="p-5 sm:p-6 bg-slate-950 space-y-6">
        {/* Tab 1: Atmospheric Layers */}
        {activeTab === 'atmosphere' && (
          <div className="space-y-4">
            <div className="text-xs text-slate-400">
              Earth's atmosphere is divided into 5 distinct thermal layers based on temperature gradient:
            </div>

            <div className="space-y-2.5">
              {atmosphereLayers.map((layer, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-2xl border transition-all ${
                    layer.name === 'Stratosphere'
                      ? 'bg-indigo-950/40 border-indigo-500/60 shadow-lg'
                      : layer.name === 'Troposphere'
                      ? 'bg-emerald-950/30 border-emerald-500/50'
                      : 'bg-slate-900 border-slate-800'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm sm:text-base text-white">{layer.name}</span>
                      {layer.name === 'Stratosphere' && (
                        <span className="px-2 py-0.5 rounded text-[10px] bg-indigo-500/20 text-indigo-300 font-bold border border-indigo-500/30">
                          Contains Ozone Layer (O₃)
                        </span>
                      )}
                      {layer.name === 'Troposphere' && (
                        <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
                          Weather & Human Biosphere
                        </span>
                      )}
                    </div>
                    <div className="font-mono text-xs text-cyan-400 font-semibold">
                      Altitude: {layer.altitude} • Temp: {layer.temp}
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{layer.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Traditional Water Management */}
        {activeTab === 'traditional-water' && (
          <div className="space-y-4">
            <div className="text-xs text-slate-400">
              India’s centuries-old indigenous water conservation techniques harvest every drop of monsoon rainfall:
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {waterSystems.map((ws, idx) => (
                <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3 flex flex-col justify-between">
                  <div>
                    <div className="font-bold text-base text-cyan-300">{ws.name}</div>
                    <div className="text-[11px] text-slate-400 font-mono mt-0.5 mb-2">{ws.region}</div>
                    <p className="text-xs text-slate-300 leading-relaxed">{ws.desc}</p>
                  </div>
                  <div className="pt-3 border-t border-slate-800 text-[11px] text-emerald-400 bg-emerald-950/20 p-2.5 rounded-xl">
                    <strong>Engineering Logic: </strong>{ws.engineeringFeature}
                  </div>
                </div>
              ))}
            </div>

            {/* Sacred Groves & Agroforestry box */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col sm:flex-row items-start gap-4">
              <Trees className="w-8 h-8 text-emerald-400 shrink-0 mt-1" />
              <div className="space-y-1">
                <div className="font-bold text-sm text-white">Sacred Groves (Devrais / Orans) & Agroforestry</div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Sacred groves are communally protected climax forest patches preserved through cultural and spiritual taboos against logging. They act as gene banks for endangered medicinal plants and critical wildlife refuges. In agroforestry, multipurpose trees are grown alongside food crops to cycle nutrients, reduce soil erosion, and build resilience against drought.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Ozone Layer Depletion vs Global Warming */}
        {activeTab === 'ozone-vs-climate' && (
          <div className="space-y-4">
            <div className="p-3 rounded-xl bg-amber-950/20 border border-amber-900/40 text-xs text-amber-200 flex items-start gap-2">
              <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Crucial University Distinction: </strong>
                Students frequently confuse Ozone Depletion with Global Warming. They are distinct environmental phenomena operating in different atmospheric layers with different chemical mechanisms!
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Ozone Layer Depletion */}
              <div className="bg-slate-900 p-5 rounded-2xl border border-indigo-800/60 space-y-3">
                <div className="font-bold text-base text-indigo-400">1. Stratospheric Ozone Depletion</div>
                <div className="space-y-1.5 text-xs text-slate-300">
                  <div><strong>Location: </strong>Stratosphere (15–35 km)</div>
                  <div><strong>Cause: </strong>Chlorofluorocarbons (CFCs), Halons releasing active chlorine (Cl•) radicals under solar UV photolysis.</div>
                  <div><strong>Mechanism: </strong>Catalytic breakdown of O₃: Cl + O₃ → ClO + O₂. A single chlorine atom destroys &gt;100,000 ozone molecules!</div>
                  <div><strong>Consequence: </strong>Increased ground-level UV-B radiation causing skin cancers, cataracts, and marine phytoplankton mortality.</div>
                  <div><strong>International Treaty: </strong>Montreal Protocol (1987) — successfully phasing out ozone-depleting substances.</div>
                </div>
              </div>

              {/* Global Warming */}
              <div className="bg-slate-900 p-5 rounded-2xl border border-rose-800/60 space-y-3">
                <div className="font-bold text-base text-rose-400">2. Tropospheric Global Warming</div>
                <div className="space-y-1.5 text-xs text-slate-300">
                  <div><strong>Location: </strong>Troposphere (Ground level to 12 km)</div>
                  <div><strong>Cause: </strong>Excess greenhouse gases: Carbon dioxide (CO₂), Methane (CH₄), Nitrous oxide (N₂O), and water vapor.</div>
                  <div><strong>Mechanism: </strong>Outgoing terrestrial infrared heat radiation is absorbed and re-emitted downward, trapping thermal energy like a greenhouse.</div>
                  <div><strong>Consequence: </strong>Rising mean global temperatures, melting polar glaciers, sea-level rise, heatwaves, and extreme climate shifts.</div>
                  <div><strong>International Treaty: </strong>UNFCCC &amp; Paris Agreement (2015) — targeting limiting warming to &le; 1.5°C.</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
