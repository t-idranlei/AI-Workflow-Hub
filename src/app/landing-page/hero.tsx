import { Button } from '../components/ui/button'
import { ArrowRight } from 'lucide-react'
import itImage from "../assets/IMG_9629-scaled.jpg"

function hero() {
  return (
     <section id="features" className="relative overflow-hidden bg-linear-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 px-6 py-24 sm:py-32 transition-colors">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="flex flex-col gap-8">

            <div className="flex flex-col gap-4">
              <h1 className="text-6xl! sm:text-5xl lg:text-6xl font-bold! text-justify! -mb-4! tracking-tight text-[#002F87]! dark:text-blue-400!  transition-colors">
                Work smarter with the right AI tools.
              </h1>
              <p className="text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-1.5! mt-1.5! text-justify!">
                Explore a curated catalog aimed at enhancing productivity, automating workflows, and enabling smarter teamwork, featuring practical tools, guidelines, and use cases to optimize tasks and improve efficiency.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href = "/catalog">
              <Button size="lg" className="border border-black text-black text-base bg-white hover:bg-gray-800 hover:text-white dark:bg-blue-600 dark:hover:bg-blue-700 dark:text-white">
                Get Started
                <ArrowRight></ArrowRight>
              </Button></a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-2xl shadow-2xl dark:shadow-blue-900/20">
              <img
                src={itImage}
              />
            </div>
            <div className="absolute -bottom-4 -right-4 -z-10 size-72 rounded-full bg-blue-200 dark:bg-blue-900 opacity-50 dark:opacity-30 blur-3xl" />
            <div className="absolute -top-4 -left-4 -z-10 size-72 rounded-full bg-purple-200 dark:bg-purple-900 opacity-50 dark:opacity-30 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default hero