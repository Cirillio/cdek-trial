import type { TablerIcon } from "@tabler/icons-react"

export type IBadgeColor = "primary" | "secondary" | "info" | "warning"

export interface IBadgeProps {
    icon?: TablerIcon
    text?: string
    title?: string
    color?: IBadgeColor
    className?: string
}

const BADGE_COLOR_MAP: Record<IBadgeColor, string> = {
    primary: "bg-primary-bg text-primary",
    secondary: "bg-secondary text-black",
    info: "bg-info-bg text-info",
    warning: "bg-warning-bg text-warning"
}

export function Badge({ icon: Icon, title, text, className, color = "primary" }: IBadgeProps) {
    return (
        <span
            title={title}
            className={`${BADGE_COLOR_MAP[color]} inline-flex shrink-0 items-center rounded-lg text-xs ${className} ${text ? "px-1.75 py-1" : Icon ? "p-1" : ""}`}
        >
            {Icon && <Icon className="mr-1 inline-block" size={12} />} {text}
        </span>
    )
}
