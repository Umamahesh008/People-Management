import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-delete-person',
  templateUrl: './delete-person.component.html',
  styleUrls: ['./delete-person.component.css']
})
export class DeletePersonComponent implements OnInit {
  personId!: number;

  constructor(
    private route: ActivatedRoute,
    private peopleService: PeopleService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.personId = +this.route.snapshot.paramMap.get('id')!;
  }

  deletePerson(): void {
    this.peopleService.deletePerson(this.personId).subscribe(() => {
      this.router.navigate(['/people']);
    });
  }
}
