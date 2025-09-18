let studentsData: any;
let insightsData: any;
try {
  studentsData = require('./students.json');
  insightsData = require('./insights.json');
} catch (error) {
  console.error('Error loading JSON files:', error);
  studentsData = [];
  insightsData = [];
}

export interface Student {
  student_id: string;
  name: string;
  class: string;
  comprehension: number;
  attention: number;
  focus: number;
  retention: number;
  assessment_score: number;
  engagement_time: number;
  cluster: number;
}

const students: Student[] = Array.isArray(studentsData) ? studentsData as Student[] : [];
const insights: string[] = Array.isArray(insightsData) ? insightsData as string[] : [];

export const overviewStats = {
  avgAssessment: students.length > 0 ? students.reduce((sum, s) => sum + s.assessment_score, 0) / students.length : 0,
  avgComprehension: students.length > 0 ? students.reduce((sum, s) => sum + s.comprehension, 0) / students.length : 0,
  avgAttention: students.length > 0 ? students.reduce((sum, s) => sum + s.attention, 0) / students.length : 0,
  avgFocus: students.length > 0 ? students.reduce((sum, s) => sum + s.focus, 0) / students.length : 0,
  avgRetention: students.length > 0 ? students.reduce((sum, s) => sum + s.retention, 0) / students.length : 0,
  totalStudents: students.length,
};

export { students, insights };