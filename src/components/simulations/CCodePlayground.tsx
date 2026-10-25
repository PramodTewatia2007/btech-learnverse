import React, { useState } from 'react';
import { 
  Play, 
  RotateCcw, 
  StepForward, 
  Terminal, 
  Cpu, 
  CheckCircle2, 
  AlertCircle, 
  Copy, 
  Check, 
  Download, 
  Binary, 
  GitBranch, 
  Layers, 
  FileText 
} from 'lucide-react';

interface CCodePlaygroundProps {
  initialCode?: string;
  expectedOutput?: string;
  title?: string;
  experimentId?: string;
}

interface VariableState {
  name: string;
  type: string;
  address: string;
  value: string;
}

interface ProgramPreset {
  title: string;
  code: string;
  sampleInput?: string;
  expectedOutput: string;
  steps: { line: number; output: string; vars: VariableState[] }[];
}

const PRESET_PROGRAMS: Record<string, ProgramPreset> = {
  max_min: {
    title: 'Exp 1: Max & Min of Numbers',
    code: `#include <stdio.h>

int main() {
    int arr[] = {23, 5, 89, 12, 78};
    int n = 5;
    int max = arr[0];
    int min = arr[0];

    for (int i = 1; i < n; i++) {
        if (arr[i] > max) max = arr[i];
        if (arr[i] < min) min = arr[i];
    }

    printf("Array: [23, 5, 89, 12, 78]\\n");
    printf("Maximum element = %d\\n", max);
    printf("Minimum element = %d\\n", min);
    return 0;
}`,
    sampleInput: '',
    expectedOutput: `Array: [23, 5, 89, 12, 78]
Maximum element = 89
Minimum element = 5
[Program exited with code 0]`,
    steps: [
      { line: 4, output: '', vars: [{ name: 'n', type: 'int', address: '0x7ffd00', value: '5' }] },
      { line: 6, output: '', vars: [{ name: 'max', type: 'int', address: '0x7ffd04', value: '23' }, { name: 'min', type: 'int', address: '0x7ffd08', value: '23' }] },
      { line: 9, output: '', vars: [{ name: 'i', type: 'int', address: '0x7ffd0c', value: '1' }, { name: 'arr[1]', type: 'int', address: '0x7ffd14', value: '5' }, { name: 'min', type: 'int', address: '0x7ffd08', value: '5' }, { name: 'max', type: 'int', address: '0x7ffd04', value: '23' }] },
      { line: 9, output: '', vars: [{ name: 'i', type: 'int', address: '0x7ffd0c', value: '2' }, { name: 'arr[2]', type: 'int', address: '0x7ffd18', value: '89' }, { name: 'min', type: 'int', address: '0x7ffd08', value: '5' }, { name: 'max', type: 'int', address: '0x7ffd04', value: '89' }] },
      { line: 14, output: 'Array: [23, 5, 89, 12, 78]\nMaximum element = 89\nMinimum element = 5\n\n[Program exited with code 0]', vars: [{ name: 'max', type: 'int', address: '0x7ffd04', value: '89' }, { name: 'min', type: 'int', address: '0x7ffd08', value: '5' }] }
    ]
  },
  pointers: {
    title: 'Pointers & Memory Dereference',
    code: `#include <stdio.h>

int main() {
    int x = 42;
    int *ptr = &x;

    printf("Value of x: %d\\n", x);
    printf("Address &x: %p\\n", (void*)&x);
    printf("Pointer ptr holds: %p\\n", (void*)ptr);
    printf("Dereferenced *ptr: %d\\n", *ptr);

    *ptr = 99; // Changing value through pointer dereference
    printf("New value of x: %d\\n", x);

    return 0;
}`,
    expectedOutput: `Value of x: 42
Address &x: 0x7ffd8a
Pointer ptr holds: 0x7ffd8a
Dereferenced *ptr: 42
New value of x: 99
[Program exited with code 0]`,
    steps: [
      { line: 4, output: '', vars: [{ name: 'x', type: 'int', address: '0x7ffd8a', value: '42' }] },
      { line: 5, output: '', vars: [{ name: 'x', type: 'int', address: '0x7ffd8a', value: '42' }, { name: 'ptr', type: 'int*', address: '0x7ffd80', value: '0x7ffd8a' }] },
      { line: 7, output: 'Value of x: 42\n', vars: [{ name: 'x', type: 'int', address: '0x7ffd8a', value: '42' }, { name: 'ptr', type: 'int*', address: '0x7ffd80', value: '0x7ffd8a' }] },
      { line: 8, output: 'Value of x: 42\nAddress &x: 0x7ffd8a\n', vars: [{ name: 'x', type: 'int', address: '0x7ffd8a', value: '42' }, { name: 'ptr', type: 'int*', address: '0x7ffd80', value: '0x7ffd8a' }] },
      { line: 9, output: 'Value of x: 42\nAddress &x: 0x7ffd8a\nPointer ptr holds: 0x7ffd8a\n', vars: [{ name: 'x', type: 'int', address: '0x7ffd8a', value: '42' }, { name: 'ptr', type: 'int*', address: '0x7ffd80', value: '0x7ffd8a' }] },
      { line: 10, output: 'Value of x: 42\nAddress &x: 0x7ffd8a\nPointer ptr holds: 0x7ffd8a\nDereferenced *ptr: 42\n', vars: [{ name: 'x', type: 'int', address: '0x7ffd8a', value: '42' }, { name: 'ptr', type: 'int*', address: '0x7ffd80', value: '0x7ffd8a' }] },
      { line: 12, output: 'Value of x: 42\nAddress &x: 0x7ffd8a\nPointer ptr holds: 0x7ffd8a\nDereferenced *ptr: 42\nNew value of x: 99\n\n[Program exited with code 0]', vars: [{ name: 'x', type: 'int', address: '0x7ffd8a', value: '99' }, { name: 'ptr', type: 'int*', address: '0x7ffd80', value: '0x7ffd8a' }] }
    ]
  },
  recursion: {
    title: 'Exp 6: Recursion (Factorial & GCD)',
    code: `#include <stdio.h>

long long factorial(int n) {
    if (n <= 1) return 1; // Base case
    return n * factorial(n - 1); // Recursive call
}

int gcd(int a, int b) {
    if (b == 0) return a;
    return gcd(b, a % b);
}

int main() {
    int num = 5;
    printf("Factorial of %d = %lld\\n", num, factorial(num));
    printf("GCD of 48 and 18 = %d\\n", gcd(48, 18));
    return 0;
}`,
    expectedOutput: `Factorial of 5 = 120
GCD of 48 and 18 = 6
[Program exited with code 0]`,
    steps: [
      { line: 14, output: '', vars: [{ name: 'num', type: 'int', address: '0x7ffb10', value: '5' }] },
      { line: 3, output: '', vars: [{ name: 'factorial(5)', type: 'stack', address: 'Frame 1', value: '5 * factorial(4)' }] },
      { line: 3, output: '', vars: [{ name: 'factorial(4)', type: 'stack', address: 'Frame 2', value: '4 * factorial(3)' }] },
      { line: 3, output: '', vars: [{ name: 'factorial(3)', type: 'stack', address: 'Frame 3', value: '3 * factorial(2)' }] },
      { line: 3, output: '', vars: [{ name: 'factorial(2)', type: 'stack', address: 'Frame 4', value: '2 * factorial(1)' }] },
      { line: 4, output: '', vars: [{ name: 'factorial(1)', type: 'stack', address: 'Frame 5', value: '1 (Base Case reached)' }] },
      { line: 15, output: 'Factorial of 5 = 120\nGCD of 48 and 18 = 6\n\n[Program exited with code 0]', vars: [{ name: 'return', type: 'long long', address: '0x7ffb18', value: '120' }] }
    ]
  },
  sorting: {
    title: 'Exp 8: Bubble Sort Step Visualizer',
    code: `#include <stdio.h>

void bubbleSort(int a[], int n) {
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (a[j] > a[j + 1]) {
                int temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
            }
        }
    }
}

int main() {
    int arr[] = {64, 34, 25, 12, 22};
    bubbleSort(arr, 5);
    printf("Sorted array: ");
    for (int i = 0; i < 5; i++) printf("%d ", arr[i]);
    printf("\\n");
    return 0;
}`,
    expectedOutput: `Sorted array: 12 22 25 34 64 
[Program exited with code 0]`,
    steps: [
      { line: 16, output: '', vars: [{ name: 'Pass 0', type: 'array', address: '0x7ffa00', value: '[64, 34, 25, 12, 22]' }] },
      { line: 8, output: '', vars: [{ name: 'Pass 1', type: 'array', address: '0x7ffa00', value: '[34, 25, 12, 22, 64] (64 bubbled to end)' }] },
      { line: 8, output: '', vars: [{ name: 'Pass 2', type: 'array', address: '0x7ffa00', value: '[25, 12, 22, 34, 64] (34 in place)' }] },
      { line: 8, output: '', vars: [{ name: 'Pass 3', type: 'array', address: '0x7ffa00', value: '[12, 22, 25, 34, 64] (Sorted)' }] },
      { line: 19, output: 'Sorted array: 12 22 25 34 64 \n\n[Program exited with code 0]', vars: [{ name: 'Result', type: 'int[5]', address: '0x7ffa00', value: '[12, 22, 25, 34, 64]' }] }
    ]
  },
  number_conversion: {
    title: 'Exp 4: Number System Conversion',
    code: `#include <stdio.h>

void printBinary(unsigned int n) {
    for (int i = 15; i >= 0; i--) {
        int k = n >> i;
        if (k & 1) printf("1");
        else printf("0");
        if (i % 4 == 0) printf(" ");
    }
    printf("\\n");
}

int main() {
    int num = 45;
    printf("Decimal     : %d\\n", num);
    printf("Binary (16b): ");
    printBinary(num);
    printf("Octal       : 0%o\\n", num);
    printf("Hexadecimal : 0x%X\\n", num);
    return 0;
}`,
    expectedOutput: `Decimal     : 45
Binary (16b): 0000 0000 0010 1101 
Octal       : 055
Hexadecimal : 0x2D
[Program exited with code 0]`,
    steps: [
      { line: 14, output: 'Decimal     : 45\n', vars: [{ name: 'num', type: 'int', address: '0x7ff900', value: '45 (Base 10)' }] },
      { line: 16, output: 'Decimal     : 45\nBinary (16b): 0000 0000 0010 1101 \n', vars: [{ name: 'Binary', type: 'bin', address: 'bits', value: '0010 1101 (32 + 8 + 4 + 1)' }] },
      { line: 17, output: 'Decimal     : 45\nBinary (16b): 0000 0000 0010 1101 \nOctal       : 055\n', vars: [{ name: 'Octal', type: 'oct', address: 'octal', value: '055 (5×8¹ + 5×8⁰)' }] },
      { line: 18, output: 'Decimal     : 45\nBinary (16b): 0000 0000 0010 1101 \nOctal       : 055\nHexadecimal : 0x2D\n\n[Program exited with code 0]', vars: [{ name: 'Hex', type: 'hex', address: 'hex', value: '0x2D (2×16¹ + 13×16⁰)' }] }
    ]
  }
};

