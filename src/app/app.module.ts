import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule ,
  MatExpansionModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatCheckboxModule,
  MatIconModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ClientCreateComponent } from './client/client-create/client-create.component';
import { ClientShowComponent } from './client/client-show/client-show.component';
import { ClientListComponent } from './client/client-list/client-list.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { SignupComponent } from './auth/signup/signup.component';
import { PrintLayoutComponent } from './print/print-layout/print-layout.component';
import { PrintService } from './print/print.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClientCreateComponent,
    ClientShowComponent,
    ClientListComponent,
    LoginComponent,
    LogoutComponent,
    SignupComponent,
    PrintLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [PrintService],
  bootstrap: [AppComponent]
})
export class AppModule { }
