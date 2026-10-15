// Estado de tela simples para carregamentos (Carregando / Pronto / Erro).
sealed interface UiState<out T> {
    data object Loading : UiState<Nothing>
    data class Ready<T>(val data: T) : UiState<T>
    data class Failed(val message: String) : UiState<Nothing>
}

suspend fun <T> load(block: suspend () -> T): UiState<T> =
    try { UiState.Ready(block()) } catch (e: Exception) { UiState.Failed(e.message ?: "Algo deu errado") }
