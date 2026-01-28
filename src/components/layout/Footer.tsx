import Link from 'next/link';
import { Facebook, Twitter, Instagram } from 'lucide-react';

export function Footer() {
    return (
        <footer className="w-full border-t bg-background">
            <div className="container px-4 py-10 md:px-6 mx-auto">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-primary">Astrabyte</h4>
                        <p className="text-sm text-muted-foreground">
                            Premium gadgets and electronics in Bangladesh. Fast delivery and reliable warranty.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-muted-foreground hover:text-primary">
                                <Facebook className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary">
                                <Twitter className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary">
                                <Instagram className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold">Shop</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="#" className="hover:text-primary">New Arrivals</Link></li>
                            <li><Link href="#" className="hover:text-primary">Trending</Link></li>
                            <li><Link href="#" className="hover:text-primary">Brands</Link></li>
                            <li><Link href="#" className="hover:text-primary">Sale</Link></li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold">Support</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
                            <li><Link href="/faq" className="hover:text-primary">FAQ</Link></li>
                            <li><Link href="/returns" className="hover:text-primary">Returns & Warranty</Link></li>
                            <li><Link href="/terms" className="hover:text-primary">Terms & Conditions</Link></li>
                            <li><Link href="/contact" className="hover:text-primary">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold">Contact</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>Dhaka, Bangladesh</li>
                            <li>support@astrabyte.com</li>
                            <li>+880 1XXX-XXXXXX</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Astrabyte. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
