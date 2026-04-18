import { Temporal } from "@js-temporal/polyfill"

export type TemporalFormatMode = "dateOnly" | "dateTime" | "weekdayDate" | "monthYear"

export interface TemporalFormatOptions {
    timeZone: string
    formatMode: TemporalFormatMode
}

export interface FormatIsoParams {
    isoString: string
    locale?: string
    options: TemporalFormatOptions
}

const capitalizeFirst = (str: string): string => {
    if (!str) return str
    return str.charAt(0).toUpperCase() + str.slice(1)
}

const getIntlConfig = (mode: TemporalFormatMode): Intl.DateTimeFormatOptions => {
    const configs: Record<TemporalFormatMode, Intl.DateTimeFormatOptions> = {
        dateOnly: { day: "numeric", month: "long", year: "numeric" },
        dateTime: { day: "numeric", month: "long", hour: "2-digit", minute: "2-digit" },
        weekdayDate: { weekday: "long", day: "numeric", month: "long" },
        monthYear: { month: "long", year: "numeric" }
    }

    return configs[mode]
}

export const formatIsoDate = ({
    isoString,
    locale = "ru-RU",
    options
}: FormatIsoParams): string => {
    const instant = Temporal.Instant.from(isoString)
    const zonedDateTime = instant.toZonedDateTimeISO(options.timeZone)

    const formatConfig = getIntlConfig(options.formatMode)
    let formattedDate = zonedDateTime.toLocaleString(locale, formatConfig)

    if (locale === "ru-RU") {
        switch (options.formatMode) {
            case "dateOnly":
                formattedDate = formattedDate.replace(/ г\.$/, "")
                break

            case "weekdayDate":
                formattedDate = capitalizeFirst(formattedDate)
                break

            case "monthYear":
                formattedDate = capitalizeFirst(formattedDate.replace(/ г\.$/, "")).replace(
                    /\s(\d{4})$/,
                    ", $1"
                )
                break

            case "dateTime":
            default:
                break
        }
    }

    return formattedDate
}
