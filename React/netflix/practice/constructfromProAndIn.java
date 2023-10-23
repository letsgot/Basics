public class Main {
    public static void main(String [] args){

    }

    public static Node tree(int[]pre,int [] in){
        return helper(pre,in,0,pre.length-1,0,in.length-1);
    }

    public static Node helper(int[]pre,int[]in,int pl,int ph,int il,int ih){
        
        int val = pre[pl];

        Node nn = new Node(val);

        int idx = Arrays.binarySearch(in,il,ih,val);  // use hashmap for val - index for inorder array

        int leftTotal = idx - il;
        int rightTotal = ih - idx;

        nn.left = helper(pre,in,pl+1,pl+leftTotal,il,idx-1);

        nn.right = helper(pre,in,pl+leftTotal+1,pl+leftTotal+rightTotal,idx+1,ih);
    }
}