// Barra de progresso colorida para lore/scoreboard: bar(30, 100, 20) -> "&a||||||&7||||||||||||||".
public final class ProgressBar {
    private ProgressBar() {}

    public static String bar(double value, double max, int size) {
        int filled = (int) Math.round(Math.max(0, Math.min(1, max <= 0 ? 0 : value / max)) * size);
        return "&a" + "|".repeat(filled) + "&7" + "|".repeat(size - filled);
    }
}
