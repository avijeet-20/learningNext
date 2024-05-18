

export default function Static() {
    return (
        <div>
          <h1 className="w-full flex justify-center font-bold text-2xl">Welcome to static Page</h1>
    <p className="mt-12 ">Thsi paragraph right here is rendered statically using Next.js<br></br> By generrating this content on the server at build time, Next.js ensures that search engines can easily<br></br>
            crawl and index this page, boosting its SEO , Plus, serving Sttic content leads to faster loading <br></br>times and a smooteher user experience. And if i need interactivity, Next.js <br></br>allows me to use
            the "use client" directive for specific components.
          </p>
          
          <p>Pretty cool, right? Noww navigate to the "client Page" to check how interactivity is added in Next.js!</p>
        </div>
    )
}