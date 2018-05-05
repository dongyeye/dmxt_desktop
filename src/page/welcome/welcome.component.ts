import { Component, OnInit } from '@angular/core';
import {element} from 'protractor';
import {elementStyle} from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  height: number;
  width: number;
  constructor() {
    this.height = window.innerHeight;
    this.width = window.innerWidth;
  }
  ngOnInit() {

  }


}
