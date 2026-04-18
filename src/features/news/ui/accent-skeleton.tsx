import { Skeleton } from "../../../components/skeleton"

export function NewsCardAccentSkeleton({ isFirst }: { isFirst?: boolean }) {
    return (
        <div className="flex flex-col gap-[3.5px]">
            <Skeleton className={`h-40 w-full rounded-xl ${isFirst ? "" : "hidden"}`} />
            <div className="mt-1.75 space-y-2">
                <div className="space-y-1">
                    <Skeleton className="h-6 w-full" />
                    <Skeleton className="h-6 w-3/4" />
                </div>
            </div>
            <div className="mt-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Skeleton className="h-4 w-16" />
                    <Skeleton className="h-4 w-20" />
                </div>
                <div className="flex items-center gap-2">
                    <Skeleton className="h-5 w-10" />
                    <Skeleton className="h-5 w-10" />
                </div>
            </div>
        </div>
    )
}
