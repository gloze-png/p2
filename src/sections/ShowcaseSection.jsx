import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
  }, []);

  useEffect(() => {
    const projects = [project1Ref.current, project2Ref.current, project3Ref.current];

    projects.forEach((card, index) => {
      // if (!card) return; // Skip if ref is not set yet
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
          },
        }
      );
    });
  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* LEFT */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img src="/images/second.png" alt="first one" />
            </div>
            <div className="text-content">
              <h2>Chat App</h2>
              <p className="text-white-50 md:text-xl">
                A simple chat app built with PHP, JavaScript, and MySQL
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/images/one.png" alt="Medium clone" />
              </div>
              <h2>Language Learning system</h2>
              <p className="text-white-50 md:text-xl">
                A simple Learning Management system with Typescript, NextJs 15, 
                Drizzle Orm and Neon.
              </p>
            </div>

            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#9a928f]">
                <img src="/images/40.png" alt="Language learning app" />
              </div>
              <h2>Medium Clone</h2>
              <p className="text-white-50 md:text-xl">
                A simple Blog App built with PHP Laravel
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
