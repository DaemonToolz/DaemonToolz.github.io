import { Component, OnInit } from '@angular/core';
import { Study } from 'src/app/models/studies';
import { StudiesReaderService } from 'src/app/services/studies-reader.service';
import { TranslationsService } from 'src/app/services/translations.service';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent implements OnInit {
  public studies: Study[] = [];
  
  constructor(private studyService: StudiesReaderService, public translator : TranslationsService) {
    const self = this;
    studyService.getJSON().subscribe(data => {
      self.studies = data;
    });

   }

   public translateStudySpecialization(category: string): string{
    return this.translator.translations[`studies.specialization.${category.toLowerCase()}.description`] ?? category
  }

  ngOnInit(): void {
  }

}
