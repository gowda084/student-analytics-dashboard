'use client';

import { RadarChart as ReRadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer, Legend } from 'recharts';
import { overviewStats } from '../lib/data';

const radarData = [
  { skill: 'Comprehension', value: overviewStats.avgComprehension },
  { skill: 'Attention', value: overviewStats.avgAttention },
  { skill: 'Focus', value: overviewStats.avgFocus },
  { skill: 'Retention', value: overviewStats.avgRetention },
  { skill: 'Engagement', value: overviewStats.avgAssessment }, // Proxy for engagement
];

export default function RadarChart() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Average Student Profile</h2>
      <ResponsiveContainer width="100%" height={300}>
        <ReRadarChart data={radarData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="skill" />
          <Radar name="Average Profile" dataKey="value" stroke="#4b6cb7" fill="#4b6cb7" fillOpacity={0.6} />
          <Legend />
        </ReRadarChart>
      </ResponsiveContainer>
    </div>
  );
}