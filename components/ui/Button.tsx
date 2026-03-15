import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default: "bg-brand-primary text-brand-secondary hover:bg-brand-accent hover:text-white rounded-none",
                destructive:
                    "bg-brand-red text-white hover:bg-brand-red/90 rounded-none",
                outline:
                    "border border-brand-primary bg-transparent text-brand-primary hover:bg-brand-primary hover:text-brand-secondary rounded-none",
                secondary:
                    "bg-brand-secondary text-brand-primary border border-brand-primary hover:bg-brand-primary hover:text-brand-secondary rounded-none",
                ghost: "hover:bg-brand-accent hover:text-white rounded-none",
                link: "text-brand-primary underline-offset-4 hover:text-brand-accent hover:underline",
            },
            size: {
                default: "h-12 px-8 py-2",
                sm: "h-9 px-3",
                lg: "h-14 px-10 text-base",
                icon: "h-12 w-12",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }
