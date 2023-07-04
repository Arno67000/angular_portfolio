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
import { VideoComponent } from "./components/video/video.component";

import { DevService } from "./services/dev.service";

@NgModule({
    declarations: [AppComponent, HomeComponent, CvComponent, ContactComponent, PortfolioComponent, VideoComponent],
    imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, AngularMaterialModule],
    providers: [DevService, VideoComponent],
    bootstrap: [AppComponent],
})
export class AppModule {}
