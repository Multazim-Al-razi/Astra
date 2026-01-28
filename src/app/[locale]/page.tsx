import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { HeroCarousel } from '@/components/home/HeroCarousel';
import { CategoryTiles } from '@/components/home/CategoryTiles';
import { PromoStrip } from '@/components/home/PromoStrip';
import { ProductCard } from '@/components/product/ProductCard';
import { BrandCarousel } from '@/components/home/BrandCarousel';
import { NewsletterSection } from '@/components/marketing/NewsletterSection';
import { PromoModal } from '@/components/marketing/PromoModal';
import { mockProducts } from '@/lib/mock-data';

export default function HomePage() {
    const t = useTranslations('HomePage');

    // Filter for various sections
    const newArrivals = mockProducts.filter(p => p.isNew).slice(0, 4);
    const featured = mockProducts.slice(0, 4); // Just taking first 4 for now

    return (
        <div className="flex flex-col gap-8 pb-10">
            <HeroCarousel />

            <PromoStrip />

            <CategoryTiles />

            {/* New Arrivals Section */}
            <section className="container mx-auto px-4 md:px-6">
                <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-2xl font-bold tracking-tight md:text-3xl">New Arrivals</h2>
                    <Link href="/new-arrivals" className="text-sm font-medium text-primary hover:underline">View All</Link>
                </div>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    {newArrivals.map(product => (
                        <ProductCard
                            key={product.id}
                            {...product}
                        />
                    ))}
                </div>
            </section>

            <BrandCarousel />

            {/* Featured / Trending Section */}
            <section className="container mx-auto px-4 md:px-6">
                <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Trending Gadgets</h2>
                    <Link href="/trending" className="text-sm font-medium text-primary hover:underline">View All</Link>
                </div>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    {featured.map(product => (
                        <ProductCard
                            key={product.id}
                            {...product}
                        />
                    ))}
                </div>
            </section>
            <NewsletterSection />
            <PromoModal />
        </div>
    );
}
