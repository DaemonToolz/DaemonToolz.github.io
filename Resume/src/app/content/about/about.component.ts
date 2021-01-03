import { Component, OnInit } from '@angular/core';
import { TranslationsService } from 'src/app/services/translations.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public constructor(public translator: TranslationsService){

  }
  ngOnInit(): void {
  }

}
