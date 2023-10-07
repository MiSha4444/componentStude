import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlusComponent } from './plus/plus.component';
import { MinusComponent } from './minus/minus.component';
import { MultiplyComponent } from './multiply/multiply.component';
import { DivideComponent } from './divide/divide.component';
import { ResultComponent } from './result/result.component';
import {FormsModule} from "@angular/forms";
import { CalculationComponent } from './calculation/calculation.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    PlusComponent,
    MinusComponent,
    MultiplyComponent,
    DivideComponent,
    ResultComponent,
    CalculationComponent,
    PostComponent,
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
