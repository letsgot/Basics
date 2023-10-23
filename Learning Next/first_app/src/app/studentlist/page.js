import Link from "next/link";

export default function Studentlist(){
    return (
        <div>
            <h1>Hello Studentlist</h1>
            <ul>
                <li><Link href={"/studentlist/anil"}>Anil</Link></li>
                <li><Link href={"/studentlist/ravi"}>ravi</Link></li>
                <li><Link href={"/studentlist/vivek"}>Vivek</Link></li>
                <li><Link href={"/studentlist/sam"}>Sam</Link></li>
            </ul>
        </div>
    )
} 