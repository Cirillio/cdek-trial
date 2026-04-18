import type { NavItem } from "../../../../constants/router"

export function HeaderNav({ items, className }: { items: NavItem[]; className?: string }) {
    const isCurrentRoute = (path: string) => {
        return window.location.pathname === path
    }

    return (
        <nav
            aria-label="Навигация"
            className={`bg-secondary/10 items-center gap-1.75 rounded-full p-1.5 ${className} `}
        >
            {items.map((item, index) => (
                <a
                    href={item.to}
                    key={item.label + index}
                    className={`flex items-center gap-1.25 rounded-full text-base transition ${isCurrentRoute(item.to) ? "bg-primary/75 px-2.75 py-0.75 text-white" : "hover:bg-secondary/15 p-1.75 text-white/75"}`}
                >
                    {item.icon && <item.icon className="size-4.5" />}
                    {isCurrentRoute(item.to) && item.label}
                </a>
            ))}
        </nav>
    )
}
