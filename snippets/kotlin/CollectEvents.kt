// Coleta um Flow só enquanto a tela está visível (evita trabalho em segundo plano).
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.lifecycle.Lifecycle
import androidx.lifecycle.compose.LocalLifecycleOwner
import androidx.lifecycle.repeatOnLifecycle
import kotlinx.coroutines.flow.Flow

@Composable
fun <T> CollectWhileVisible(flow: Flow<T>, onEvent: suspend (T) -> Unit) {
    val owner = LocalLifecycleOwner.current
    LaunchedEffect(flow, owner) {
        owner.repeatOnLifecycle(Lifecycle.State.STARTED) { flow.collect { onEvent(it) } }
    }
}
