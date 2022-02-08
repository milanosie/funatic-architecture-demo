import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MessagesComponent} from './messages/messages.component';
import {RouterModule, Routes} from '@angular/router';
import {IonicModule} from '@ionic/angular';

const routes: Routes = [
    {
        path: '',
        component: MessagesComponent
    }
];


@NgModule({
    declarations: [MessagesComponent],
    imports: [
        CommonModule,
        IonicModule,
        RouterModule.forChild(routes)
]
})

export class MessagesModule {
}
