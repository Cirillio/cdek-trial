import {
    IconLayoutDashboard,
    IconTruck,
    IconShoppingCart,
    IconBox,
    IconUsers,
    IconSettings,
    IconSearch,
    IconBell,
    IconMenu2,
    type TablerIcon
} from "@tabler/icons-react"
import { useState } from "react"

type NavItem = {
    label: string
    to: string
    icon: TablerIcon
}

const navItems: NavItem[] = [
    {
        label: "Главная",
        to: "/",
        icon: IconLayoutDashboard
    },
    {
        label: "Транспорт",
        to: "/transport",
        icon: IconTruck
    },
    {
        label: "Товары",
        to: "/goods",
        icon: IconShoppingCart
    },
    {
        label: "Склады",
        to: "/warehouses",
        icon: IconBox
    },
    {
        label: "Пользователи",
        to: "/users",
        icon: IconUsers
    },
    { label: "Настройки", to: "/settings", icon: IconSettings }
]

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)

    const onMenuToggle = () => {
        const nextState = !mobileMenuOpen
        setMobileMenuOpen(nextState)
        if (nextState) {
            document.body.classList.add("overflow-hidden")
        } else {
            document.body.classList.remove("overflow-hidden")
        }
    }

    const isCurrentRoute = (path: string) => {
        return window.location.pathname === path
    }

    return (
        <>
            <header
                className={`sticky top-0 z-99 flex h-16 items-center justify-center backdrop-blur-xs ${mobileMenuOpen ? "bg-accent" : "bg-accent/90"}`}
            >
                <div className="app-container relative flex w-full items-center justify-between px-3.5">
                    <a
                        href="/"
                        className="to-primary hover:from-primary bg-linear-to-l from-white via-emerald-200 bg-clip-text text-2xl font-bold text-transparent transition-colors duration-300 hover:to-white sm:text-3xl"
                    >
                        CDEK.Бизнес
                    </a>
                    <nav className="bg-secondary/10 absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.75 rounded-full p-1.5 max-sm:hidden">
                        {navItems.map((item, index) => (
                            <a
                                href={item.to}
                                key={item.label + index}
                                className={`flex items-center gap-1.25 rounded-full text-base transition ${isCurrentRoute(item.to) ? "bg-primary/75 px-2.75 py-0.75 text-white" : "hover:bg-secondary/15 p-1.75 text-white/75"}`}
                            >
                                {item.icon && <item.icon size={16} />}
                                {isCurrentRoute(item.to) && item.label}
                            </a>
                        ))}
                    </nav>
                    <div className="flex gap-1.75">
                        <button
                            aria-label="Поиск"
                            type="button"
                            className="bg-secondary/15 hover:bg-secondary/25 active:bg-secondary/35 flex rounded-full p-1.75 text-white transition"
                        >
                            <IconSearch className="size-4 max-sm:size-4.5" />
                        </button>
                        <button
                            aria-label="Уведомления"
                            type="button"
                            className="bg-secondary/15 hover:bg-secondary/25 active:bg-secondary/35 relative flex rounded-full p-1.75 text-white transition"
                        >
                            <div className="absolute top-0.5 right-0.5">
                                <span className="relative flex size-2">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex size-2 rounded-full bg-emerald-500"></span>
                                </span>
                            </div>
                            <IconBell className="size-4 max-sm:size-4.5" />
                        </button>
                        <button
                            onClick={onMenuToggle}
                            aria-label="Меню"
                            type="button"
                            className="bg-secondary/15 hover:bg-secondary/25 active:bg-secondary/35 flex rounded-full p-1.75 text-white transition sm:hidden"
                        >
                            <IconMenu2 className="size-4 max-sm:size-4.5" />
                        </button>
                    </div>
                </div>
            </header>
            {mobileMenuOpen && (
                <div className="bg-accent sm:bg-accent/90 border-primary/75 fixed inset-0 top-16 right-0 left-0 z-98 space-y-3.5 border-t-2 px-3.5 py-3.5 backdrop-blur-xs sm:hidden">
                    {navItems.map((item, index) => (
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
            )}
        </>
    )
}
