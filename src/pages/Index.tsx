
import { Calendar, Code, Users, Award, Mail, Phone, MapPin, Globe, FileText, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const weeks = [
    {
      week: 1,
      title: "Foundations & Setup",
      color: "bg-blue-500",
      tasks: [
        "Learn and practice HTML and CSS by creating a responsive landing page",
        "Implement layouts using Flexbox and Grid",
        "Add animations and transitions using CSS",
        "Set up Git and GitHub, create a repository, and push the project"
      ]
    },
    {
      week: 2,
      title: "JavaScript & Interactivity",
      color: "bg-purple-500",
      tasks: [
        "Understand JavaScript fundamentals, including variables, functions, loops, and arrays",
        "Work on DOM manipulation by creating an interactive to-do list",
        "Implement form validation using JavaScript event handling",
        "Fetch and display data from a public API using JavaScript"
      ]
    },
    {
      week: 3,
      title: "React.js Essentials",
      color: "bg-green-500",
      tasks: [
        "Set up a React project and build reusable components",
        "Work with props and state to manage UI interactions",
        "Implement React Hooks such as useState and useEffect to manage state and API calls",
        "Build a mini-project such as a weather app or an expense tracker"
      ]
    },
    {
      week: 4,
      title: "Advanced Frontend & Final Project",
      color: "bg-orange-500",
      tasks: [
        "Learn and apply styling frameworks such as Tailwind CSS or Bootstrap",
        "Implement React Router to create navigation between pages",
        "Deploy the final project using GitHub Pages or Vercel",
        "Submit the final project with documentation"
      ]
    }
  ];

  const termsAndConditions = [
    {
      title: "Duration & Working Hours",
      points: [
        "Interns are expected to work 7 hours per week",
        "Flexible working hours may be allowed with prior approval"
      ]
    },
    {
      title: "Roles and Responsibilities",
      points: [
        "Interns must complete assigned tasks and projects within the given deadlines",
        "They must adhere to company policies and maintain professionalism",
        "Interns should report to their assigned supervisor regularly"
      ]
    },
    {
      title: "Confidentiality & Data Protection",
      points: [
        "Interns must not disclose any confidential or proprietary information",
        "All work and intellectual property developed during the internship belong to Next Gen Software Hub Pvt. Ltd.",
        "Unauthorized use of company data, resources, or systems is strictly prohibited"
      ]
    },
    {
      title: "Code of Conduct",
      points: [
        "Interns must maintain professionalism and ethical behavior",
        "Any form of harassment, discrimination, or misconduct will result in termination",
        "Interns must respect company policies, employees, and clients"
      ]
    },
    {
      title: "Stipend & Benefits",
      points: [
        "The internship is unpaid program",
        "No employment benefits (such as insurance, leave, or bonuses) will be provided"
      ]
    },
    {
      title: "Certification & Experience Letter",
      points: [
        "A certificate of completion will be awarded upon successful fulfillment of internship requirements",
        "Experience letters will only be issued to interns who complete the full duration of the program"
      ]
    },
    {
      title: "Liability & Disclaimers",
      points: [
        "The company is not responsible for any personal loss or injury during the internship",
        "The internship does not guarantee future employment"
      ]
    }
  ];

  const submissionGuidelines = [
    "Project Requirements",
    "A complete and responsive frontend project demonstrating skills learned during the internship",
    "The project should include HTML, CSS, JavaScript, React, API integration, and routing",
    "Report Structure",
    "Title Page: Internship title, name, and project title",
    "Introduction: Brief about the internship objectives",
    "Technology Stack: List of technologies used",
    "Project Overview: Description of the project, its features, and functionalities",
    "Challenges & Learnings: Key challenges faced and how they were resolved",
    "Code Repository Link: GitHub link to the project",
    "Screenshots & Demonstration: Screenshots of the final project interface",
    "Deployment Link: Link to the live project",
    "Submission Process",
    "Submit the final report as a PDF document",
    "Upload the project code to GitHub and share the repository link",
    "Provide a recorded demo or a presentation of the project"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Next Gen Software Hub</h1>
                <p className="text-gray-600">Pvt. Ltd.</p>
              </div>
            </div>
            <Badge className="bg-blue-100 text-blue-800 px-4 py-2 text-lg">
              Internship Program
            </Badge>
          </div>
        </div>
      </header>

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

      {/* Week by Week Curriculum */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            4-Week Learning Journey
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {weeks.map((week) => (
              <Card key={week.week} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className={`${week.color} text-white p-6`}>
                  <div className="flex items-center justify-center mb-4">
                    <Calendar className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-center">Week {week.week}</h3>
                  <p className="text-center font-semibold">{week.title}</p>
                </div>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {week.tasks.map((task, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{task}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Terms and Conditions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Terms and Conditions
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-4 text-blue-600">Next Gen Software Hub Pvt. Ltd.</h3>
                <p className="text-lg font-semibold mb-2">Internship Terms and Conditions</p>
                <p className="text-gray-700 mb-4">
                  <strong>1. Introduction</strong><br />
                  These Terms and Conditions govern the internship program at Next Gen Software Hub Pvt. Ltd. 
                  By participating in the internship, the intern agrees to comply with these terms.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {termsAndConditions.map((section, index) => (
                  <div key={index}>
                    <h4 className="text-lg font-bold mb-3 text-blue-600">
                      {index + 2}. {section.title}
                    </h4>
                    <ul className="space-y-2">
                      {section.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start space-x-2">
                          <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-2"></span>
                          <span className="text-sm text-gray-700">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Submission Guidelines */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Final Report Submission Guidelines
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <FileText className="w-8 h-8 text-blue-600" />
                    <h3 className="text-2xl font-bold text-blue-600">Requirements</h3>
                  </div>
                  <div className="space-y-4">
                    {submissionGuidelines.slice(0, Math.ceil(submissionGuidelines.length / 2)).map((item, index) => (
                      <div key={index}>
                        {index % 2 === 0 ? (
                          <h4 className="font-bold text-gray-900 mb-2">{index / 2 + 1}. {item}</h4>
                        ) : (
                          <p className="text-gray-700 mb-4">{item}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <Award className="w-8 h-8 text-blue-600" />
                    <h3 className="text-2xl font-bold text-blue-600">Guidelines</h3>
                  </div>
                  <div className="space-y-4">
                    {submissionGuidelines.slice(Math.ceil(submissionGuidelines.length / 2)).map((item, index) => (
                      <div key={index}>
                        {item.includes(':') ? (
                          <h4 className="font-bold text-gray-900 mb-2">{item}</h4>
                        ) : (
                          <p className="text-gray-700 mb-2 flex items-start space-x-2">
                            <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-2"></span>
                            <span>{item}</span>
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-8">THANK YOU</h2>
            <h3 className="text-2xl font-semibold mb-8">Contact Us</h3>
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

      {/* Footer */}
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
    </div>
  );
};

export default Index;
