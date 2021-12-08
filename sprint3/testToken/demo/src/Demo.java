import java.util.Date;
import java.util.HashSet;
import java.util.Iterator;

public class Demo {
    private Date d = new Date();
    private java.util.Date my = new java.util.Date();


    public static void main(String args[]) {
        HashSet<String> set = new HashSet<>();
        String s1 = "abc";
        String s2 = "def";
        String s3 = "";
        set.add(s1);/*from ww w.  ja va2 s .  c  om*/
        set.add(s2);
        set.add(s1);
        set.add(s2);
        Iterator<String> i = set.iterator();
        while (i.hasNext()) {
            s3 += i.next();
        }
        System.out.println(s3);
    }

}
