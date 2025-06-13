
import { FileText, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";

const Submission = () => {
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
    <Layout>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Final Report Submission Guidelines
          </h1>
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
    </Layout>
  );
};

export default Submission;
