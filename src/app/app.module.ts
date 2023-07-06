import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AngularMaterialModule } from "./modules/angular-material/angular-material.module";

import { DevService } from "./services/dev.service";

import { HomeComponent } from "./components/home/home.component";
import { CvComponent } from "./components/cv/cv.component";
import { ContactComponent } from "./components/contact/contact.component";
import { PortfolioComponent } from "./components/portfolio/portfolio.component";
import { VideoComponent } from "./components/video/video.component";
import { SkillComponent } from "./components/skill/skill.component";
import { ReferencesComponent } from "./components/references/references.component";
import { StudiesComponent } from "./components/studies/studies.component";
import { ExperiencesComponent } from "./components/experiences/experiences.component";
import { SoftSkillsComponent } from "./components/soft-skills/soft-skills.component";
import { ResumeComponent } from "./components/resume/resume.component";
import { LinksComponent } from "./components/links/links.component";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        CvComponent,
        ContactComponent,
        PortfolioComponent,
        VideoComponent,
        SkillComponent,
        ReferencesComponent,
        StudiesComponent,
        ExperiencesComponent,
        SoftSkillsComponent,
        ResumeComponent,
        LinksComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, AngularMaterialModule],
    providers: [DevService, VideoComponent],
    bootstrap: [AppComponent],
})
export class AppModule {}
