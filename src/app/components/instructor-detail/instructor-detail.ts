// import { Component } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-instructor-detail',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './instructor-detail.html',
//   styleUrls: ['./instructor-detail.css']
// })
// export class InstructorDetailComponent {
//   instructor: any;
//     instructors = [
//   { 
//     id: 1, 
//     name: 'Heba Ali', 
//     title: 'Full Stack Instructor', 
//     image: 'https://via.placeholder.com/150?text=Instructor+1',
//     bio: 'Expert in Angular, Node.js and MongoDB with more than 3 years of teaching experience. Heba has trained hundreds of students in full stack web development, focusing on building scalable applications and implementing best coding practices. She is passionate about mentoring young developers and preparing them for real-world projects in tech companies.',
//     mainTrack: 'Full Stack Development',
//     trackCount: 3,
//     rating: 4.7
//   },
//   { 
//     id: 2, 
//     name: 'Ahmed Ali', 
//     title: 'Frontend Instructor', 
//     image: 'https://via.placeholder.com/150?text=Instructor+2',
//     bio: 'Specialist in modern frontend frameworks: Angular, React, and Vue. Ahmed has 6 years of experience working with international startups to design and implement user-friendly web interfaces. His classes are highly practical and focus on building real projects, making students confident in their frontend skills.',
//     mainTrack: 'Frontend Development',
//     trackCount: 2,
//     rating: 4.5
//   },
//   { 
//     id: 3, 
//     name: 'Sara Mohamed', 
//     title: 'Backend Instructor', 
//     image: 'https://via.placeholder.com/150?text=Instructor+3',
//     bio: 'Backend expert in Node.js, Express, and REST APIs. Sara has led multiple backend development teams and has extensive knowledge of authentication, databases, and server optimization. She combines strong technical skills with a focus on best practices for secure and reliable server-side development.',
//     mainTrack: 'Backend Development',
//     trackCount: 2,
//     rating: 4.6
//   },
//   { 
//     id: 4, 
//     name: 'Omar Hassan', 
//     title: 'AI Instructor', 
//     image: 'https://via.placeholder.com/150?text=Instructor+4',
//     bio: 'AI researcher with expertise in Machine Learning and Deep Learning. Omar has published research papers in top conferences and worked on AI solutions for healthcare and finance. His teaching emphasizes both theory and hands-on projects, giving students the ability to implement AI solutions from scratch.',
//     mainTrack: 'Artificial Intelligence',
//     trackCount: 1,
//     rating: 4.8
//   },
//   { 
//     id: 5, 
//     name: 'Mona Adel', 
//     title: 'Database Instructor', 
//     image: 'https://via.placeholder.com/150?text=Instructor+5',
//     bio: 'Database administrator and trainer with experience in SQL, Oracle, and NoSQL technologies. Mona has worked with enterprises to design efficient data storage solutions and optimize large-scale databases. She teaches students how to model, query, and secure databases effectively in both academic and professional settings.',
//     mainTrack: 'Database Systems',
//     trackCount: 2,
//     rating: 4.4
//   },
//   { 
//     id: 6, 
//     name: 'Youssef Samir', 
//     title: 'Mobile Apps Instructor', 
//     image: 'https://via.placeholder.com/150?text=Instructor+6',
//     bio: 'Mobile app developer specializing in Flutter and React Native. Youssef has developed over 15 mobile applications published on app stores, ranging from e-commerce apps to educational platforms. His teaching focuses on cross-platform development and industry-standard practices to prepare students for real-world projects.',
//     mainTrack: 'Mobile Development',
//     trackCount: 2,
//     rating: 4.0
//   },
//   { 
//     id: 7, 
//     name: 'Heba Reda', 
//     title: 'Cybersecurity Instructor', 
//     image: 'https://via.placeholder.com/150?text=Instructor+7',
//     bio: 'Certified ethical hacker with 10 years of cybersecurity teaching experience. Heba has trained IT professionals on penetration testing, network security, and ethical hacking. She has also worked with government and private organizations to design cybersecurity policies, making her courses deeply practical and industry-driven.',
//     mainTrack: 'Cybersecurity',
//     trackCount: 3,
//     rating: 4.9
//   },
//   { 
//     id: 8, 
//     name: 'Khaled Mostafa', 
//     title: 'Cloud Instructor', 
//     image: 'https://via.placeholder.com/150?text=Instructor+8',
//     bio: 'Cloud solutions architect specialized in AWS and Azure. Khaled has over 7 years of experience in migrating enterprise systems to the cloud, ensuring scalability, cost efficiency, and security. He helps students understand cloud infrastructure and prepares them for cloud certifications to boost their career opportunities.',
//     mainTrack: 'Cloud Computing',
//     trackCount: 2,
//     rating: 4.5
//   },
//   { 
//     id: 9, 
//     name: 'Nour El-Din', 
//     title: 'DevOps Instructor', 
//     image: 'https://via.placeholder.com/150?text=Instructor+9',
//     bio: 'DevOps engineer focusing on CI/CD, Docker, and Kubernetes. Nour has worked with tech companies to automate their software delivery pipelines, ensuring faster and more reliable deployments. His classes cover the latest DevOps tools and methodologies, giving students the skills needed in modern software teams.',
//     mainTrack: 'DevOps Engineering',
//     trackCount: 2,
//     rating: 4.6
//   },
//   { 
//     id: 10, 
//     name: 'Fatma Gamal', 
//     title: 'UI/UX Instructor', 
//     image: 'https://via.placeholder.com/150?text=Instructor+10',
//     bio: 'UI/UX designer passionate about creating user-centered digital experiences. Fatma has worked with design agencies and startups to create beautiful and functional designs. She focuses on usability testing, prototyping, and design thinking, helping students learn how to build products that users truly love.',
//     mainTrack: 'UI/UX Design',
//     trackCount: 1,
//     rating: 4.7
//   }
// ];

  
 

//   constructor(private route: ActivatedRoute, private router: Router) {
//     const id = Number(this.route.snapshot.paramMap.get('id'));
//     this.instructor = this.instructors.find(i => i.id === id);
//   }

//   // دالة تعرض عدد نجوم حسب التقييم
//   getStars(rating: number): string[] {
//     const fullStars = Math.floor(rating);
//     const halfStar = rating % 1 >= 0.5 ? 1 : 0;
//     return Array(fullStars).fill('★').concat(halfStar ? ['☆'] : []);
//   }

//   backToInstructors() {
//     this.router.navigate(['/instructors']);
//   }
// }

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { InstructorsService } from '../../services/instructor.service';
import { Instructor } from '../../models/instructor.model';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-instructor-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './instructor-detail.html',
  styleUrls: ['./instructor-detail.css']
})
export class InstructorDetailComponent implements OnInit {
  instructor: Instructor | null = null;
  loading = true;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private instructorService: InstructorsService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.instructorService.getInstructorById(id).subscribe({
        next: (data) => {
          this.instructor = data;
          this.loading = false;
        },
        error: (err) => {
          console.error('Error fetching instructor', err);
          this.error = 'Failed to load instructor';
          this.loading = false;
        }
      });
    }
  }

  getStars(rating: number): string[] {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    return Array(fullStars).fill('★').concat(halfStar ? ['☆'] : []);
  }

  backToInstructors() {
    this.router.navigate(['/instructors']);
  }
}




