import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { ArrowRight, Zap, Shield, TrendingUp } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary-foreground text-white py-20">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-5xl font-bold mb-6">Revolutionize Your Lottery Business</h1>
            <p className="text-xl mb-8">Empower your lottery operations with cutting-edge technology solutions designed for the digital age.</p>
            <Button size="lg" variant="secondary" className="mr-4">Get Started</Button>
            <Button size="lg" variant="default">Learn More</Button>
          </div>
          <div className="lg:w-1/2">
            <Image
              src="https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
              alt="Lottery Technology"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Fortune360 Solutions?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Lightning Fast", description: "Our systems are optimized for speed, ensuring quick ticket sales and instant results." },
              { icon: Shield, title: "Secure & Reliable", description: "Bank-grade security measures to protect your data and maintain the integrity of every draw." },
              { icon: TrendingUp, title: "Scalable Solutions", description: "From local lotteries to national operations, our platform grows with your business." }
            ].map((feature, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <feature.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Comprehensive Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Lottery Management Systems",
              "Mobile Ticket Solutions",
              "Draw Management",
              "Retailer Networks",
              "Analytics & Reporting",
              "Compliance & Regulations"
            ].map((service, index) => (
              <div key={index} className="bg-background rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-2">{service}</h3>
                <p className="text-muted-foreground mb-4">Tailored solutions to meet your specific lottery needs.</p>
                <Button variant="link" className="group">
                  Learn More <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Lottery Business?</h2>
          <p className="text-xl mb-8">Join the ranks of successful lottery operators who trust Fortune360 Solutions.</p>
          <Button size="lg" variant="secondary">
            Schedule a Demo
          </Button>
        </div>
      </section>
    </div>
  );
}