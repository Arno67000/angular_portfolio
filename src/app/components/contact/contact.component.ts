import { Component, HostBinding, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Dev } from "../../models/dev";
import { DevService } from "../../services/dev.service";
import { listFadeIn } from "../../animations/fades";

@Component({
    selector: "app-contact",
    templateUrl: "./contact.component.html",
    styleUrls: ["./contact.component.scss"],
    animations: [listFadeIn("card", "800ms ease-in-out", 10)],
})
export class ContactComponent implements OnInit, OnDestroy {
    @HostBinding("@listFadeIn")
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
