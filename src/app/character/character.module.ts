import { NgModule } from '@angular/core';
import { CharacterComponent } from './character.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CharacterComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
  ],
  providers: []
})
export class CharacterModule { }
