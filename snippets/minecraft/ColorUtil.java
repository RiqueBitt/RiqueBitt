// Converte "&a" e "&#RRGGBB" para cores do Minecraft (Spigot/Paper 1.16+).
import net.md_5.bungee.api.ChatColor;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public final class ColorUtil {
    private static final Pattern HEX = Pattern.compile("&#([A-Fa-f0-9]{6})");

    private ColorUtil() {}

    public static String color(String text) {
        Matcher m = HEX.matcher(text);
        StringBuilder out = new StringBuilder();
        while (m.find()) m.appendReplacement(out, ChatColor.of("#" + m.group(1)).toString());
        m.appendTail(out);
        return ChatColor.translateAlternateColorCodes('&', out.toString());
    }
}
