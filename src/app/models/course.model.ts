export interface Course {
  _id: string;
  title: string;
  description: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  price: number;
  instructor: string;   // Ref => InstructorId
  students?: string[];  // Ref => Students
  lectures?: string[];  // Ref => Lectures
}


