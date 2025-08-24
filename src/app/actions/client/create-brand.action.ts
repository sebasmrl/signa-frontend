'use client';

import { apiClient } from "@/config/axios-client.config";
import { Brand, CreateOrUpdateBrandDto } from "@/interfaces/brand.interface";
import { AxiosError, AxiosResponse } from "axios";

export const createBrandClientAction = async (brand: CreateOrUpdateBrandDto) => {
    let rs: AxiosResponse<Brand>;
    try {
        rs = await apiClient.instance.post(`/brands`, brand, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return rs;
    } catch (e) {
        console.log({ errorRs: e })
        return (e as AxiosError).response as AxiosResponse
    }
}