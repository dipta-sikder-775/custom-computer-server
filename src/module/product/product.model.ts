import { Schema, model } from "mongoose";
import { IProduct } from "./product.interface";

const productSchema = new Schema<IProduct>({
    image: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ["In Stock", "Out of Stock"],
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    keyFeatures: {
        brand: {
            type: String,
        },
        model: {
            type: String,
        },
        specification: {
            type: String,
        },
        sockettype: {
            type: String,
        },
        tdp: {
            type: String,
        },
        type: {
            type: String,
        },
        ramSlots: {
            type: String,
        },
    },
    indivisualRating: {
        type: Number,
    },
    averageRating: {
        type: Number,
    },
    reviews: [
        {
            rating: {
                type: Number,
            },
            comment: {
                type: String
            }
        }
    ]
}, { timestamps: true })

export const Product = model<IProduct>('Product', productSchema)