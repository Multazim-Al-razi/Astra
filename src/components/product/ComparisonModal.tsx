"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { X, Plus, ArrowRightLeft } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";

// comparison store
interface ComparisonStore {
    isOpen: boolean;
    items: Product[];
    addItem: (product: Product) => void;
    removeItem: (productId: string) => void;
    clear: () => void;
    setIsOpen: (isOpen: boolean) => void;
}

export const useComparison = create<ComparisonStore>()(
    persist(
        (set, get) => ({
            isOpen: false,
            items: [],
            addItem: (product) => {
                const { items } = get();
                if (items.find(i => i.id === product.id)) {
                    toast.info("Product already in comparison");
                    return;
                }
                if (items.length >= 3) {
                    toast.warning("You can compare up to 3 products");
                    return;
                }
                set({ items: [...items, product], isOpen: true });
                toast.success("Added to comparison");
            },
            removeItem: (productId) => {
                set({ items: get().items.filter(i => i.id !== productId) });
            },
            clear: () => set({ items: [] }),
            setIsOpen: (isOpen) => set({ isOpen }),
        }),
        {
            name: 'comparison-storage',
        }
    )
);

export function ComparisonModal() {
    const { isOpen, setIsOpen, items, removeItem } = useComparison();

    if (!isOpen) return null;

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Compare Products</DialogTitle>
                </DialogHeader>

                {items.length === 0 ? (
                    <div className="text-center py-12 text-muted-foreground">
                        No items to compare.
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 overflow-x-auto">
                        {items.map(product => (
                            <div key={product.id} className="border rounded-lg p-4 relative flex flex-col h-full">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="absolute top-2 right-2 z-10"
                                    onClick={() => removeItem(product.id)}
                                >
                                    <X className="h-4 w-4" />
                                </Button>
                                <div className="relative aspect-square mb-4 bg-muted rounded-md overflow-hidden">
                                    <Image src={product.image} alt={product.title} fill className="object-cover" />
                                </div>
                                <h3 className="font-semibold mb-2 line-clamp-2 min-h-[48px]">{product.title}</h3>
                                <p className="text-lg font-bold text-primary mb-4">৳ {product.price.toLocaleString()}</p>

                                <div className="space-y-2 text-sm flex-1">
                                    <div className="grid grid-cols-2 gap-2 border-t pt-2">
                                        <span className="text-muted-foreground">Brand</span>
                                        <span className="font-medium text-right">{product.brand}</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2 border-t pt-2">
                                        <span className="text-muted-foreground">Rating</span>
                                        <span className="font-medium text-right">{product.rating}/5</span>
                                    </div>
                                    {/* Mock Specs Comparison */}
                                    <div className="grid grid-cols-2 gap-2 border-t pt-2">
                                        <span className="text-muted-foreground">Availability</span>
                                        <span className="font-medium text-right">{product.inStock ? "In Stock" : "Out of Stock"}</span>
                                    </div>
                                </div>
                                <Button className="w-full mt-4" asChild>
                                    <a href={`/product/${product.slug}`}>View Details</a>
                                </Button>
                            </div>
                        ))}
                        {items.length < 3 && (
                            <div className="border border-dashed rounded-lg p-4 flex flex-col items-center justify-center text-muted-foreground bg-muted/20 min-h-[300px]">
                                <Plus className="h-8 w-8 mb-2 opacity-50" />
                                <p>Add item</p>
                            </div>
                        )}
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
}
