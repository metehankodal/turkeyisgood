import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements  OnInit{

  expanded = false;
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  toggle(){
    this.expanded = !this.expanded;
}
  

  

}
