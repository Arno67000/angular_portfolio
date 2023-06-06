import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { MatChipsModule } from "@angular/material/chips";

const materialModules = [MatButtonModule, MatIconModule, MatToolbarModule, MatCardModule, MatChipsModule];

@NgModule({
    declarations: [],
    imports: [CommonModule, ...materialModules],
    exports: materialModules,
})
export class AngularMaterialModule {}
