import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntroStepperComponent } from './intro-stepper/intro-stepper.component';
import { MaterialStepperComponent } from './material-stepper/material-stepper.component';
import { CdkStepperComponent } from './cdk-stepper/cdk-stepper.component';

const routes: Routes = [
  { path: '', component:  IntroStepperComponent},
  { path: 'material-stepper', component:  MaterialStepperComponent},
  { path: 'cdk-stepper', component:  CdkStepperComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [
		RouterModule
	]
})
export class AppRoutingModule { }
