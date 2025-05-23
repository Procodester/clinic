import { statsData } from "./stats.data"

  
  function Stats() {
    return (
      <section className="py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
  
          <div className="grid gap-6 grid-cols-3">
            {statsData.map((stat, index) => (
              <div key={index} className=" space-y-2 text-center">
                <div className="text-2xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-600">{stat.value}</div>
                <p className="text-xs md:text-sm lg:text-base font-medium text-accent-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default Stats