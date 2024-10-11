import React from 'react'

interface Props{
    title:string,
    message:string
}

function HeroSection({title,message}:Props) {
  return (
    <section className="py-20 mb-4 bg-blackd bg-gradient-to-r from-primary to-primary-foreground text-white">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">{title}</h1>
      <p className="text-xl mb-8 text-center max-w-3xl mx-auto">
      {message}

      </p>
    </div>
  </section>
  )
}

export default HeroSection