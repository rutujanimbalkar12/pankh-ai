import React, { useState } from 'react';
import { Bell, AlertCircle, Calendar, Activity, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';

interface Alert {
  id: string;
  type: 'period' | 'health' | 'activity' | 'wellness';
  title: string;
  description: string;
  timestamp: string;
  read: boolean;
}

const mockAlerts: Alert[] = [
  {
    id: '1',
    type: 'period',
    title: 'Period Due Soon',
    description: 'Your next period is expected in 3 days. Start tracking symptoms.',
    timestamp: '2h ago',
    read: false,
  },
  {
    id: '2',
    type: 'health',
    title: 'Health Check Reminder',
    description: 'Schedule your monthly health check-up.',
    timestamp: '1d ago',
    read: false,
  },
  {
    id: '3',
    type: 'activity',
    title: 'Activity Goal',
    description: "You're close to your daily step goal! Take a short walk to reach it.",
    timestamp: '4h ago',
    read: true,
  },
  {
    id: '4',
    type: 'wellness',
    title: 'Wellness Tip',
    description: 'Try meditation to help with stress management during your luteal phase.',
    timestamp: '12h ago',
    read: false,
  },
];

const AlertsPanel = () => {
  const [alerts, setAlerts] = useState<Alert[]>(mockAlerts);
  const unreadCount = alerts.filter(a => !a.read).length;

  const getAlertIcon = (type: Alert['type']) => {
    switch (type) {
      case 'period':
        return Calendar;
      case 'health':
        return AlertCircle;
      case 'activity':
        return Activity;
      case 'wellness':
        return Heart;
      default:
        return Bell;
    }
  };

  const getAlertColor = (type: Alert['type']) => {
    switch (type) {
      case 'period':
        return 'text-pankhai-pink';
      case 'health':
        return 'text-pankhai-orange';
      case 'activity':
        return 'text-pankhai-teal';
      case 'wellness':
        return 'text-pankhai-purple';
      default:
        return 'text-foreground';
    }
  };

  const markAsRead = (id: string) => {
    setAlerts(alerts.map(alert => 
      alert.id === id ? { ...alert, read: true } : alert
    ));
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button 
          size="sm" 
          variant="wellness"
          className="text-white hover:scale-105 transition-all duration-300 relative"
        >
          <Bell className="w-4 h-4 mr-2" />
          {unreadCount} alerts
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle>Notifications</SheetTitle>
          <SheetDescription>
            Stay updated with your health and wellness alerts
          </SheetDescription>
        </SheetHeader>
        <ScrollArea className="h-[calc(100vh-8rem)] mt-4">
          <div className="space-y-4">
            {alerts.map((alert) => {
              const Icon = getAlertIcon(alert.type);
              return (
                <div
                  key={alert.id}
                  className={cn(
                    "flex items-start gap-4 p-4 rounded-lg transition-all",
                    alert.read ? "bg-muted/30" : "bg-primary/5"
                  )}
                  onClick={() => markAsRead(alert.id)}
                >
                  <Icon className={cn("w-5 h-5", getAlertColor(alert.type))} />
                  <div className="flex-1">
                    <h4 className="text-sm font-medium">{alert.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      {alert.description}
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      {alert.timestamp}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export default AlertsPanel;