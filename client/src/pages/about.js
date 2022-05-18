import React from "react";




function About() {
  return ( 
    <div className="HomeTitle">
        <h1 className="HomeTitle">About Us</h1>
        <h2 className="HomeTitle">
        Git Healthy is a convenient way to track your daily calorie intake from the foods you eat. 
        Our focus is to help you monitor what you are eating to live a healthier lifestyle.
        </h2><br/>
        <h2 className="HomeTitle">Find out how many calories you should be intaking below:</h2>
      <br/>
      <div className="table_container">
        <table className="table_calories">
        <th colspan="10">Estimated Calorie Requirements</th>
        <tr>
          <th>Gender</th>
          <th>Age(years)</th>
          <th>Sedentary</th>
          <th>Moderatley Active</th>
          <th>Active</th>
        </tr>
        <tr>
          <td>Child</td>
          <td>2-3</td>
          <td>1,000</td>
          <td>1,000-1,400</td>
          <td>1,000-1,400</td>
        </tr>
        <tr>
          <td>Female</td>
          <td>4-8</td>
          <td>1,200</td>
          <td>1,400-1,600</td>
          <td>1,400-1,800</td>
        </tr>
        <tr>
          <td></td>
          <td>9-13</td>
          <td>1,600</td>
          <td>1,600-2,000</td>
          <td>1,800-2,000</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
        <td></td>
          <td>14-18</td>
          <td>1,800</td>
          <td>2,000</td>
          <td>2,400</td>
          <td></td>
          <td></td>
          </tr>
          <tr>
          <td></td>
          <td>19-30</td>
          <td>2,000</td>
          <td>2,000-2,200</td>
          <td>2,400</td>
          <td></td>
          </tr>
          <tr>
        <td></td>
          <td>31-50</td>
          <td>1,800</td>
          <td>2,000</td>
          <td>2,200</td>
          <td></td>
          <td></td>
          </tr>
          <tr>
          <td></td>
          <td>51+</td>
          <td>1,600</td>
          <td>1,800</td>
          <td>2,000-2,200</td>
          <td></td>
          </tr>
          <tr>
          <td>Male</td>
          <td>4-8</td>
          <td>1,400</td>
          <td>1,400-1,600</td>
          <td>1,600-2,000</td>
          <td></td>
          </tr>
          <tr>
          <td></td>
          <td>9-13</td>
          <td>1,800</td>
          <td>1,800-2,200</td>
          <td>2,000-2,600</td>
          <td></td>
          </tr>
          <tr>
          <td></td>
          <td>14-18</td>
          <td>2,200</td>
          <td>2,400-2,800</td>
          <td>2,800-3,200</td>
          <td></td>
          </tr>
          <tr>
          <td></td>
          <td>14-18</td>
          <td>2,200</td>
          <td>2,400-2,800</td>
          <td>2,800-3,000</td>
          <td></td>
          </tr>
          <tr>
          <td></td>
          <td>19-30</td>
          <td>2,400</td>
          <td>2,600-2,800</td>
          <td>3,000</td>
          <td></td>
          </tr>
          <tr>
          <td></td>
          <td>31-50</td>
          <td>2,200</td>
          <td>2,400-2,600</td>
          <td>2,800-3,000</td>
          <td></td>
          </tr>
          <tr>
          <td></td>
          <td>51+</td>
          <td>2,000</td>
          <td>2,200-2,400</td>
          <td>2,400-2,800</td>
          <td></td>
          </tr>     
      </table> 
      </div>
    </div>
  )
}

export default About;