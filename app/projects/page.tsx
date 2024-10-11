import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import HeroSection from '@/components/HeroSection';

import Link from 'next/link'
export default function Projects() {
  const projects = [
    {
      title: 'National Lottery Modernization',
      description: 'Upgraded the entire lottery system for a major national lottery, increasing efficiency and security.',
      image: 'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    },
    {
      title: 'Mobile Lottery App',
      description: 'Developed a user-friendly mobile app for ticket purchases and result checking, boosting engagement.',
      image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    },
    {
      title: 'Retailer POS System',
      description: 'Implemented a state-of-the-art POS system for lottery retailers, streamlining sales and reporting.',
      image: '/image/pos.jpg',
    },
  ];

  return (
    <>
    <HeroSection title="Our Projects" message="Discover how we've transformed lottery operations around the world"/>

    <div className="container mx-auto px-4 py-12">
     

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src={project.image}
                alt={project.title}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{project.description}</CardDescription>
              <Button className="mt-4" variant="outline">Read Case Study</Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-4">Ready to Start Your Project?</h2>
        <p className="text-xl mb-8">
          Let's discuss how we can bring your lottery vision to life with our cutting-edge solutions.
        </p>
        <Button size="lg">
          <Link href="/contact">
          Contact Us
          </Link>
          </Button>
      </section>
    </div>

    </>
  );
}