import Link from "next/link"


export default function Navabar() {
    return(
        <div className="flex  p-2 w-full justify-evenly p-4 mb-4 mt-24 ">

            <Link href={'/'}><div className="border-2 border-black rounded-md p-2">Home</div></Link>
          <Link href={'/static-page'}> <div className="border-2 border-black rounded-md p-2">Server Page</div></Link> 
          <Link href={'/interactive-page'}><div className="border-2 border-black rounded-md p-2">Client Page</div></Link> 
        </div>
    )
}