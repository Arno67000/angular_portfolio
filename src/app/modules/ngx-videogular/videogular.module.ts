import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { VgCoreModule } from "@videogular/ngx-videogular/core";
import { VgControlsModule } from "@videogular/ngx-videogular/controls";
import { VgOverlayPlayModule } from "@videogular/ngx-videogular/overlay-play";
import { VgBufferingModule } from "@videogular/ngx-videogular/buffering";

const videoModules = [VgCoreModule, VgControlsModule, VgOverlayPlayModule, VgBufferingModule];

@NgModule({
    declarations: [],
    imports: [CommonModule, ...videoModules],
    exports: videoModules,
})
export class VideogularModule {}
