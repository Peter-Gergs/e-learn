// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';
// import { InstructorService } from '../../services/instructor.service';
// import { Instructor } from '../../models/instructor.model';

// @Component({
//   selector: 'app-instructors',
//   standalone: true,
//   imports: [CommonModule, RouterModule],
//   templateUrl: './instructors.html',
//   styleUrls: ['./instructors.css']
// })
// export class InstructorsComponent {
//   instructors: Instructor[] = [];

//   constructor(private instructorService: InstructorService) {}

//   ngOnInit() {
//     this.instructors = this.instructorService.getInstructors();
//   }

//   addInstructor() {
//     const newId = Math.max(...this.instructors.map(i => i.id), 0) + 1;

//     const newInstructor: Instructor = {
//       id: newId,
//       name: 'New Instructor',
//       image: 'https://via.placeholder.com/150',
//       bio: 'This is a new instructor bio.',
//       title: 'New Title',
//       mainTrack: 'Web Development',
//       trackCount: 1,
//       rating: 4.5
//     };

//     this.instructorService.addInstructor(newInstructor);
//     this.instructors = this.instructorService.getInstructors(); // تحديث الليستة
//   }

//   deleteInstructor(id: number) {
//     this.instructorService.deleteInstructor(id);
//     this.instructors = this.instructorService.getInstructors();
//   }

//   editInstructor(instructor: Instructor) {
//     const updated: Instructor = {
//       ...instructor,
//       name: prompt('Enter new name:', instructor.name) || instructor.name,
//       title: prompt('Enter new title:', instructor.title) || instructor.title,
//       bio: prompt('Enter new bio:', instructor.bio) || instructor.bio,
//       mainTrack: prompt('Enter new main track:', instructor.mainTrack) || instructor.mainTrack,
//       trackCount: Number(prompt('Enter new track count:', instructor.trackCount.toString())) || instructor.trackCount,
//       rating: Number(prompt('Enter new rating:', instructor.rating.toString())) || instructor.rating,
//     };

//     this.instructorService.editInstructor(updated);
//     this.instructors = this.instructorService.getInstructors(); // تحديث الليستة
//   }
// }
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InstructorsService } from '../../services/instructor.service';
import { Instructor } from '../../models/instructor.model';

@Component({
  selector: 'app-instructors',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './instructors.html',
  styleUrls: ['./instructors.css']
})
export class InstructorsComponent implements OnInit {
  instructors: Instructor[] = [];
  loading = true;
  error: string | null = null;

  constructor(private instructorsService: InstructorsService) {}

  ngOnInit(): void {
    this.instructorsService.getInstructors().subscribe({
      next: (data) => {
        this.instructors = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load instructors';
        this.loading = false;
        console.error(err);
      }
    });
  }

  deleteInstructor(id: string) {
    if (confirm('Are you sure you want to delete this instructor?')) {
      this.instructorsService.deleteInstructor(id).subscribe(() => {
        this.instructors = this.instructors.filter(i => i._id !== id);
      });
    }
  }
}




