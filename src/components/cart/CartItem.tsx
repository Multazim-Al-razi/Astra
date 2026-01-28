"use client";

import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartItem as CartItemType } from "@/types/product";
import { useCart } from "@/context/CartContext";
import { PriceLabel } from "@/components/ui/price-label";

interface CartItemProps {
    item: CartItemType;
    compact?: boolean; // For drawer/sheet view
}

export function CartItem({ item, compact = false }: CartItemProps) {
    const { updateQuantity, removeItem } = useCart();

    return (
        <div className={`flex gap-4 ${compact ? "py-4" : "py-6 border-b last:border-0"}`}>
            <div className={`relative overflow-hidden rounded-md border flex-none ${compact ? "h-20 w-20" : "h-24 w-24 md:h-32 md:w-32"}`}>
                <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                />
            </div>

            <div className="flex flex-1 flex-col justify-between">
                <div className="flex justify-between gap-2">
                    <div>
                        <h4 className={`font-medium ${compact ? "text-sm line-clamp-2" : "text-base md:text-lg"}`}>
                            {item.title}
                        </h4>
                        {/* Variant/Attribute display could go here */}
                    </div>
                    {!compact && <PriceLabel price={item.price * item.quantity} size="lg" />}
                </div>

                <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center border rounded-md">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 rounded-none"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                            <Minus className="h-3 w-3" />
                        </Button>
                        <div className="w-8 text-center text-sm font-medium">{item.quantity}</div>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 rounded-none"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                            <Plus className="h-3 w-3" />
                        </Button>
                    </div>

                    <div className="flex items-center gap-4">
                        {compact && <PriceLabel price={item.price * item.quantity} size="sm" />}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-muted-foreground hover:text-destructive"
                            onClick={() => removeItem(item.id)}
                        >
                            <Trash2 className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
