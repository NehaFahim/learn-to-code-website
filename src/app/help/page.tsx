import React from 'react';
import Header from '../components/header';

const HelpPage = () => {
  return (
    <div>
      <Header/>
    <div className="p-8 bg-gradient-to-b from-blue-50 to-white min-h-screen text-gray-800 bg-cover  bg-center" style={{backgroundImage: "url('/line.jpg')"}}>
      <div className="max-w-4xl mx-auto shadow-lg rounded-lg overflow-hidden bg-opacity-15 bg-white">
        <header className="bg-blue-400 text-white p-6 text-center">
          <h1 className="text-4xl font-bold">Help & Support</h1>
          <p className="mt-2">Get assistance and resources to make the most of your learning journey.</p>
        </header>

        <div className="p-6 space-y-8">
          {/* Getting Started Section */}
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-3xl font-semibold text-blue-600 mb-3">Getting Started</h2>
            <p>Welcome to our 'Learn to Code' platform! Here’s a quick guide to help you get started:</p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-gray-700">
              <li><span className="font-medium">Beginner's Guide</span>: Explore our beginner resources to kickstart your learning.</li>
              <li><span className="font-medium">Tutorials</span>: Learn HTML, CSS, JavaScript, and more from our tutorials.</li>
              <li><span className="font-medium">Practice Exercises</span>: Try hands-on exercises to reinforce your knowledge.</li>
            </ul>
          </section>

          {/* FAQs Section */}
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-3xl font-semibold text-blue-600 mb-3">Frequently Asked Questions</h2>
            <ul className="space-y-4 text-gray-700">
              <li>
                <strong>Q: How do I start learning a new language?</strong><br />
                <span>A: Visit our 'Get Started' page, and follow the guides in the specific language section you want to learn.</span>
              </li>
              <li>
                <strong>Q: Can I save my progress?</strong><br />
                <span>A: Yes, create an account, and your progress will be saved automatically.</span>
              </li>
              <li>
                <strong>Q: Where can I practice coding?</strong><br />
                <span>A: Go to our 'Practice' section, where you’ll find exercises and challenges to enhance your skills.</span>
              </li>
            </ul>
          </section>

          {/* Contact Section */}
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-3xl font-semibold text-blue-600 mb-3">Need More Help?</h2>
            <p>If you still have questions, feel free to <a href="mailto:support@learntocode.com" className="text-blue-500 underline hover:text-blue-700">contact our support team</a>.</p>
          </section>

          {/* Additional Resources */}
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-3xl font-semibold text-blue-600 mb-3">Additional Resources</h2>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li><a href="/tutorials" className="text-blue-500 underline hover:text-blue-700">Browse all tutorials</a></li>
              <li><a href="/community" className="text-blue-500 underline hover:text-blue-700">Join our community forum</a></li>
              <li><a href="/blog" className="text-blue-500 underline hover:text-blue-700">Read our blog for tips and updates</a></li>
            </ul>
          </section>
        </div>

        <footer className="bg-blue-400 text-white text-center py-4">
          <p>&copy; 2024 Learn to Code. All rights reserved.</p>
        </footer>
      </div>
    </div>
    </div>
  );
};

export default HelpPage;

