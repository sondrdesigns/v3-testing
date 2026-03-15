import * as React from "react"
import { cn } from "@/lib/utils"

export interface SectionHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    title: string;
    subtitle?: string;
}

export function SectionHeading({ title, subtitle, className, ...props }: SectionHeadingProps) {
    return (
        <div className={cn("mb-12 md:mb-20 flex flex-col gap-4", className)} {...props}>
            {subtitle && (
                <span className="text-sm font-subhead uppercase tracking-widest text-brand-accent font-semibold">
                    {subtitle}
                </span>
            )}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium tracking-tight leading-[1]">
                {title}
            </h2>
        </div>
    )
}
