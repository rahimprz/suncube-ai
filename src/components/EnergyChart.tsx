import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Zap, Sun, Battery } from "lucide-react";

interface EnergyData {
  time: string;
  generation: number;
  consumption: number;
  battery: number;
}

export const EnergyChart = () => {
  const [energyData, setEnergyData] = useState<EnergyData[]>([]);
  const [currentPower, setCurrentPower] = useState({
    generation: 4.2,
    consumption: 3.1,
    battery: 85,
    gridFeed: 1.1
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPower(prev => ({
        generation: Math.max(0, prev.generation + (Math.random() - 0.5) * 0.5),
        consumption: Math.max(0, prev.consumption + (Math.random() - 0.5) * 0.3),
        battery: Math.min(100, Math.max(0, prev.battery + (Math.random() - 0.5) * 2)),
        gridFeed: Math.max(0, prev.gridFeed + (Math.random() - 0.5) * 0.3)
      }));

      const newData: EnergyData[] = Array.from({ length: 24 }, (_, i) => ({
        time: `${i.toString().padStart(2, '0')}:00`,
        generation: Math.random() * 6 + 1,
        consumption: Math.random() * 4 + 2,
        battery: Math.random() * 40 + 60
      }));
      setEnergyData(newData);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      <Card className="relative overflow-hidden bg-gradient-to-br from-emerald-700/80 to-emerald-800/60 backdrop-blur-sm border-2 border-emerald-500/30 shadow-xl hover:shadow-2xl hover:border-emerald-400/50 transition-all duration-300 hover:-translate-y-1">
        <div className="absolute top-4 right-4 w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
          <Sun className="h-6 w-6 text-amber-300" />
        </div>
        <CardContent className="pt-6">
          <div className="mb-4">
            <CardTitle className="text-sm font-semibold text-emerald-100 mb-1">Solar</CardTitle>
            <CardTitle className="text-sm font-semibold text-emerald-100">Generation</CardTitle>
          </div>
          <div className="text-4xl font-bold text-white mb-4">
            {currentPower.generation.toFixed(1)} <span className="text-xl text-emerald-200">kW</span>
          </div>
          <div className="flex items-center space-x-2 text-emerald-200">
            <TrendingUp className="h-4 w-4" />
            <p className="text-sm font-medium">
              +12% from yesterday
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="relative overflow-hidden bg-gradient-to-br from-cyan-700/80 to-cyan-800/60 backdrop-blur-sm border-2 border-cyan-500/30 shadow-xl hover:shadow-2xl hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-1">
        <div className="absolute top-4 right-4 w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center">
          <Zap className="h-6 w-6 text-cyan-300" />
        </div>
        <CardContent className="pt-6">
          <div className="mb-4">
            <CardTitle className="text-sm font-semibold text-cyan-100">Consumption</CardTitle>
          </div>
          <div className="text-4xl font-bold text-white mb-4">
            {currentPower.consumption.toFixed(1)} <span className="text-xl text-cyan-200">kW</span>
          </div>
          <div className="text-sm font-medium text-cyan-200">
            Normal
          </div>
        </CardContent>
      </Card>

      <Card className="relative overflow-hidden bg-gradient-to-br from-teal-700/80 to-teal-800/60 backdrop-blur-sm border-2 border-teal-500/30 shadow-xl hover:shadow-2xl hover:border-teal-400/50 transition-all duration-300 hover:-translate-y-1">
        <div className="absolute top-4 right-4 w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center">
          <Battery className="h-6 w-6 text-teal-300" />
        </div>
        <CardContent className="pt-6">
          <div className="mb-4">
            <CardTitle className="text-sm font-semibold text-teal-100 mb-1">Battery</CardTitle>
            <CardTitle className="text-sm font-semibold text-teal-100">Level</CardTitle>
          </div>
          <div className="text-4xl font-bold text-white mb-4">
            {Math.round(currentPower.battery)}<span className="text-xl text-teal-200">%</span>
          </div>
          <div className="w-full bg-teal-950/50 rounded-full h-3 shadow-inner">
            <div
              className="bg-gradient-to-r from-teal-400 to-emerald-400 h-3 rounded-full transition-all duration-1000 shadow-md"
              style={{ width: `${currentPower.battery}%` }}
            ></div>
          </div>
        </CardContent>
      </Card>

      <Card className="relative overflow-hidden bg-gradient-to-br from-green-700/80 to-green-800/60 backdrop-blur-sm border-2 border-green-500/30 shadow-xl hover:shadow-2xl hover:border-green-400/50 transition-all duration-300 hover:-translate-y-1">
        <div className="absolute top-4 right-4 w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
          <TrendingUp className="h-6 w-6 text-green-300" />
        </div>
        <CardContent className="pt-6">
          <div className="mb-4">
            <CardTitle className="text-sm font-semibold text-green-100 mb-1">Grid Feed-</CardTitle>
            <CardTitle className="text-sm font-semibold text-green-100">in</CardTitle>
          </div>
          <div className="text-4xl font-bold text-white mb-4">
            {currentPower.gridFeed.toFixed(1)} <span className="text-xl text-green-200">kW</span>
          </div>
          <div className="text-sm font-medium text-green-200">
            Earning Credits
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
