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