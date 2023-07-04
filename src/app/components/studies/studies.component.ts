import { Component, Input, OnInit } from "@angular/core";
import { Dev } from "../../models/dev";

@Component({
    selector: "app-studies",
    templateUrl: "./studies.component.html",
    styleUrls: ["./studies.component.scss"],
})
export class StudiesComponent implements OnInit {
    @Input() studies: Dev["studies"] = [];
    constructor() {}

    ngOnInit(): void {
        return;
    }
}
