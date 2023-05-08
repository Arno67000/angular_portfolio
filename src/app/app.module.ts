import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { HomeComponent } from "./components/home/home.component";
import { CvComponent } from "./components/cv/cv.component";
import { ContactComponent } from "./components/contact/contact.component";
import { PortfolioComponent } from "./components/portfolio/portfolio.component";

@NgModule({
    declarations: [AppComponent, HomeComponent, CvComponent, ContactComponent, PortfolioComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
