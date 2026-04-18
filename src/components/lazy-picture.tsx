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

    //  функция для формирования чистого пути без двойных слешей
    const getPath = (img: string) => {
        const cleanRoot = srcRoot.endsWith("/") ? srcRoot.slice(0, -1) : srcRoot
        const cleanImg = img.startsWith("/") ? img : `/${img}`
        return cleanRoot + cleanImg
    }

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
                    <source media="(max-width: 640px)" srcSet={getPath(images.s)} />
                    <source media="(max-width: 1024px)" srcSet={getPath(images.m)} />
                    <source media="(min-width: 1025px)" srcSet={getPath(images.l)} />
                    <img
                        src={getPath(images.m)}
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
