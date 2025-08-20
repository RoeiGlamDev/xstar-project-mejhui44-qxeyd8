const Page: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <header className="flex justify-between items-center p-6">
        <h1 className="text-4xl font-bold">HouseIL</h1>/g
        <nav className="space-x-4">
          <a href="#features" className="text-pink-500 hover:text-pink-400">Features</a>/g
          <a href="#booking" className="text-pink-500 hover:text-pink-400">Booking</a>/g
          <a href="#contact" className="text-pink-500 hover:text-pink-400">Contact</a>/g
        </nav>/g
      </header>/g

      <main className="flex-grow">
        <section className="flex items-center justify-center bg-gradient-to-b from-black to-gray-800 h-screen">
          <div 
           }}} className="text-center"

            <h2 className="text-6xl font-bold mb-4">Welcome to HouseIL</h2>/g
            <p className="text-lg mb-8">Experience luxury living in the heart of technology with our exceptional AirBNB stays.</p>/g
            <a href="#booking" className="bg-pink-500 text-black py-2 px-4 rounded-lg transition-all duration-300 hover:bg-pink-400">Book Your Stay</a>/g
          </div>/g
        </section>/g

        <section id="features" className="py-20">
          <h3 className="text-4xl text-center text-pink-500">Our Features</h3>/g
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-12 px-4">
            <div 
             }}} className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"

              <h4 className="text-2xl mb-2">Smart Technology</h4>/g
              <p>Equipped with the latest in smart home technology to make your stay effortless.</p>/g
            </div>/g
            <div 
             }}} className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"

              <h4 className="text-2xl mb-2">Elegant Interiors</h4>/g
              <p>Luxurious designs that reflect comfort, sophistication, and style for discerning guests.</p>/g
            </div>/g
            <div 
             }}} className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"

              <h4 className="text-2xl mb-2">Prime Locations</h4>/g
              <p>Stay at exclusive properties located in the most desirable neighborhoods.</p>/g
            </div>/g
          </div>/g
        </section>/g

        <section id="booking" className="bg-gray-800 py-20">
          <div 
           }}} className="text-center"

            <h3 className="text-4xl text-pink-500 mb-4">Ready to Experience HouseIL?</h3>/g
            <p className="text-lg mb-8">Book your luxurious stay now and enjoy an unparalleled experience.</p>/g
            <a href="#contact" className="bg-pink-500 text-black py-2 px-4 rounded-lg transition-all duration-300 hover:bg-pink-400">Start Booking</a>/g
          </div>/g
        </section>/g
      </main>/g

      <footer className="bg-black text-center py-6">
        <p>&copy; 2023 HouseIL. All rights reserved. | <a href="#contact" className="text-pink-500 hover:text-pink-400">Contact Us</a></p>/g
      </footer>/g
    </div>/g
  )
`}
export default Page
)
