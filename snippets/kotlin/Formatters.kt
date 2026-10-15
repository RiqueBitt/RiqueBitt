// Formatação em pt-BR: moedas, números compactos e tamanhos de arquivo.
import java.text.NumberFormat
import java.util.Locale

private val ptBR = Locale("pt", "BR")

fun Double.asReal(): String = NumberFormat.getCurrencyInstance(ptBR).format(this)

fun Long.compact(): String = when {
    this >= 1_000_000 -> "%.1fM".format(ptBR, this / 1_000_000.0)
    this >= 1_000 -> "%.1fK".format(ptBR, this / 1_000.0)
    else -> toString()
}

fun Long.fileSize(): String = when {
    this >= 1L shl 30 -> "%.1f GB".format(ptBR, this / (1L shl 30).toDouble())
    this >= 1L shl 20 -> "%.1f MB".format(ptBR, this / (1L shl 20).toDouble())
    this >= 1L shl 10 -> "%.0f KB".format(ptBR, this / (1L shl 10).toDouble())
    else -> "$this B"
}
