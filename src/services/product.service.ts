import { mockProducts, mockCategories, mockBrands } from "@/lib/mock-data";
import { Product } from "@/types/product";

export const ProductService = {
    async getProducts(delay = 500): Promise<Product[]> {
        await new Promise((resolve) => setTimeout(resolve, delay));
        return mockProducts;
    },

    async getProductBySlug(slug: string): Promise<Product | undefined> {
        await new Promise((resolve) => setTimeout(resolve, 300));
        return mockProducts.find((p) => p.slug === slug);
    },

    async getCategories() {
        return mockCategories;
    },

    async getBrands() {
        return mockBrands;
    },

    async getFeaturedProducts(): Promise<Product[]> {
        return mockProducts.slice(0, 4);
    },

    async getNewArrivals(): Promise<Product[]> {
        return mockProducts.filter(p => p.isNew).slice(0, 4);
    }
};
