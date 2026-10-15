// Converte "#4C9FFF" (ou "4C9FFF", "#RGB") em Color do Compose; null se inválido.
import androidx.compose.ui.graphics.Color

fun String.toColorOrNull(): Color? {
    var hex = trim().removePrefix("#")
    if (hex.length == 3) hex = hex.map { "$it$it" }.joinToString("")
    if (hex.length == 6) hex = "FF$hex"
    return hex.takeIf { it.length == 8 }?.toLongOrNull(16)?.let { Color(it) }
}
