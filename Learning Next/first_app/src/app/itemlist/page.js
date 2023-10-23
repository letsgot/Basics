import Link from "next/link"

export default function Itemlist(){
    const arr = [123,2,3,4,55,4444,3223,234,256,665,356,332,1344]
    return (
        <div>
            {
                arr.map((val,i,arr)=>{
                    return <div><Link href={`/itemlist/${val}`}>val = {val}  i = {i}</Link></div>
                })
            }
        </div>
    )
}