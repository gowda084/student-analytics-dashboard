'use client';

import { BarChart as ReBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { students } from '../lib/data';

const skillData = [
  { skill: 'Comprehension', score: students.reduce((sum, s) => sum + s.comprehension, 0) / students.length },
  { skill: 'Attention', score: students.reduce((sum, s) => sum + s.attention, 0) / students.length },
  { skill: 'Focus', score: students.reduce((sum, s) => sum + s.focus, 0) / students.length },
  { skill: 'Retention', score: students.reduce((sum, s) => sum + s.retention, 0) / students.length },
];

export default function BarChart() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Average Skill Levels</h2>
      <ResponsiveContainer width="100%" height={300}>
        <ReBarChart data={skillData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="skill" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Bar dataKey="score" fill="#4b6cb7" />
        </ReBarChart>
      </ResponsiveContainer>
    </div>
  );
}