export const CartService = {
    async addToCart(productId: string, quantity: number) {
        // Simulate API call
        return { success: true, message: "Added to cart" };
    },

    async removeFromCart(productId: string) {
        // Simulate API call
        return { success: true, message: "Removed from cart" };
    },

    async updateQuantity(productId: string, quantity: number) {
        // Simulate
        return { success: true };
    },

    async getCart() {
        // Return current cart state from server
        return { items: [], total: 0 };
    }
};
