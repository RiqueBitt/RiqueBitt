// Brilho animado para esqueletos de carregamento (Jetpack Compose).
import androidx.compose.animation.core.LinearEasing
import androidx.compose.animation.core.animateFloat
import androidx.compose.animation.core.infiniteRepeatable
import androidx.compose.animation.core.rememberInfiniteTransition
import androidx.compose.animation.core.tween
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color

@Composable
fun shimmerBrush(base: Color = Color(0xFF16171B), light: Color = Color(0xFF24262C)): Brush {
    val x by rememberInfiniteTransition(label = "shimmer")
        .animateFloat(-400f, 1400f, infiniteRepeatable(tween(1300, easing = LinearEasing)), label = "x")
    return Brush.linearGradient(listOf(base, light, base), start = Offset(x, 0f), end = Offset(x + 400f, 120f))
}
