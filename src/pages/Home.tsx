
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            INTERNSHIP TASK
          </h1>
          <h2 className="text-3xl font-semibold mb-8 text-yellow-300">
            FRONTEND DEVELOPER
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Join our comprehensive 4-week frontend development internship program and build 
            real-world projects while learning industry-standard technologies.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge className="bg-white text-blue-600 px-4 py-2 text-lg">HTML & CSS</Badge>
            <Badge className="bg-white text-blue-600 px-4 py-2 text-lg">JavaScript</Badge>
            <Badge className="bg-white text-blue-600 px-4 py-2 text-lg">React.js</Badge>
            <Badge className="bg-white text-blue-600 px-4 py-2 text-lg">API Integration</Badge>
          </div>
          <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3">
            Apply Now
          </Button>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">Program Overview</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
              <div className="text-lg font-semibold mb-2">Weeks</div>
              <p className="text-gray-600">Intensive learning program</p>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">7</div>
              <div className="text-lg font-semibold mb-2">Hours/Week</div>
              <p className="text-gray-600">Flexible working hours</p>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-lg font-semibold mb-2">Hands-on</div>
              <p className="text-gray-600">Real-world projects</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
