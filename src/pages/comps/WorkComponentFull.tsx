import { Link } from "react-router-dom";
import workObjects from "../../objects/WorkObject";

function WorkComponentFull() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <div className="">
        <Link to={"/"} className="font-bold text-white text-2xl">
          Back Home
        </Link>

        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-slate-400 ">
            <thead className="text-sm text-gray-200 font-bold uppercase border-b">
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
                <th scope="col" className="px-6 py-3">
                  Employer
                </th>
                <th scope="col" className="px-6 py-3">
                  Link
                </th>
              </tr>
            </thead>
            <tbody>
              {workObjects.map((work) => {
                return (
                  <tr className=" border-b mb-1">
                    <td className="px-2 py-4">{work.year}</td>
                    <th
                      scope="row"
                      className="px-6 text-white py-4 font-medium whitespace-nowrap "
                    >
                      {work.name}
                    </th>
                    <td className="px-6  flex flex-wrap text-center">
                      {work.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="p-3 w-1/3 bg-slate-500 bg-opacity-30 rounded-full m-1"
                          style={{ flexBasis: "calc(33.33% - 2rem)" }} // Adjust margin as needed
                        >
                          {skill}
                        </span>
                      ))}
                    </td>
                    <td className="px-6 py-4">{work.employer}</td>
                    <td className="px-6 py-4">
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

export default WorkComponentFull;
