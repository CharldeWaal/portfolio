import { Satisfy, Inter } from "next/font/google";

export const satisfy = Satisfy({
    weight: "400",
    subsets: ['latin']
})

export const inter = Inter({
    weight: ['100', '200', '300', '400', '500', '600'],
    subsets: ['latin']
})