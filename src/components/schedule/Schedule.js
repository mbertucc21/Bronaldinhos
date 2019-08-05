import React from 'react';
import './Schedule.css';

const Schedule = () => {
  return(
    <div className='scheduleScreen'>
      <div className='Header'>
      </div>
      <div className='scheduleTable'>
        <table>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Field</th>
            <th>Match</th>
            <th>Result</th>
          </tr>
          <tr>
            <td>Wed May 22, 2019</td>
            <td>9:00 p</td>
            <td>West Oak Trails 2</td>
            <td>Bronaldinhos @ Just Matip FC</td>
            <td>5:0</td>
          </tr>
          <tr>
            <td>Wed May 29, 2019</td>
            <td>7:00 p</td>
            <td>West Oak Trails 1</td>
            <td>Bronaldinhos @ Pretty Yellow</td>
            <td>2:2</td>
          </tr>
          <tr>
            <td>Tue Jun 11, 2019</td>
            <td>9:00 p</td>
            <td>West Oak Trails 2</td>
            <td>Bronaldinhos @ FC Cheddah</td>
            <td>5:5</td>
          </tr>
          <tr>
            <td>Tue Jun 18, 2019</td>
            <td>9:00 p</td>
            <td>West Oak Trails 2</td>
            <td>Bronaldinhos vs Bottom Feeders FC</td>
            <td>5:6</td>
          </tr>
          <tr>
            <td>Wed Jun 26, 2019</td>
            <td>9:00 p</td>
            <td>Bronte Turf</td>
            <td>Bronaldinhos vs Vale FC</td>
            <td>3:2</td>
          </tr>
          <tr>
            <td>Wed Jul 3, 2019</td>
            <td>7:00 p</td>
            <td>River Oaks Turf</td>
            <td>Bronaldinhos vs The Villains</td>
            <td>1:6</td>
          </tr>
          <tr>
            <td>Tue Jul 9, 2019</td>
            <td>9:00 p</td>
            <td>West Oak Trails 2</td>
            <td>Bronaldinhos vs RKFC</td>
            <td>3:2</td>
          </tr>
          <tr>
            <td>Wed Jul 17, 2019</td>
            <td>7:00 p</td>
            <td>West Oak Trails 1</td>
            <td>Bronaldinhos vs HOs FC</td>
            <td>2:3</td>
          </tr>
          <tr>
            <td>Wed Jul 24, 2019</td>
            <td>9:00 p</td>
            <td>Bronte Turf</td>
            <td>Bronaldinhos @ Babylon</td>
            <td>4:1</td>
          </tr>
          <tr>
            <td>Wed Jul 31, 2019</td>
            <td>9:00 p</td>
            <td>Bronte Turf</td>
            <td>Bronaldinhos @ Bay City FC</td>
            <td>2:0</td>
          </tr>
          <tr>
            <td>Wed Aug 7, 2019</td>
            <td>7:00 p</td>
            <td>River Oaks Turf</td>
            <td>Bronaldinhos @ Tiki Taka FC</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Wed Aug 14, 2019</td>
            <td>9:00 p</td>
            <td>Bronte Turf</td>
            <td>Just Matip FC</td>
            <td>-</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Schedule
