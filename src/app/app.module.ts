import { NgModule, isDevMode } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';

import { RouterModule, Routes } from '@angular/router';

import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider} from 'angularx-social-login';
import { SocialAuthService } from "angularx-social-login";

import { TwitterConnect } from '@ionic-native/twitter-connect/ngx';
import { HomeComponent } from './components/home/home.component';
import { AccountService } from './services/accountservice.service';
import { NavbarComponent } from './components/navbar/navbar.component';
//import { ServiceWorkerModule } from '@angular/service-worker';

const routes: Routes = [

  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'profile/:id',component:ProfileComponent},
  {path:'profile',component:ProfileComponent},
  {path:'home', component:HomeComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoFormComponent,
    TodoListComponent,
    LoginComponent,
    ProfileComponent,
HomeComponent,
NavbarComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    SocialLoginModule,MatToolbarModule, MatMenuModule
//     ServiceWorkerModule.register('ngsw-worker.js', {
//   enabled: !isDevMode(),
//   // Register the ServiceWorker as soon as the application is stable
//   // or after 30 seconds (whichever comes first).
//   registrationStrategy: 'registerWhenStable:30000'
// })
    
  ],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            '92446788325-5aok28rgqubftmt159m7skrg2mh829he.apps.googleusercontent.com'
          )
        },
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider('1225350731442831'),
        },
      ],
      onError: (err) => {
        console.error(err);
      }
    } as SocialAuthServiceConfig,
  },
  SocialAuthService,AccountService,
  TwitterConnect],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule {}
