'use client';

import { apiClient } from "@/config/axios-client.config";
import { DeleteBrandResponse } from "@/interfaces/brand.interface";
import { AxiosError, AxiosResponse } from "axios";

export const deleteBrandClientAction = async(id:number)=>{
    let rs: AxiosResponse<DeleteBrandResponse>;
    try {
        rs = await apiClient.instance.delete(`/brands/${id}`);
        return rs;
    } catch (e) {
        return (e as AxiosError).response as AxiosResponse
    }
}