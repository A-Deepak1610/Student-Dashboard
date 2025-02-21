import React from "react";
import "../styles/RightSideDasboard.css";
import { Paper, Typography } from "@mui/material";
import Trophy from "../assets/trophy.webp";
import Bargraph from "../assets/bargraph.png";
export default function RightSideDasboard() {
  return (
    <div className="rightsidecontainer">
      <Paper className="homework" elevation={1}>
        <h1> You Have Completed Homework</h1>
        <div className="maincontenthomework">
          <h1>9/10</h1>
          <div class="progress-container">
            <svg width="80" height="80">
              <circle
                cx="40"
                cy="40"
                r="30"
                stroke="#ddd"
                stroke-width="6"
                fill="transparent"
              />
              <circle
                cx="40"
                cy="40"
                r="30"
                stroke="green"
                stroke-width="6"
                fill="transparent"
                stroke-dasharray="188.4"
                stroke-dashoffset="18.84"
                stroke-linecap="round"
                class="progress-ring"
              />
            </svg>
            <div id="progress-text" class="progress-text">
              90%
            </div>
          </div>
          <img src={Trophy} alt="" className="trophy" />
        </div>
      </Paper>
      <div className="lessons">
        <Paper className="firstlesson" elevation={1}>
          <h1>Knowledge Shared</h1>
          <div className="maincontentfirstlesson">
            <h1>17/20</h1>
            <div class="progress-wrapper">
              <svg width="80" height="80">
                <circle class="progress-ring-background"></circle>
                <circle class="progress-ring-fill"></circle>
              </svg>
              <div class="progress-label">85%</div>
            </div>
          </div>
        </Paper>
        <Paper className="secondlesson" elevation={1}>
          <h1>Knowledge Gained</h1>
          <div className="maincontentsecondlesson">
            <h1>12/20</h1>
            <img src={Bargraph} alt="" className="bargraph" />
          </div>
        </Paper>
      </div>
      <Paper className="calender" elevation={1}>
        <div className="headingcalender"><h1>Event Calender</h1>
        <p><i class="fa-solid fa-ellipsis-vertical"></i></p></div>
        <div className="event">
        <div className="event1" id="event1">
            <div className="colur1"></div>
            <p className="AI"><pre>AI/Tech Summit</pre></p>
            <p className="eventdate">06-04-2025</p>
        </div>
        <div className="event2" id="event2">
            <div className="colur2"></div>
            <p className="project"><pre>Project Review</pre></p>
            <p className="eventdate">25-04-2025</p>
        </div>
        </div>
      </Paper>
      <Paper className="assignments" elevation={1}>
            <div className="headingassignments">
                <h1>Assignments</h1>
                <p id="view">View All</p>
            </div>
            <div className="tasks">
                <div className="todo">
                    <h4>To-Do</h4>
                    <div className="todotasks">
                        <p><i class="fa-solid fa-clipboard"></i></p>
                        <div className="taskname">
                            <p className="computer">Computer Vision Projects</p>
                            <p className="textdeadline" id="textdeadline"><i class="fa-regular fa-clock"></i>Deadline     <span className="deadline"> 16 Aug 2025 ,3:00pm</span></p>
                        </div>
                    </div>
                </div>
                <div className="completed">
                <div className="todo">
                    <h4>Completed</h4>
                    <div className="todotasks">
                        <p><i class="fa-sharp fa-solid fa-circle-check"></i></p>
                        <div className="taskname">
                            <p className="computer">Stock Price Prediction</p>
                            <p className="textdeadline" id="textdeadline2"><i class="fa-regular fa-clock"></i>Deadline     <span className="deadline"> 16 May 2025 ,3:00pm</span></p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
      </Paper>
    </div>
  );
}
