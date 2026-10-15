// Repete uma chamada suspensa com espera crescente (bom para rede instável).
import kotlinx.coroutines.delay

suspend fun <T> retry(times: Int = 3, initialDelayMs: Long = 500, factor: Double = 2.0, block: suspend (attempt: Int) -> T): T {
    var wait = initialDelayMs
    repeat(times - 1) { attempt ->
        try { return block(attempt) } catch (_: Exception) { }
        delay(wait)
        wait = (wait * factor).toLong()
    }
    return block(times - 1)
}
