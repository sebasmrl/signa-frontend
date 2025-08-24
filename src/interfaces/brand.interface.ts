export interface Brand{
    id: number;
    owner:string;
    brand:string;
    state: boolean
}

export interface CreateBrandDto{
    owner:string;
    brand:string;
    state: boolean
}