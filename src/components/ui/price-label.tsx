import { cn } from "@/lib/utils";

interface PriceLabelProps {
    price: number;
    originalPrice?: number;
    currency?: string;
    className?: string;
    size?: "sm" | "md" | "lg" | "xl";
}

export function PriceLabel({
    price,
    originalPrice,
    currency = "BDT",
    className,
    size = "md",
}: PriceLabelProps) {
    const formatter = new Intl.NumberFormat("en-BD", {
        style: "currency",
        currency: currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });

    const sizeClasses = {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg font-semibold",
        xl: "text-2xl font-bold",
    };

    return (
        <div className={cn("flex items-baseline gap-2", className)}>
            <span className={cn("font-medium text-foreground", sizeClasses[size])}>
                {formatter.format(price)}
            </span>
            {originalPrice && originalPrice > price && (
                <span className="text-xs text-muted-foreground line-through">
                    {formatter.format(originalPrice)}
                </span>
            )}
        </div>
    );
}
