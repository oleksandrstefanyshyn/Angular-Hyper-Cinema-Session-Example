import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SessionService } from './shared/session/session.service';
import { SessionListComponent } from './session-list/session-list.component';
import { GiphyService } from './shared/giphy/giphy.service';
import { SessionEditComponent } from './session-edit/session-edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/session-list', pathMatch: 'full' },
  {
    path: 'session-list',
    component: SessionListComponent
  },
  {
    path: 'session-add',
    component: SessionEditComponent
  },
  {
    path: 'session-edit/:id',
    component: SessionEditComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SessionListComponent,
    SessionEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SessionService, GiphyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
