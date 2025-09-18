'use client';

import { overviewStats } from '../lib/data';

export default function OverviewStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 mb-8">
      <div className="bg-white p-6 rounded-lg shadow text-center">
        <h3 className="text-lg font-medium text-gray-600">Avg Assessment</h3>
        <p className="text-2xl font-bold">{overviewStats.avgAssessment.toFixed(1)}</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow text-center">
        <h3 className="text-lg font-medium text-gray-600">Avg Comprehension</h3>
        <p className="text-2xl font-bold">{overviewStats.avgComprehension.toFixed(1)}</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow text-center">
        <h3 className="text-lg font-medium text-gray-600">Avg Attention</h3>
        <p className="text-2xl font-bold">{overviewStats.avgAttention.toFixed(1)}</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow text-center">
        <h3 className="text-lg font-medium text-gray-600">Avg Focus</h3>
        <p className="text-2xl font-bold">{overviewStats.avgFocus.toFixed(1)}</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow text-center">
        <h3 className="text-lg font-medium text-gray-600">Avg Retention</h3>
        <p className="text-2xl font-bold">{overviewStats.avgRetention.toFixed(1)}</p>
      </div>
    </div>
  );
}