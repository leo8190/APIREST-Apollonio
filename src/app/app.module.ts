import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing-module';
import { StudentsModule } from './students/students.module';
import { UsersModule } from './users/users.module';
import { AuthenticationModule } from '../app/authentication/authentication.module'
import { AuthenticationComponent } from './authentication/components/authentication/authentication.component';
import { InitialAuthComponent } from './authentication/components/initial-auth/initial-auth.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    StudentsModule,
    UsersModule,
    CoreModule,
    AuthenticationModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
