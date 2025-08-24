'use client';

import { apiClient } from "@/config/axios-client.config";
import { Brand, CreateBrandDto } from "@/interfaces/brand.interface";
import { AxiosError, AxiosResponse } from "axios";

export const createBrandClientAction = async(brand:CreateBrandDto)=>{
    let rs: AxiosResponse<Brand>;
    try {
        rs = await apiClient.instance.post(`/brands`, brand);
        return rs;
    } catch (e) {
        return (e as AxiosError).response as AxiosResponse
    }
}