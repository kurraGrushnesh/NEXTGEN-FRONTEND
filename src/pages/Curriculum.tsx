
import { Calendar, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";

const Curriculum = () => {
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

  return (
    <Layout>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
            4-Week Learning Journey
          </h1>
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
    </Layout>
  );
};

export default Curriculum;
