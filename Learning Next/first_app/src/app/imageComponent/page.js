import Image from "next/image";
import image from '../../../public/vercel.svg'

// image component is used to redux the size of image at website for fast loading of images 

export default function imageComponent(){

    return(
        <div>
            <Image
            src={image}
            height={500}
            width={500}
            />
        </div>
    )
}