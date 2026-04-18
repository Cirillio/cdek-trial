// shared/ui/LazyPicture.tsx
import { useState } from "react"
import { IconPhotoOff } from "@tabler/icons-react"
import { Skeleton } from "./skeleton"
import type { CoverImage } from "../types/core.types"

interface Props {
    images: CoverImage
    srcRoot?: string
    alt?: string
    className?: string
}

export function LazyPicture({ images, alt = "", className = "", srcRoot = "" }: Props) {
    const [isLoaded, setIsLoaded] = useState(false)
    const [hasError, setHasError] = useState(false)

    return (
        <div className={`relative ${className}`}>
            {!isLoaded && !hasError && (
                <Skeleton className="absolute inset-0 h-full w-full rounded-none" />
            )}

            {hasError && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-neutral-100 text-center">
                    <IconPhotoOff className="size-8 text-neutral-300" />
                    <span className="text-sm text-neutral-400">Не удалось загрузить</span>
                </div>
            )}

            {!hasError && (
                <picture className="size-full">
                    <source media="(max-width: 1439px)" srcSet={images.m} />
                    <source media="(min-width: 1440px)" srcSet={images.l} />
                    <img
                        src={srcRoot + "/" + images.m}
                        alt={alt}
                        loading="lazy"
                        decoding="async"
                        className={`h-full w-full object-cover transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}
                        onLoad={() => setIsLoaded(true)}
                        onError={() => setHasError(true)}
                    />
                </picture>
            )}
        </div>
    )
}
