import React from 'react';
import pkg from 'react-vertical-timeline-component';
const { VerticalTimeline, VerticalTimelineElement } = pkg;
import 'react-vertical-timeline-component/style.min.css';

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Graduate Research Assistant',
      company: 'University at Buffalo',
      location: 'Buffalo, NY, USA',
      date: 'Nov. 2024 – Apr. 2024',
      description:
        "• Automated image processing by building a real time face recognition system on the Pepper robot using OpenCV, InsightFace with ArcFace embeddings. Included image pre-processing like alignment, resizing to achieve 90% accuracy. \n• Integrated and tested face recognition pipeline with state-of-the-art LLMs, OpenAI API to enable personalized human-robot interactions. Improved interaction accuracy by 60% & contextual response quality by 50%.",
    },
    {
      type: 'work',
      title: 'Backend Developer - Internship',
      company: 'Maverick Health',
      location: 'Buffalo, NY, USA',
      date: 'Aug. 2024 – Dec. 2024',
      description:
        '• Architected 10+ interactive application prototypes & web consoles using Figma. Designed relational database schemas.\n• Implemented backend solutions using Node.js and PostgreSQL with Amazon Web Services infrastructure by provisioning EC2 and RDS instances. Built and tested RESTful APIs, JSON with Postman. \n• Streamlined a platform for 800 customer service agents, incorporating software development life cycle best practices.',
    },
    {
      type: 'education',
      title: 'Master of Science in Computer Science',
      company: 'State University of New York at Buffalo',
      location: 'Buffalo, NY, USA',
      date: 'Jan. 2024 – May 2025',
      description: 'Specialization in AI/ML\n Coursework:\n• Data Model Query Language • Data intensive computing • Intro to Machine Learning • Analysis of Algorithms • Operating systems • Computer security • Project development • Statistical data mining • Deep learning • Computer vision',
    },
    {
      type: 'work',
      title: 'Software Development Engineer 1',
      company: 'ORACLE',
      location: 'Bangalore, India',
      date: 'Dec. 2021 – Jan. 2024',
      description:
        "• Enhanced high-performance Java reactor microservices architecture in healthcare systems using Git version control (source control management) & SVN. Reduced security vulnerabilities by 95% with Apache Maven & Gradle. \n• Resolved 75% bugs by troubleshooting and software debugging Multi-threaded applications in C#.NET Core and MVC .NET framework. Followed object-oriented programming to ensure compliance with software design patterns. \n• Implemented Java servers, JavaFX UI, JUnit test cases as part of Task Order52 (TO52) initiative for the U.S. Dept. of Veterans Affairs, resulting in 33% improvement in operational efficiency of Electronic Health Records. \n• Executed unit testing, regression/sanity testing using Selenium and test automation of 25+ test plans across 6 CI/CD pipelines in Jenkins. Analyzed the build process using PowerBI, data visualization & Excel. \n• Facilitated 25+ successful software releases into production by coordinating across development, QA, and operations teams, ensuring zero critical incidents post-deployment and maintaining 99% system uptime, demonstrating reliability. \n• Spearheaded end-to-end 50+ design reviews, code reviews, real-time programming, improved code quality, and technical documentation while adhering to Agile methodologies, JIRA, Scrum & coding standard practices.",
    },
    {
      type: 'education',
      title: 'Bachelor of Engineering in Computer Science',
      company: 'New Horizon College of Engineering',
      location: 'Bangalore, India',
      date: 'Aug. 2018 – Jul. 2022',
      description: 'Computer Science & Engineering',
    },
  ];

  return (
    <section className="py-10 px-4 dark:bg-gray-900" id="experience">
      <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
        Education & Experience
      </h2>
      <VerticalTimeline lineColor={'#2997ff'}>
        {experiences.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            className={`vertical-timeline-element--${exp.type}`}
            position={index % 2 === 0 ? 'left' : 'right'}
            contentStyle={{
              background: exp.type === 'education' ? '#e8f4f8' : '#f8f0e8',
              color: '#1d1d1f',
              boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
            }}
            contentArrowStyle={{
              borderRight: `7px solid ${
                exp.type === 'education' ? '#e8f4f8' : '#f8f0e8'
              }`,
            }}
            date={exp.date}
            iconStyle={{
              background: exp.type === 'education' ? '#2997ff' : '#ff9f0a',
              color: '#fff',
            }}
            icon={
              exp.type === 'education' ? (
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
              )
            }
          >
            <h3 className="vertical-timeline-element-title font-bold text-lg">
              {exp.title}
            </h3>
            <h4 className="vertical-timeline-element-subtitle mt-2 text-gray-600">
              {exp.company}
            </h4>
            <h5 className="mt-1 text-sm text-gray-500">{exp.location}</h5>
            <p className="mt-4 whitespace-pre-line">{exp.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
