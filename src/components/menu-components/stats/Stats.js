import React from 'react';
import './Stats.css';

const Stats = () => {
  return(
    <div className='stats'>
      <div className='table-title'>
        <h3>2019 Player Stats</h3>
      </div>
      <div className='stats-container'>
        <table className='stats-table'>
          <thead>
            <tr className='stats-head'>
              <th>Player/#</th>
              <th>Games Played</th>
              <th>Goals</th>
              <th>Assists</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            <tr className='stats-body'>
              <td>#21</td>
              <td>5</td>
              <td>6</td>
              <td>2</td>
              <td>8</td>
            </tr>
            <tr className='stats-body'>
              <td>#4</td>
              <td>5</td>
              <td>4</td>
              <td>3</td>
              <td>7</td>
            </tr>
            <tr className='stats-body'>
              <td>Marco B. (#10)</td>
              <td>5</td>
              <td>2</td>
              <td>3</td>
              <td>5</td>
            </tr>
            <tr className='stats-body'>
              <td>#7</td>
              <td>5</td>
              <td>1</td>
              <td>3</td>
              <td>4</td>
            </tr>
            <tr className='stats-body'>
              <td>#13</td>
              <td>4</td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
            </tr>
            <tr className='stats-body'>
              <td>#8</td>
              <td>4</td>
              <td>1</td>
              <td>1</td>
              <td>2</td>
            </tr>
            <tr className='stats-body'>
              <td>#2</td>
              <td>5</td>
              <td>1</td>
              <td>0</td>
              <td>1</td>
            </tr>
            <tr className='stats-body'>
              <td>#3</td>
              <td>5</td>
              <td>1</td>
              <td>0</td>
              <td>1</td>
            </tr>
            <tr className='stats-body'>
              <td>#13</td>
              <td>5</td>
              <td>1</td>
              <td>0</td>
              <td>1</td>
            </tr>
            <tr className='stats-body'>
              <td>#11</td>
              <td>5</td>
              <td>0</td>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr className='stats-body'>
              <td>#9</td>
              <td>5</td>
              <td>0</td>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr className='stats-body'>
              <td>#33</td>
              <td>3</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Stats
