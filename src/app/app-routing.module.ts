import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchComponent } from './pages/search/search.component';
import { MedTravelComponent } from './pages/med-travel/med-travel.component';

const routes: Routes = [
  {path:'home',component:HomePageComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'search', component: SearchComponent },
  {path:'med-travel',component: MedTravelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
