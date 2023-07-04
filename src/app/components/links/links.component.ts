import { Component, Input, OnInit } from "@angular/core";
import { Dev } from "../../models/dev";

@Component({
    selector: "app-links",
    templateUrl: "./links.component.html",
    styleUrls: ["./links.component.scss"],
})
export class LinksComponent implements OnInit {
    @Input() portfolio: Dev["portfolio"] = "";
    @Input() mail: Dev["mail"] = "";
    @Input() phone: Dev["phone"] = { fr: "", global: "" };
    @Input() linkedin: Dev["linkedin"] = "";
    @Input() github: Dev["github"] = "";
    constructor() {}

    ngOnInit(): void {
        return;
    }
}
