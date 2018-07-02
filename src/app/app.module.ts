import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatTreeModule, MatBadgeModule, MatGridListModule, MatCardModule,  MatInputModule, MatStepperModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import {A11yModule} from '@angular/cdk/a11y';
import { CdkStepperModule } from '@angular/cdk/stepper';

import { IntroStepperComponent } from './intro-stepper/intro-stepper.component';
import { MaterialStepperComponent } from './material-stepper/material-stepper.component';
import { CdkStepperComponent } from './cdk-stepper/cdk-stepper.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    IntroStepperComponent,
    MaterialStepperComponent,
    CdkStepperComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTreeModule,
    MatBadgeModule,
    MatGridListModule,
    MatCardModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule, 
    MatFormFieldModule,
    MatStepperModule,
    MatInputModule, 
    CdkStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
