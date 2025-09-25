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

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPower(prev => ({
        generation: Math.max(0, prev.generation + (Math.random() - 0.5) * 0.5),
        consumption: Math.max(0, prev.consumption + (Math.random() - 0.5) * 0.3),
        battery: Math.min(100, Math.max(0, prev.battery + (Math.random() - 0.5) * 2)),
        gridFeed: Math.max(0, prev.gridFeed + (Math.random() - 0.5) * 0.3)
      }));

      // Generate mock chart data
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {/* Live Generation */}
      <Card className="border-l-4 border-l-solar-yellow">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Solar Generation</CardTitle>
          <Sun className="h-4 w-4 text-solar-yellow" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-foreground">
            {currentPower.generation.toFixed(1)} kW
          </div>
          <div className="flex items-center space-x-2 mt-1">
            <TrendingUp className="h-3 w-3 text-success" />
            <p className="text-xs text-muted-foreground">
              +12% from yesterday
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Live Consumption */}
      <Card className="border-l-4 border-l-grid-blue">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Consumption</CardTitle>
          <Zap className="h-4 w-4 text-grid-blue" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-foreground">
            {currentPower.consumption.toFixed(1)} kW
          </div>
          <div className="flex items-center space-x-2 mt-1">
            <Badge variant="secondary" className="text-xs">
              Normal
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Battery Status */}
      <Card className="border-l-4 border-l-primary">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Battery Level</CardTitle>
          <Battery className="h-4 w-4 text-primary" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-foreground">
            {Math.round(currentPower.battery)}%
          </div>
          <div className="w-full bg-muted rounded-full h-2 mt-2">
            <div 
              className="bg-gradient-primary h-2 rounded-full transition-all duration-1000"
              style={{ width: `${currentPower.battery}%` }}
            ></div>
          </div>
        </CardContent>
      </Card>

      {/* Grid Feed-in */}
      <Card className="border-l-4 border-l-eco-green">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Grid Feed-in</CardTitle>
          <TrendingUp className="h-4 w-4 text-eco-green" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-foreground">
            {currentPower.gridFeed.toFixed(1)} kW
          </div>
          <div className="flex items-center space-x-2 mt-1">
            <Badge variant="outline" className="text-xs text-success border-success">
              Earning Credits
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};