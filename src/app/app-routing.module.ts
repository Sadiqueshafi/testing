import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComposeComponent } from './compose/compose.component';
import { InboxComponent } from './inbox/inbox.component';
import { SentComponent } from './sent/sent.component';
import { SidenavComponent } from './sidenav/sidenav.component';

const routes: Routes = [
  // {path:'',component:SidenavComponent, pathMatch:'full'},
  { path: 'inbox', component: InboxComponent },
  { path: 'sent', component: SentComponent },
  { path: 'compose', component: ComposeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
