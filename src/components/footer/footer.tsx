import { Link } from "lucide-react"
import Image from "next/image"

export const Footer = () =>{
    return (
        <footer className="border-t borde-white/10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between md:flex-row justify-center gap-8 py-8">
                  <Link href='/'>
                    <Image
                      src="/Logo.svg"
                      alt="Logo site"
                      width={116}
                      height={32}
                    />
              </Link>
              <nav className="flex flex-col">
                <Link href="/termos-de-uso" className="hover:text-primary">Termos de uso</Link>
                <Link href="/politica-de-privacidade" className="hover:text-primary">Política de Privacidade</Link>
                <Link href="/feedback" className="hover:text-primary">Feedback</Link>
              </nav>
                </div>
                
            </div>

        </footer>
    )
}