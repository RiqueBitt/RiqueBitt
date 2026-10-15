// "agora", "há 5 min", "há 3 h", "há 2 d" a partir de um Instant.
import java.time.Duration
import java.time.Instant

fun timeAgo(from: Instant, now: Instant = Instant.now()): String {
    val d = Duration.between(from, now)
    return when {
        d.seconds < 60 -> "agora"
        d.toMinutes() < 60 -> "há ${d.toMinutes()} min"
        d.toHours() < 24 -> "há ${d.toHours()} h"
        d.toDays() < 30 -> "há ${d.toDays()} d"
        else -> "há ${d.toDays() / 30} meses"
    }
}
