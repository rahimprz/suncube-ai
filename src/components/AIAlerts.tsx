import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TriangleAlert as AlertTriangle, CircleCheck as CheckCircle, Clock, Wrench, CloudDrizzle, TreePine, Thermometer } from "lucide-react";

interface Alert {
  id: string;
  type: "maintenance" | "cleaning" | "shading" | "weather" | "performance";
  severity: "low" | "medium" | "high";
  title: string;
  description: string;
  timestamp: Date;
  resolved: boolean;
  aiConfidence: number;
}

const mockAlerts: Alert[] = [
  {
    id: "1",
    type: "cleaning",
    severity: "medium",
    title: "Panel Cleaning Required",
    description: "Dust accumulation detected on panels 3-7. Efficiency reduced by 8%. Recommended cleaning within 48 hours.",
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
    resolved: false,
    aiConfidence: 94
  },
  {
    id: "2",
    type: "shading",
    severity: "low",
    title: "Temporary Shading Detected",
    description: "Tree shadow affecting Panel Row B. Consider trimming branches or adjusting panel angle.",
    timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000),
    resolved: false,
    aiConfidence: 87
  },
  {
    id: "3",
    type: "maintenance",
    severity: "high",
    title: "Inverter Anomaly",
    description: "Inverter 2 showing irregular output patterns. Schedule technician inspection immediately.",
    timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000),
    resolved: false,
    aiConfidence: 96
  },
  {
    id: "4",
    type: "weather",
    severity: "low",
    title: "Storm Approaching",
    description: "Heavy rain predicted in 6 hours. System will automatically switch to protective mode.",
    timestamp: new Date(Date.now() - 30 * 60 * 1000),
    resolved: true,
    aiConfidence: 89
  }
];

export const AIAlerts = () => {
  const [alerts, setAlerts] = useState<Alert[]>(mockAlerts);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high": return "bg-gradient-to-br from-red-500/20 to-red-600/10 border-red-400/50 text-red-200";
      case "medium": return "bg-gradient-to-br from-yellow-500/20 to-orange-500/10 border-yellow-400/50 text-yellow-100";
      case "low": return "bg-gradient-to-br from-blue-500/20 to-blue-600/10 border-blue-400/50 text-blue-200";
      default: return "bg-gradient-to-br from-gray-500/20 to-gray-600/10 border-gray-400/50 text-gray-200";
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "maintenance": return <Wrench className="w-5 h-5" />;
      case "cleaning": return <CloudDrizzle className="w-5 h-5" />;
      case "shading": return <TreePine className="w-5 h-5" />;
      case "weather": return <Thermometer className="w-5 h-5" />;
      default: return <AlertTriangle className="w-5 h-5" />;
    }
  };

  const resolveAlert = (id: string) => {
    setAlerts(prev => prev.map(alert =>
      alert.id === id ? { ...alert, resolved: true } : alert
    ));
  };

  const activeAlerts = alerts.filter(alert => !alert.resolved);
  const resolvedAlerts = alerts.filter(alert => alert.resolved);

  return (
    <Card className="bg-[#6b9b8a]/90 backdrop-blur-sm border-none shadow-2xl">
      <CardHeader className="border-b border-white/20 pb-6">
        <CardTitle className="flex items-center space-x-3">
          <div className="p-2 bg-[#8ab89e]/40 rounded-xl">
            <AlertTriangle className="w-6 h-6 text-[#ffd66b]" />
          </div>
          <span className="text-2xl font-bold text-white">AI Predictive Alerts</span>
          <Badge variant="outline" className="ml-auto bg-[#ffd66b]/20 border-[#ffd66b]/40 text-white">
            {activeAlerts.length} Active
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 pt-6">
        <div className="space-y-4">
          <h4 className="text-lg font-bold text-white flex items-center">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            Active Alerts
          </h4>
          {activeAlerts.length === 0 ? (
            <div className="flex items-center space-x-3 p-4 bg-[#8ab89e]/30 border border-white/20 rounded-xl">
              <CheckCircle className="w-5 h-5 text-[#d4e8a6]" />
              <span className="text-base text-white font-medium">All systems operating normally</span>
            </div>
          ) : (
            activeAlerts.map((alert) => (
              <div key={alert.id} className={`border-2 rounded-xl p-5 ${getSeverityColor(alert.severity)} shadow-lg backdrop-blur-sm`}>
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-white/10 rounded-lg">
                      {getIcon(alert.type)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h5 className="text-base font-bold text-white">{alert.title}</h5>
                        <Badge variant="outline" className="text-xs bg-white/10 border-white/30 text-white">
                          {alert.aiConfidence}% Confidence
                        </Badge>
                      </div>
                      <p className="text-sm leading-relaxed mb-3 text-white/90">{alert.description}</p>
                      <div className="flex items-center space-x-4 text-xs text-white/80">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span className="font-medium">{alert.timestamp.toLocaleTimeString()}</span>
                        </div>
                        <Badge className="text-xs font-bold px-2 py-1 bg-white/20 text-white border-0">
                          {alert.severity.toUpperCase()} PRIORITY
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => resolveAlert(alert.id)}
                    className="text-xs bg-white/10 hover:bg-white/20 border-white/30 hover:border-white/50 text-white font-semibold"
                  >
                    Resolve
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>

        {resolvedAlerts.length > 0 && (
          <div className="space-y-4 pt-6 border-t border-white/20">
            <h4 className="text-lg font-bold text-white flex items-center opacity-75">
              <CheckCircle className="w-5 h-5 mr-2 text-[#d4e8a6]" />
              Recently Resolved
            </h4>
            {resolvedAlerts.slice(0, 2).map((alert) => (
              <div key={alert.id} className="border-2 border-white/20 rounded-xl p-4 bg-[#8ab89e]/20 backdrop-blur-sm">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-[#8ab89e]/30 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-[#d4e8a6]" />
                  </div>
                  <div className="flex-1">
                    <h5 className="text-base font-bold text-white">{alert.title}</h5>
                    <p className="text-sm text-white/70">
                      Resolved at {alert.timestamp.toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
