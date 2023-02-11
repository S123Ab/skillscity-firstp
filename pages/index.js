import Link from "next/link"
import { useRouter } from "next/router";
import { useState } from "react";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";

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

    <button 
      className="bg-blue-500 px-2 py-1 rounded"
      onClick= {handleClick}
    >

      click me!!!
    </button>

    <Footer href="/books" title="Books page"/>
    </div>
  )
}