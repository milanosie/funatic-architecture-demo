import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DocumentOverviewComponent} from './document-overview/document-overview.component';
import {IonicModule} from '@ionic/angular';
import {RouterModule, Routes} from '@angular/router';
import {SharedUiModule} from 'shared-ui';

const routes: Routes = [
    {
        path: '',
        component: DocumentOverviewComponent
    }
];


@NgModule({
  declarations: [DocumentOverviewComponent],
    imports: [
        CommonModule,
        IonicModule,
        RouterModule.forChild(routes),
        SharedUiModule
    ]
})
export class DocumentsModule { }
