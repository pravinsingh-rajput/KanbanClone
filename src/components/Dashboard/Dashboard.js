import React from "react";
import DashBoardHeader from "./DashBoardHeader";
import CardContainer from "../Card/CardContainer";

const Dashboard = () => {
  const todo = {
    taskno: 4,
    taskname: "To Do",
    taskcolor: "#5030E5",
    add: true,
  };
  const progress = {
    taskno: 3,
    taskname: "On Progress",
    taskcolor: "#FFA500",
  };
  const done = {
    taskno: 2,
    taskname: "Done",
    taskcolor: "#8BC48A",
  };

  const task = [
    {
      priority: "Low",
      tasktitle: "Brainstorming",
      description:
        "Brainstorming brings team members' diverse experience into play.",
      access: [
        "./Assets/Ellipse 12.png",
        "./Assets/Ellipse 13.png",
        "./Assets/Ellipse 15.png",
      ],
      comments: 12,
      files: 0,
    },
    {
      priority: "Low",
      tasktitle: "Research",
      description:
        "User research helps you to create an optimal product for users.",
      access: ["./Assets/Ellipse 12.png", "./Assets/Ellipse 13.png"],
      comments: 10,
      files: 3,
    },
    {
      priority: "Low",
      tasktitle: "Wireframes",
      description:
        "Low fidelity wireframes include the most basic content and visuals.",
      access: [
        "./Assets/Ellipse 12.png",
        "./Assets/Ellipse 13.png",
        "./Assets/Ellipse 15.png",
      ],
      comments: 8,
      files: 9,
    },
  ];
  const working = [
    {
      priority: "Low",
      tasktitle: "Onboarding Illustrations ",
      description: "",
      access: [
        "./Assets/Ellipse 15.png",
        "./Assets/Ellipse 13.png",
        "./Assets/Ellipse 12.png",
      ],
      taskimg: ["./Assets/unsplash_MicqqGyDQ6w.png"],
      comments: 14,
      files: 15,
    },
    {
      priority: "Low",
      tasktitle: "Moodboard",
      description:
        "User research helps you to create an optimal product for users.",
      access: ["./Assets/Ellipse 15.png"],
      taskimg: [
        "./Assets/unsplash_BS_1XGRkIH4.png",
        "./Assets/unsplash_KIqJfzbII9w.png",
      ],
      comments: 9,
      files: 10,
    },
  ];
  const completed = [
    {
      priority: "Completed",
      tasktitle: "Mobile App Design",
      description: "",
      access: ["./Assets/Ellipse 12.png", "./Assets/Ellipse 13.png"],
      taskimg: ["./Assets/Mask Group.png"],
      comments: 12,
      files: 15,
    },
    {
      priority: "Completed",
      tasktitle: "Design System",
      description: "It just needs to adapt the UI from what you did before .",
      access: [
        "./Assets/Ellipse 12.png",
        "./Assets/Ellipse 13.png",
        "./Assets/Ellipse 15.png",
      ],
      taskimg: [],
      comments: 12,
      files: 15,
    },
  ];

  return (
    <div className="px-8 h-screen">
      <DashBoardHeader />
      <div className="flex justify-between mt-5 overflow-hidden">
        <CardContainer data={todo} task={task} />
        <CardContainer data={progress} task={working} />
        <CardContainer data={done} task={completed} />
      </div>
    </div>
  );
};

export default Dashboard;
