public class Main{

    public class Pair{
        int state;
        Node node;
        Pair(int state,Node node){
            this.state = state;
            this.node = node;
        }
    }

    public void print(Node head){
        ArrayList<Integer> pre = new ArrayList<>();
        ArrayList<Integer> in = new ArrayList<>();
        ArrayList<Integer> post = new ArrayList<>();

        Stack<Pair> st = new Stack<>();
        st.push(new Pair(0,head));

        while(st.size()>0){
            Pair rem = st.peek();
            int state = rem.state;
            Node nn = rem.node;

            if(state==0){
               pre.add(nn.val);
               rem.state++;
               if(nn.left!=null){
                st.push(new Pair(0,nn.left));
               }
            }
            else if(state==1){
               in.add(nn.val);
               rem.state++;
               if(nn.right!=null){
                st.push(new Pair(0,nn.right));
               }
            }
            else{
               post.add(nn.val);
            //    rem.state++;
               st.pop();
               
            }
        }
    }

    public static void main(String [] args){

    }
}