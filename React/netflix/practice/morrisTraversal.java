public class Main {
    public static void main(String args[]){

    }

    public static void morrisTraversal(Node node){
        Node curr = node;

        while(curr!=null){
            if(curr.left==null){
                curr = curr.right;
            }
            else{
                Node lc = curr.left;

                while(lc.right!=null&&lc.right!=curr){
                    lc = lc.right;
                }

                if(lc.right==null){
                    // pre
                    lc.right = curr;
                    curr = curr.left;
                }
                else if(lc.right==curr){
                    //in
                    lc.right = null;
                    curr = curr.right;
                }
            }
        }
    }
}