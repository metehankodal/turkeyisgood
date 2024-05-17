import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


interface City {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule,MatExpansionModule],
})
export class HomePageComponent implements  OnInit{



  constructor(private route: Router){
    
  }
  ngOnInit() {

  }
  
  selectedValue: string | undefined;

  cities: City[] = [
    {value: '35', viewValue: 'İstanbul'},
    {value: '34', viewValue: 'İzmir'},
    {value: '07', viewValue: 'Antalya'},
  ];

  expanded = false;
  

  toggle(){
    this.expanded = !this.expanded;
}

search(){
   this.route.navigate(['/search/']);
}
  

  

}
