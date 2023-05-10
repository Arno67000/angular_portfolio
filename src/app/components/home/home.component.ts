import { Component, HostBinding, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Dev } from "../../models/dev";
import { DevService } from "../../services/dev.service";
import { listFadeIn } from "../../animations/fades";
import { slideListFromRight } from "../../animations/slides";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"],
    animations: [
        slideListFromRight("rightSlide", "800ms 200ms ease-out", 350),
        listFadeIn("home__job--letter", "0.8s 1s ease-in", 100),
    ],
})
export class HomeComponent implements OnInit, OnDestroy {
    @HostBinding("@listFadeIn")
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
