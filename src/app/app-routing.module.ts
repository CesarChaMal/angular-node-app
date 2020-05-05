import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListComponent } from './client/client-list/client-list.component';
import { ClientCreateComponent } from './client/client-create/client-create.component';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthGuard } from './auth/auth.guard';
import { PrintLayoutComponent } from './print/print-layout/print-layout.component';
import { ClientShowComponent} from './client/client-show/client-show.component';

const routes: Routes = [
  // { path: '', component: ClientListComponent},
  { path: '', component: ClientListComponent, canActivate: [AuthGuard] },
  { path: 'create', component: ClientCreateComponent, canActivate: [AuthGuard] },
  { path: 'edit/:clientId', component: ClientCreateComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'signup', component: SignupComponent },
  // { path: 'show', component: ClientCreateComponent },
  // { path: 'show/:clientId', component: ClientCreateComponent },
  // { path: 'print', component: PrintLayoutComponent},
  // tslint:disable-next-line:max-line-length
  // { path: 'print', outlet: 'printArea', component: PrintLayoutComponent, children: [{ path: 'show/:clientId', component: ClientCreateComponent }]},
  // tslint:disable-next-line:max-line-length
  { path: 'print', outlet: 'printArea', component: PrintLayoutComponent, children: [{ path: 'show/:clientId', component: ClientShowComponent }]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
