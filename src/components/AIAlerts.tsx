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
      case "high": return "bg-gradient-to-br from-red-900/50 to-red-950/40 border-red-500/60 text-red-100 shadow-lg shadow-red-900/30";
      case "medium": return "bg-gradient-to-br from-amber-900/50 to-orange-950/40 border-amber-500/60 text-amber-100 shadow-lg shadow-amber-900/30";
      case "low": return "bg-gradient-to-br from-cyan-900/50 to-cyan-950/40 border-cyan-500/60 text-cyan-100 shadow-lg shadow-cyan-900/30";
      default: return "bg-gradient-to-br from-gray-800/50 to-gray-900/40 border-gray-500/60 text-gray-200 shadow-lg shadow-gray-900/30";
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
    <Card className="bg-gradient-to-br from-emerald-800/90 via-green-800/90 to-teal-800/90 backdrop-blur-sm border-2 border-emerald-500/30 shadow-2xl">
      <CardHeader className="border-b border-emerald-400/30 pb-6">
        <CardTitle className="flex items-center space-x-3">
          <div className="p-3 bg-gradient-to-br from-green-500/30 to-emerald-500/20 rounded-xl border border-green-400/40 shadow-lg shadow-green-500/20">
            <AlertTriangle className="w-6 h-6 text-green-300" />
          </div>
          <span className="text-2xl font-bold text-white">AI Predictive Alerts</span>
          <Badge variant="outline" className="ml-auto bg-green-500/20 border-green-400/40 text-green-200 font-semibold shadow-sm">
            {activeAlerts.length} Active
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 pt-6">
        <div className="space-y-4">
          <h4 className="text-lg font-bold text-white flex items-center">
            <span className="w-2 h-2 bg-green-300 rounded-full mr-2 animate-pulse shadow-lg shadow-green-400/50"></span>
            Active Alerts
          </h4>
          {activeAlerts.length === 0 ? (
            <div className="flex items-center space-x-3 p-4 bg-emerald-500/20 border-2 border-emerald-400/40 rounded-xl shadow-lg">
              <CheckCircle className="w-5 h-5 text-emerald-300" />
              <span className="text-base text-white font-medium">All systems operating normally</span>
            </div>
          ) : (
            activeAlerts.map((alert) => (
              <div key={alert.id} className={`border-2 rounded-xl p-5 ${getSeverityColor(alert.severity)} backdrop-blur-sm hover:shadow-2xl hover:scale-[1.02] transition-all duration-300`}>
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="p-2.5 bg-white/15 rounded-lg border border-white/30 shadow-md">
                      {getIcon(alert.type)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h5 className="text-base font-bold text-white">{alert.title}</h5>
                        <Badge variant="outline" className="text-xs bg-emerald-700/60 border-emerald-500/50 text-emerald-200 font-semibold shadow-sm">
                          {alert.aiConfidence}% AI
                        </Badge>
                      </div>
                      <p className="text-sm leading-relaxed mb-3 text-white/90">{alert.description}</p>
                      <div className="flex items-center space-x-4 text-xs text-white/80">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span className="font-medium">{alert.timestamp.toLocaleTimeString()}</span>
                        </div>
                        <Badge className="text-xs font-bold px-2 py-1 bg-white/20 text-white border-0 shadow-sm">
                          {alert.severity.toUpperCase()} PRIORITY
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => resolveAlert(alert.id)}
                    className="text-xs bg-green-600/80 hover:bg-green-500/90 border-green-500/60 hover:border-green-400/80 text-white font-semibold transition-all shadow-lg hover:shadow-green-500/50"
                  >
                    Resolve
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>

        {resolvedAlerts.length > 0 && (
          <div className="space-y-4 pt-6 border-t border-emerald-400/30">
            <h4 className="text-lg font-bold text-white flex items-center opacity-90">
              <CheckCircle className="w-5 h-5 mr-2 text-emerald-300 drop-shadow-lg" />
              Recently Resolved
            </h4>
            {resolvedAlerts.slice(0, 2).map((alert) => (
              <div key={alert.id} className="border-2 border-emerald-500/40 rounded-xl p-4 bg-emerald-900/30 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-emerald-500/30 rounded-lg border border-emerald-400/40 shadow-md">
                    <CheckCircle className="w-5 h-5 text-emerald-300" />
                  </div>
                  <div className="flex-1">
                    <h5 className="text-base font-bold text-white">{alert.title}</h5>
                    <p className="text-sm text-emerald-100">
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
