const {username,password} = process.env;
// console.log(username);
// userrname  + passsword + cluster name + collection name
export const dbLink = "mongodb+srv://itschauhan97:"+password+"@cluster0.qg3hyji.mongodb.net/productsDB?retryWrites=true&w=majority"