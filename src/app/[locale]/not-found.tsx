import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] py-12 px-4 text-center">
            <h1 className="text-7xl font-bold tracking-tighter text-primary">404</h1>
            <h2 className="mt-4 text-2xl font-semibold">Page Not Found</h2>
            <p className="mt-2 text-muted-foreground max-w-md mx-auto">
                Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been removed or doesn&apos;t exist.
            </p>
            <div className="mt-8 flex gap-4">
                <Link href="/">
                    <Button size="lg">Go Home</Button>
                </Link>
                <Link href="/contact">
                    <Button variant="outline" size="lg">Contact Support</Button>
                </Link>
            </div>
        </div>
    );
}
