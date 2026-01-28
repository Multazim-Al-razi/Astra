// Placeholder for Medusa JS Client
// import Medusa from "@medusajs/medusa-js";

const BACKEND_URL = process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL || "http://localhost:9000";

// export const medusa = new Medusa({ baseUrl: BACKEND_URL, maxRetries: 3 });

export const MedusaAdapter = {
    // Mock methods mirroring Medusa SDK
    products: {
        list: async () => {
            console.log("Fetching products from Medusa (Mock)...");
            return { products: [] };
        },
        retrieve: async (id: string) => {
            console.log(`Fetching product ${id} from Medusa (Mock)...`);
            return { product: null };
        }
    },
    carts: {
        create: async () => {
            return { cart: { id: "cart_123" } };
        }
    }
}
