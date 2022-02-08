import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'documenten',
        loadChildren: () => import('./pages/documents/documents.module').then(m => m.DocumentsModule)
    },
    {
        path: 'berichten',
        loadChildren: () => import('./pages/messages/messages.module').then(m => m.MessagesModule)
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
