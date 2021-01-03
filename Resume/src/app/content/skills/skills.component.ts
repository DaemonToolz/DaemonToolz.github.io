import { Component, OnInit } from '@angular/core';
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
  public skill_set: Section[] = [];
  constructor(private skills: SkillsReaderService, private translator : TranslationsService) {
    const self = this;
    skills.getJSON().subscribe(data => {
      self.skill_set = data;
    });

   }

  ngOnInit(): void {
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
