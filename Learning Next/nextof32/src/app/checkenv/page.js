import { BASE_URL } from "@/config/constant";
export default function Page(){
    console.log(process.env.NODE_ENV);
    console.log(process.env.SERVER_PASSWORD);
    let base = BASE_URL;
    return(
        <div>
            <h2>Check env variables</h2>
            {
                base
            }
        </div>
    )
}