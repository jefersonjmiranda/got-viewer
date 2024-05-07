import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { SceneSelectorComponent } from './scene-selector.component';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MainComponent,
    SceneSelectorComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    MatButtonModule
  ],
  providers: []
})
export class MainModule { }
