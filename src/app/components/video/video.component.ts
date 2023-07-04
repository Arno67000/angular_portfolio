import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
    selector: "app-video",
    templateUrl: "./video.component.html",
    styleUrls: ["./video.component.scss"],
})
export class VideoComponent implements OnInit {
    public data: { video: string };

    constructor(@Inject(MAT_DIALOG_DATA) data: { video: string }) {
        this.data = data;
    }

    ngOnInit(): void {
        return;
    }
}
