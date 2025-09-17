import studentsData from './students.json';
import insightsData from './insights.json';

// Define the Student interface
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

// Type the JSON data
const students: Student[] = studentsData as Student[];
const insights: string[] = insightsData as string[];

// Compute overview stats
export const overviewStats = {
  avgAssessment: students.reduce((sum, s) => sum + s.assessment_score, 0) / students.length,
  avgComprehension: students.reduce((sum, s) => sum + s.comprehension, 0) / students.length,
  avgAttention: students.reduce((sum, s) => sum + s.attention, 0) / students.length,
  avgFocus: students.reduce((sum, s) => sum + s.focus, 0) / students.length,
  avgRetention: students.reduce((sum, s) => sum + s.retention, 0) / students.length,
  totalStudents: students.length,
};

// Export the data
export { students, insights };