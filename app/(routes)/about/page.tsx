import React from "react";
import Image from "next/image";

import { FaGithub,FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import Bottom from "@/app/component/HomePage/bottom";
import BreadCrumb from "@/app/component/breadCrumb";
function AboutPage() {
  return (
    <div className="max-w-7xl w-full  p-7">
      <BreadCrumb route={"About"}/>

      {/* section one*/}

      <div className="flex flex-col md:flex-row justify-between gap-4 py-7">
        <div className="md:w-1/2 w-full flex text-justify items-start justify-center flex-col gap-4 md:px-11">
          <h1 className="font-bold text-[36px] ">Our Story</h1>
          <p >
          Launced in 2015, Exclusive is South Asia&39;s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. 
          </p>
          
          <p>
          Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
          </p>
        </div>
        <div className="md:w-1/2 w-full">
          <Image
            src={"/images/about.svg"}
            alt="about page"
            width={705}
            height={609}
            className=""
          />
        </div>
      </div>

{/* section two */}
      <div className="grid grid-cols md:grid-cols-4 md:gap-11 gap-6 w-full  md:p-14">
        <CardComponent
          image={"/images/about-shop.svg"}
          title={"10.5k"}
          description={"Sallers active our site"}
        />
        <CardComponent
          image={"/images/about-shop.svg"}
          title={"33k"}
          description={"Mopnthly Produduct Sale"}
        />
        <CardComponent
          image={"/images/about-shop.svg"}
          title={"45.5k"}
          description={"Customer active in our site"}
        />
        <CardComponent
          image={"/images/about-shop.svg"}
          title={"22k"}
          description={"Anual gross sale in our site"}
        />
      </div>

      {/* section three */}
        <div className="grid grid-cols md:grid-cols-3 justify-items-center gap-7 w-full  py-6">
            <TeamCard image={"/images/about1.svg"} teamMem={"Tom Cruise"} memTitle={"Founder & Chairman"} />
            <TeamCard image={"/images/about2.svg"} teamMem={"Emma Watson"} memTitle={"Managing Director"} />
            <TeamCard image={"/images/about3.svg"} teamMem={"Will Smith"} memTitle={"Product Designer"} />
        </div>

        {/* section four */}
        <div className="mt-4"><Bottom /></div>

    </div>
  );
}

export default AboutPage;

interface Props {
  image: string;
  title: string;
  description: string;
}
const CardComponent = ({ image, title, description }: Props) => {
  return (
    <div className="flex flex-col hover:text-Primary hover:bg-Secondary2 space-y-2 border border-gray-700 items-center justify-center p-6 py-4">
      <div className="hover:bg-Primary bg-gray-200 flex items-center justify-center">
        <Image
          src={image}
          alt={title}
          width={38}
          height={38}
          className=" bg-Button hover:bg-Primary flex justify-center p-2"
        />
      </div>
      <h1 className="text-[26px] font-semibold">{title}</h1>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export interface TeamProp {
    image:string,
    teamMem:string,
    memTitle:string,

}
function TeamCard(props:TeamProp){
    return(
        <div className="flex flex-col items-left gap-y-2">
            
                <Image src={props.image} alt={props.teamMem} width={70} height={0} className="h-auto  bg-gray-400 w-full "/>
            
            <div className="text-left text-xl">
                <h1 className="text-md font-medium ">{props.teamMem}</h1>
                <p>{props.memTitle}</p>
            </div>
            <p className="flex flex-row space-x-4 ">
                <FaLinkedin size={28}/> <FaXTwitter size={28}/> <FaGithub size={28}/>
            </p>
        </div>
    )
}