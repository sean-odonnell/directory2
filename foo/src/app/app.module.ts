import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

// Import the ButtonsModule...
import { ButtonsModule } from '@progress/kendo-angular-buttons';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,

        // ... and register it
        ButtonsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
