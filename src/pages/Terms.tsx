
import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";

const Terms = () => {
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

  return (
    <Layout>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Terms and Conditions
          </h1>
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
    </Layout>
  );
};

export default Terms;
