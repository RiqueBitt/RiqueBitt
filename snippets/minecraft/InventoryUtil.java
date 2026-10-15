// Utilidades de inventário: espaço livre e entrega segura (o que não couber cai no chão).
import org.bukkit.entity.Player;
import org.bukkit.inventory.ItemStack;
import java.util.Map;

public final class InventoryUtil {
    private InventoryUtil() {}

    public static int freeSlots(Player p) {
        int free = 0;
        for (ItemStack it : p.getInventory().getStorageContents()) if (it == null || it.getType().isAir()) free++;
        return free;
    }

    public static void giveOrDrop(Player p, ItemStack... items) {
        Map<Integer, ItemStack> left = p.getInventory().addItem(items);
        left.values().forEach(it -> p.getWorld().dropItemNaturally(p.getLocation(), it));
    }
}
