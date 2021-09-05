import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCommonModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomeComponent } from './home/home.component';
import { CorgiComponent } from './corgi/corgi.component';
import { PhotoCardComponent } from './photo-card/photo-card.component';
import { AddPhotoComponent } from './add-photo/add-photo.component';
import { AddPhotoDialogComponent } from './add-photo-dialog/add-photo-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeComponent,
    CorgiComponent,
    PhotoCardComponent,
    AddPhotoComponent,
    AddPhotoDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    AmplifyUIAngularModule, 
    BrowserAnimationsModule, 

    MatToolbarModule,
    MatIconModule, 
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCommonModule, 
    MatGridListModule, 
    MatCardModule,
    MatBadgeModule, 
    MatDialogModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
