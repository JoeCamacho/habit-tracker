import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {Layouts} from "./layouts";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";

const MaterialModules = [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
];

@NgModule({
    declarations: [
        AppComponent,
        ...Layouts
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        AppRoutingModule,

        ...MaterialModules,

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
