import React, { useState } from 'react';
import { 
  Cpu, 
  Database, 
  Link2, 
  ShieldCheck, 
  Cloud, 
  Radio, 
  Sparkles, 
  Lock, 
  Unlock, 
  RotateCcw,
  Zap
} from 'lucide-react';

export const DisruptiveTechVisualizer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'blockchain' | 'iot-architecture' | 'industry-evolution'>('blockchain');

  // Simple simulated block hash
  const [blockData, setBlockData] = useState<string>('B.Tech Degree Verification Ledger');
  const [blockNonce, setBlockNonce] = useState<number>(1420);
  const [isMining, setIsMining] = useState<boolean>(false);

  // Compute a deterministic educational hash preview
  const generateSimulatedHash = (data: string, nonce: number) => {
    let val = 0;
    const str = `${data}-${nonce}`;
    for (let i = 0; i < str.length; i++) {
      val = (val * 31 + str.charCodeAt(i)) % 999999;
    }
    const hex = Math.abs(val).toString(16).padStart(6, '0');
    return `0000${hex}a9b2c8e`;
  };

  const currentHash = generateSimulatedHash(blockData, blockNonce);
  const prevHash = '00004e21a7c89f012b';

  const handleMine = () => {
    setIsMining(true);
    setTimeout(() => {
      setBlockNonce(prev => prev + Math.floor(Math.random() * 500 + 1));
      setIsMining(false);
    }, 400);
  };

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-xl text-white">
      {/* Header */}
      <div className="bg-slate-800/80 px-4 py-3 border-b border-slate-700 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Cpu className="w-5 h-5 text-violet-400" />
          <span className="font-semibold text-sm sm:text-base text-slate-100">
            Interactive Disruptive Technology Laboratory
          </span>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
          <button
            onClick={() => setActiveTab('blockchain')}
            className={`px-3 py-1.5 rounded-lg transition-all font-medium ${
              activeTab === 'blockchain' ? 'bg-violet-600 text-white shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            Blockchain Block Hashing
          </button>
          <button
            onClick={() => setActiveTab('iot-architecture')}
            className={`px-3 py-1.5 rounded-lg transition-all font-medium ${
              activeTab === 'iot-architecture' ? 'bg-violet-600 text-white shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            Sensor-to-Cloud IoT Flow
          </button>
          <button
            onClick={() => setActiveTab('industry-evolution')}
            className={`px-3 py-1.5 rounded-lg transition-all font-medium ${
              activeTab === 'industry-evolution' ? 'bg-violet-600 text-white shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            Industry 4.0 vs 5.0
          </button>
        </div>
      </div>

      <div className="p-5 sm:p-6 bg-slate-950 space-y-6">
        {/* Tab 1: Blockchain Block Hashing */}
        {activeTab === 'blockchain' && (
          <div className="space-y-4">
            <div className="text-xs text-slate-400">
              In a blockchain, blocks are cryptographically chained through SHA-256 hashes. Changing a single character in the data invalidates the hash and breaks the entire chain:
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2 font-bold text-sm text-violet-300">
                  <Link2 className="w-4 h-4 text-violet-400" />
                  <span>Block #4192 (Immutable Ledger Entry)</span>
                </div>
                <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-emerald-950 border border-emerald-800 text-emerald-400 font-semibold flex items-center gap-1">
                  <Lock className="w-3 h-3" /> Validated Block
                </span>
              </div>

              <div className="space-y-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase text-slate-400">Transaction / Smart Contract Payload:</label>
                  <input
                    type="text"
                    value={blockData}
                    onChange={(e) => setBlockData(e.target.value)}
                    className="w-full bg-slate-950 font-mono text-xs text-slate-100 p-2.5 rounded-xl border border-slate-800 focus:outline-none focus:ring-1 focus:ring-violet-500"
                  />
                  <p className="text-[10px] text-slate-500">Edit the text above to watch the cryptographic hash change immediately!</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-1">
                    <span className="text-slate-500 text-[10px] block uppercase">Previous Block Hash (Parent Link):</span>
                    <span className="text-slate-300 truncate block">{prevHash}</span>
                  </div>

                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500 text-[10px] uppercase">Proof of Work Nonce:</span>
                      <button
                        onClick={handleMine}
                        disabled={isMining}
                        className="text-[10px] font-sans px-2 py-0.5 rounded bg-violet-600 hover:bg-violet-500 text-white font-bold transition-colors"
                      >
                        {isMining ? 'Mining...' : 'Mine Nonce'}
                      </button>
                    </div>
                    <span className="text-violet-400 font-bold block">{blockNonce}</span>
                  </div>
                </div>

                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-1">
                  <span className="text-slate-500 text-[10px] font-mono block uppercase">Generated Cryptographic Hash:</span>
                  <span className="text-emerald-400 font-mono text-xs sm:text-sm font-bold truncate block">{currentHash}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: IoT Sensor-to-Cloud Flow */}
        {activeTab === 'iot-architecture' && (
          <div className="space-y-4">
            <div className="text-xs text-slate-400">
              End-to-End Internet of Things (IoT) Architecture: From physical sensors in smart factories to cloud analytics:
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-2">
                <div className="flex items-center gap-2 text-rose-400 font-bold text-xs uppercase">
                  <Radio className="w-4 h-4" />
                  <span>1. Perception Tier</span>
                </div>
                <div className="text-xs font-bold text-white">Sensors & Actuators</div>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  Temperature, vibration, humidity, pressure, LiDAR, and current sensors measuring physical parameters in real-time.
                </p>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase">
                  <Cpu className="w-4 h-4" />
                  <span>2. Network Tier</span>
                </div>
                <div className="text-xs font-bold text-white">Edge Gateway & Protocols</div>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  Microcontrollers (ESP32, Raspberry Pi) transmitting telemetry via lightweight protocols: MQTT, CoAP, Zigbee, LoRaWAN, and 5G.
                </p>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase">
                  <Cloud className="w-4 h-4" />
                  <span>3. Middleware Tier</span>
                </div>
                <div className="text-xs font-bold text-white">Cloud Storage & Ingestion</div>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  AWS IoT Core, Azure IoT Hub, Google Cloud Pub/Sub ingesting millions of messages per second into distributed data lakes.
                </p>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase">
                  <Sparkles className="w-4 h-4" />
                  <span>4. Application Tier</span>
                </div>
                <div className="text-xs font-bold text-white">AI Analytics & Digital Twins</div>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  Predictive maintenance, anomaly detection, automated smart-grid load shedding, and user dashboard telemetry.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Industry 4.0 vs 5.0 */}
        {activeTab === 'industry-evolution' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
                <div className="font-bold text-base text-cyan-400">Industry 4.0 (Smart Cyber-Physical Systems)</div>
                <div className="space-y-1.5 text-xs text-slate-300">
                  <div><strong>Focus: </strong>Automation, machine-to-machine (M2M) communication, IoT, cloud computing, and big data.</div>
                  <div><strong>Key Technologies: </strong>Automated assembly robots, predictive sensor telemetry, centralized cloud ERP.</div>
                  <div><strong>Philosophy: </strong>Optimize manufacturing efficiency, minimize human error, maximize autonomous output.</div>
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
                <div className="font-bold text-base text-purple-400">Industry 5.0 (Human-Centric & Sustainable)</div>
                <div className="space-y-1.5 text-xs text-slate-300">
                  <div><strong>Focus: </strong>Synergy between humans and autonomous systems (Collaborative Robots or "Cobots"), circular economy, sustainability.</div>
                  <div><strong>Key Technologies: </strong>Cobots working safely alongside human artisans, biometric wearable safety, zero-waste recycling.</div>
                  <div><strong>Philosophy: </strong>Reintroducing human creativity and environmental responsibility alongside AI precision.</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
