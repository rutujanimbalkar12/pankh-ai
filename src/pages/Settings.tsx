import React, { useState, useEffect } from 'react';
import { 
  Settings as SettingsIcon, 
  Bell, 
  Lock, 
  Globe, 
  Moon, 
  Sun,
  Laptop,
  Shield,
  LogOut,
  Trash2
} from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { 
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Navigation from '@/components/Navigation';
import MobileLayout from '@/components/MobileLayout';

interface Settings {
  notifications: {
    cycleReminders: boolean;
    symptomTracking: boolean;
    insights: boolean;
    reports: boolean;
  };
  appearance: {
    theme: 'light' | 'dark' | 'system';
    language: 'english' | 'hindi';
  };
  privacy: {
    dataSharing: boolean;
    analytics: boolean;
  };
}

const Settings = () => {
  const { theme, setTheme } = useTheme();
  
  const [settings, setSettings] = useState<Settings>({
    notifications: {
      cycleReminders: true,
      symptomTracking: true,
      insights: true,
      reports: false,
    },
    appearance: {
      theme: theme as 'light' | 'dark' | 'system',
      language: 'english',
    },
    privacy: {
      dataSharing: true,
      analytics: true,
    },
  });

  useEffect(() => {
    setSettings(prev => ({
      ...prev,
      appearance: {
        ...prev.appearance,
        theme: theme as 'light' | 'dark' | 'system'
      }
    }));
  }, [theme]);

  const handleNotificationChange = (key: keyof Settings['notifications']) => {
    setSettings({
      ...settings,
      notifications: {
        ...settings.notifications,
        [key]: !settings.notifications[key],
      },
    });
  };

  const handlePrivacyChange = (key: keyof Settings['privacy']) => {
    setSettings({
      ...settings,
      privacy: {
        ...settings.privacy,
        [key]: !settings.privacy[key],
      },
    });
  };

  const handleAppearanceChange = (
    key: keyof Settings['appearance'],
    value: string
  ) => {
    setSettings({
      ...settings,
      appearance: {
        ...settings.appearance,
        [key]: value,
      },
    });
  };

  const DesktopSettings = () => (
    <div className="min-h-screen bg-background">
      <header className="pankhai-card mx-6 mt-6 mb-8">
        <div className="flex items-center justify-between p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
              <SettingsIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Settings
              </h1>
              <p className="text-sm text-muted-foreground">
                Customize your experience
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="flex gap-6 mx-6">
        <Navigation />
        
        <main className="flex-1 space-y-6">
          {/* Notifications */}
          <Card className="pankhai-card">
            <CardHeader className="flex flex-row items-center gap-2">
              <Bell className="w-5 h-5" />
              <CardTitle>Notifications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {Object.entries(settings.notifications).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between">
                  <Label htmlFor={key} className="text-sm capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </Label>
                  <Switch
                    id={key}
                    checked={value}
                    onCheckedChange={() => 
                      handleNotificationChange(key as keyof Settings['notifications'])
                    }
                  />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Appearance */}
          <Card className="pankhai-card">
            <CardHeader className="flex flex-row items-center gap-2">
              <Moon className="w-5 h-5" />
              <CardTitle>Appearance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label>Theme</Label>
                <div className="flex items-center space-x-4">
                  <Button
                    variant={theme === 'light' ? 'default' : 'outline'}
                    className="w-full justify-start"
                    onClick={() => {
                      setTheme('light');
                      handleAppearanceChange('theme', 'light');
                    }}
                  >
                    <Sun className="w-4 h-4 mr-2" />
                    Light
                  </Button>
                  <Button
                    variant={theme === 'dark' ? 'default' : 'outline'}
                    className="w-full justify-start"
                    onClick={() => {
                      setTheme('dark');
                      handleAppearanceChange('theme', 'dark');
                    }}
                  >
                    <Moon className="w-4 h-4 mr-2" />
                    Dark
                  </Button>
                  <Button
                    variant={theme === 'system' ? 'default' : 'outline'}
                    className="w-full justify-start"
                    onClick={() => {
                      setTheme('system');
                      handleAppearanceChange('theme', 'system');
                    }}
                  >
                    <Laptop className="w-4 h-4 mr-2" />
                    System
                  </Button>
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="language">Language</Label>
                <Select
                  value={settings.appearance.language}
                  onValueChange={(value) => 
                    handleAppearanceChange('language', value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="hindi">हिंदी</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Privacy & Security */}
          <Card className="pankhai-card">
            <CardHeader className="flex flex-row items-center gap-2">
              <Shield className="w-5 h-5" />
              <CardTitle>Privacy & Security</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                {Object.entries(settings.privacy).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between">
                    <Label htmlFor={key} className="text-sm capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </Label>
                    <Switch
                      id={key}
                      checked={value}
                      onCheckedChange={() => 
                        handlePrivacyChange(key as keyof Settings['privacy'])
                      }
                    />
                  </div>
                ))}
              </div>
              <div className="space-y-4 pt-4 border-t border-border">
                <Button variant="outline" className="w-full justify-start">
                  <Lock className="w-4 h-4 mr-2" />
                  Change Password
                </Button>
                <Button variant="outline" className="w-full justify-start text-orange-500 hover:text-orange-600">
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </Button>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-red-500 hover:text-red-600">
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete Account
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your
                        account and remove your data from our servers.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction className="bg-red-500 hover:bg-red-600">
                        Delete Account
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );

  const MobileSettings = () => (
    <div className="p-4 space-y-6">
      <div className="space-y-6">
        {/* Mobile Notifications */}
        <Card className="pankhai-card">
          <CardContent className="p-4 space-y-4">
            <h3 className="font-semibold flex items-center gap-2">
              <Bell className="w-4 h-4" />
              Notifications
            </h3>
            {Object.entries(settings.notifications).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between">
                <Label htmlFor={`mobile-${key}`} className="text-sm capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </Label>
                <Switch
                  id={`mobile-${key}`}
                  checked={value}
                  onCheckedChange={() => 
                    handleNotificationChange(key as keyof Settings['notifications'])
                  }
                />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Mobile Appearance */}
        <Card className="pankhai-card">
          <CardContent className="p-4 space-y-4">
            <h3 className="font-semibold flex items-center gap-2">
              <Moon className="w-4 h-4" />
              Appearance
            </h3>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label>Theme</Label>
                <div className="grid grid-cols-3 gap-2">
                  <Button
                    variant={theme === 'light' ? 'default' : 'outline'}
                    className="w-full justify-center"
                    onClick={() => {
                      setTheme('light');
                      handleAppearanceChange('theme', 'light');
                    }}
                  >
                    <Sun className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={theme === 'dark' ? 'default' : 'outline'}
                    className="w-full justify-center"
                    onClick={() => {
                      setTheme('dark');
                      handleAppearanceChange('theme', 'dark');
                    }}
                  >
                    <Moon className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={theme === 'system' ? 'default' : 'outline'}
                    className="w-full justify-center"
                    onClick={() => {
                      setTheme('system');
                      handleAppearanceChange('theme', 'system');
                    }}
                  >
                    <Laptop className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="mobile-language">Language</Label>
                <Select
                  value={settings.appearance.language}
                  onValueChange={(value) => 
                    handleAppearanceChange('language', value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="hindi">हिंदी</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Mobile Privacy & Security */}
        <Card className="pankhai-card">
          <CardContent className="p-4 space-y-4">
            <h3 className="font-semibold flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Privacy & Security
            </h3>
            <div className="space-y-4">
              {Object.entries(settings.privacy).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between">
                  <Label htmlFor={`mobile-${key}`} className="text-sm capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </Label>
                  <Switch
                    id={`mobile-${key}`}
                    checked={value}
                    onCheckedChange={() => 
                      handlePrivacyChange(key as keyof Settings['privacy'])
                    }
                  />
                </div>
              ))}
            </div>
            <div className="space-y-2 pt-4 border-t border-border">
              <Button variant="outline" className="w-full justify-start">
                <Lock className="w-4 h-4 mr-2" />
                Change Password
              </Button>
              <Button variant="outline" className="w-full justify-start text-orange-500">
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-red-500">
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete Account
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete your
                      account and remove your data from our servers.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction className="bg-red-500 hover:bg-red-600">
                      Delete Account
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  return (
    <>
      <div className="hidden md:block">
        <DesktopSettings />
      </div>
      
      <div className="md:hidden">
        <MobileLayout>
          <MobileSettings />
        </MobileLayout>
      </div>
    </>
  );
};

export default Settings;