import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RatingPipe } from './pipes/rating.pipe';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    NavBarComponent,
    RatingPipe,
    HighlightDirective
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    NavBarComponent,
    RatingPipe,
    HighlightDirective
  ]
})
export class SharedModule { }
