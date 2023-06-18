import React from "react";
import { AiOutlineFolder, AiOutlineComment } from "react-icons/ai";

const TaskCard = ({
  taskname,
  taskdescription,
  taskpriority,
  access,
  taskimg,
  files,
  comments,
}) => {
  console.log(
    `text-${taskpriority === "Completed" ? "[#68B266]" : "[#D58D49]"}`
  );

  return (
    <div className="flex flex-col p-4 bg-white rounded-xl min-w-96 min-h-80 my-3 space-y-2 text-[#787486]">
      <div className="flex w-full items-center justify-between ">
        <p
          className="p-1 px-2 rounded-md text-sm"
          style={{
            backgroundColor:
              taskpriority === "Completed" ? "#68B26620" : "#D58D4920",
            color: taskpriority === "Completed" ? "#68B266" : "#D58D49",
          }}
        >
          {taskpriority}
        </p>

        <span className="text-center h-fit">...</span>
      </div>
      <div className="text-[18px] font-[600] text-black ">{taskname}</div>
      <div className="text-[12px] font-[400]">{taskdescription}</div>
      <div className=" flex items-center justify-between space-x-1">
        {taskimg?.map((item, index) => (
          <img key={index} src={item} alt="task img" className="min-w-[48%]" />
        ))}
      </div>
      <div className="flex items-center justify-between">
        <div className="profiles flex items-center space-x-[-10px] ">
          {access?.map((item, index) => (
            <img key={index} src={item} alt="users" className="h-7 w-7" />
          ))}
        </div>
        <div className="actions flex items-center justify-between text-[12px] space-x-1">
          <AiOutlineComment />
          <span className="pr-2"> {comments} Comments</span>
          <AiOutlineFolder />
          <span>{files} Files</span>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
