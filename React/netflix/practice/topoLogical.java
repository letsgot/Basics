public class Main{

    public ArrayList<Integer> topoLogicalSort(int [][] edges,int n){
        ArrayList<Integer> [] graph = new ArrayList[n];
        for(int i=0;i<n;i++){
            graph[i] = new ArrayList<>();
        }

        for(int [] edge : edges){
            int src = edge[0];
            int nbr = edge[1];
            graph[src].add(nbr);
        }

        Stack<Integer> st = new Stack<>();
        boolean [] vis = new boolean[n];
        dfs(graph,st,0,vis);

        ArrayList<Integer> al = new ArrayList<>();
        while(st.size()>0){
            al.add(st.pop());
        }

        return al;
    }

    public static void dfs(ArrayList<Integer> [] graph, Stack<Integer> st, int src, boolean [] vis){
       if(vis[src]==false){
         return;
       }

       vis[src] = true;

       dfs(graph,st,src,vis);

       st.push(src);
    }
}