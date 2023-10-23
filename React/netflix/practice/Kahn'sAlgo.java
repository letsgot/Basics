// kahn's algo is a combination of topological sort and cycle detection
// topological sort can't b able to handle to cyclic graph 
// topological sort works only on dag directed acyclic graph but kahn's algo work on both
// directed cyclic graph for cycle detection and directed acyclic graph

public class Main{

    public static ArrayList<Integer> kahn's(int [][] edges, int n){

        ArrayList<Integer> [] graph = new ArrayList[n];
        for(int i=0;i<n;i++){
            graph[i] = new ArrayList<>();
        }

        for(int [] edge : edges){
            int src = edge[0];
            int nbr = edge[1];
            graph[src].add(nbr);
        }

        int indegree[] = new int[n];

        for(int edge[] : edges){
            indegree[edge[1]]++;
        }

        Queue<Integer> que = new ArrayDeque<>();
        ArrayList<Integer> list = new ArrayList<>();

        for(int i=0;i<n;i++){
            if(indegree[i]==0){
                que.add(i);
            }
        }

        int idx = 0;

        while(que.size()>0){
            int src = que.remove();

            list.add(src);
            idx++;

            for(int nbr : graph[src]){
                indegree[nbr]--;
                if(indegree[nbr]==0){
                    que.add(nbr);
                }
            }
        }

        if(idx==n){
            return list;
        }
        else{
            return new ArrayList<>().add("cycle is present in this graph");
        }
    }
}