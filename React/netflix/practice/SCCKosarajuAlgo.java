public class Main{

    // used for strongly connected components 

    // edges = [
    //     [a,b],
    //     [b,c],
    //     [c,a],
    //     [d,c],
    //     [f,d],
    //     [d,e]
    //     [e,f],
    //     [i,e],
    //     [g,i],
    //     [g,h],
    //     [h,i],
    // ]

    public int kosaraju(int [][] edges , int n){
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

       boolean vis[] = new boolean[n];

       for(int i=0;i<n;i++){
        if(vis[i]==false){
            dfsWithStack(graph,vis,st,i);
        }
       }

       vis = new boolean[n];
       int count = 0;

       ArrayList<Integer> [] graphRev = new ArrayList[n];

       for(int i=0;i<n;i++){
         graphRev[i] = new ArrayList<>();
       }

       for(int [] edge : edges){
        int src = edge[0];
        int nbr = edge[1];
        graphRev[nbr].add(src);
       }

       while(st.size()>0){
          int rem = st.pop();
          if(vis[rem]==false){
            dfsWithoutStack(graphRev,vis,rem);
            count++;
          }
       }
       
       return count;
    }

    public static void dfsWithoutStack(ArrayList<Integer> [] graph,boolean[]vis,int src){
        if(vis[src]){
            return;
        }

        vis[src] = true;

        for(int nbr : graph[src]){
            if(vis[nbr]==false){
                dfsWithoutStack(graph,vis,nbr);
            }
        }

    }

    public static void dfsWithStack(ArrayList<Integer> [] graph,boolean[]vis,Stack<Integer> st,int src){
        if(vis[src]){
            return;
        }

        vis[src] = true;

        for(int nbr : graph[src]){
            if(vis[nbr]==false){
                dfsWithStack(graph,vis,st,nbr);
            }
        }

        st.push(src);
    }
}