export class Dev {
    public firstname: string;
    public lastname: string;
    public job: string;
    public technos: { icon: string; title: string; tag: string; level: number }[];
    public address: { nb: number; street: string; zipCode: number; city: string; country: string; locality?: string };
    public mail: string;
    public phone: { fr: string; global: string };
    public linkedin: string;
    public github: string;
    public portfolio: string;
    public langages: { title: string; level: number }[];
    public interests: { icon: string; title: string }[];
    public softSkills: string[];
    public education: { title: string; date: string; description: string }[];
    public references: { society: string; name: string; job: string; tel: string; globalTel: string; mail: string }[];
    public traits: string[];
    public xp: { job: string; name: string; description: string[]; date: string }[];
    public studies: { date: string; name: string; description: string }[];
    public projects: {
        access?: string;
        access_icon?: string;
        demo?: string;
        title: string;
        techno: string;
        description: string;
        github: string;
        icon: string;
        picture: string;
        picture_description: string;
    }[];

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
        this.interests = [
            { icon: "fas fa-music", title: "Musique" },
            { icon: "fas fa-laptop", title: "Informatique" },
            { icon: "fas fa-hiking", title: "Rando" },
            { icon: "fas fa-gamepad", title: "Jeux vidéos" },
            { icon: "fas fa-book", title: "Lecture" },
        ];
        this.softSkills = ["Bonne capacité d'adaptation", "Bonne gestion du stress", "Autonome", "Organisé", "Curieux"];
        this.education = [
            {
                title: "Développeur web, RNCP32173, Niveau 5 (BAC+2)",
                date: "Août 2020 / Février 2021",
                description:
                    "Programmation, intégration, création de pages web, mise en place d'applications et d'API sécurisées, gestion de bases de données(SQL et NoSql), SEO et accessibilité.",
            },
            {
                title: "DAEU B",
                date: "2020",
                description: "Equivalence du BAC-S à l'UFR-MIM de Metz.",
            },
        ];
        this.traits = [
            "Développeur motivé avec une forte appétence pour le backend et un enthousiasme affirmé pour le testing.",
            "Constamment à la recherche d'un nouveau défi technique.",
            "Passionné par les nouvelles technologies et stimulé par la difficulté.",
        ];
        this.studies = [
            {
                name: "Développeur web, RNCP32173, Niveau 5 (BAC+2)",
                date: "Août 2020 / Février 2021,",
                description:
                    "Programmation, intégration, création de pages web et d'API sécurisées, gestion de bases de données, SEO et accessibilité.",
            },
            {
                name: "DAEU B (équivalence BAC-S)",
                date: "2020,",
                description: "Equivalence du BAC-S à l'UFR-MIM de Metz.",
            },
        ];
        // JOB INFO
        this.job = "Software Developer";
        this.technos = [
            { icon: "fab fa-js-square", title: "Javascript / Typescript", tag: "Typescript/Js", level: 85 },
            { icon: "fab fa-node-js", title: "NodeJs", tag: "NodeJs", level: 85 },
            { icon: "fas fa-database", title: "DB SQL & NoSQL", tag: "SQL", level: 75 },
            { icon: "fab fa-git-square", title: "Git / GitHub", tag: "Git", level: 83 },
            { icon: "fa-brands fa-rust", title: "Rust", tag: "Rust", level: 65 },
            { icon: "fa-brands fa-docker", title: "Docker", tag: "Docker", level: 65 },
            { icon: "fas fa-terminal", title: "Bash", tag: "BASH", level: 65 },
            { icon: "fab fa-angular", title: "Angular", tag: "Angular", level: 75 },
        ];
        this.langages = [
            { title: "Français", level: 100 },
            { title: "Anglais", level: 83 },
        ];
        this.references = [
            {
                society: "NEOMANIS",
                name: "Morineau David",
                job: "LeadDev",
                tel: "06 72 70 53 50",
                globalTel: "+33672705350",
                mail: "david.morineau@free.fr",
            },
            {
                society: "NEOMANIS",
                name: "Aulagne Nicolas",
                job: "COO/RH",
                tel: "06 70 83 58 04",
                globalTel: "+33670835804",
                mail: "nicolas@aulagne.fr",
            },
        ];
        this.xp = [
            {
                job: "Développeur backend",
                name: "NEOMANIS",
                date: "2021-2023",
                description: [
                    "Construction d'une solution en |architecture micro-service| visant à |automatiser la résolution de pannes| dans le domaine du support.",
                    "Sécurisation des communications entre les services par |mTLS|.",
                    "Récupération et gestion des utilisateurs depuis un |proxy LDAP| gérant plusieurs annuaires simultanément.",
                    "Création d'un service de |diagnostique| capable de déclencher des scripts sur un ordinateur cible.",
                    "Développement d'un service automatisant l'exécution de |livres de résolution de pannes| et capable d'établir et de stocker des diagnostiques formatés.",
                    "Création d'une |application desktop| avec |Tauri| (RUST, React) pour un contact direct avec l'utilisateur.",
                    "Gestion de la |prise en main à distance du terminal| d'un utilisateur par |web-sockets| (WSS).",
                    "Mise en place et gestion du contrôle à distance via |RustDesk| (VNC).",
                    "Développement d'une |API| spécialisée dans la gestion de tickets d'incident sur plusieurs |ITSM| différents.",
                    "Déploiement des services en conteneur sur |Docker|.",
                    "Suivi de l'évolution des différentes |bases de données| (SQL/Mongo) et mise en place de |migrations|.",
                    "Développement en méthode |agile| avec l'accent sur le |pair-programming| et l'entraide au sein de l'équipe.",
                    "Mise en place d'une |couverture de test| complète sur les différents services |backend|.",
                ],
            },
        ];
        // LINKS
        this.linkedin = "www.linkedin.com/in/arnaud-stutz";
        this.github = "github.com/Arno67000";
        this.portfolio = "arno67000.github.io";
        //PROJECTS
        this.projects = [
            {
                title: "Le Pendu",
                description:
                    "Création du jeu du pendu (VF), responsive design et animations avec sass, database intégrée (+ de 39K mots de huit lettres)",
                techno: "Typescript/Js",
                icon: "fab fa-js-square",
                picture: "assets/img/pendu.jpg",
                picture_description: "screenshot of the base game",
                github: "https://github.com/Arno67000/LePendu05_2021",
                access: "https://arno67000.github.io/offSite/LePendu/index.html",
                access_icon: "fas fa-gamepad",
            },
            {
                title: "Viral Clicker",
                description:
                    "Jeu de survie, plus le temps passe plus le virus envahit la ville, clickez sur les virus pour les détruire tous. Jeu développé entièrement en Typescript, servi avec Parcel, sauvegarde des scores dans le LocalStorage.",
                techno: "Typescript/Js",
                icon: "fab fa-js-square",
                picture: "assets/img/virus.png",
                picture_description: "screenshot of the game",
                github: "https://github.com/Arno67000/virus_game",
                demo: "assets/videos/virus.mp4",
            },
            {
                title: "Git CLI Rust",
                description:
                    "Un petit utilitaire construit en RUST permettant d'explorer les branches locales d'un repo git et d'effectuer des actions basiques. Il permet, pour l'instant, de connaître le nombre de branches présentes, de savoir où se trouve la HEAD, de voir le dernier commit d'une branche et de supprimer la branche.",
                techno: "Rust",
                icon: "fa-brands fa-rust",
                picture: "assets/img/git-handler.png",
                picture_description: "screenshot of the program source code",
                github: "https://github.com/Arno67000/Git_CLI_Rust",
                demo: "assets/videos/git_tool_video.mp4",
            },
        ];
    }
}
