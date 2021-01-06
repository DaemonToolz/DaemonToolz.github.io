import { Component, OnInit } from '@angular/core';
import { TranslationsService } from 'src/app/services/translations.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public translator : TranslationsService) {}

  ngOnInit(): void {
  }

  

}
