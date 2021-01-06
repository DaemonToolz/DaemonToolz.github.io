import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
import { CompanyType, Experience } from 'src/app/models/experience';
import { ExperienceService } from 'src/app/services/experience.service';
import { TranslationsService } from 'src/app/services/translations.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  @ViewChild('ExperienceTabs', {static: false}) public tabGroup: MatTabGroup;
  public CompanyType = CompanyType;
  public experiences: Experience[] = [];
  constructor(private experienceService: ExperienceService, public translator: TranslationsService) {
    const self = this;
    experienceService.getJSON().subscribe(data => {
      self.experiences = data;
    });
  }

  public translateCompanyType(type: string): string {
    return this.translator.translations[`experience.type.${type.toLowerCase()}.key`] ?? type
  }

  public translateRole(role: string): string {
    return this.translator.translations[`experience.role.${role.toLowerCase()}.key`] ?? role
  }
  ngOnInit(): void {
  }

}
