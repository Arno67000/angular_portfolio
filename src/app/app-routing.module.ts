import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { PortfolioComponent } from "./components/portfolio/portfolio.component";
import { ContactComponent } from "./components/contact/contact.component";
import { CvComponent } from "./components/cv/cv.component";

const routes: Routes = [
    { path: "portfolio", component: PortfolioComponent },
    { path: "contact", component: ContactComponent },
    { path: "cv", component: CvComponent },
    { path: "**", component: HomeComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
