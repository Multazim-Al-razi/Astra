"use client";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Eye } from "lucide-react";
import Image from "next/image";
import { ProductInfo } from "@/components/product/ProductInfo";
import { Product } from "@/types/product";

interface QuickViewModalProps {
    product: Product;
}

export function QuickViewModal({ product }: QuickViewModalProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="secondary" size="icon" className="h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white" title="Quick View">
                    <Eye className="h-4 w-4" />
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <div className="grid md:grid-cols-2 gap-8 p-4">
                    {/* Simple Image Gallery for QuickView */}
                    <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
                        <Image
                            src={product.image}
                            alt={product.title}
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Product Info */}
                    <div className="flex flex-col h-full">
                        <ProductInfo product={product} />
                        <div className="mt-auto pt-4 text-center">
                            <a href={`/product/${product.slug}`} className="text-sm text-primary hover:underline">
                                View Full Details
                            </a>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
