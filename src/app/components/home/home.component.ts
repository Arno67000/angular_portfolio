import { Component, HostBinding, HostListener, OnInit } from "@angular/core";
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
export class HomeComponent implements OnInit {
    @HostBinding("@listFadeIn")
    @HostBinding("@slideListFromLeft")
    @HostBinding("@slideListFromRight")
    public job = "Software developer";
    public technos = [
        { icon: "fab fa-js-square", title: "Javascript / Typescript" },
        { icon: "fab fa-node-js", title: "NodeJs" },
        { icon: "fas fa-database", title: "DB SQL & NoSQL" },
        { icon: "fab fa-git-square", title: "Git / GitHub" },
        { icon: "fa-brands fa-rust", title: "Rust" },
        { icon: "fa-brands fa-docker", title: "Docker" },
        { icon: "fas fa-terminal", title: "Bash" },
        { icon: "fab fa-angular", title: "Angular" },
    ];
    public hoverEffect: boolean;

    constructor() {
        this.hoverEffect = false;
    }

    ngOnInit(): void {
        return;
    }
}
