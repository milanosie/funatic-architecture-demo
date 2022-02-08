import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'web-document-overview',
  templateUrl: './document-overview.component.html',
  styleUrls: ['./document-overview.component.scss']
})
export class DocumentOverviewComponent implements OnInit {
  refreshSubject = new BehaviorSubject(true);

  constructor() {
  }

  ngOnInit(): void {
  }

  doRefresh(): void {
    setTimeout( () => {
      this.refreshSubject.next(true);
    }, 1000);
  }
}
