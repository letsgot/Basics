public class Main {

    public static void main(String args[]){
         Scanner scn = new Scanner(System.in);
         int n = scn.nextInt();
         ArrayList<Node> list = uniqueBst(n);
    }

    public ArrayList<Node> uniqueBst(int n){
        return helper(1,n);
    } 

    public ArrayList<Node> helper(int st,int end){
        ArrayList<Node> ans = new ArrayList<>();
        for(int i=st;i<=end;i++){
            ArrayList<Node> left = helper(st,i-1);
            ArrayList<Node> right = helper(i+1,end);

            for(Node l : left){
                for(Node r : right){
                    Node nn = new Node(i);
                    nn.left = l;
                    nn.right = r;

                    ans.add(nn);
                }
            }
        }

        return ans;
    }
}