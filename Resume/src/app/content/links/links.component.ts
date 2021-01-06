import { Component, OnInit } from '@angular/core';
import { TranslationsService } from 'src/app/services/translations.service';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {

  constructor( public translator: TranslationsService) { }

  ngOnInit(): void {
  }

}
