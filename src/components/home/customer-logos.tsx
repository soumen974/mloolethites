"use client"

export function CustomerLogosSection() {
  const logos = [
    "https://ext.same-assets.com/2657846677/1285754658.svg",
    "https://ext.same-assets.com/2657846677/1285754658.svg",
    "https://ext.same-assets.com/2657846677/1285754658.svg",
    "https://ext.same-assets.com/2657846677/1285754658.svg",
    "https://ext.same-assets.com/2657846677/1285754658.svg",
    "https://managedmethods.com/wp-content/uploads/Mesa-County-Valley-School-District-51-CO-ManagedMethods-Customers.png",
    "https://managedmethods.com/wp-content/uploads/Deer-Creek-School-District-OK-ManagedMethods-Customers.png",
    "https://managedmethods.com/wp-content/uploads/Walton-County-Schools-GA-ManagedMethods-Customers.png",
    "https://managedmethods.com/wp-content/uploads/Tuscaloosa-County-School-System-AL-ManagedMethods-Customers.png",
    "https://managedmethods.com/wp-content/uploads/Cleveland-County-Schools-NC-ManagedMethods-Customers.png",
  ]

  return (
    <section className="py-16 bg-background">
      <div className="container-custom">
        <div className="flex flex-col items-center mb-8">
          <img
            src="https://ext.same-assets.com/2657846677/2116589346.svg"
            alt="Decorative icon"
            className="w-8 h-8 mb-4"
          />
          <h2 className="text-xl font-semibold">Leaders in K-12 Data Security & Cyber Safety</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={logo}
                alt={`School district logo ${index}`}
                className="max-h-16 max-w-full opacity-60"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
