import Link from 'next/link';
import { Home, Search, ShoppingCart, User, Grid } from 'lucide-react';

export function MobileNav() {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 flex h-16 items-center justify-around border-t bg-background px-4 md:hidden">
            <Link href="/" className="flex flex-col items-center gap-1 text-xs text-muted-foreground hover:text-primary">
                <Home className="h-5 w-5" />
                <span>Home</span>
            </Link>
            <Link href="/categories" className="flex flex-col items-center gap-1 text-xs text-muted-foreground hover:text-primary">
                <Grid className="h-5 w-5" />
                <span>Category</span>
            </Link>
            <Link href="/search" className="flex flex-col items-center gap-1 text-xs text-muted-foreground hover:text-primary">
                <Search className="h-5 w-5" />
                <span>Search</span>
            </Link>
            <Link href="/cart" className="relative flex flex-col items-center gap-1 text-xs text-muted-foreground hover:text-primary">
                <ShoppingCart className="h-5 w-5" />
                <span>Cart</span>
                <span className="absolute top-0 right-3 flex h-3 w-3 items-center justify-center rounded-full bg-primary text-[8px] text-primary-foreground font-bold">
                    0
                </span>
            </Link>
            <Link href="/account" className="flex flex-col items-center gap-1 text-xs text-muted-foreground hover:text-primary">
                <User className="h-5 w-5" />
                <span>Account</span>
            </Link>
        </div>
    );
}
