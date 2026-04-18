import { IconSearch, IconBell, IconMenu2, IconX } from "@tabler/icons-react"
import { useState } from "react"
import { HeaderNav } from "./nav-menu"
import { navItems } from "../../../../constants/router"
import { HeaderMobileMenu } from "./mobile-menu"

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

    return (
        <>
            <header
                className={`h-header sticky top-0 z-99 flex items-center justify-center backdrop-blur-xs ${mobileMenuOpen ? "bg-accent" : "bg-accent/90"}`}
            >
                <div className="app-container relative flex w-full items-center justify-between px-3.5">
                    <a
                        href="/"
                        className="to-primary hover:from-primary bg-linear-to-l from-white via-emerald-200 bg-clip-text text-2xl font-bold text-transparent transition-colors duration-300 hover:to-white sm:text-3xl"
                    >
                        CDEK.Бизнес
                    </a>

                    <HeaderNav
                        items={navItems}
                        className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 max-sm:hidden"
                    />

                    <div className="flex gap-1.75">
                        <button
                            aria-label="Поиск"
                            type="button"
                            className="bg-secondary/15 hover:bg-secondary/25 active:bg-secondary/35 flex rounded-full p-1.75 text-white transition"
                        >
                            <IconSearch className="size-4.5" />
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
                            <IconBell className="size-4.5" />
                        </button>
                        <button
                            onClick={onMenuToggle}
                            aria-label="Меню"
                            type="button"
                            className="bg-secondary/15 hover:bg-secondary/25 active:bg-secondary/35 flex rounded-full p-1.75 text-white transition sm:hidden"
                        >
                            {!mobileMenuOpen && <IconMenu2 className="size-4.5" />}
                            {mobileMenuOpen && <IconX className="size-4.5" />}
                        </button>
                    </div>
                </div>
            </header>
            {mobileMenuOpen && (
                <HeaderMobileMenu
                    items={navItems}
                    className="fixed inset-0 top-(--header-height) right-0 left-0 z-98 sm:hidden"
                />
            )}
        </>
    )
}
