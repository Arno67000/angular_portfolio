import { Component, HostBinding, OnDestroy, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DevService } from "../../services/dev.service";
import { Subscription } from "rxjs";
import { Dev } from "../../models/dev";
import { listFadeIn } from "../../animations/fades";
import { slideListFromRight } from "../../animations/slides";
import { VideoComponent } from "../video/video.component";

@Component({
    selector: "app-portfolio",
    templateUrl: "./portfolio.component.html",
    styleUrls: ["./portfolio.component.scss"],
    animations: [
        listFadeIn("card", "800ms 200ms ease-out", 350),
        slideListFromRight("card", "800ms 200ms ease-out", 350),
    ],
})
export class PortfolioComponent implements OnInit, OnDestroy {
    @HostBinding("@listFadeIn")
    @HostBinding("@slideListFromRight")
    private subscription: Subscription;
    public dev: Dev | undefined;
    public modalInstance: boolean = false;

    constructor(private devService: DevService, private dialog: MatDialog) {
        this.subscription = this.devService.devSubject.subscribe((dev) => (this.dev = dev));
        this.devService.emit();
    }

    ngOnInit(): void {
        return;
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    openVideo(video: string) {
        this.modalInstance = true;
        const popup = this.dialog.open(VideoComponent, {
            panelClass: "custom-dialog-container",
            width: "100%",
            data: {
                video,
            },
        });
        popup.afterClosed().subscribe(() => {
            this.modalInstance = false;
        });
    }
}
