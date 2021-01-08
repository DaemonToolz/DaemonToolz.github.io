import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
import { Observable } from 'rxjs';
import { CompanyType, Experience } from 'src/app/models/experience';
import { Project } from 'src/app/models/Project';
import { ExperienceService } from 'src/app/services/experience.service';
import { ProjectsService } from 'src/app/services/projects.service';
import { TranslationsService } from 'src/app/services/translations.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit, OnDestroy {
  @ViewChild('ExperienceTabs', {static: false}) public tabGroup: MatTabGroup;
  public CompanyType = CompanyType;
  public projects$: Observable<Array<Project>>;
  public experiences$: Observable<Array<Experience>>;
  constructor(public projectService: ProjectsService, public experienceService: ExperienceService, public translator: TranslationsService) {

  }

  public translateCompanyType(type: string): string {
    return this.translator.translations[`experience.type.${type.toLowerCase()}.key`] ?? type
  }

  public translateRole(role: string): string {
    return this.translator.translations[`experience.role.${role.toLowerCase()}.key`] ?? role
  }
  ngOnInit(): void {
    this.projects$ = this.projectService.getJSON();
    this.experiences$ = this.experienceService.getJSON();
  }

  ngOnDestroy(): void{

  }
}
