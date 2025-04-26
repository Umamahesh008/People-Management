import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleListComponent } from './people-list/people-list.component';
import { EditPersonComponent } from './edit-person/edit-person.component';
import { DeletePersonComponent } from './delete-person/delete-person.component';

const routes: Routes = [
  { path: '', redirectTo: 'people', pathMatch: 'full' },  // Redirect to people list by default
  { path: 'people', component: PeopleListComponent },     // Route to list all people
  { path: 'edit/:id', component: EditPersonComponent },   // Route to edit a person
  { path: 'delete/:id', component: DeletePersonComponent } // Route to delete a person
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }