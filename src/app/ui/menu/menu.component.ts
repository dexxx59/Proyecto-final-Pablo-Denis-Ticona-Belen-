import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  listMenu=[
    {url: '/usuario',text:'Usuario',icon:'fa-th'},
    {url: '/reclamo',text:'Reclamo',icon:'fa-user'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
