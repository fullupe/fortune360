
import HeroSection from '@/components/HeroSection'
import Image from 'next/image'

export default function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col">

      <main className="flex-grow bg-gray-100">
       <HeroSection title="About Fotune360" message="We're a leading technology provider specializing in innovative online Lottery solutions.
      Our platform empowers lottery companies to offer secure, reliable, and engaging digital experiences for their players. "/>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>

                <p className="text-lg mb-4">
                 Our mission is to revolutionize the lottery industry by delivering cutting-edge technology solutions that enhance player engagement and drive revenue growth. 
                 We specialize in developing comprehensive online lottery platforms that offer a seamless user experience, robust security features, and a wide range of customizable options. 
                </p>

                 <p className="text-lg mb-4"> 
                 Our platform is designed to meet the unique needs of lottery companies, from small-scale operations to large-scale international brands.
                 One of our key features is the integration of Android POS systems, providing a convenient and efficient way for players to purchase lottery tickets in person. Our POS solutions are designed to be user-friendly and reliable, ensuring a smooth transaction process for both players and retailers.
                 </p>
                <p className="text-lg">
                With a team of experienced professionals and a passion for innovation, we are committed to providing exceptional customer service and support. 
                Our focus on continuous improvement ensures that our platform remains at the forefront of the industry, offering the latest advancements in lottery technology.
                </p>
              </div>
              <div className="relative h-96">
                <Image
                  src="/image/Tearm.png"
                  alt="Fortune360 Team"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-gray-200">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Innovation", description: "We are dedicated to staying ahead of the curve by continuously investing in research and development. We strive to develop cutting-edge technologies that revolutionize the lottery industry and provide exceptional value to our clients and players." },
                { title: "Creativity", description: "We believe in thinking outside the box and embracing innovative ideas. We foster a culture of creativity and encourage our team to explore new possibilities and push the boundaries of what is possible." },
                { title: "Community", description: "We are committed to building strong relationships with our clients, partners, and the communities we serve. We believe in giving back and supporting initiatives that make a positive impact on society." }
              ].map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
     
    </div>
  )
}