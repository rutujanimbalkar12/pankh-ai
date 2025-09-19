import React from 'react';
import { Home, Calendar, Activity, TrendingUp, User, Plus } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const MobileLayout = ({ children }: { children: React.ReactNode }) => {
  const bottomNavItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'cycle', icon: Calendar, label: 'Cycle' },
    { id: 'log', icon: Plus, label: 'Log' },
    { id: 'insights', icon: TrendingUp, label: 'Insights' },
    { id: 'profile', icon: User, label: 'Profile' },
  ];

  return (
    <div className="min-h-screen bg-background md:hidden">
      {/* Mobile Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8">
              <img 
                src="/pankh/Your_paragraph_text-removebg-preview.png" 
                alt="PankhAI Logo" 
                className="w-full h-full object-contain"
                loading="eager"
                style={{
                  filter: 'drop-shadow(0 0 6px rgba(255, 107, 107, 0.3))',
                  maxWidth: '100%',
                  height: 'auto'
                }}
              />
            </div>
            <h1 className="text-lg font-bold bg-gradient-primary bg-clip-text text-transparent">
              PankhAI
            </h1>
          </div>
          <Button size="sm" variant="ghost" className="w-8 h-8 p-0">
            <div className="w-6 h-6 bg-gradient-secondary rounded-full"></div>
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="pb-20">
        {children}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t border-border">
        <div className="flex items-center justify-around py-2">
          {bottomNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.id === 'home'; // Default to home active
            
            return (
              <button
                key={item.id}
                className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-all duration-200 ${
                  isActive 
                    ? 'text-primary bg-primary/10' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon className={`w-5 h-5 ${item.id === 'log' ? 'w-6 h-6' : ''}`} />
                <span className="text-xs font-medium">{item.label}</span>
                {item.id === 'log' && (
                  <div className="absolute -top-1 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                    <Plus className="w-6 h-6 text-white" />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default MobileLayout;