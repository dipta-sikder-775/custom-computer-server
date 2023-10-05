export interface IProduct {
    _id?:string;
    image:string;
    productName: string;
    category:string;
    price:number;
    status: "In Stock" | "Out of Stock";
    rating?: number;
    description: string;
    keyFeatures: {
        brand?: string;
        model?: string;
        specification?: string;
        sockettype?: string;
        tdp?: string;
        type?: string;
        ramSlots?: string;
        
    },
    indivisualRating?: number;
        averageRating?: number;
        reviews?: [{
            rating: number;
            comment: string;
        }]
}