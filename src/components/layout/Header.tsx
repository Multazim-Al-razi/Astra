import Link from 'next/link';
import { ShoppingCart, User, Search, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CartSidebar } from '@/components/cart/CartSidebar';
import { GlobalSearch } from '@/components/search/GlobalSearch';

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center mx-auto px-4">
                {/* Mobile Menu & Logo */}
                <div className="flex items-center gap-2 md:gap-4">
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <Menu className="h-5 w-5" />
                    </Button>
                    <Link href="/" className="flex items-center gap-2">
                        <span className="text-xl font-bold tracking-tight text-primary">Astrabyte</span>
                    </Link>
                </div>

                {/* Global Search (Desktop) */}
                <div className="hidden md:flex flex-1 items-center justify-center px-6">
                    <GlobalSearch />
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium mr-6">
                    <Link href="/categories" className="transition-colors hover:text-primary">Categories</Link>
                    <Link href="/deals" className="transition-colors hover:text-primary">Deals</Link>
                    <Link href="/support" className="transition-colors hover:text-primary">Support</Link>
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-2">
                    {/* Mobile Search Trigger */}
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <Search className="h-5 w-5" />
                    </Button>

                    <Link href="/login">
                        <Button variant="ghost" size="icon">
                            <User className="h-5 w-5" />
                        </Button>
                    </Link>

                    <CartSidebar />
                </div>
            </div>
        </header>
    );
}
