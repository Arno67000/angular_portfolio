import { Component, HostBinding, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Dev } from "../../models/dev";
import { DevService } from "../../services/dev.service";
import { scaleX } from "../../animations/scales";
import { listBorderFadeIn, listFadeIn } from "../../animations/fades";

@Component({
    selector: "app-cv",
    templateUrl: "./cv.component.html",
    styleUrls: ["./cv.component.scss"],
    animations: [
        scaleX("cv__center", "1s 0.2s", 100),
        listFadeIn("terminal", "0.5s 1s", 25),
        listBorderFadeIn("bordered", "0.5s 2s", 100),
    ],
})
export class CvComponent implements OnInit, OnDestroy {
    @HostBinding("@scaleX")
    @HostBinding("@listFadeIn")
    @HostBinding("@listBorderFadeIn")
    private subscription: Subscription;
    public dev: Dev | undefined;
    constructor(private devService: DevService) {
        this.subscription = this.devService.devSubject.subscribe((dev) => (this.dev = dev));
        this.devService.emit();
    }

    ngOnInit(): void {
        return;
    }
    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
