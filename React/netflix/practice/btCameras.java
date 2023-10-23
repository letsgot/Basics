public class Main{
    public static void main(String [] args){

    }
    
    static int ans = 0;
    public int camera(Node node){
       ans = 0;
       helper(node);
       return ans;
    }

    // 0 = not monitored
    // 1 = monitored
    // 2 = camera
    public int helper(Node node){
        if(node==null){
            return 1;
        }
    }
}