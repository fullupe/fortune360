import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail } from 'lucide-react';
import HeroSection from '@/components/HeroSection';

export default function Contact() {
  return (
    <>
    <HeroSection title="Contact Us" message="Get in touch with our team for any inquiries or support"/>
    <div className="container mx-auto px-4 py-12">
    
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
          <form className="space-y-4">
            <Input placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
            <Input placeholder="Subject" />
            <Textarea placeholder="Your Message" className="h-32" />
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <div className="space-y-4">
            {[
              { icon: MapPin, title: 'Address', content: 'Tema  cmmunity-5, school Road, Gh' },
              { icon: Phone, title: 'Phone', content: '+233 (24) 123-4567' },
              { icon: Mail, title: 'Email', content: 'info@fortune360solutions.com' },
            ].map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <item.icon className="w-5 h-5 mr-2" />
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.content}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}