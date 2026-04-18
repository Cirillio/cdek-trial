import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react"

export interface INewsWidgetPaginationProps {
    onNext: () => void
    onPrev: () => void
    canNext: boolean
    canPrev: boolean
    isLoading: boolean
    className?: string
}

export function NewsWidgetPagination({
    onNext,
    onPrev,
    canNext,
    canPrev,
    isLoading,
    className
}: INewsWidgetPaginationProps) {
    return (
        <div className={`flex items-center gap-1.75 ${className}`}>
            <button
                aria-label="Назад"
                type="button"
                onClick={onPrev}
                disabled={!canPrev || isLoading}
                className="hover:bg-secondary disabled:bg-secondary/50 active:bg-secondary rounded-md p-1 transition active:scale-98 disabled:opacity-50"
            >
                <IconArrowLeft size={22} />
            </button>
            <button
                aria-label="Вперед"
                type="button"
                onClick={onNext}
                disabled={!canNext || isLoading}
                className="hover:bg-secondary disabled:bg-secondary/50 active:bg-secondary rounded-md p-1 transition active:scale-98 disabled:opacity-50"
            >
                <IconArrowRight size={22} />
            </button>
        </div>
    )
}
