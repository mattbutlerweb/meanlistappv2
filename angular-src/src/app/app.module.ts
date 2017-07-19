import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { ListcontainerComponent } from './components/listcontainer/listcontainer.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { ListService } from './services/list.service';

import { AuthGuard } from './guards/auth.guard';


const appRoutes: Routes = [{

  path: '',
  component: HomeComponent

},
{

  path: 'register',
  component: RegisterComponent

},
{

  path: 'login',
  component: LoginComponent

},
{

  path: 'dashboard',
  component: DashboardComponent,
  canActivate: [AuthGuard]

},
{

  path:'login/:message',
  component: LoginComponent

},
]

@NgModule({
  declarations: [
    AppComponent,
    ListcontainerComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthGuard, AuthService, ValidateService, ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
