function hero() {
  return (
    <section
      id="catalog"
      className="relative overflow-hidden bg-linear-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 px-6 py-24 sm:py-32 transition-colors"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h1 className="text-8xl! sm:text-5xl lg:text-6xl font-bold! tracking-tight text-[#002F87]! font-ubuntu! dark:text-blue-400!  transition-colors">
                Rules and Guidelines for AI use and Data Protection
              </h1>
              <p className="mt-4! -pt-[2rem]! text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto! text-center!">
                Find the right AI tool for any task. Each entry shows which
                tools to use, what the safety rules are, and when you need a
                human review before using the output.
              </p>
              <div className="items-center">
                <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 border-blue-900! px-4 py-1.5 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-400 w-fit">
                <span className="h-2 w-2 rounded-full bg-blue-500" />
                Aligned to AI Governance Framework and Company Standards.
              </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default hero;
