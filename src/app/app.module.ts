import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AngularMaterialModule } from "./modules/angular-material/angular-material.module";

import { HomeComponent } from "./components/home/home.component";
import { CvComponent } from "./components/cv/cv.component";
import { ContactComponent } from "./components/contact/contact.component";
import { PortfolioComponent } from "./components/portfolio/portfolio.component";

@NgModule({
    declarations: [AppComponent, HomeComponent, CvComponent, ContactComponent, PortfolioComponent],
    imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, AngularMaterialModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
