import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { StatesComponent } from './states.component';
import { LoginComponent } from './login/login.component';
import { CitiesComponent } from './cities.component';
import { ItemsComponent } from './items/items.component';
import { ItemComponent } from './items/item.component';
import { AddComponent } from './items/add.component';
import { AuthCanActivateGuard } from './guards/auth.canactivate.guard';

const MY_ROUTES: Routes = [
  { path: '', component: LoginComponent/**/, canActivate: [AuthCanActivateGuard] },
  { path: 'login', component: LoginComponent },
  {
    path: 'home', component: HomeComponent, /*canActivate: [AuthCanActivateGuard],*/ children: [
      { path: 'states', component: StatesComponent },
      { path: 'cities/:id', component: CitiesComponent },
      { path: 'items/:id', component: ItemsComponent },
      { path: 'item/:id', component: ItemComponent},
      { path: 'cities/:id', component: CitiesComponent },
      { path: 'additem', component: AddComponent }
    ]
  },
  //{ path: 'cities/:id', component: CitiesComponent },

  /* { path: 'students', component: StudentsComponent },
  { path: 'students/profile/:id', component: ProfileComponent, canActivate: [ErrorCanActivateGuard]},
  { path: 'error', component: ErrorGuardComponent },
  {path: 'students/profile', component: ErrorGuardComponent, canActivate:[ErrorCanActivateGuard]},*/

  { path: '**', redirectTo: 'error' }
];

export const myRoutes = RouterModule.forRoot(MY_ROUTES);