export interface Experiences{
    id?: number;
    name: string;
    logourl: string;
    description: string;
    date: string;
}

export interface Credentials{
    email: string;
    password: string;
}

export interface About{
    id: number;
    name: string;
    photoURL: string;
    profession: string;
    description: string;
    city: string;
    country: string;
}

export interface Formation{
    id?: number;
    title: string;
    description: string;
    logoAcademy: string;
    startDate: string;
    endDate: string;
}

export interface Project{
    id?: number;
    imageProject: string;
    title:string;
    description: string;
    url: string;
}

export interface Skill{
    id?: number;
    title: string;
    percentage: number;
}