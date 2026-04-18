import { Skeleton } from "../../../components/skeleton"

export function NewsCardStandartSkeleton({ isFirst }: { isFirst?: boolean }) {
    return (
        <div className="grid grid-cols-[auto_1fr] gap-3.5 max-sm:flex max-sm:flex-col">
            <Skeleton
                className={`h-32 w-full rounded-xl sm:w-46 ${isFirst ? "" : "max-sm:hidden"}`}
            />
            <div className="flex flex-col gap-3.5 py-1">
                <div className="space-y-2">
                    <Skeleton className="h-5 w-24" />
                    <Skeleton className="h-8 w-full" />
                </div>
                <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center gap-1.75">
                        <Skeleton className="h-5 w-16 rounded-md" />
                        <Skeleton className="h-5 w-20 rounded-md" />
                    </div>
                    <div className="flex items-center gap-2">
                        <Skeleton className="h-5 w-12" />
                        <Skeleton className="h-5 w-12" />
                    </div>
                </div>
            </div>
        </div>
    )
}
