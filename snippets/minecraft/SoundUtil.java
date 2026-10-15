// Sons de feedback padronizados (sucesso, erro, clique).
import org.bukkit.Sound;
import org.bukkit.entity.Player;

public final class SoundUtil {
    private SoundUtil() {}

    public static void success(Player p) { p.playSound(p.getLocation(), Sound.ENTITY_PLAYER_LEVELUP, 0.7f, 1.4f); }

    public static void error(Player p) { p.playSound(p.getLocation(), Sound.ENTITY_VILLAGER_NO, 0.8f, 1f); }

    public static void click(Player p) { p.playSound(p.getLocation(), Sound.UI_BUTTON_CLICK, 0.6f, 1.2f); }
}
