import "../styles/DasboardPage.css"
import { Paper, Typography } from '@mui/material'
import * as React from 'react';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { dataset, valueFormatter } from './Weather';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import Books from "../assets/books.png"
import Sports from "../assets/sports.webp"
import RightSideDasboard from "./RightSideDasboard";
export default function DasboardPage() {
  const chartSetting = {
    series: [{ dataKey: 'seoul', valueFormatter }],
    height:185,
    sx: {
      [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
        transform: 'translateX(-10px)',
      },
    },
  };
  
  function TickPlacementBars() {
    const [colorX, setColorX] = React.useState('ordinal');
    const [colorY, setColorY] = React.useState('None');
    
    return (
      <div style={{ width: '100%' }}>
        <BarChart
        margin={10}
        borderRadius={5}
          dataset={dataset}
          yAxis={[
            {
              visible: false,
              disableLine: true,
              disableTicks: true,
            },
          ]}
          
          xAxis={[
            {
              scaleType: 'band',
              dataKey: 'month',
              disableTicks: true, // Hides X-axis ticks
              disableLine: true,  // Hides X-axis line
              label: '',          // Removes X-axis label
            
              // hidden:true,
              colorMap:
              (colorX === 'ordinal' && {
                type: 'ordinal',
                colors: [
                  '#9f9ff6',
                  '#96e2d6',
                  'rgb(46, 46, 46)',
                  '#92bfff',
                  '#92bfff',
                  '#93ebb9',
                  '#9f9ff9',
                  '#96e2d6',
                  'rgb(46, 46, 46)',
                  '#92bfff',
                  '#9f9ff6',
                  '#93ebb9',
                ],
              })
            }
          ]}
          
          {...chartSetting}
        />
      </div>
    );
  }
  return (
    <div className="dashboard-page">
      <div className="main-container">
        <div className="primary">
          <Paper className="attendence"  elevation={1}>
            <div className="headingtext"> <h1 >Attendence</h1> <p>Monthly   <span> ...</span></p></div>
              <TickPlacementBars/>
          </Paper>
          <Paper className="classes" elevation={1}>
              <div className="headingtextclasses"><h1>Classes</h1><p>Today  <span> ...</span> </p></div>
              <div className="headtableclasses">
                <p>Teacher</p>
                <p>Date</p>
                <p>Status</p>
              </div>
              <div className="shedule">
                  <div className="first" id="first">
                    <li>William</li>
                    <p>Febuary 24,2025</p>
                    <p className="inprogeress">IN Progress</p>
                  </div>
                  <div className="second" id="second">
                    <li>Juile</li>
                    <p>Febuary 24,2025</p>
                    <p className="Pending">Pending</p>
                  </div>
                  {/* <div className="third">
                    <li>Debbie</li>
                    <p>Febuary24,2025</p>
                    <p>Stopped</p>
                  </div> */}
                  <div className="fourth" id="fourth">
                    <li>Carl</li>
                    <p>Febuary 24,2025</p>
                    <p className="Completed">Completed</p>  
                  </div>
              </div>
          </Paper>
          <Paper className="noticeboard" elevation={1}>
            <div className="headindtextnotice"><h1>Notice Board</h1><p><ControlPointIcon/></p></div>
            <div className="headingnotice">
              <div className="fristcoulumn">
              < p className="no">No</p>
              <p className="aboutname">About</p></div>
                <div className="secondcolumn">
                  <p>Date</p>
                  <p>View</p>
                  <p>Action</p>
                </div>
            </div>
            <div className="listofnotice">
                    <div className="firstrownotice">
                      <div className="noabout">
                      <p className="z">01</p>
                      <div className="about">
                        <div className="imgabout"><img src={Books} alt="" className="books" /></div>
                        <div className="textabout">
                        <p className="testexam">test exam</p>
                        <p className="testexamination" >Test examination held on 28th feb</p>
                        </div>
                      </div>
                      </div>
                      <div className="dateviewaction">
                        <p className="date">28 Feb , 2025</p>
                        <p className="views">3k</p>
                        <p className="dot"><i className="fa-solid fa-ellipsis-vertical"></i></p>
                      </div>
                    </div>
                    <div className="line"></div>
                    <div className="secondrownotice">
                    <div className="noabout">
                      <p className="z">02</p>
                      <div className="about">
                        <div className="imgabout"><img src={Sports} alt="" className="books" /></div>
                        <div className="textabout">
                        <p className="testexam">Anual sports</p>
                        <p className="testexamination" >Anual sports day on 13th april</p>
                        </div>
                      </div>
                      </div>
                      <div className="dateviewaction">
                        <p className="date">13 April , 2025</p>
                        <p className="views2">3k</p>
                        <p className="dot2"><i className="fa-solid fa-ellipsis-vertical"></i></p>
                      </div>
                    </div>
                    
            </div>
            </Paper>
        </div>
        <div className="secondary">
          <RightSideDasboard/>
        </div>
      </div>
    </div>
  )
}
