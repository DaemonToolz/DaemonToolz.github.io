import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
import { Observable, of } from 'rxjs';
import { CompanyType, Experience } from '../../models/experience';
import { Project } from '../../models/Project';
import { ExperienceService } from '../../services/experience.service';
import { ProjectsService } from '../../services/projects.service';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit, OnDestroy {
  @ViewChild('ExperienceTabs', {static: false}) public tabGroup!: MatTabGroup;
  @ViewChild('ProjectTabs', {static: false}) public projectTabs!: MatTabGroup;
  public CompanyType = CompanyType;
  public projects$?: Observable<Array<Project>>;
  public experiences$!: Observable<Array<Experience>>;
  constructor(public projectService: ProjectsService, public experienceService: ExperienceService, public translator: TranslateService) {
    this.experiences$ = of([]);
  }

  public translateCompanyType(type: string): string {
    return `experience.type.${type.toLowerCase()}.key`
  }

  public translateRole(role: string): string {
    return `experience.role.${role.toLowerCase()}.key`
  }

  public translateProjectDescription(project: string): string {
    return `projects.${project.toLowerCase()}.main.description`
  }

  ngOnInit(): void {
    this.projects$ = this.projectService.getJSON();
    this.experiences$ = this.experienceService.getJSON();
  }

  ngOnDestroy(): void{

  }
}
