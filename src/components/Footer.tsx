
import { Code } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold">Next Gen Software Hub Pvt. Ltd.</h3>
              <p className="text-gray-400 text-sm">Building the future of technology</p>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex space-x-4">
              <Badge className="bg-blue-100 text-blue-800">ISO Certified</Badge>
              <Badge className="bg-green-100 text-green-800">NGSHPL</Badge>
              <Badge className="bg-orange-100 text-orange-800">Startup India</Badge>
            </div>
          </div>
        </div>
        <Separator className="my-6 bg-gray-700" />
        <div className="text-center text-gray-400">
          <p>&copy; 2024 Next Gen Software Hub Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
