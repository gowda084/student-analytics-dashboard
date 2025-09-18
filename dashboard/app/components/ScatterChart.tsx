'use client';

import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { students } from '../lib/data';

const scatterData = students.map(s => ({ attention: s.attention, performance: s.assessment_score }));

export default function ScatterChartComponent() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Attention vs. Assessment Score</h2>
      <ResponsiveContainer width="100%" height={300}>
        <ScatterChart>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="attention" type="number" name="Attention" unit="" domain={[0, 100]} />
          <YAxis dataKey="performance" type="number" name="Score" unit="" domain={[0, 100]} />
          <Tooltip />
          <Scatter data={scatterData} fill="#4b6cb7" />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}