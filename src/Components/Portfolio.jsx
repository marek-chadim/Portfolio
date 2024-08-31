/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/wrench.jpg";

const imageAltText = "The Economist as Plumber";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Markups and Public Procurement",
    description:
      "Bachelor's Thesis analyzing the relationship between engagement in public procurement and markups charged by firms in the Czech construction sector.",
    url: "https://github.com/marek-chadim/Markups-and-Public-Procurement",
  },

  {
    title: "PhD Econometrics with Stata and R",
    description: "Coursework from first year PhD Econometrics sequence at Stockholm University.",
    url: "https://github.com/marek-chadim/Mastering-Metrics/tree/main/coursework/PhD",
  },

  {
    title: "Coursera Machine Learning Specialization",
    description:
      "Best practices for model building and applying machine learning techniques by Andrew Ng, Stanford University.",
    url: "https://coursera.org/share/319c2af05932c9a8a671409ac26a7c91",
  },

  {
    title: "Coursera Data Science Specialization",
    description:
      "Tools covering the entire data science pipeline by Roger Peng, Jeff Leek and Brian Caffo, Dep. of Biostatistics Johns Hopkins University.",
    url: "https://coursera.org/share/e7b63d98d00917a1cb08d621e6447881",
  },

  {
    title: "DataCamp Data Analyst with R",
    description: "Career track focused on importing, cleaning, manipulating, and visualizing data.",
    url: "https://www.datacamp.com/completed/statement-of-accomplishment/track/502249c656f5aa18470ce11d206736d9bc29ce29",
  },

  {
    title: "DataCamp Julia Fundamentals",
    description: "Track in intermediate Julia programming.",
    url: "https://www.datacamp.com/completed/statement-of-accomplishment/track/108e795acb6f94780353f8aec3d8bd8d77072075",
  },

  {
    title: "Stanford University's Code in Place 2023",
    description: "Course covering material from CS106A: Programming Methodologies.",
    url: "https://codeinplace.stanford.edu/cip3/certificate/1bcm36",
  },

  {
    title: "Elements of AI, University of Helsinki",
    description: "Introduction to AI combining theory with practical exercises.",
    url: "https://certificates.mooc.fi/validate/wspeomm2ier",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              animation: "1s ease-out 0s 1 slideInLeft",
            }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;