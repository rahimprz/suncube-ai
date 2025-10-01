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
      <Card className="relative overflow-hidden bg-[#6b9b8a]/90 backdrop-blur-sm border-none shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
        <div className="absolute top-4 right-4 w-12 h-12 bg-[#8ab89e]/40 rounded-xl flex items-center justify-center">
          <Sun className="h-6 w-6 text-[#d4e8a6]" />
        </div>
        <CardContent className="pt-6">
          <div className="mb-4">
            <CardTitle className="text-sm font-semibold text-white/90 mb-1">Solar</CardTitle>
            <CardTitle className="text-sm font-semibold text-white/90">Generation</CardTitle>
          </div>
          <div className="text-4xl font-bold text-white mb-4">
            {currentPower.generation.toFixed(1)} <span className="text-xl text-white/90">kW</span>
          </div>
          <div className="flex items-center space-x-2 text-white/80">
            <TrendingUp className="h-4 w-4" />
            <p className="text-sm font-medium">
              +12% from yesterday
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="relative overflow-hidden bg-[#7aa89d]/90 backdrop-blur-sm border-none shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
        <div className="absolute top-4 right-4 w-12 h-12 bg-[#8db8a7]/40 rounded-xl flex items-center justify-center">
          <Zap className="h-6 w-6 text-[#c8e4b8]" />
        </div>
        <CardContent className="pt-6">
          <div className="mb-4">
            <CardTitle className="text-sm font-semibold text-white/90">Consumption</CardTitle>
          </div>
          <div className="text-4xl font-bold text-white mb-4">
            {currentPower.consumption.toFixed(1)} <span className="text-xl text-white/90">kW</span>
          </div>
          <div className="text-sm font-medium text-white/80">
            Normal
          </div>
        </CardContent>
      </Card>

      <Card className="relative overflow-hidden bg-[#699c89]/90 backdrop-blur-sm border-none shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
        <div className="absolute top-4 right-4 w-12 h-12 bg-[#7fae96]/40 rounded-xl flex items-center justify-center">
          <Battery className="h-6 w-6 text-[#d0e8b2]" />
        </div>
        <CardContent className="pt-6">
          <div className="mb-4">
            <CardTitle className="text-sm font-semibold text-white/90 mb-1">Battery</CardTitle>
            <CardTitle className="text-sm font-semibold text-white/90">Level</CardTitle>
          </div>
          <div className="text-4xl font-bold text-white mb-4">
            {Math.round(currentPower.battery)}<span className="text-xl text-white/90">%</span>
          </div>
          <div className="w-full bg-[#4d7a68]/50 rounded-full h-3 shadow-inner">
            <div
              className="bg-gradient-to-r from-[#a8d5a4] to-[#8bc896] h-3 rounded-full transition-all duration-1000 shadow-md"
              style={{ width: `${currentPower.battery}%` }}
            ></div>
          </div>
        </CardContent>
      </Card>

      <Card className="relative overflow-hidden bg-[#759f91]/90 backdrop-blur-sm border-none shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
        <div className="absolute top-4 right-4 w-12 h-12 bg-[#89b39f]/40 rounded-xl flex items-center justify-center">
          <TrendingUp className="h-6 w-6 text-[#d8eab4]" />
        </div>
        <CardContent className="pt-6">
          <div className="mb-4">
            <CardTitle className="text-sm font-semibold text-white/90 mb-1">Grid Feed-</CardTitle>
            <CardTitle className="text-sm font-semibold text-white/90">in</CardTitle>
          </div>
          <div className="text-4xl font-bold text-white mb-4">
            {currentPower.gridFeed.toFixed(1)} <span className="text-xl text-white/90">kW</span>
          </div>
          <div className="text-sm font-medium text-white/80">
            Earning Credits
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
