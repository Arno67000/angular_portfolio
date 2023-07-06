import { Component, Input, OnInit } from "@angular/core";
import { Dev } from "../../models/dev";

@Component({
    selector: "app-references",
    templateUrl: "./references.component.html",
    styleUrls: ["./references.component.scss"],
})
export class ReferencesComponent implements OnInit {
    @Input() references: Dev["references"] = [];
    constructor() {}

    ngOnInit(): void {
        return;
    }
}
