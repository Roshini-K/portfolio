import React from 'react';
import pkg from 'react-vertical-timeline-component';
const { VerticalTimeline, VerticalTimelineElement } = pkg;
import 'react-vertical-timeline-component/style.min.css';

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Backend Developer - Internship',
      company: 'Maverick Health',
      location: 'Buffalo, NY, USA',
      date: 'Sept. 2024 – Dec. 2024',
      description:
        'Engineered and developed the backend of a health platform app at Maverick Health. Implemented real-time health data tracking, educational resources, and personalized care recommendations for 1100 active users monthly.',
    },
    {
      type: 'work',
      title: 'Graduate Research Assistant',
      company: 'University at Buffalo',
      location: 'Buffalo, NY, USA',
      date: 'Oct. 2024 – Dec. 2024',
      description:
        "Analyzed the performance of Large Language Models (LLMs) (Llama 2) and ChatGPT (gpt3.5) models integrated into Softbank Robotics' Pepper robot.",
    },
    {
      type: 'education',
      title: 'Master of Science in Computer Science',
      company: 'State University of New York at Buffalo',
      location: 'Buffalo, NY, USA',
      date: 'Jan. 2024 – May 2025',
      description: 'Specialization in AI/ML',
    },
    {
      type: 'work',
      title: 'Software Development Engineer 1',
      company: 'Oracle Cerner',
      location: 'Bangalore, India',
      date: 'Jun. 2022 – Jan. 2024',
      description:
        "• Upgraded Java Reactor projects and eliminated 95% CVEs\n• Enhanced Java servers for VA's EHR system\n• Optimized timer implementations across domains",
    },
    {
      type: 'work',
      title: 'Software Intern',
      company: 'Oracle Cerner',
      location: 'Bangalore, India',
      date: 'Dec. 2021 – Jun. 2022',
      description:
        'Designed JavaFX UI for CCL Script conversion, implemented JUnit tests, and managed Jenkins integrations.',
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
