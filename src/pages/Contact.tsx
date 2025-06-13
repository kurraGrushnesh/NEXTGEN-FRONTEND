
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";

const Contact = () => {
  return (
    <Layout>
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-8">THANK YOU</h1>
            <h2 className="text-2xl font-semibold mb-8">Contact Us</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              We'd love to hear from you! Whether you have questions, feedback, or partnership inquiries, feel free to reach out.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors">
              <CardContent className="p-6 text-center">
                <MapPin className="w-8 h-8 mx-auto mb-4 text-yellow-300" />
                <h4 className="font-bold mb-2">Office Address</h4>
                <p>Mussihapur Patna, 800006</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors">
              <CardContent className="p-6 text-center">
                <Phone className="w-8 h-8 mx-auto mb-4 text-yellow-300" />
                <h4 className="font-bold mb-2">Phone</h4>
                <p>+91 9508220237</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors">
              <CardContent className="p-6 text-center">
                <Mail className="w-8 h-8 mx-auto mb-4 text-yellow-300" />
                <h4 className="font-bold mb-2">Email</h4>
                <p>admin@nextgensoftwarehub.in</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors">
              <CardContent className="p-6 text-center">
                <Globe className="w-8 h-8 mx-auto mb-4 text-yellow-300" />
                <h4 className="font-bold mb-2">Website</h4>
                <p>www.nextgensoftwarehub.in</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold mb-4">Get in Touch Today!</h3>
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
