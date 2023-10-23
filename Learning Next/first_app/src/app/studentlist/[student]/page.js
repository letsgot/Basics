'use client'
export default function Student({params}){
    console.log(params)
    return(
        <div>
            <h2>Hello student {params.student}</h2>
        </div>
    )
}