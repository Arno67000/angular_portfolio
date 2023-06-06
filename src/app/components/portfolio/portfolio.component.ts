import { Component, HostBinding, OnDestroy, OnInit } from "@angular/core";
import { DevService } from "../../services/dev.service";
import { Subscription } from "rxjs";
import { Dev } from "../../models/dev";
import { listFadeIn } from "../../animations/fades";
import { slideListFromRight } from "../../animations/slides";

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
