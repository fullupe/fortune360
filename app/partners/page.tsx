import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HandshakeIcon, BuildingIcon, GlobeIcon } from 'lucide-react';
import HeroSection from '@/components/HeroSection';

export default function Partners() {
  const partners = [
    { name: 'GlobalLotto Systems', description: 'Worldwide lottery technology provider', icon: GlobeIcon },
    { name: 'SecureDraws Inc.', description: 'Specialized in secure draw systems', icon: BuildingIcon },
    { name: 'RetailTech Solutions', description: 'Expert in lottery retail technologies', icon: HandshakeIcon },
  ];

  return (

    <>
    <HeroSection 
    title="Our Partners" 
    message="We collaborate with industry leaders to deliver the best lottery solutions"/>
    
   
    <div className="container mx-auto px-4 py-12">
      

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {partners.map((partner, index) => (
          <Card key={index} className="flex flex-col justify-between">
            <CardHeader>
              <partner.icon className="w-12 h-12 mb-4" />
              <CardTitle>{partner.name}</CardTitle>
              <CardDescription>{partner.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">Learn More</Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-4">Become a Partner</h2>
        <p className="text-xl mb-8">
          Interested in partnering with LotteryTech Solutions? Let's explore how we can work together.
        </p>
        <Button size="lg">Contact Us</Button>
      </section>
    </div>
    </>
  );
}