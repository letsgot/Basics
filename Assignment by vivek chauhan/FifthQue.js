
// i have to print this pattern like this 

// for n = 6
// *  *  *  *  *  *  
// *           *
// *        *
// *     *
// *  *
// *

function drawPattern(n) {
    
    for(let i=1;i<=n;i++){
        for(let j=1;j<=n;j++){
            if(i==1){
                process.stdout.write("* ");
            }
            else if(j==1){
                process.stdout.write("* ");
            }
            else if(i+j===n+1){
                process.stdout.write("* ");
            }
            else{
                process.stdout.write("  ");
            }
        }
        console.log();
    }
}
drawPattern(6);

