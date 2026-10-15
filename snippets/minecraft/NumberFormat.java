// Abrevia números grandes para economia: 1500 -> 1,5K; 2300000 -> 2,3M.
public final class NumberFormat {
    private static final String[] SUFFIX = {"", "K", "M", "B", "T", "Q"};

    private NumberFormat() {}

    public static String compact(double value) {
        int i = 0;
        while (Math.abs(value) >= 1000 && i < SUFFIX.length - 1) { value /= 1000; i++; }
        String n = (value % 1 == 0) ? String.valueOf((long) value) : String.format("%.1f", value);
        return n.replace('.', ',') + SUFFIX[i];
    }
}
