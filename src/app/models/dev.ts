export class Dev {
    public firstname: string;
    public lastname: string;
    public job: string;
    public technos: { icon: string; title: string; tag: string }[];

    constructor() {
        this.firstname = "Arnaud";
        this.lastname = "Stutz";
        this.job = "Software Developer";
        this.technos = [
            { icon: "fab fa-js-square", title: "Javascript / Typescript", tag: "TS" },
            { icon: "fab fa-node-js", title: "NodeJs", tag: "NODE" },
            { icon: "fas fa-database", title: "DB SQL & NoSQL", tag: "DB" },
            { icon: "fab fa-git-square", title: "Git / GitHub", tag: "Git" },
            { icon: "fa-brands fa-rust", title: "Rust", tag: "RS" },
            { icon: "fa-brands fa-docker", title: "Docker", tag: "DOCK" },
            { icon: "fas fa-terminal", title: "Bash", tag: "SH" },
            { icon: "fab fa-angular", title: "Angular", tag: "A" },
        ];
    }
}
