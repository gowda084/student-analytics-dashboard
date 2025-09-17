'use client';

import OverviewStats from './components/OverviewStats';
import BarChart from './components/BarChart';
import ScatterChart from './components/ScatterChart';
import RadarChart from './components/RadarChart';
import StudentTable from './components/StudentTable';
import { insights } from './lib/data';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Student Analytics Dashboard</h1>
      
      <OverviewStats />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <BarChart />
        <ScatterChart />
      </div>
      
      <div className="mb-8">
        <RadarChart />
      </div>
      
      <StudentTable />
      
      <section className="mt-12 p-6 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">Key Insights</h2>
        <ul className="space-y-2 list-disc pl-6">
          {insights.map((insight, idx) => (
            <li key={idx} className="text-gray-700">{insight}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}