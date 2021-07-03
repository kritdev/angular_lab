import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  skillList = [
    'Javascript',
    'HTLM',
    'MySQL',
    'NodeJs',
    'Koa',
    'Cloud Deployment',
    'Algorithm: Data Structure'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
