// Debounce para buscas em Compose/ViewModel: só dispara depois de parar de digitar.
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Job
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch

class Debouncer(private val scope: CoroutineScope, private val waitMs: Long = 300) {
    private var job: Job? = null

    fun submit(action: suspend () -> Unit) {
        job?.cancel()
        job = scope.launch { delay(waitMs); action() }
    }
}
