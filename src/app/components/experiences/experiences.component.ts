import { Component, Input, OnInit } from "@angular/core";
import { Dev } from "../../models/dev";

@Component({
    selector: "app-experiences",
    templateUrl: "./experiences.component.html",
    styleUrls: ["./experiences.component.scss"],
})
export class ExperiencesComponent implements OnInit {
    @Input() xp: Dev["xp"] = [];
    constructor() {}

    ngOnInit(): void {
        return;
    }
}