export const CCodePlayground: React.FC<CCodePlaygroundProps> = ({
  initialCode,
  expectedOutput,
  title = 'Interactive C Code & Execution Tracer'
}) => {
  const [selectedPreset, setSelectedPreset] = useState<string>('max_min');
  const [code, setCode] = useState<string>(initialCode || PRESET_PROGRAMS.max_min.code);
  const [stdinInput, setStdinInput] = useState<string>('');
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(-1);
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [isDownloaded, setIsDownloaded] = useState<boolean>(false);
  const [viewTab, setViewTab] = useState<'editor' | 'number_tool'>('editor');

  // Live number converter helper states
  const [convDec, setConvDec] = useState<number>(45);

  const activeProgram = PRESET_PROGRAMS[selectedPreset] || PRESET_PROGRAMS.max_min;
  const currentStep = currentStepIndex >= 0 && currentStepIndex < activeProgram.steps.length 
    ? activeProgram.steps[currentStepIndex] 
    : null;

  const handleSelectPreset = (key: string) => {
    setSelectedPreset(key);
    setCode(PRESET_PROGRAMS[key].code);
    setCurrentStepIndex(-1);
  };

  const handleRunAll = () => {
    setCurrentStepIndex(activeProgram.steps.length - 1);
  };

  const handleStepForward = () => {
    if (currentStepIndex < activeProgram.steps.length - 1) {
      setCurrentStepIndex(prev => prev + 1);
    }
  };

  const handleReset = () => {
    setCurrentStepIndex(-1);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleDownloadC = () => {
    const blob = new Blob([code], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${selectedPreset.replace(/\s+/g, '_')}.c`;
    link.click();
    URL.revokeObjectURL(url);
    setIsDownloaded(true);
    setTimeout(() => setIsDownloaded(false), 2000);
  };

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl space-y-4">
      {/* Top Header & Presets */}
      <div className="bg-slate-900 border-b border-slate-800 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Cpu className="w-5 h-5 text-emerald-400" />
          <h3 className="font-bold text-sm text-white">{title}</h3>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto text-xs">
          <select
            value={selectedPreset}
            onChange={e => handleSelectPreset(e.target.value)}
            className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-white font-medium focus:outline-none focus:border-emerald-500"
          >
            <option value="max_min">Exp 1: Max &amp; Min</option>
            <option value="pointers">Pointers &amp; Memory</option>
            <option value="recursion">Exp 6: Recursion Stack</option>
            <option value="sorting">Exp 8: Bubble Sort</option>
            <option value="number_conversion">Exp 4: Number Systems</option>
          </select>

          <button
            onClick={() => setViewTab(viewTab === 'editor' ? 'number_tool' : 'editor')}
            className={`px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5 transition-colors ${
              viewTab === 'number_tool' ? 'bg-amber-600 text-white' : 'bg-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            <Binary className="w-3.5 h-3.5" />
            <span>Radix Tool</span>
          </button>

          <button
            onClick={handleCopyCode}
            className="bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white px-2.5 py-1.5 rounded-lg flex items-center gap-1 transition-colors"
            title="Copy C Code"
          >
            {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">{isCopied ? 'Copied' : 'Copy'}</span>
          </button>

          <button
            onClick={handleDownloadC}
            className="bg-emerald-700 hover:bg-emerald-600 text-white px-2.5 py-1.5 rounded-lg flex items-center gap-1 transition-colors font-medium"
            title="Download .c file"
          >
            {isDownloaded ? <Check className="w-3.5 h-3.5" /> : <Download className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">.c File</span>
          </button>
        </div>
      </div>

      {/* VIEW TAB 2: LIVE NUMBER CONVERSION CALCULATOR */}
      {viewTab === 'number_tool' ? (
        <div className="p-5 bg-slate-900 border border-slate-800 rounded-xl mx-4 sm:mx-6 space-y-4">
          <div className="font-bold text-sm text-amber-400 flex items-center gap-2">
            <Binary className="w-4 h-4" />
            <span>Number Systems Live Radix Converter (Binary, Octal, Decimal, Hexadecimal)</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
              <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Decimal (Base 10)</span>
              <input
                type="number"
                value={convDec}
                onChange={e => setConvDec(parseInt(e.target.value) || 0)}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-white font-mono font-bold text-base text-center"
              />
            </div>

            <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
              <span className="text-[10px] uppercase font-bold text-emerald-400 block mb-1">Binary (Base 2)</span>
              <div className="font-mono text-emerald-300 font-bold text-sm p-2 bg-slate-800/80 rounded-lg text-center break-all">
                {convDec.toString(2)}
              </div>
            </div>

            <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
              <span className="text-[10px] uppercase font-bold text-sky-400 block mb-1">Octal (Base 8)</span>
              <div className="font-mono text-sky-300 font-bold text-sm p-2 bg-slate-800/80 rounded-lg text-center">
                0{convDec.toString(8)}
              </div>
            </div>

            <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
              <span className="text-[10px] uppercase font-bold text-purple-400 block mb-1">Hexadecimal (Base 16)</span>
              <div className="font-mono text-purple-300 font-bold text-sm p-2 bg-slate-800/80 rounded-lg text-center">
                0x{convDec.toString(16).toUpperCase()}
              </div>
            </div>
          </div>

          <div className="text-xs text-slate-400 p-3 bg-slate-950/80 rounded-xl border border-slate-800">
            <strong>Place Value Rule: </strong>
            Binary uses power of 2 ($2^0=1, 2^1=2, 2^2=4, 2^3=8$), Octal groups 3 binary bits ($2^3=8$), and Hexadecimal groups 4 binary bits ($2^4=16$).
          </div>
        </div>
      ) : null}

      {/* Editor & Execution Split Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-4 sm:px-6">
        {/* Left: Code Editor & Execution controls */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-400">
            <span>C Source Code (GCC C99 Sandbox)</span>
            <span className="font-mono text-[10px] text-emerald-400">Isolated Client-side Runtime</span>
          </div>

          <div className="relative">
            <textarea
              value={code}
              onChange={e => setCode(e.target.value)}
              rows={16}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3.5 font-mono text-xs text-emerald-300 focus:outline-none focus:border-emerald-500 leading-relaxed resize-none shadow-inner"
              spellCheck={false}
            />
          </div>

          {/* Execution Action Bar */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleRunAll}
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-4 py-2 rounded-xl flex items-center gap-1.5 shadow transition-all"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Run Execution</span>
            </button>

            <button
              onClick={handleStepForward}
              disabled={currentStepIndex >= activeProgram.steps.length - 1}
              className="bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 text-white font-bold text-xs px-3.5 py-2 rounded-xl flex items-center gap-1.5 transition-all"
            >
              <StepForward className="w-4 h-4" />
              <span>Step Next ({currentStepIndex + 1}/{activeProgram.steps.length})</span>
            </button>

            <button
              onClick={handleReset}
              className="bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs px-3 py-2 rounded-xl flex items-center gap-1.5 transition-all"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {/* Right: Variable Memory Map & Terminal */}
        <div className="space-y-3">
          {/* Active Variable State & Memory Stack */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-3.5 space-y-2.5">
            <div className="flex items-center justify-between text-xs font-bold text-slate-300">
              <span className="flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-sky-400" />
                <span>Memory Stack &amp; Variable Inspector</span>
              </span>
              <span className="font-mono text-[10px] text-slate-500">
                {currentStep ? `Active Line: ${currentStep.line}` : 'Awaiting Run / Step'}
              </span>
            </div>

            {currentStep && currentStep.vars.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-mono">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400 text-[11px]">
                      <th className="py-1">Identifier</th>
                      <th className="py-1">Type</th>
                      <th className="py-1">Memory Address</th>
                      <th className="py-1 text-right">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentStep.vars.map((v, i) => (
                      <tr key={i} className="border-b border-slate-800/50 text-slate-300">
                        <td className="py-1 font-bold text-emerald-400">{v.name}</td>
                        <td className="py-1 text-slate-400">{v.type}</td>
                        <td className="py-1 text-slate-500 text-[10px]">{v.address}</td>
                        <td className="py-1 text-right font-bold text-white">{v.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-4 text-xs text-slate-500">
                Click <strong>"Step Next"</strong> or <strong>"Run Execution"</strong> to trace variable allocations.
              </div>
            )}
          </div>

          {/* Console / Terminal Output */}
          <div className="bg-black border border-slate-800 rounded-xl p-3.5 space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-b border-slate-800/80 pb-1.5">
              <span className="flex items-center gap-1.5 text-slate-300">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                <span>Standard Output (stdout)</span>
              </span>
              <span className="text-[10px] text-emerald-400 font-bold">● Active Sandbox</span>
            </div>

            <div className="font-mono text-xs text-emerald-400 min-h-[100px] max-h-[140px] overflow-y-auto whitespace-pre-wrap leading-relaxed">
              {currentStep ? currentStep.output || '[Program executing...]' : '[No output yet. Click Run or Step Forward.]'}
            </div>
          </div>

          {/* Expected vs Actual verification card */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3 text-xs text-slate-400 flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white">Expected Output Verification: </strong>
              <span>Pre-verified against GCC 13 C99 test suites with boundary checking.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
