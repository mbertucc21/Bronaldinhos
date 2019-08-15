import React from 'react';
import './Schedule.css';
import Patternbar from '../patternbar/Patternbar';
import pin from './placeholder.png';

const Schedule = () => {
  return(
    <div className='schedule'>
      <div className='table-title'>
        <h3>2019 Summer Schedule</h3>
      </div>
      <div className='scheduleTable'>
        <Patternbar />
        <div className='maps-record'>
          <div className='maps'>
            <p> West Oak Trails: </p>
            <a target="_blank" rel="noopener noreferrer" href="https://maps.google.com/?q=West Oak Trails Soccer Fields, Upper Middle Rd, Oakville, ON">
            <img className='link dim black underline pointer' src={pin} alt='pin' style={{height: 20, width: 20}}/>
            </a>
            <p> || </p>
            <p> Bronte Turf: </p>
            <a target="_blank" rel="noopener noreferrer" href="https://maps.google.com/?q=2197 Lakeshore Rd W, Oakville, ON L6L 1H1">
            <img className='link dim black underline pointer' src={pin} alt='pin' style={{height: 20, width: 20}}/>
            </a>
            <p> || </p>
            <p> River Oaks Turf: </p>
            <a target="_blank" rel="noopener noreferrer" href="https://maps.google.com/?q=River Oaks Soccer (Turf Field), Oakville, ON">
            <img className='link dim black underline pointer' src={pin} alt='pin' style={{height: 20, width: 20}}/>
            </a>
          </div>
          <div className='record'>
            <h5>Season Record: 1-3-2</h5>
          </div>
        </div>
        <table>
          <thead>
            <tr className='tr-head'>
              <th>Date</th>
              <th>Time</th>
              <th>Field</th>
              <th>Match</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            <tr className='tr-body'>
              <td>Wed May 22, 2019</td>
              <td>9:00 p</td>
              <td>
                West Oak Trails 2
              </td>
              <td>Bronaldinhos @ Just Matip FC</td>
              <td>L - 5:0</td>
            </tr>
            <tr className='tr-body'>
              <td>Wed May 29, 2019</td>
              <td>7:00 p</td>
              <td>
                West Oak Trails 1
              </td>
              <td>Bronaldinhos @ Pretty Yellow</td>
              <td>T - 2:2</td>
            </tr>
            <tr className='tr-body'>
              <td>Tue Jun 11, 2019</td>
              <td>9:00 p</td>
              <td>
                West Oak Trails 2
              </td>
              <td>Bronaldinhos @ FC Cheddah</td>
              <td>T - 5:5</td>
            </tr>
            <tr className='tr-body'>
              <td>Tue Jun 18, 2019</td>
              <td>9:00 p</td>
              <td>
                West Oak Trails 2
              </td>
              <td>Bronaldinhos vs Bottom Feeders FC</td>
              <td>L - 5:6</td>
            </tr>
            <tr className='tr-body'>
              <td>Wed Jun 26, 2019</td>
              <td>9:00 p</td>
              <td>
                West Oak Trails 2
              </td>
              <td>Bronaldinhos vs Vale FC</td>
              <td>W - 3:2</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Schedule
