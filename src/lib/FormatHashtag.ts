export function formatHashtag(text: string): string {
    return (
        "#" +
        text
            .trim()
            .replace(/[^\wа-яёА-ЯЁ]+/gi, "_")
            .replace(/_+$/, "")
    )
}
