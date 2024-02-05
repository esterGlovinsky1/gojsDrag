import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { DialogModule } from "primeng/dialog";
import { DiagramComponent } from "../diagram/diagram.component";

@NgModule({
    imports: [
        BrowserAnimationsModule,
        DialogModule
    ],
    declarations: [
        AppComponent,
        DiagramComponent
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
    constructor() {
    }
}