import { Component, OnInit } from '@angular/core';
import { TranslationsService } from 'src/app/services/translations.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {


  constructor(public translator : TranslationsService) {}


  ngOnInit(): void {
  }

}
