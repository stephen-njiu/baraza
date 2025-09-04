"use client"
import MainMenu from "@/components/MainMenu"
import StatusBar from "@/components/StatusBar"
import {useRouter} from "next/navigation"
import { useEffect } from "react"

const HomePage = () => {
    const router = useRouter()

    useEffect(() => {
        router.refresh()
    }, [router])
    
    return (
        <div className="flex flex-col gap-32 pt-20 pl-10 items-center max-md:gap-10 md:flex-row animate-fade-in">
            <StatusBar/>
            <MainMenu/>
        </div>
    )
}

export default HomePage