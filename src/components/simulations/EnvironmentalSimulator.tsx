import React, { useState } from 'react';
import { Leaf, Info, RefreshCw, Activity, ShieldCheck, Flame } from 'lucide-react';

export const EnvironmentalSimulator: React.FC = () => {
  const [mode, setMode] = useState<'energy-pyramid' | 'carbon-footprint'>('energy-pyramid');

  // Energy Pyramid Params
  const [solarEnergy, setSolarEnergy] = useState<number>(1000000); // Joules of sunlight

  // Carbon Footprint Params
  const [electricityKWh, setElectricityKWh] = useState<number>(200); // kWh/month
  const [commuteKm, setCommuteKm] = useState<number>(15); // km/day
  const [dietType, setDietType] = useState<'meat-heavy' | 'moderate' | 'vegetarian' | 'vegan'>('moderate');
  const [flightsPerYear, setFlightsPerYear] = useState<number>(2);

  // 10% ecological rule calculations
  const producersEnergy = solarEnergy * 0.01; // ~1% captured by photosynthesis
  const primaryConsumers = producersEnergy * 0.10; // 10% rule
  const secondaryConsumers = primaryConsumers * 0.10;
  const tertiaryConsumers = secondaryConsumers * 0.10;

  // Carbon calculations (kg CO2 per year)
  // Grid factor: ~0.82 kg CO2 / kWh in India
  const electricityEmissions = electricityKWh * 12 * 0.82;
  // Commute: average petrol 2-wheeler / car ~ 0.14 kg CO2 / km
  const commuteEmissions = commuteKm * 300 * 0.14;
  // Diet: meat ~ 2500 kg, moderate ~ 1800 kg, veg ~ 1200 kg, vegan ~ 900 kg
  const dietFactors = { 'meat-heavy': 2500, moderate: 1800, vegetarian: 1200, vegan: 900 };
  const dietEmissions = dietFactors[dietType];
  // Flights: ~400 kg CO2 per domestic roundtrip
  const flightEmissions = flightsPerYear * 400;

  const totalCarbonKg = electricityEmissions + commuteEmissions + dietEmissions + flightEmissions;
  const totalCarbonTonnes = totalCarbonKg / 1000;
  const treesNeeded = Math.ceil(totalCarbonKg / 22); // 1 mature tree absorbs ~22 kg CO2 / year

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-xl text-white">
      {/* Top Header */}
      <div className="bg-slate-800/80 px-4 py-3 border-b border-slate-700 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Leaf className="w-5 h-5 text-emerald-400" />
          <span className="font-semibold text-sm sm:text-base text-slate-100">
            Interactive Environmental Science & Ecological Simulator
          </span>
        </div>

        <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs sm:text-sm">
          <button
            onClick={() => setMode('energy-pyramid')}
            className={`px-3 py-1.5 rounded-lg transition-all font-medium ${
              mode === 'energy-pyramid' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            Trophic Energy Pyramid
          </button>
          <button
            onClick={() => setMode('carbon-footprint')}
            className={`px-3 py-1.5 rounded-lg transition-all font-medium ${
              mode === 'carbon-footprint' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            Carbon Footprint Calculator
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-5 sm:p-6 bg-slate-950">
        {mode === 'energy-pyramid' && (
          <div className="space-y-6">
            {/* Visual Trophic Pyramid */}
            <div className="flex flex-col items-center gap-2.5 max-w-xl mx-auto py-2">
              {/* Level 4: Tertiary Consumers */}
              <div
                style={{ width: '28%' }}
                className="bg-rose-900/80 border border-rose-500 rounded-lg p-2.5 text-center shadow-lg transition-all"
              >
                <div className="text-[11px] font-bold text-rose-300 uppercase">Apex Predators</div>
                <div className="font-mono font-bold text-rose-100 text-sm">{tertiaryConsumers.toFixed(1)} J</div>
                <div className="text-[10px] text-rose-200/80">Hawks, Tigers, Sharks</div>
              </div>

              {/* Level 3: Secondary Consumers */}
              <div
                style={{ width: '50%' }}
                className="bg-amber-900/80 border border-amber-500 rounded-lg p-2.5 text-center shadow-lg transition-all"
              >
                <div className="text-[11px] font-bold text-amber-300 uppercase">Secondary Consumers</div>
                <div className="font-mono font-bold text-amber-100 text-sm">{secondaryConsumers.toFixed(0)} J</div>
                <div className="text-[10px] text-amber-200/80">Frogs, Small Fish, Carnivores</div>
              </div>

              {/* Level 2: Primary Consumers */}
              <div
                style={{ width: '75%' }}
                className="bg-teal-900/80 border border-teal-500 rounded-lg p-2.5 text-center shadow-lg transition-all"
              >
                <div className="text-[11px] font-bold text-teal-300 uppercase">Primary Consumers (Herbivores)</div>
                <div className="font-mono font-bold text-teal-100 text-sm">{primaryConsumers.toFixed(0)} J</div>
                <div className="text-[10px] text-teal-200/80">Insects, Zooplankton, Deer</div>
              </div>

              {/* Level 1: Primary Producers */}
              <div
                style={{ width: '98%' }}
                className="bg-emerald-900/80 border border-emerald-500 rounded-lg p-3 text-center shadow-lg transition-all"
              >
                <div className="text-xs font-bold text-emerald-300 uppercase">Primary Producers (Photosynthetic Plants)</div>
                <div className="font-mono font-bold text-emerald-100 text-base">{producersEnergy.toLocaleString()} Joules</div>
                <div className="text-[11px] text-emerald-200/80">Phytoplankton, Trees, Grasses (~1% Solar Conversion)</div>
              </div>
            </div>

            {/* Slider */}
            <div className="max-w-xl mx-auto bg-slate-900/80 p-4 rounded-xl border border-slate-800 space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300 font-semibold">Incident Solar Radiation</span>
                <span className="font-mono text-amber-400 font-bold">{solarEnergy.toLocaleString()} Joules</span>
              </div>
              <input
                type="range"
                min="100000"
                max="5000000"
                step="50000"
                value={solarEnergy}
                onChange={(e) => setSolarEnergy(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
              <p className="text-[11px] text-slate-400">
                Observe Lindeman's 10% Law: only ~10% of chemical energy transfers to the next trophic tier. 90% is dissipated as metabolic respiration heat!
              </p>
            </div>
          </div>
        )}

        {mode === 'carbon-footprint' && (
          <div className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300">Electricity</span>
                  <span className="font-mono text-amber-300 font-semibold">{electricityKWh} kWh/mo</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="600"
                  step="10"
                  value={electricityKWh}
                  onChange={(e) => setElectricityKWh(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
                <p className="text-[10px] text-slate-400">{electricityEmissions.toFixed(0)} kg CO₂/yr</p>
              </div>

              <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300">Daily Commute</span>
                  <span className="font-mono text-cyan-300 font-semibold">{commuteKm} km/day</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="60"
                  step="2"
                  value={commuteKm}
                  onChange={(e) => setCommuteKm(Number(e.target.value))}
                  className="w-full accent-cyan-500 cursor-pointer"
                />
                <p className="text-[10px] text-slate-400">{commuteEmissions.toFixed(0)} kg CO₂/yr</p>
              </div>

              <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 space-y-1.5">
                <div className="text-xs text-slate-300">Diet Type</div>
                <select
                  value={dietType}
                  onChange={(e) => setDietType(e.target.value as any)}
                  className="w-full bg-slate-950 text-xs text-slate-200 border border-slate-700 rounded-lg p-2"
                >
                  <option value="meat-heavy">Heavy Non-Veg (2500 kg)</option>
                  <option value="moderate">Balanced / Moderate (1800 kg)</option>
                  <option value="vegetarian">Vegetarian (1200 kg)</option>
                  <option value="vegan">Plant-Based / Vegan (900 kg)</option>
                </select>
                <p className="text-[10px] text-slate-400">{dietEmissions} kg CO₂/yr</p>
              </div>

              <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300">Domestic Flights</span>
                  <span className="font-mono text-rose-300 font-semibold">{flightsPerYear} /year</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="8"
                  value={flightsPerYear}
                  onChange={(e) => setFlightsPerYear(Number(e.target.value))}
                  className="w-full accent-rose-500 cursor-pointer"
                />
                <p className="text-[10px] text-slate-400">{flightEmissions} kg CO₂/yr</p>
              </div>
            </div>

            {/* Results Banner */}
            <div className="bg-emerald-950/40 border border-emerald-900/70 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-xs text-emerald-300 font-semibold uppercase tracking-wider">Annual Carbon Footprint</div>
                <div className="font-mono font-extrabold text-2xl sm:text-3xl text-white">
                  {totalCarbonTonnes.toFixed(2)} Tonnes CO₂ / year
                </div>
                <div className="text-xs text-slate-400">
                  Total emissions: {Math.round(totalCarbonKg).toLocaleString()} kg CO₂ equivalent
                </div>
              </div>

              <div className="bg-slate-900/80 px-4 py-3 rounded-xl border border-slate-800 text-center">
                <div className="text-xs text-slate-400">Trees Needed to Offset:</div>
                <div className="font-mono font-bold text-xl text-emerald-400">
                  🌳 {treesNeeded} Mature Trees
                </div>
                <div className="text-[10px] text-slate-500">Based on 22 kg CO₂/tree/yr</div>
              </div>
            </div>
          </div>
        )}

        {/* Real World Insight */}
        <div className="mt-4 flex items-start gap-2.5 p-3 rounded-xl bg-emerald-950/40 border border-emerald-900/50 text-xs text-emerald-200">
          <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-white">Environmental Insight: </span>
            {mode === 'energy-pyramid' ? (
              <span>Due to 90% energy loss at each trophic step, ecosystems can rarely support more than 4 or 5 trophic levels. This also explains why eating lower on the food chain requires exponentially less agricultural land and resources!</span>
            ) : (
              <span>Transitioning to rooftop solar, adopting LED efficiency, and shifting toward public transit or electric mobility can eliminate over 60% of an individual engineering graduate's carbon footprint.</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
