'use client';
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: 'Programming Languages',
    id: 'skills',
    content: (
      <ul className="list-disc pl-2">
        <li>
          Programming language: Java, C++, C, Python, JavaScript, TypeScript,
          Assembly language, Golang
        </li>
        <li>Database: MongoDB, SQL, MySQL, PostgreSQL</li>
        <li>
          Web Technologies and Framework: HTML, CSS, Bootstrap, React.js,
          Next.js, Django, Flask, Node.js, Next.js
        </li>
        <li>Cloud Platforms: AWS, Azure, Firebase</li>
        <li>
          DevOps: Continuous Integration (CI), Continuous Deployment (CD), Git,
          Linux, System Design, Docker, Kubernetes Jenkins , Redis
        </li>
        <li>
          Other: RESTful, Strong communication, Teamwork, Leadership, Agile and
          Scrum Development Education
        </li>
      </ul>
    ),
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <ul className="list-disc pl-2">
        <li>San Francisco State University 2021-2023</li>
        <h6>Bachelor of Science in Computer Science </h6>
        <li>Ohlone College 2019-2021 </li>
        <h6>Associate degree in Computer Science </h6>
      </ul>
    ),
  },
  {
    title: 'Certifications',
    id: 'certifications',
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js, Express, MongoDB & More Bootcamp 2023</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState('skills');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg mb-3 ">
            Hello, I'm Yueling, a recent graduate from San Francisco State
            University with a passion for Computer Science. In my late 20s, I
            took a leap of faith, returning to college to dive into Computer
            Science. This decision was rooted in a profound belief: it's never
            too late to pursue what you're truly passionate about. And indeed, I
            relish every moment of this journey.
          </p>

          <p className="text-base lg:text-lg">
            I'm a strong advocate for teamwork, a lesson I learned while leading
            a school project to develop a web application. That project was more
            than just about building an app; it was a lesson in leadership and
            effective communication. I've learned the importance of bringing
            everyone together, ensuring we're aligned, and moving forward as a
            united front. Through collaboration and open dialogue, we can
            transform challenges into successes.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange('skills')}
              active={tab === 'skills'}
            >
              {' '}
              Skills{' '}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('education')}
              active={tab === 'education'}
            >
              {' '}
              Education{' '}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('certifications')}
              active={tab === 'certifications'}
            >
              {' '}
              Certifications{' '}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
