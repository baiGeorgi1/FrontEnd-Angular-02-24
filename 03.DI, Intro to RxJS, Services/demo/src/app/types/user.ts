export interface User {
    name: string;
}

export interface Geo {
    lat: string;
    lng: string;
}
export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}
export interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}
export interface User2 {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}
export interface JsonPlaceHolder extends User2 {
    address: Address;
    phone: string;
    company: Company;
}
