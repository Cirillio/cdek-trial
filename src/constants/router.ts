
import {
    IconLayoutDashboard,
    IconTruck,
    IconShoppingCart,
    IconBox,
    IconUsers,
    IconSettings,
 
    type TablerIcon
} from "@tabler/icons-react"

export type NavItem = {
    label: string
    to: string
    icon: TablerIcon
}

export const navItems: NavItem[] = [
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