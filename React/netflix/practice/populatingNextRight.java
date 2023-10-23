public class Main {

    public static void main(String [] args){

    }

    public static Node pNR(Node head){
        if(head==null||(head.left==null&&head.right==null)){
            return head;
        }

        head.left.next = head.right;
        if(head.next==null){
            head.right.next = null;
        }
        else{
            head.right.next = head.next.left;
        }

        head.left = pNR(head.left);
        head.right = pNR(head.right);

        return head;
    }
}