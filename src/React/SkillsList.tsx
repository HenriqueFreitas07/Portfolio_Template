import React, { useState } from "react";

const CategoryIcons = {
  "Collaboration & Teamwork": (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[var(--sec)] opacity-70" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-7 9v-1c0-2.21 3.58-4 8-4s8 1.79 8 4v1H5z"/>
    </svg>
  ),
  "Leadership & Initiative": (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[var(--sec)] opacity-70" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3 7h7l-5.5 4.5L18 22l-6-4-6 4 1.5-8.5L2 9h7l3-7z"/>
    </svg>
  ),
  "Adaptability & Problem-Solving": (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[var(--sec)] opacity-70" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 4a8 8 0 100 16 8 8 0 000-16zm1 11h-2v-4h2v4zm0-6h-2V7h2v2z"/>
    </svg>
  ),
  "Community Engagement": (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[var(--sec)] opacity-70" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 12c2.67 0 8 1.34 8 4v2H4v-2c0-2.66 5.33-4 8-4zm0-2a4 4 0 110-8 4 4 0 010 8z"/>
    </svg>
  ),
  "Continuous Learning": (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[var(--sec)] opacity-70" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 15l-8-4.36V19l8 5 8-5v-5.36L12 18z"/>
    </svg>
  ),
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const skills = {
    "Collaboration & Teamwork": [
      "Worked closely with designers, developers, and event organizers",
      "Strong ability to thrive in fast-paced, dynamic environments",
      "Active member of student association and volunteer initiatives",
    ],
    "Leadership & Initiative": [
      "Board member experience at AETTUA, contributing to university events",
      "Took initiative in organizing workshops and community activities",
      "Demonstrated ownership in academic and extracurricular projects",
    ],
    "Adaptability & Problem-Solving": [
      "Skilled at approaching challenges with creative solutions",
      "Adaptable to diverse roles: developer, designer, and organizer",
      "Proven ability to handle both technical and logistical challenges",
    ],
    "Community Engagement": [
      "Volunteered in local and national initiatives (Caramulo, Fátima)",
      "Provided support and empathy in social and community-driven projects",
      "Committed to civic responsibility and making a positive impact",
    ],
    "Continuous Learning": [
      "Caixa + Mundo Scholarship for academic excellence",
      "Participant in CERN Particle Physics Masterclass",
      "Motivated to grow skills across new technologies and disciplines",
    ],
  };

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="text-left pt-3 md:pt-9">
      <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6">
      Who am I ? 
      </h3>
      <ul className="space-y-4 mt-4 text-lg">
        {Object.entries(skills).map(([category, items]) => (
          <li key={category} className="w-full">
            <div
              onClick={() => toggleItem(category)}
              className="md:w-[400px] w-full bg-[#1414149c] rounded-2xl text-left hover:bg-opacity-80 transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden"
            >
              <div className="flex items-center gap-3 p-4">
                {CategoryIcons[category]}
                <div className="flex items-center gap-2 flex-grow justify-between">
                  <span className="truncate text-[var(--white)] text-lg">
                    {category}
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                    className={`w-6 h-6 text-[var(--white)] transform transition-transform ${openItem === category ? "rotate-180" : ""}`}>
                    <path d="M12 14l-6-6h12l-6 6z"></path>
                  </svg>
                </div>
              </div>
              <div className={`transition-all duration-300 px-4 ${
                openItem === category ? "max-h-[500px] pb-4 opacity-100" : "max-h-0 opacity-0"
              }`}>
                <ul className="space-y-2 text-[var(--white-icon)] text-sm">
                  {items.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <span className="pl-1">•</span>
                      <span className="pl-3">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
