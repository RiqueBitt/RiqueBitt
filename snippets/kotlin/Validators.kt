// Validações comuns de formulário.
private val EMAIL = Regex("^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$")
private val USERNAME = Regex("^[a-zA-Z0-9_.]{3,32}$")

fun isEmail(text: String) = EMAIL.matches(text.trim())

fun isUsername(text: String) = USERNAME.matches(text.trim())

fun passwordProblems(p: String): List<String> = buildList {
    if (p.length < 8) add("pelo menos 8 caracteres")
    if (p.none { it.isDigit() }) add("um número")
    if (p.none { it.isUpperCase() }) add("uma letra maiúscula")
}
