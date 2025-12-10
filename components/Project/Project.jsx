import Heading from "../Heading";
import SubHeading from "../SubHeading";
import joblistingImage from "@/images/ProjectImages/JobListing.png";
import ProjectCard from "./ProjectCard";

export default function Project() {
  const projects = [
    {
      name: "Job Listing Platform",
      description:
        "A simple job listing platform where users can explore vacancies, filter roles, and apply directly, making the job search process easier and more efficient.",
      tags: [
        {
          name: "react",
          color: "text-blue-400",
        },
        {
          name: "nodejs",
          color: "text-green-400",
        },
        {
          name: "sql",
          color: "text-pink-400",
        },
      ],
      image: joblistingImage,
      source_code_link: "https://github.com/SuneraR/Job-listing-website.git",
    },
  ];
  return (
    <div className="py-10">
      <div className="flex flex-col gap-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2.5">
          <Heading text="Projects" />
          <SubHeading
            text={"A few of my favorite projects I've designed and developed."}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} index={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}
