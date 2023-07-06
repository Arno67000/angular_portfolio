import { Component, Input, OnInit } from "@angular/core";
import { Dev } from "../../models/dev";

@Component({
    selector: "app-soft-skills",
    templateUrl: "./soft-skills.component.html",
    styleUrls: ["./soft-skills.component.scss"],
})
export class SoftSkillsComponent implements OnInit {
    @Input() softSkills: Dev["softSkills"] = [];
    constructor() {}

    ngOnInit(): void {
        return;
    }
}
