class Solution
{
    public class Pair{
        int view;
        Node node;
        Pair(int view,Node node){
            this.view = view;
            this.node = node;
        }
    }

    //Function to return a list of nodes visible from the top view 
    //from left to right in Binary Tree.
    static ArrayList<Integer> topView(Node root)
    {
        // add your code
        if(root==null){
            return new ArrayList<>();
        }
        else if(root.left==null&&root.right==null){
            return new ArrayList<>().add(root.val);
        }

        TreeMap<Integer,Node> map = new TreeMap<>();
        map.put(0,root);
        Pair rp = new Node(0,root);

        Queue<Pair> que = new ArrayDeque<>();
        que.add(rp);

        while(que.size()!=0){
            Pair rem = que.remove();
            int v = rem.view;
            Node n = rem.node;

            if(!map.containsKey(v)){
               map.put(v,n);
            }

            if(n.left!=null){
                Pair r = new Node(v-1,n.left);
                que.add(r);
            }

            if(n.right!=null){
                Pair r = new Node(v+1,n.right);
                que.add(r);
            }
        }

        ArrayList<Integer> list = new ArrayList<>();
        while(map.size()>0){
            list.add(map.remove().node.val);
        }

        return list;
    }
}