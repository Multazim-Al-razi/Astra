import { Product } from "@/types/product";

export const mockProducts: Product[] = [
    {
        id: "prod_01",
        title: "Astrabyte XPhone 5 Pro",
        slug: "astrabyte-xphone-5-pro",
        brand: "Astrabyte",
        price: 45999,
        originalPrice: 49999,
        rating: 4.8,
        reviewsCount: 124,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff70?q=80&w=600&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1598327105666-5b89351aff70?q=80&w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1621330396173-e41b1cafd17f?q=80&w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?q=80&w=600&auto=format&fit=crop",
        ],
        currency: "BDT",
        inStock: true,
        isNew: true,
        attributes: {
            "Color": "Phantom Black",
            "Storage": "256GB",
            "RAM": "12GB"
        },
        description: "The Astrabyte XPhone 5 Pro redefines mobile performance with its cutting-edge specifications and sleek design. Featuring a stunning OLED display, pro-grade camera system, and all-day battery life, it's built for those who demand the best.",
        specs: [
            ["Display", "6.7-inch Super AMOLED, 120Hz"],
            ["Processor", "Snapdragon 8 Gen 3"],
            ["RAM", "12GB"],
            ["Storage", "256GB / 512GB"],
            ["Battery", "5000mAh, 65W Fast Charging"],
            ["Camera", "108MP Main + 12MP Ultra-wide + 10MP Telephoto"],
            ["OS", "Android 14 with AstraUI"],
        ]
    },
    {
        id: "prod_02",
        title: "Sony WH-1000XM5 Wireless Headphones",
        slug: "sony-wh-1000xm5",
        brand: "Sony",
        price: 38500,
        rating: 4.9,
        reviewsCount: 89,
        image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=600&auto=format&fit=crop",
        currency: "BDT",
        inStock: true,
    },
    {
        id: "prod_03",
        title: "MacBook Air M2 13-inch",
        slug: "macbook-air-m2",
        brand: "Apple",
        price: 135000,
        originalPrice: 145000,
        rating: 4.9,
        reviewsCount: 45,
        image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=600&auto=format&fit=crop",
        currency: "BDT",
        inStock: true,
    },
    {
        id: "prod_04",
        title: "Samsung Galaxy S24 Ultra",
        slug: "samsung-galaxy-s24-ultra",
        brand: "Samsung",
        price: 185000,
        rating: 4.7,
        reviewsCount: 200,
        image: "https://images.unsplash.com/photo-1610945265078-386f3b5893bd?q=80&w=600&auto=format&fit=crop",
        currency: "BDT",
        inStock: false,
    },
    {
        id: "prod_05",
        title: "Logitech MX Master 3S",
        slug: "logitech-mx-master-3s",
        brand: "Logitech",
        price: 12500,
        rating: 4.8,
        reviewsCount: 340,
        image: "https://images.unsplash.com/photo-1615663245857-acda5b2b1518?q=80&w=600&auto=format&fit=crop",
        currency: "BDT",
        inStock: true,
    },
    {
        id: "prod_06",
        title: "Keychron K2 V2 Mechanical Keyboard",
        slug: "keychron-k2-v2",
        brand: "Keychron",
        price: 8500,
        rating: 4.6,
        reviewsCount: 120,
        image: "https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=600&auto=format&fit=crop",
        currency: "BDT",
        inStock: true,
    },
];

export const mockCategories = [
    { id: "cat_01", title: "Smartphones", slug: "smartphones", icon: "Smartphone" },
    { id: "cat_02", title: "Laptops", slug: "laptops", icon: "Laptop" },
    { id: "cat_03", title: "Audio", slug: "audio", icon: "Headphones" },
    { id: "cat_04", title: "Accessories", slug: "accessories", icon: "Watch" },
    { id: "cat_05", title: "Gaming", slug: "gaming", icon: "Gamepad2" },
    { id: "cat_06", title: "Cameras", slug: "cameras", icon: "Camera" },
];

export const mockBrands = [
    { id: "brand_01", name: "Astrabyte", slug: "astrabyte", logo: "https://images.unsplash.com/photo-1598327105666-5b89351aff70?q=80&w=200&auto=format&fit=crop" },
    { id: "brand_02", name: "Sony", slug: "sony", logo: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=200&auto=format&fit=crop" },
    { id: "brand_03", name: "Apple", slug: "apple", logo: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=200&auto=format&fit=crop" },
    { id: "brand_04", name: "Samsung", slug: "samsung", logo: "https://images.unsplash.com/photo-1610945265078-386f3b5893bd?q=80&w=200&auto=format&fit=crop" },
    { id: "brand_05", name: "Logitech", slug: "logitech", logo: "https://images.unsplash.com/photo-1615663245857-acda5b2b1518?q=80&w=200&auto=format&fit=crop" },
    { id: "brand_06", name: "Keychron", slug: "keychron", logo: "https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=200&auto=format&fit=crop" },
];

export const mockCollections = [
    {
        id: "col_01",
        title: "Summer Essentials",
        slug: "summer-essentials",
        image: "https://images.unsplash.com/photo-1498049381145-06f0381571d3?q=80&w=600&auto=format&fit=crop",
        description: "Beat the heat with our cool gadgets."
    },
    {
        id: "col_02",
        title: "Work from Home",
        slug: "work-from-home",
        image: "https://images.unsplash.com/photo-1531297420497-279ca01eb1e5?q=80&w=600&auto=format&fit=crop",
        description: "Upgrade your productivity setup."
    },
    {
        id: "col_03",
        title: "Gaming Gear",
        slug: "gaming-gear",
        image: "https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=600&auto=format&fit=crop",
        description: "Level up your gaming experience."
    },
];

export const heroSlides = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1556656793-02f1f4503bc5?q=80&w=2000&auto=format&fit=crop",
        title: "New Arrivals",
        subtitle: "Check out the latest gadgets from top brands.",
        link: "/new-arrivals",
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1498049381145-06f0381571d3?q=80&w=2000&auto=format&fit=crop",
        title: "Summer Sale",
        subtitle: "Up to 50% off on selected items.",
        link: "/sale",
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1531297420497-279ca01eb1e5?q=80&w=2000&auto=format&fit=crop",
        title: "Best Laptops",
        subtitle: "Power and performance for professionals.",
        link: "/category/laptops",
    },
];
