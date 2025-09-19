import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const data = [
  { month: 'Jan', value: 40 },
  { month: 'Feb', value: 30 },
  { month: 'Mar', value: 45 },
  { month: 'Apr', value: 50 },
  { month: 'May', value: 35 },
  { month: 'Jun', value: 55 },
];

export default function Reports() {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex gap-6 mx-6">
        <Navigation />
        <main className="flex-1 space-y-6">
          <h1 className="text-2xl font-bold mt-6">Health Reports</h1>
          
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Monthly Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Bar
                        dataKey="value"
                        fill="currentColor"
                        className="fill-primary"
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
