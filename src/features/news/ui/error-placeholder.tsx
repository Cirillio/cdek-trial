export interface INewsErrorPlaceholderProps {
    error?: string | null
    onRetry?: () => void
}

export function NewsErrorPlaceholder({ error, onRetry }: INewsErrorPlaceholderProps) {
    return (
        <div className="flex flex-col items-center gap-3.5 py-6 text-center">
            <h3 className="text-lg font-semibold text-red-600">Что-то пошло не так</h3>
            <p className="text-foreground-secondary text-sm">
                {error || "Произошла ошибка при загрузке новостей"}
            </p>
            {onRetry && (
                <button
                    onClick={onRetry}
                    className="mt-2 cursor-pointer rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800 active:bg-zinc-700"
                >
                    Попробовать снова
                </button>
            )}
        </div>
    )
}
