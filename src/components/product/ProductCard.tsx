"use client";

import Link from "next/link";
import Image from "next/image";
import { Eye, ShoppingCart, Star, ArrowRightLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { PriceLabel } from "@/components/ui/price-label";
import { QuickViewModal } from "@/components/product/QuickViewModal";
import { useComparison } from "@/components/product/ComparisonModal";

interface ProductCardProps {
    id: string;
    title: string;
    brand: string;
    price: number;
    originalPrice?: number;
    rating: number;
    reviewsCount: number;
    image: string;
    slug: string;
    inStock: boolean;
    isNew?: boolean;
    onAddToCart?: () => void;
    onQuickView?: () => void;
}

export function ProductCard({
    id,
    title,
    brand,
    price,
    originalPrice,
    rating,
    reviewsCount,
    image,
    slug,
    inStock,
    isNew,
    onAddToCart,
    onQuickView,
}: ProductCardProps) {
    const { addItem } = useComparison();

    const handleCompare = (e: React.MouseEvent) => {
        e.preventDefault();
        addItem({ id, title, brand, price, originalPrice, rating, reviewsCount, image, slug, inStock, isNew, currency: "BDT" });
    };

    return (
        <Card className="group relative overflow-hidden transition-all hover:shadow-lg">
            <div className="absolute left-2 top-2 z-10 flex flex-col gap-1">
                {isNew && <Badge className="bg-primary text-primary-foreground">New</Badge>}
                {originalPrice && originalPrice > price && (
                    <Badge variant="destructive">
                        {Math.round(((originalPrice - price) / originalPrice) * 100)}% OFF
                    </Badge>
                )}
            </div>

            <CardHeader className="p-0">
                <Link href={`/product/${slug}`} className="relative block aspect-[4/5] overflow-hidden bg-muted">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    />
                    {/* Quick Actions Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 translate-y-full px-4 pb-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hidden md:flex items-center gap-2 justify-center" onClick={(e) => e.preventDefault()}>
                        <QuickViewModal
                            product={{
                                id: id || "0",
                                title, brand, price, originalPrice, rating, reviewsCount, image, slug, inStock, isNew, currency: "BDT"
                            }}
                        />
                        <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white" title="Compare" onClick={handleCompare}>
                            <ArrowRightLeft className="h-4 w-4" />
                        </Button>
                    </div>
                </Link>
            </CardHeader>
            <CardContent className="p-4">
                <div className="mb-1 text-xs text-muted-foreground">{brand}</div>
                <Link href={`/product/${slug}`} className="block">
                    <h3 className="line-clamp-2 text-sm font-medium hover:text-primary min-h-[40px]">
                        {title}
                    </h3>
                </Link>
                <div className="mt-2 flex items-center gap-1">
                    <Star className="h-3 w-3 fill-primary text-primary" />
                    <span className="text-xs font-medium">{rating}</span>
                    <span className="text-xs text-muted-foreground">({reviewsCount})</span>
                </div>
                <div className="mt-2">
                    <PriceLabel price={price} originalPrice={originalPrice} size="lg" />
                </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
                <Button
                    className="w-full"
                    variant={inStock ? "default" : "secondary"}
                    disabled={!inStock}
                    onClick={onAddToCart}
                >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    {inStock ? "Add with Cart" : "Out of Stock"}
                </Button>
            </CardFooter>
        </Card>
    );
}
