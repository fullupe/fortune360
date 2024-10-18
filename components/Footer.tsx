import Link from 'next/link';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Fortune360 Solutions</h3>
            <p className="text-sm">Empowering lottery businesses with cutting-edge technology solutions.</p>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm hover:text-primary">Home</Link></li>
              <li><Link href="/partners" className="text-sm hover:text-primary">Partners</Link></li>
              <li><Link href="/projects" className="text-sm hover:text-primary">Projects</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Contact</h4>
            <p className="text-sm">Tema  cmmunity-5, school Road, Gh</p>
            <p className="text-sm">Phone: +233 (24) 123-4567</p>
            <p className="text-sm">Email: info@fortune360ghana.com</p>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground hover:text-primary"><Facebook size={20} /></a>
              <a href="#" className="text-foreground hover:text-primary"><Twitter size={20} /></a>
              <a href="#" className="text-foreground hover:text-primary"><Linkedin size={20} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t text-center text-sm">
          © {new Date().getFullYear()} fortune360 Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}