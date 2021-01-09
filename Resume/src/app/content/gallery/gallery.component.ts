import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GalleryContent } from 'src/app/models/Project';
import { ProjectsService } from 'src/app/services/projects.service';
import { TranslationsService } from 'src/app/services/translations.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  public gallery$: Observable<Array<GalleryContent>>;
  constructor(public translator: TranslationsService, public projectService: ProjectsService) {}


  ngOnInit(): void {
    this.gallery$ = this.projectService.getGallery();
  }

}
