import React from "react";
import "./css/PreviousWork.css";
import WorkComponent from "./comps/WorkComponent";
import WorkComponentFull from "./comps/WorkComponentFull";
import { Link } from "react-router-dom";
import workObjects from "../objects/WorkObject";
function PreviousWork() {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <div className=" w-full xl:w-fit">
        <div>
          <Link
            to={"/"}
            className="flex group items-center font-bold text-gray-400 text-xs"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="group-hover:scale-105 mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clip-rule="evenodd"
              ></path>
            </svg>
            Back Home
          </Link>
          <h1 className="text-5xl font-bold text-white mb-24">All Projects</h1>
        </div>

        <div className="relative overflow-x-hidden">
          <table className="w-full text-sm text-left text-slate-400 ">
            <thead className="text-sm  text-gray-200 font-bold uppercase border-b">
              <tr>
                <th scope="col" className="px-2 py-3">
                  Year
                </th>
                <th scope="col" className="px-6 py-3">
                  Product
                </th>
                <th scope="col" className="px-6 py-3">
                  Technology
                </th>
                <th scope="col" className="hidden xl:table-cell px-6 py-3">
                  Employer
                </th>
                <th scope="col" className="hidden xl:table-cell  px-6 py-3">
                  Link
                </th>
              </tr>
            </thead>
            <tbody>
              {workObjects.map((work) => {
                return (
                  <tr className=" border-b my-10">
                    <td className="px-2 py-4">{work.year}</td>
                    <th
                      scope="row"
                      className="px-6 text-white py-4 font-medium whitespace-nowrap "
                    >
                      {work.name}
                    </th>
                    <td className="px-6  my-2 flex flex-wrap text-center">
                      {work.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="p-2 w-full xl:w-1/3 bg-slate-500 bg-opacity-30 rounded-full m-1"
                          style={{ flexBasis: "calc(33.33% - 2rem)" }} // Adjust margin as needed
                        >
                          {skill}
                        </span>
                      ))}
                    </td>
                    <td className="hidden xl:inline-block px-6 py-4">
                      {work.employer}
                    </td>
                    <td className="hidden xl:inline-block px-6 py-4">
                      <a href={work.link} target="_blank">
                        {work.link}
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PreviousWork;
