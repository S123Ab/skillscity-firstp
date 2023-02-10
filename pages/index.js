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
    <div className="w-full py-10 bg-blue-100">Hello

    <button 
      className="bg-blue-500 px-2 py-1 rounded"
      onClick= {handleClick}
    >

      click me!!!
    </button>

    <div>
      <Link href= "/books">
        Go to books page 
      </Link>
    </div>
  </div>
  )
}