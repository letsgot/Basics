public class Main{

    public static void main(String [] args){

    }

    public static int countCompleteBinaryNodes(Node node){
        if(node==null){
            return 0;
        }

        int lht = lheight(node.left);
        int rht = rheight(node.right);

        if(lht==rht){
            return Math.pow(2,lht)-1;
        }
        else{

            int lcount = countCompleteBinaryNodes(node.left);
            int rcount = countCompleteBinaryNodes(node.right);
            return lcount + rcount + 1;
        }
    }
}