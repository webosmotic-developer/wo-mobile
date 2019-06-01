import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'tchnologies', loadChildren: './tchnologies/tchnologies.module#TchnologiesPageModule' },
  { path: 'clients', loadChildren: './clients/clients.module#ClientsPageModule' },
  { path: 'contact', loadChildren: './contact/contact.module#ContactPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
