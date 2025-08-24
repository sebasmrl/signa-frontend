export interface Brand{
    id: number;
    owner:string;
    brand:string;
    state: boolean
}

export interface CreateOrUpdateBrandDto{
    owner:string;
    brand:string;
    state?: boolean
}

export interface DeleteBrandResponse{
    msg:string
}