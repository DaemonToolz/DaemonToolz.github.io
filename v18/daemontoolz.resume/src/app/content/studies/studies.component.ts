import { Component, OnInit } from '@angular/core';
import { Study } from '../../models/studies';
import { StudiesReaderService } from '../../services/studies-reader.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent implements OnInit {
  public studies: Study[] = [];
  
  constructor(private studyService: StudiesReaderService, public translator : TranslateService) {
    const self = this;
    this.studyService.getJSON().subscribe(data => {
      self.studies = data;
    });

   }

   public translateStudySpecialization(category: string): string{
    return this.translator.translations.get(`studies.specialization.${category.toLowerCase()}.description`) ?? category
  }

  ngOnInit(): void {
  }

}
