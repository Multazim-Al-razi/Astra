"use client";

import { useState } from "react";
import { Star, Truck, Shield, ArrowRightLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PriceLabel } from "@/components/ui/price-label";
import { ColorSwatch } from "@/components/ui/color-swatch";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

interface ProductInfoProps {
    product: any; // Using any for mock, should be proper Product type
}

export function ProductInfo({ product }: ProductInfoProps) {
    const [selectedColor, setSelectedColor] = useState("Phantom Black");
    const [selectedStorage, setSelectedStorage] = useState("256GB");
    const [quantity, setQuantity] = useState(1);
    const { addItem } = useCart();

    const handleAddToCart = () => {
        addItem(product, quantity);
        toast.success(`Added ${quantity} ${product.title} to cart`);
    };

    return (
        <div className="flex flex-col gap-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-foreground">{product.title}</h1>

                <div className="mt-2 flex items-center gap-4">
                    <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <span className="font-medium">{product.rating}</span>
                        <span className="text-muted-foreground">({product.reviewsCount} reviews)</span>
                    </div>
                    {product.inStock ? (
                        <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">In Stock</Badge>
                    ) : (
                        <Badge variant="destructive">Out of Stock</Badge>
                    )}
                </div>
            </div>

            <div className="flex items-end gap-4">
                <PriceLabel price={product.price} originalPrice={product.originalPrice} size="xl" />
            </div>

            <Separator />

            {/* Mock Attributes */}
            <div className="space-y-4">
                <div className="space-y-2">
                    <span className="font-medium text-sm">Color: {selectedColor}</span>
                    <div className="flex flex-wrap gap-2">
                        <ColorSwatch
                            color="#1a1a1a"
                            label="Phantom Black"
                            selected={selectedColor === "Phantom Black"}
                            onClick={() => setSelectedColor("Phantom Black")}
                        />
                        <ColorSwatch
                            color="#f5f5f5"
                            label="Glacier White"
                            selected={selectedColor === "Glacier White"}
                            onClick={() => setSelectedColor("Glacier White")}
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <span className="font-medium text-sm">Storage: {selectedStorage}</span>
                    <div className="flex flex-wrap gap-2">
                        {["128GB", "256GB", "512GB"].map(size => (
                            <Button
                                key={size}
                                variant={selectedStorage === size ? "default" : "outline"}
                                size="sm"
                                onClick={() => setSelectedStorage(size)}
                            >
                                {size}
                            </Button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex gap-4 pt-4">
                <div className="flex items-center border rounded-md">
                    <Button variant="ghost" size="icon" className="h-10 w-10 rounded-none" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</Button>
                    <div className="w-10 text-center font-medium">{quantity}</div>
                    <Button variant="ghost" size="icon" className="h-10 w-10 rounded-none" onClick={() => setQuantity(quantity + 1)}>+</Button>
                </div>
                <Button size="lg" className="flex-1" onClick={handleAddToCart}>
                    Add to Cart
                </Button>
            </div>

            <Separator />

            <div className="grid grid-cols-1 gap-4 text-sm text-muted-foreground sm:grid-cols-2">
                <div className="flex items-center gap-2">
                    <Truck className="h-4 w-4" />
                    <span>Free Delivery in Dhaka</span>
                </div>
                <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    <span>1 Year Official Warranty</span>
                </div>
                <div className="flex items-center gap-2">
                    <ArrowRightLeft className="h-4 w-4" />
                    <span>7 Days Return Policy</span>
                </div>
            </div>
        </div>
    );
}
