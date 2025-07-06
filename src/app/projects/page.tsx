import Header from "./components/header"
import Development from "@/components/development"
import Design from "@/components/design"
export default function ProjectsPage(){
    return(
        <main className="max-w-[1280px] m-auto p-4">
            <Header />
            <Development />
            <Design />
        </main>
    )
    
}