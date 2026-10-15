// Cabeça de jogador com a skin dele (para menus de perfil e rankings).
import org.bukkit.Material;
import org.bukkit.OfflinePlayer;
import org.bukkit.inventory.ItemStack;
import org.bukkit.inventory.meta.SkullMeta;

public final class PlayerHead {
    private PlayerHead() {}

    public static ItemStack of(OfflinePlayer player, String name) {
        ItemStack head = new ItemStack(Material.PLAYER_HEAD);
        SkullMeta meta = (SkullMeta) head.getItemMeta();
        meta.setOwningPlayer(player);
        meta.setDisplayName(ColorUtil.color(name));
        head.setItemMeta(meta);
        return head;
    }
}
