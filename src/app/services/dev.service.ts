import { Injectable } from "@angular/core";
import { Dev } from "../models/dev";
import { Subject } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class DevService {
    private dev = new Dev();

    devSubject = new Subject<Dev>();

    constructor() {}

    emit() {
        this.devSubject.next(this.dev);
    }
}
