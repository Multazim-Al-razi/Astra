export interface Product {
    id: string;
    title: string;
    slug: string;
    brand: string;
    price: number;
    originalPrice?: number;
    rating: number;
    reviewsCount: number;
    image: string;
    images?: string[];
    currency: string;
    inStock: boolean;
    isNew?: boolean;
    attributes?: Record<string, string>;
    description?: string;
    specs?: [string, string][];
}

export interface Category {
    id: string;
    title: string;
    slug: string;
    icon: string;
}

export interface CartItem {
    id: string;
    productId: string;
    variantId?: string;
    title: string;
    price: number;
    quantity: number;
    image: string;
}

export interface Cart {
    items: CartItem[];
    subtotal: number;
    total: number;
    currency: string;
}
