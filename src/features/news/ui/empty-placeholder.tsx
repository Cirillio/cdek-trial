export function NewsEmptyPlaceholder() {
    return (
        <div className="flex flex-col items-center gap-3.5">
            <img src="/NewsEmpty.png" className="size-40 object-center" loading="lazy" />
            <h3 className="text-lg font-semibold">Новых новостей нет</h3>
        </div>
    )
}
