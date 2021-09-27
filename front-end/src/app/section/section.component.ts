import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  present : string = 'welcome';

  constructor() { }

  startTime($event:string) {

    this.present = $event;
    //console.log(time)
  }

  ngOnInit(): void {
  }

}
