import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Wrench, 
  CloudDrizzle,
  TreePine,
  Thermometer
} from "lucide-react";

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
      case "high": return "text-destructive bg-destructive/10 border-destructive";
      case "medium": return "text-warning bg-warning/10 border-warning";
      case "low": return "text-muted-foreground bg-muted border-border";
      default: return "text-muted-foreground bg-muted border-border";
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "maintenance": return <Wrench className="w-4 h-4" />;
      case "cleaning": return <CloudDrizzle className="w-4 h-4" />;
      case "shading": return <TreePine className="w-4 h-4" />;
      case "weather": return <Thermometer className="w-4 h-4" />;
      default: return <AlertTriangle className="w-4 h-4" />;
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
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <AlertTriangle className="w-5 h-5 text-warning" />
          <span>AI Predictive Alerts</span>
          <Badge variant="outline" className="ml-auto">
            {activeAlerts.length} Active
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Active Alerts */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-foreground">Active Alerts</h4>
          {activeAlerts.length === 0 ? (
            <div className="flex items-center space-x-2 text-success">
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm">All systems operating normally</span>
            </div>
          ) : (
            activeAlerts.map((alert) => (
              <div key={alert.id} className={`border rounded-lg p-4 ${getSeverityColor(alert.severity)}`}>
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3">
                    {getIcon(alert.type)}
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h5 className="text-sm font-medium">{alert.title}</h5>
                        <Badge variant="outline" className="text-xs">
                          {alert.aiConfidence}% AI Confidence
                        </Badge>
                      </div>
                      <p className="text-xs opacity-80 mb-2">{alert.description}</p>
                      <div className="flex items-center space-x-4 text-xs opacity-60">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{alert.timestamp.toLocaleTimeString()}</span>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {alert.severity.toUpperCase()}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => resolveAlert(alert.id)}
                    className="text-xs"
                  >
                    Resolve
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Resolved Alerts */}
        {resolvedAlerts.length > 0 && (
          <div className="space-y-3 pt-4 border-t border-border">
            <h4 className="text-sm font-medium text-muted-foreground">Recently Resolved</h4>
            {resolvedAlerts.slice(0, 2).map((alert) => (
              <div key={alert.id} className="border rounded-lg p-3 bg-muted/30 opacity-75">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <div className="flex-1">
                    <h5 className="text-sm font-medium text-foreground">{alert.title}</h5>
                    <p className="text-xs text-muted-foreground">
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