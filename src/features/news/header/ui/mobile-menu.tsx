import type { NavItem } from "../../../../constants/router"

export function HeaderMobileMenu({ items, className }: { items: NavItem[]; className?: string }) {
    const isCurrentRoute = (path: string) => {
        return window.location.pathname === path
    }

    return (
        <div
            aria-label="Меню"
            className={`bg-accent sm:bg-accent/90 border-primary/75 space-y-3.5 border-t-2 px-3.5 py-3.5 backdrop-blur-xs ${className}`}
        >
            {items.map((item, index) => (
                <a
                    href={item.to}
                    key={item.label + index}
                    className={`flex items-center gap-1.25 rounded-full px-3.75 py-1.75 text-lg transition ${isCurrentRoute(item.to) ? "bg-primary/75 text-white" : "hover:bg-secondary/15 active:bg-secondary/25 text-white/75"}`}
                >
                    {item.icon && <item.icon className="size-4.5" />}
                    <span className="mx-auto">{item.label}</span>
                </a>
            ))}
        </div>
    )
}
