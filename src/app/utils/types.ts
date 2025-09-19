interface authorDetails {
    username: string,
    email: string,
    phoneNumber: number,
}

export type Product = {
    id: number;
    img: string,
    name: string;
    desc: string;
    price: number,
    status: "New"|"Renewed"|"Used"
    date: string;
    authorData: authorDetails[];
};