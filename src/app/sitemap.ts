import { MetadataRoute } from 'next';
import { mockProducts } from '@/lib/mock-data';

const BASE_URL = 'https://astrabyte.demo'; // Replace with actual domain

export default function sitemap(): MetadataRoute.Sitemap {
    const products = mockProducts.map((product) => ({
        url: `${BASE_URL}/product/${product.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    return [
        {
            url: BASE_URL,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${BASE_URL}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: `${BASE_URL}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        ...products,
    ];
}
