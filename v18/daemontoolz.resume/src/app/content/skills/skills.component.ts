import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { SkillLevels } from './models/levels';
import { Section } from '../../models/skills';
import { SkillsReaderService } from '../../services/skills-reader.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  public SkillLevels = SkillLevels;
  public skills$?: Observable<Section[]>
  constructor(public skills: SkillsReaderService, public translator: TranslateService) {
  }

  ngOnInit(): void {
    this.skills$ = this.skills.getJSON();
  }

  public translateSkillLevel(level: string): string {
    return this.translator.translations.get(`skill.level.${level.toLowerCase()}.key`) ?? level
  }

  public translateSkillSection(section: string): string {
    return this.translator.translations.get(`skill.section.${section.toLowerCase()}.key`) ?? section
  }

  public translateSectionDesc(section: string): string {
    return this.translator.translations.get(`skill.section.${section.toLowerCase()}.description`) ?? section
  }

}
