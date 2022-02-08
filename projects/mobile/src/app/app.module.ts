import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {IonicModule} from '@ionic/angular';
import {AppRoutingModule} from './app-router.module';
import {SharedUiModule} from 'shared-ui';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
