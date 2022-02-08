import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Component({
    selector: 'app-document-overview',
    templateUrl: './document-overview.component.html',
    styleUrls: ['./document-overview.component.scss']
})
export class DocumentOverviewComponent implements OnInit {

    refreshSubject = new BehaviorSubject(true);

    constructor() {
    }

    ngOnInit(): void {
    }

    doRefresh(event): void {
        setTimeout( () => {
            this.refreshSubject.next(true);
            event.target.complete();
        }, 1000);
    }
}
