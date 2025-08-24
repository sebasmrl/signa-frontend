'use client';

import { apiClient } from "@/config/axios-client.config";
import { Brand } from "@/interfaces/brand.interface";
import { AxiosError, AxiosResponse } from "axios";

export const updateBrandClientAction = async(brand:Brand)=>{
    let rs: AxiosResponse<Brand>;
    try {
        rs = await apiClient.instance.put(`/brands`, brand);
        return rs;
    } catch (e) {
        return (e as AxiosError).response as AxiosResponse
    }
}