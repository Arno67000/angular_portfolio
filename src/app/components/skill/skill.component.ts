import { Component, Input, OnInit } from "@angular/core";
import { Dev } from "../../models/dev";

@Component({
    selector: "app-skill",
    templateUrl: "./skill.component.html",
    styleUrls: ["./skill.component.scss"],
})
export class SkillComponent implements OnInit {
    @Input() technos: Dev["technos"] = [];
    @Input() languages: Dev["languages"] = [];
    constructor() {}

    ngOnInit(): void {
        return;
    }
}
