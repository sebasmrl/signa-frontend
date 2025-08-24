'use client';

import { apiClient } from "@/config/axios-client.config";
import { Brand } from "@/interfaces/brand.interface";
import { AxiosError, AxiosResponse } from "axios";

export const getOneBrandById = async(id:string)=>{
    let rs: AxiosResponse<Brand>;
    try {
        rs = await apiClient.instance.get(`/brands/${id}`);
        return rs;
    } catch (e) {
        return (e as AxiosError).response as AxiosResponse
    }
}