import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  skillList = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.skillList = this.dataService.retrieveSkillList();
  }

}
