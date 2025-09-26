import { Course } from './course.model';

export interface Instructor {
  _id: string;         // id من MongoDB
  name: string;
  email: string;
  password?: string;   // مش هنبعت الباسورد غير في التسجيل
  bio: string;
  courses?: Course[];  // الكورسات اللي المدرس بيدرسها
}

