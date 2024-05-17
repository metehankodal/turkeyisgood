import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-med-travel',
  templateUrl: './med-travel.component.html',
  styleUrl: './med-travel.component.css'
})
export class MedTravelComponent {

  constructor(private router:Router){
    
  }

  redirectHome(){
    this.router.navigate(['/home']);
  }

}
