import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Section } from 'src/app/models/skills';
import { SkillsReaderService } from 'src/app/services/skills-reader.service';
import { TranslationsService } from 'src/app/services/translations.service';
import { SkillLevels } from './models/levels';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  public SkillLevels = SkillLevels;
  public skills$: Observable<Section[]>
  constructor(public skills: SkillsReaderService, public translator : TranslationsService) {
    

   }

  ngOnInit(): void {
    this.skills$ = this.skills.getJSON();
  }

  public translateSkillLevel(level: string): string{
    return this.translator.translations[`skill.level.${level.toLowerCase()}.key`] ?? level
  }

  public translateSkillSection(section: string): string{
    return this.translator.translations[`skill.section.${section.toLowerCase()}.key`] ?? section
  }

  public translateSectionDesc(section: string): string{
    return this.translator.translations[`skill.section.${section.toLowerCase()}.description`] ?? section
  }

}
