import { Component, HostBinding, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Dev } from "../../models/dev";
import { DevService } from "../../services/dev.service";
import { listFadeIn } from "../../animations/fades";
import { slideListFromLeft, slideListFromRight } from "../../animations/slides";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"],
    animations: [
        slideListFromLeft("names", "500ms 200ms ease-out", 300),
        slideListFromRight("rightSlide", "700ms 500ms ease-out", 350),
        listFadeIn("letter", "0.8s 1s ease-in", 100),
    ],
})
export class HomeComponent implements OnInit, OnDestroy {
    @HostBinding("@listFadeIn")
    @HostBinding("@slideListFromLeft")
    @HostBinding("@slideListFromRight")
    public dev: Dev | undefined;
    private subscription: Subscription;

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
