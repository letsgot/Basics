'use client'
export default function Lecture({params}){
    // console.log(params);
    return(
        <div>
            <h2>{params.lectures[0]}</h2>
            <h2>{params.lectures[1]}</h2>
        </div>
    )
}