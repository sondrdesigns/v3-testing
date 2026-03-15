import * as React from "react"
import { cn } from "@/lib/utils"

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    as?: React.ElementType
}

export function Container({ className, as: Component = "div", ...props }: ContainerProps) {
    // Full width (edge-to-edge layout) as specified in round 8
    return (
        <Component
            className={cn("w-full px-6 md:px-12 lg:px-24", className)}
            {...props}
        />
    )
    
}
