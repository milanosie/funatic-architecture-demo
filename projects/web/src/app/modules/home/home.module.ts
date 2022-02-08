import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatSliderModule} from '@angular/material/slider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule, Routes} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';


const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    }
];


@NgModule({
  declarations: [HomeComponent],
    imports: [
        CommonModule,
        MatSliderModule,
        MatSidenavModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        RouterModule.forChild(routes),
    ]
})
export class HomeModule { }
