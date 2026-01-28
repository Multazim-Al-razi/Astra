"use client";

import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetFooter,
    SheetClose
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/context/CartContext";
import { CartItem } from "./CartItem";
import { PriceLabel } from "@/components/ui/price-label";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export function CartSidebar() {
    const { items, subtotal, totalItems, isOpen, setIsOpen } = useCart();

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                    <ShoppingCart className="h-5 w-5" />
                    <span className="sr-only">Open Cart</span>
                    {totalItems > 0 && (
                        <Badge variant="destructive" className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center rounded-full p-0 text-[10px]">
                            {totalItems}
                        </Badge>
                    )}
                </Button>
            </SheetTrigger>
            <SheetContent className="flex w-full flex-col pr-0 sm:max-w-md">
                <SheetHeader className="px-1">
                    <SheetTitle>Shopping Cart ({totalItems})</SheetTitle>
                </SheetHeader>
                <Separator className="my-4" />

                {items.length === 0 ? (
                    <div className="flex h-full flex-col items-center justify-center space-y-2 p-8 text-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                            <ShoppingCart className="h-8 w-8 text-muted-foreground" />
                        </div>
                        <h3 className="font-semibold text-lg">Your cart is empty</h3>
                        <p className="text-muted-foreground text-sm">Looks like you haven't added anything to your cart yet.</p>
                        <SheetClose asChild>
                            <Button className="mt-4" variant="outline">Continue Shopping</Button>
                        </SheetClose>
                    </div>
                ) : (
                    <>
                        <ScrollArea className="flex-1 pr-4">
                            <div className="flex flex-col gap-0">
                                {items.map((item) => (
                                    <CartItem key={item.id} item={item} compact />
                                ))}
                            </div>
                        </ScrollArea>
                        <div className="space-y-4 pr-6 pt-4 pb-4">
                            <Separator />
                            <div className="flex items-center justify-between text-base font-medium">
                                <span>Subtotal</span>
                                <PriceLabel price={subtotal} />
                            </div>
                            <p className="text-xs text-muted-foreground">
                                Shipping and taxes calculated at checkout.
                            </p>
                            <div className="grid gap-2">
                                <SheetClose asChild>
                                    <Link href="/checkout">
                                        <Button className="w-full">Checkout</Button>
                                    </Link>
                                </SheetClose>
                                <SheetClose asChild>
                                    <Link href="/cart">
                                        <Button variant="outline" className="w-full">View Cart</Button>
                                    </Link>
                                </SheetClose>
                            </div>
                        </div>
                    </>
                )}
            </SheetContent>
        </Sheet>
    );
}
