export class Dev {
    public firstname: string;
    public lastname: string;
    public job: string;
    public technos: { icon: string; title: string; tag: string }[];
    public address: { nb: number; street: string; zipCode: number; city: string; country: string; locality?: string };
    public mail: string;
    public phone: { fr: string; global: string };
    public linkedin: string;
    public github: string;
    public portfolio: string;

    constructor() {
        // BASICS
        this.firstname = "Arnaud";
        this.lastname = "Stutz";
        this.address = {
            nb: 117,
            street: "rue de la Salette",
            locality: "Le Marillais",
            zipCode: 49410,
            city: "Mauges-sur-Loire",
            country: "France",
        };
        this.mail = "stutz.arnaud@gmail.com";
        this.phone = { fr: "06 26 05 25 47", global: "+33626052547" };
        // JOB INFO
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
        // LINKS
        this.linkedin = "www.linkedin.com/in/arnaud-stutz";
        this.github = "github.com/Arno67000";
        this.portfolio = "arno67000.github.io";
    }
}
