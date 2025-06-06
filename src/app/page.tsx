'use client';

import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import ContactForm from '@/components/ContactForm'
import AnimateOnScroll from '@/components/AnimateOnScroll'

export default function Home() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-pale">
        <div className="section-container">
          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              <AnimateOnScroll>
                <div className="relative inline-block mb-8">
                  <div className="absolute -left-1.5 -top-1.5 w-20 h-[1px] bg-forest"></div>
                  <div className="absolute -left-1.5 -top-1.5 w-[1px] h-20 bg-forest"></div>
                  <div className="absolute -right-1 -bottom-1 w-20 h-[1px] bg-forest"></div>
                  <div className="absolute -right-1 -bottom-1 w-[1px] h-20 bg-forest"></div>
                  <h1 className="text-6xl md:text-7xl font-semibold text-forest [letter-spacing:-0.025em] uppercase px-8 py-4">
                    <span className="text-[1.2em] tracking-tighter">S</span>HIV{" "}
                    <span className="text-[1.2em] tracking-tighter">D</span>ESAI
                  </h1>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll>
                <div className="flex flex-col gap-4 mb-8">
                  <div>
                    <p className="text-2xl font-semibold text-forest">
                      Program Planning and Controls Specialist
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <h2 className="text-xl font-medium text-forest">Blue Origin</h2>
                      <span className="text-gray-400">|</span>
                      <p className="text-lg text-gray-600">In-Space Systems | Blue Ring</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6 mb-8">
                  <p className="text-lg text-gray-600">
                    With a Master's in Supply Chain Management from Georgetown University and extensive experience in aerospace, 
                    I specialize in program planning, financial analysis, and business intelligence solutions.
                  </p>
                  <p className="text-lg text-gray-600">
                    My expertise spans across program management, cost analysis, and data analytics, 
                    with a proven track record at industry leaders like Blue Origin and Lockheed Martin.
                    Currently driving program baselines and analytics for In-Space Systems,
                    I bring a comprehensive approach to program planning and controls, combining technical expertise
                    with strategic business insights.
                  </p>
                </div>
                <div className="flex gap-4 mb-8">
                  <a href="#experience" className="btn btn-primary">View Experience</a>
                  <a href="/ShivDesaiResume.pdf" download className="btn btn-secondary flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download Resume
                  </a>
                </div>
              </AnimateOnScroll>
            </div>
            
            <div className="lg:col-span-2 flex flex-col justify-center">
              <AnimateOnScroll>
                <div className="card p-8 bg-white">
                  <h3 className="text-xl font-semibold text-forest mb-4 uppercase tracking-wide">CONTACT ME</h3>
                  <p className="text-gray-600 mb-6">
                    Reach out if you'd like to collaborate on aerospace projects or discuss program management opportunities.
                  </p>
                  <ContactForm />
                  <div className="mt-8 flex gap-6">
                    <a 
                      href="mailto:ShivDDesai@live.com"
                      className="bg-forest text-white p-3 rounded-full hover:scale-110 hover:shadow-lg transition duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaEnvelope className="text-2xl" />
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/shivdesai/"
                      className="bg-forest text-white p-3 rounded-full hover:scale-110 hover:shadow-lg transition duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="text-2xl" />
                    </a>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-white">
        <div className="section-container">
          <AnimateOnScroll>
            <h2 className="section-heading">Experience</h2>
          </AnimateOnScroll>
          <div className="space-y-8">
            {/* Blue Origin */}
            <AnimateOnScroll>
              <div className="card p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-forest">Blue Origin</h3>
                    <div className="mt-2">
                      <p className="text-lg font-medium">Program Planning and Controls Specialist, Blue Ring</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-500">June 2022 – Present</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  Leading program planning and controls for Blue Ring, including the design and implementation of new program baselines with comprehensive WBS structures and IPT-level budgets. Spearheading the development of resource-loaded program baselines for In-Space Systems' first government contract, while managing cost and schedule as primary project manager. Currently coordinating Vehicle 2 basis-of-estimates and program baseline planning for rate manufacturing, while developing Tableau dashboards for reporting across all In-Space Systems programs. Responsible for leading Monthly Operations Reviews (MOR) for the entire Blue Ring program, reporting directly to In-Space Systems leadership.
                </p>
              </div>
            </AnimateOnScroll>

            {/* Lockheed Martin - Space */}
            <AnimateOnScroll>
              <div className="card p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-forest">Lockheed Martin - Space</h3>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <p className="text-lg font-medium">Project Engineer L3, NextGen GEO</p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-500">November 2021 – June 2022</p>
                      </div>
                    </div>
                    <p className="text-gray-600">
                      Coordinated the completion of engineering projects focused on technical developments and scheduling, while resolving complex engineering design and test problems. Provided crucial support to the Factory team through Cost Account Management (CAM) of hardware-related activities, while fostering collaboration with Agile Engineering teams to ensure alignment with organizational objectives.
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <p className="text-lg font-medium">Financial Analyst L3, GPS III</p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-500">July 2019 – November 2021</p>
                      </div>
                    </div>
                    <p className="text-gray-600">
                      Modernized financial data distribution through the development of Business Intelligence systems, enabling earlier access for managers and engineers. Implemented sophisticated Tableau dashboards utilizing SQL and VBA to automate reporting processes, reducing manual effort by 70%. Managed a $50M annual operating budget while maintaining a 98% forecast accuracy rate.
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Lockheed Martin - RMS */}
            <AnimateOnScroll>
              <div className="card p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-forest">Lockheed Martin – Rotary and Mission Systems (RMS)</h3>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <p className="text-lg font-medium">Financial Analyst L2, C2G DogPatch</p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-500">January 2019 – July 2019</p>
                      </div>
                    </div>
                    <p className="text-gray-600">
                      Developed comprehensive financial analysis tools using Microsoft Access and Power Query, creating dynamic workbooks for efficient financial data management. Expanded role to include FP&A responsibilities, utilizing Hyperion for detailed analysis of Orders, Risk and Opportunities, EBIT, and Long Range Planning (LRP).
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <p className="text-lg font-medium">Financial Analyst L2, EADGE-T</p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-500">November 2017 – January 2019</p>
                      </div>
                    </div>
                    <p className="text-gray-600">
                      Led critical program performance analysis and senior management reviews, successfully improving program cost status from RED to GREEN through strategic evaluation and corrective actions. Managed comprehensive baseline and Estimate at Completion (EAC) adjustments to incorporate contract amendments and new schedule integrations.
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <p className="text-lg font-medium">Financial Analyst L1, Combat System Engineering Agent (CSEA)</p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-500">February 2017 – November 2017</p>
                      </div>
                    </div>
                    <p className="text-gray-600">
                      Enhanced program-level reporting efficiency by streamlining internal and external performance report preparation, creating additional review time for stakeholders. Developed and optimized Visual Basic scripting interfaces for cross-platform integration and automation, significantly reducing manual intervention while improving process reliability.
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <p className="text-lg font-medium">Financial Analyst L1, Korean Destroyer eXperimental (KDX-III)</p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-500">February 2015 – February 2017</p>
                      </div>
                    </div>
                    <p className="text-gray-600">
                      Improved data integrity through the implementation of batch reporting in proprietary software suites. Made significant contributions to the Batch II Offsets proposal, achieving a 37% cost reduction while maintaining contractual obligations. Leveraged extensive SAP knowledge to develop and implement custom scripting solutions, resulting in a 12.5% reduction in processing time.
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="bg-pale">
        <div className="section-container">
          <AnimateOnScroll>
            <h2 className="section-heading">Education</h2>
          </AnimateOnScroll>
          <div className="space-y-6">
            <AnimateOnScroll>
              <div className="card p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-forest">Georgetown University</h3>
                    <p className="text-lg">Master of Science in Supply Chain Management</p>
                    <p className="text-gray-600">GPA: 4.0</p>
                  </div>
                  <p className="text-gray-500">2023</p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <div className="card p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-forest">University of Central Florida</h3>
                    <p className="text-lg">Bachelor of Science in Business Administration</p>
                    <p className="text-gray-600">Major in Finance, Minor in Accounting</p>
                  </div>
                  <p className="text-gray-500">2014</p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-white">
        <div className="section-container">
          <AnimateOnScroll>
            <h2 className="section-heading">Skills</h2>
          </AnimateOnScroll>
          
          {/* Security Clearance - Emphasized at top */}
          <AnimateOnScroll>
            <div className="mb-12">
              <div className="card p-6 border-2 border-forest bg-pale">
                <h3 className="text-xl font-semibold text-forest mb-2">Security Clearance</h3>
                <p className="text-gray-800 font-medium">Active TS/SCI – Eligibility Date: 2021-11-26</p>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="card p-6">
                <h3 className="text-xl font-semibold text-forest mb-4">Program Management</h3>
                <ul className="list-disc list-outside ml-4 space-y-2 text-gray-600">
                  <li>Earned Value Management</li>
                  <li>Risk Management</li>
                  <li>Critical Path Analysis</li>
                  <li>Resource Planning</li>
                </ul>
              </div>

              <div className="card p-6">
                <h3 className="text-xl font-semibold text-forest mb-4">Project Tools</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-light rounded-full mr-2"></span>
                    Jira & Confluence
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-light rounded-full mr-2"></span>
                    Digital.ai Agility
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-light rounded-full mr-2"></span>
                    Primavera P6
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-light rounded-full mr-2"></span>
                    Microsoft Project
                  </li>
                </ul>
              </div>

              <div className="card p-6">
                <h3 className="text-xl font-semibold text-forest mb-4">Data & Analytics</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-light rounded-full mr-2"></span>
                    Power BI & Power Query
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-light rounded-full mr-2"></span>
                    Tableau
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-light rounded-full mr-2"></span>
                    SQL
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-light rounded-full mr-2"></span>
                    Python
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-light rounded-full mr-2"></span>
                    Visual Basic
                  </li>
                </ul>
              </div>

              <div className="card p-6">
                <h3 className="text-xl font-semibold text-forest mb-4">Enterprise Systems</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-light rounded-full mr-2"></span>
                    SAP
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-light rounded-full mr-2"></span>
                    Empower
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-light rounded-full mr-2"></span>
                    Salesforce
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-light rounded-full mr-2"></span>
                    NetSuite
                  </li>
                </ul>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </main>
  )
} 