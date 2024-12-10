import Image from "next/image"
interface CategoryProp {
    title:string,image:string
}
export default function CategoryCard({title,image}:CategoryProp){
return(
    
    <div className="w-full flex flex-col border border-Button py-5 gap-4 justify-center items-center  hover:bg-Secondary2">
        <Image src={image} alt={title} width={56} height={56}/>
         <h1>{title}</h1>
    </div>
    
    )
}