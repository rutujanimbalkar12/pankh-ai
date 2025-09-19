import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import { Heart, Plus } from 'lucide-react';

const wellnessData = {
  moodScore: 8,
  stressLevel: 3,
  sleepHours: 7.5,
};

export default function Wellness() {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex gap-6 mx-6">
        <Navigation />
        <main className="flex-1 space-y-6">
          <h1 className="text-2xl font-bold mt-6">Wellness Center</h1>
          
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Mood Score</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-primary">
                  {wellnessData.moodScore}/10
                </div>
                <Heart className="w-6 h-6 mx-auto mt-2 text-primary" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Stress Level</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-primary">
                  {wellnessData.stressLevel}/5
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sleep Hours</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-primary">
                  {wellnessData.sleepHours}h
                </div>
              </CardContent>
            </Card>
          </div>

          <Button className="w-full sm:w-auto">
            <Plus className="w-4 h-4 mr-2" />
            Log Wellness Activity
          </Button>
        </main>
      </div>
    </div>
  );
}
