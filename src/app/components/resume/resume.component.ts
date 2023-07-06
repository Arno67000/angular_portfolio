import { Component, Input, OnInit } from "@angular/core";
import { Dev } from "../../models/dev";

@Component({
    selector: "app-resume",
    templateUrl: "./resume.component.html",
    styleUrls: ["./resume.component.scss"],
})
export class ResumeComponent implements OnInit {
    @Input() traits: Dev["traits"] = [];
    constructor() {}

    ngOnInit(): void {
        return;
    }
}
