export interface ICustomer {
    id: number,
    name: string
    budget: number,
    budget_spent: number,
    date_of_first_purchase: string
}

export interface IUser {
    firstname: string;
    lastname: string;
    city: string;
    country: string;
}

export interface INavLink {
    name: string;
    navUrl: string;
}

export interface IListResults<T> {
    results: T[];
}
