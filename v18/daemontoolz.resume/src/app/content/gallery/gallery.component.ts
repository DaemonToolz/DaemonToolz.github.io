import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GalleryContent } from '../../models/Project';
import { ProjectsService } from '../../services/projects.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  public gallery$?: Observable<Array<GalleryContent>>;
  constructor(public translator: TranslateService, public projectService: ProjectsService) {}


  ngOnInit(): void {
    this.gallery$ = this.projectService.getGallery();
  }

}
