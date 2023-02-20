import Topics from "@/components/home/topics";
import Hero from "@/components/home/hero";
import Content from "@/components/shared/content";
import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";
import Link from "next/link"
import { useRouter } from "next/router";
import { useState } from "react";



export default function Homepage() {
  const router = useRouter();

  const handleClick = () => {
    alert("you clicked the button!");

    //  make API call

    router.push("/books");
    // navigate to book page
  }
  return (
    <div className="w-full ">
      <Header name= "Home"/>

      <Hero 
        imgUrl="/assets/picture_2.jpg"
        title="Samina"
        subtitle="I am studying bootcamp at skillscity"
      />

  <Content>
     <div className="w-full flex flex-col">

      <Topics /> 
      
    <div>
     <button 
      className="bg-blue-500 px-2 py-1 rounded"
      onClick= {handleClick}>

      click me!!!
    </button>
    </div>
</div>
    </Content>
    
    <Footer href="/books" title="Books page"/>
  </div>
  )
}