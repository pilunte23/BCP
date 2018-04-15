import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import { VillainsComponent } from './villains/villains.component';
import { HeroesComponent } from './heroes/heroes.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    VillainsComponent,
    HeroesComponent,
    AppNavbarComponent
  ],
  imports: [
    NgbModule.forRoot(),BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
