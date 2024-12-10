import React from 'react'
import CategoryCard from './catetoryCard'


function CategorySection() {
    const category =[
        {
          title:"Phones", image:"/images/Category1.svg"
        },
        {
          title:"Computers", image:"/images/Category-2.svg"
        },
        {
          title:"Smart Watches", image:"/images/Category-3.svg"
        },
        {
          title:"Cameras", image:"/images/Category-4.svg"
        },
        {
          title:"Headphones", image:"/images/Category-5.svg"
        },
        {
          title:"Gaming", image:"/images/Category-6.svg"
        },
      ]
  return (
    <>
     {/* Category Section */}
     <div className="flex flex-col gap-7 p-7">
     <div className="flex flex-col gap-5 py-4 ">
       <div className="flex items-center gap-2">
         <div className="bg-Button2 w-4 h-10 rounded border border-Button2"></div>{" "}
         <h1 className="font-sm  text-Secondary2">Category</h1>
       </div>
       
       <div>
         <h1 className="font-semibold  text-2xl md:text-[36px]">Browse By Category</h1>
       </div>
     </div>
   <div className="flex flex-col md:flex-row  md:px-0 gap-[30px]">
    {category.map((cat,index)=>(
     <CategoryCard {...cat} key={index}/>
    ))}
   </div>
   </div>
   </>
  )
}

export default CategorySection