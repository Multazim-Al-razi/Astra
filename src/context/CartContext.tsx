"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { CartItem, Product } from "@/types/product";
import { toast } from "sonner"; // Assuming sonner is installed or will be, otherwise console

interface CartContextType {
    items: CartItem[];
    addItem: (product: Product, quantity?: number, variantId?: string) => void;
    removeItem: (itemId: string) => void;
    updateQuantity: (itemId: string, quantity: number) => void;
    clearCart: () => void;
    subtotal: number;
    totalItems: number;
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    // Load from local storage
    useEffect(() => {
        setIsMounted(true);
        const savedCart = localStorage.getItem("astra-cart");
        if (savedCart) {
            try {
                setItems(JSON.parse(savedCart));
            } catch (e) {
                console.error("Failed to parse cart", e);
            }
        }
    }, []);

    // Save to local storage
    useEffect(() => {
        if (isMounted) {
            localStorage.setItem("astra-cart", JSON.stringify(items));
        }
    }, [items, isMounted]);

    const addItem = (product: Product, quantity = 1, variantId?: string) => {
        setItems((prev) => {
            const existing = prev.find((item) => item.productId === product.id);
            if (existing) {
                return prev.map((item) =>
                    item.productId === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }
            return [
                ...prev,
                {
                    id: `${product.id}-${Date.now()}`, // Simple ID generation
                    productId: product.id,
                    title: product.title,
                    price: product.price, // Should handle sale price logic here if needed
                    image: product.image,
                    quantity,
                    variantId,
                },
            ];
        });
        setIsOpen(true);
    };

    const removeItem = (itemId: string) => {
        setItems((prev) => prev.filter((item) => item.id !== itemId));
    };

    const updateQuantity = (itemId: string, quantity: number) => {
        if (quantity < 1) return;
        setItems((prev) =>
            prev.map((item) => (item.id === itemId ? { ...item, quantity } : item))
        );
    };

    const clearCart = () => {
        setItems([]);
    };

    const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
    const totalItems = items.reduce((total, item) => total + item.quantity, 0);

    return (
        <CartContext.Provider
            value={{
                items,
                addItem,
                removeItem,
                updateQuantity,
                clearCart,
                subtotal,
                totalItems,
                isOpen,
                setIsOpen,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};
