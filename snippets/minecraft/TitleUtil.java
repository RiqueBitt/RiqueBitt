// Título + subtítulo com tempos em ticks (20 ticks = 1 segundo).
import org.bukkit.entity.Player;

public final class TitleUtil {
    private TitleUtil() {}

    public static void show(Player p, String title, String subtitle) {
        show(p, title, subtitle, 10, 50, 10);
    }

    public static void show(Player p, String title, String subtitle, int fadeIn, int stay, int fadeOut) {
        p.sendTitle(ColorUtil.color(title), ColorUtil.color(subtitle), fadeIn, stay, fadeOut);
    }
}
