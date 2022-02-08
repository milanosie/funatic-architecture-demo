import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {DocumentService} from 'core';

@Component({
  selector: 'lib-document-overview',
  templateUrl: './document-overview.component.html',
  styleUrls: ['./document-overview.component.css']
})
export class DocumentOverviewComponent implements OnInit {

  @Input() reloadDocuments: Observable<boolean> = new Observable<boolean>();
  public documents$: Observable<any>;
  constructor(private documentService: DocumentService) { }

  ngOnInit(): void {
    this.reloadDocuments.subscribe(() => this.documents$ = this.documentService.getDocuments());
  }

}
