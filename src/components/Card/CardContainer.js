import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import TaskCard from "./TaskCard";

const CardContainer = ({ data, task }) => {
  return (
    <div className="bg-blue-400/10 w-[32%] h-[500px] rounded-xl p-4  space-y-4 ">
      <div className="flex items-center justify-between ">
        <div className="flex items-center">
          <div
            className="w-2 h-2 mr-2 rounded-full"
            style={{ backgroundColor: data?.taskcolor }}
          ></div>
          <h3 className="text-black font-semibold">{data.taskname}</h3>
        </div>
        {data?.add && (
          <AiOutlinePlus className="text-blue-800 bg-blue-500/20 rounded-md h-5 w-5 p-[2px] cursor-pointer" />
        )}
      </div>
      <div
        className="w-full h-[3px]"
        style={{ backgroundColor: data?.taskcolor }}
      ></div>
      <div
        className="space-y-4"
        style={{
          maxHeight: "410px",
          overflowY: "auto",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {task?.map((item, index) => (
          <TaskCard
            key={index}
            taskname={item.tasktitle}
            taskpriority={item.priority}
            taskdescription={item.description}
            access={item.access}
            taskimg={item.taskimg}
            comments={item.comments}
            files={item.files}
          />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
