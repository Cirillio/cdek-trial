interface ICardProps{
    className?: string
    children: React.ReactNode
}

export function Card({children, className}: ICardProps){
    return <div className={`rounded-2xl bg-white p-3.5 sm:p-5.25 ${className}`}>
        {children}
    </div>
}