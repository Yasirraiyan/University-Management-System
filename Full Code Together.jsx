 import React, { useState } from 'react';
import './styles.css';

function App() {
  // Your useState and other logic here
  return (
    <div className="App">
      <h1>Registration Form</h1>
        <label>Application No:</label>
        <input type="text" placeholder="Enter your application no:"></input>
        <br/>
        <label>Student No:</label>
        <input type="text" placeholder="Enter your student no:"></input>
        <br/>
        <label>Name:</label>
        <input type="text" placeholder="Enter your name:"></input>
        <br/>
         <label>Blood Group:</label>
        <select id="Blood Group" name="Blood Group">
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
        </select>
        <br/>
        <label>Telephone No:</label>
        <input type="text" placeholder="Enter your telephone no:"></input>
        <label>Father's Name:</label>
        <input type="text" placeholder="Enter your father's name:"></input>
         <label>Father's Occupation:</label>
        <input type="text" placeholder="Enter your father's ocuppation:"></input>
          <label>Telephone No:</label>
        <input type="text" placeholder="Enter your  father's telephone no:"></input>
         <label>Mother's Name:</label>
        <input type="text" placeholder="Enter your mother's name:"></input>
         <label>Mother's Occupation:</label>
        <input type="text" placeholder="Enter your mother's ocuppation:"></input>
          <label>Telephone No:</label>
        <input type="text" placeholder="Enter your  mother's telephone no:"></input>
         <label>Gurdian's Name:</label>
        <input type="text" placeholder="Enter your gurdian's name:"></input>
         <label>Gurdian's Occupation:</label>
        <input type="text" placeholder="Enter your gurdian's ocuppation:"></input>
          <label>Telephone No:</label>
        <input type="text" placeholder="Enter your  gurdian's telephone no:"></input>
          <label>Nationality:</label>
       <select id="Country" name="Country">
    <option value="Afghanistan">Afghanistan</option>
    <option value="Albania">Albania</option>
    <option value="Azerbaijan">Azerbaijan</option>
    <option value="Bahrain">Bahrain</option>
    <option value="Bangladesh">Bangladesh</option>
    <option value="Benin">Benin</option>
    <option value="United Arab Emirates">United Arab Emirates (UAE)</option>
    <option value="Brunei Darussalam">Brunei Darussalam</option>
    <option value="Burkina Faso">Burkina Faso</option>
    <option value="Algeria">Algeria</option>
    <option value="Djibouti">Djibouti</option>
    <option value="Chad">Chad</option>
    <option value="Indonesia">Indonesia</option>
    <option value="Morocco">Morocco</option>
    <option value="Cote d’Ivoire">Cote d’Ivoire</option>
    <option value="Palestine">Palestine</option>
    <option value="Gabon">Gabon</option>
    <option value="Gambia">Gambia</option>
    <option value="Guinea">Guinea</option>
    <option value="Guinea Bissau">Guinea Bissau</option>
    <option value="Guyana">Guyana</option>
    <option value="Iraq">Iraq</option>
    <option value="Iran">Iran</option>
    <option value="Cameroon">Cameroon</option>
    <option value="Qatar">Qatar</option>
    <option value="Kazakhstan">Kazakhstan</option>
    <option value="Kyrgyzstan">Kyrgyzstan</option>
    <option value="Comoros">Comoros</option>
    <option value="Kuwait">Kuwait</option>
    <option value="Libya">Libya</option>
    <option value="Lebanon">Lebanon</option>
    <option value="Maldives">Maldives</option>
    <option value="Malaysia">Malaysia</option>
    <option value="Mali">Mali</option>
    <option value="Egypt">Egypt</option>
    <option value="Mauritania">Mauritania</option>
    <option value="Mozambique">Mozambique</option>
    <option value="Niger">Niger</option>
    <option value="Nigeria">Nigeria</option>
    <option value="Uzbekistan">Uzbekistan</option>
    <option value="Pakistan">Pakistan</option>
    <option value="Senegal">Senegal</option>
    <option value="Sierra Leone">Sierra Leone</option>
    <option value="Somalia">Somalia</option>
    <option value="Sudan">Sudan</option>
    <option value="Surinam">Surinam</option>
    <option value="Syria">Syria</option>
    <option value="Saudi Arabia">Saudi Arabia</option>
    <option value="Tajikistan">Tajikistan</option>
    <option value="Togo">Togo</option>
    <option value="Tunisia">Tunisia</option>
    <option value="Turkey">Türkiye</option>
    <option value="Turkmenistan">Turkmenistan</option>
    <option value="Uganda">Uganda</option>
    <option value="Oman">Oman</option>
    <option value="Jordan">Jordan</option>
    <option value="Yemen">Yemen</option>
</select>
        <label>Religion:</label>
          <select id="Religion" name="Religion">
    <option value="Islam">Islam</option>
    <option value="Hindu">Hindu</option>
    <option value="Buddhist">Buddhist</option>
    <option value="Cristian's">Cristian's</option>
          </select>
        <label>Gender:</label>
       
        <label for="Male">Male</label>
        <input type="radio" id="male" Name="gender"value="Male"></input>
         <label for="Female">Female</label>
        <input type="radio" id="female" Name="gender"value="Female"></input>
         <label for="Other's">Other's</label>
        <input type="radio" id="other's" Name="gender"value="other'"></input>

        <br/>
          <label for="Date of birth">Date of birth:</label>
        <input type="text" placeholder="dd/mm/yyyy"></input>
            <label for="National ID No:">National ID No:</label>
        <input type="text" placeholder="Enter your NID:"></input>
        <label for="Passport No:">Passport No:</label>
        <input type="text" placeholder="Enter your Passport No:"></input>
           <label for="Date of Issue:">Date of Issue:</label>
        <input type="text" placeholder="dd/mm/yyyy"></input>
           <label for="Date of Expire:">Date of Expire:</label>
        <input type="text" placeholder="dd/mm/yyyy"></input>
          <label for="Enter your SSC info:">SSC Info :</label>
         <label for="Enter your SSC GPA:">GPA :</label>
        <input type="text" placeholder="Enter your SSC GPA:"></input>
         <label>Select your Board:</label>
          <select id="Board" name="Board">
    <option value="Barisal">Barisal</option>
    <option value="Chittagong">Chittagong</option>
    <option value="Cumilla">Cumilla</option>
    <option value="Dhaka">Dhaka</option>
              <option value="Dinajpur">Dinajpur</option>
              <option value="Jessore">Jessore</option>
              <option value="Mymensingh">Mymensingh</option>
              <option value="Sylhet">Sylhet</option>
              <option value="Rajshahi">Rajshahi</option>
              <option value="Madrasha">Madrasha</option>
               </select>
         <label for="Enter your HSC info:">HSC Info :</label>
         <label for="Enter your HSC GPA:">GPA :</label>
        <input type="text" placeholder="Enter your HSC GPA:"></input>
         <label>Select your Board:</label>
          <select id="Board" name="Board">
    <option value="Barisal">Barisal</option>
    <option value="Chittagong">Chittagong</option>
    <option value="Cumilla">Cumilla</option>
    <option value="Dhaka">Dhaka</option>
              <option value="Dinajpur">Dinajpur</option>
              <option value="Jessore">Jessore</option>
              <option value="Mymensingh">Mymensingh</option>
              <option value="Sylhet">Sylhet</option>
              <option value="Rajshahi">Rajshahi</option>
              <option value="Madrasha">Madrasha</option>
               </select>
        <label for="Present Address:">Present Address :</label>
         <input type="text" placeholder="Enter your present address :"></input>
         <label for="Telephone:">Telephone :</label>
         <input type="text" placeholder="Enter your telephone no :"></input>
         <label for="Fax:">Fax :</label>
         <input type="text" placeholder="Enter your fax :"></input>
         <label for="Email:">Email :</label>
         <input type="text" placeholder="Enter your email :"></input>
          <label for="Parmanent Address:">Parmanent Address :</label>
         <input type="text" placeholder="Enter your parmanent address :"></input>
         <label for="Telephone:">Telephone :</label>
         <input type="text" placeholder="Enter your telephone no :"></input>
         <label for="Fax:">Fax :</label>
         <input type="text" placeholder="Enter your fax :"></input>
         <label for="Email:">Email :</label>
         <input type="text" placeholder="Enter your email :"></input>
           <label for="Nearest Bangladesh Embassy:">Nearest Bangladesh Embassy: :</label>
          <select id="Country" name="Country">
    <option value="Afghanistan">Afghanistan</option>
    <option value="Albania">Albania</option>
    <option value="Azerbaijan">Azerbaijan</option>
    <option value="Bahrain">Bahrain</option>
    <option value="Bangladesh">Bangladesh</option>
    <option value="Benin">Benin</option>
    <option value="United Arab Emirates">United Arab Emirates (UAE)</option>
    <option value="Brunei Darussalam">Brunei Darussalam</option>
    <option value="Burkina Faso">Burkina Faso</option>
    <option value="Algeria">Algeria</option>
    <option value="Djibouti">Djibouti</option>
    <option value="Chad">Chad</option>
    <option value="Indonesia">Indonesia</option>
    <option value="Morocco">Morocco</option>
    <option value="Cote d’Ivoire">Cote d’Ivoire</option>
    <option value="Palestine">Palestine</option>
    <option value="Gabon">Gabon</option>
    <option value="Gambia">Gambia</option>
    <option value="Guinea">Guinea</option>
    <option value="Guinea Bissau">Guinea Bissau</option>
    <option value="Guyana">Guyana</option>
    <option value="Iraq">Iraq</option>
    <option value="Iran">Iran</option>
    <option value="Cameroon">Cameroon</option>
    <option value="Qatar">Qatar</option>
    <option value="Kazakhstan">Kazakhstan</option>
    <option value="Kyrgyzstan">Kyrgyzstan</option>
    <option value="Comoros">Comoros</option>
    <option value="Kuwait">Kuwait</option>
    <option value="Libya">Libya</option>
    <option value="Lebanon">Lebanon</option>
    <option value="Maldives">Maldives</option>
    <option value="Malaysia">Malaysia</option>
    <option value="Mali">Mali</option>
    <option value="Egypt">Egypt</option>
    <option value="Mauritania">Mauritania</option>
    <option value="Mozambique">Mozambique</option>
    <option value="Niger">Niger</option>
    <option value="Nigeria">Nigeria</option>
    <option value="Uzbekistan">Uzbekistan</option>
    <option value="Pakistan">Pakistan</option>
    <option value="Senegal">Senegal</option>
    <option value="Sierra Leone">Sierra Leone</option>
    <option value="Somalia">Somalia</option>
    <option value="Sudan">Sudan</option>
    <option value="Surinam">Surinam</option>
    <option value="Syria">Syria</option>
    <option value="Saudi Arabia">Saudi Arabia</option>
    <option value="Tajikistan">Tajikistan</option>
    <option value="Togo">Togo</option>
    <option value="Tunisia">Tunisia</option>
    <option value="Turkey">Türkiye</option>
    <option value="Turkmenistan">Turkmenistan</option>
    <option value="Uganda">Uganda</option>
    <option value="Oman">Oman</option>
    <option value="Jordan">Jordan</option>
    <option value="Yemen">Yemen</option>
</select>
          <label for="Programme of study:">Programme of study:</label>
          <select id="study" name="study">
    <option value="4 yr bachalor">4 yr bachalor</option>
    <option value="3 yr technical">3 yr technical</option>
          </select>
          <label for="4 yr bachalor:">4 yr bachalor:</label>
          <select id="subject" name="subject">
              <option value="CSE partial">CSE partial</option>
    <option value="CSE self-financed">CSE self-financed</option>
    <option value="EEE partial">EEE partial</option>
    <option value="EEE self-financed">EEE self-financed</option>
    <option value="MPE partial">MPE partial</option>
    <option value="MPE self-financed">MPE self-financed</option>
    <option value="MCE partial">MCE partial</option>
    <option value="MCE self-financed">MCE self-financed</option>
    <option value="IPE self-financed">IPE self-financed</option>
              <option value="CEE partial">CEE partial</option>
    <option value="CEE self-financed">CEE self-financed</option>
   <option value="SWE partial">SWE partial</option>
              <option value="SWE self-financed">SWE self-financed</option>
             
              <option value="BTM self-financed">BTM self-financed</option>
              <option value="TVE self-financed">TVE self-financed</option>
   
          </select>
          <label for="1st choice:">1st choice:</label>
          <select id="subject" name="subject">
              <option value="CSE partial">CSE partial</option>
    <option value="CSE self-financed">CSE self-financed</option>
    <option value="EEE partial">EEE partial</option>
    <option value="EEE self-financed">EEE self-financed</option>
    <option value="MPE partial">MPE partial</option>
    <option value="MPE self-financed">MPE self-financed</option>
    <option value="MCE partial">MCE partial</option>
    <option value="MCE self-financed">MCE self-financed</option>
    <option value="IPE self-financed">IPE self-financed</option>
              <option value="CEE partial">CEE partial</option>
    <option value="CEE self-financed">CEE self-financed</option>
   <option value="SWE partial">SWE partial</option>
              <option value="SWE self-financed">SWE self-financed</option>
             
              <option value="BTM self-financed">BTM self-financed</option>
              <option value="TVE self-financed">TVE self-financed</option>
   
          </select>
        <label for="2nd choice:">2nd choice:</label>
          <select id="subject" name="subject">
              <option value="CSE partial">CSE partial</option>
    <option value="CSE self-financed">CSE self-financed</option>
    <option value="EEE partial">EEE partial</option>
    <option value="EEE self-financed">EEE self-financed</option>
    <option value="MPE partial">MPE partial</option>
    <option value="MPE self-financed">MPE self-financed</option>
    <option value="MCE partial">MCE partial</option>
    <option value="MCE self-financed">MCE self-financed</option>
    <option value="IPE self-financed">IPE self-financed</option>
              <option value="CEE partial">CEE partial</option>
    <option value="CEE self-financed">CEE self-financed</option>
   <option value="SWE partial">SWE partial</option>
              <option value="SWE self-financed">SWE self-financed</option>
             
              <option value="BTM self-financed">BTM self-financed</option>
              <option value="TVE self-financed">TVE self-financed</option>
   
          </select>
        <label for="3rd choice:">3rd choice:</label>
          <select id="subject" name="subject">
              <option value="CSE partial">CSE partial</option>
    <option value="CSE self-financed">CSE self-financed</option>
    <option value="EEE partial">EEE partial</option>
    <option value="EEE self-financed">EEE self-financed</option>
    <option value="MPE partial">MPE partial</option>
    <option value="MPE self-financed">MPE self-financed</option>
    <option value="MCE partial">MCE partial</option>
    <option value="MCE self-financed">MCE self-financed</option>
    <option value="IPE self-financed">IPE self-financed</option>
              <option value="CEE partial">CEE partial</option>
    <option value="CEE self-financed">CEE self-financed</option>
   <option value="SWE partial">SWE partial</option>
              <option value="SWE self-financed">SWE self-financed</option>
             
              <option value="BTM self-financed">BTM self-financed</option>
              <option value="TVE self-financed">TVE self-financed</option>
   
          </select>
        <label for="4th choice:">4th choice:</label>
          <select id="subject" name="subject">
              <option value="CSE partial">CSE partial</option>
    <option value="CSE self-financed">CSE self-financed</option>
    <option value="EEE partial">EEE partial</option>
    <option value="EEE self-financed">EEE self-financed</option>
    <option value="MPE partial">MPE partial</option>
    <option value="MPE self-financed">MPE self-financed</option>
    <option value="MCE partial">MCE partial</option>
    <option value="MCE self-financed">MCE self-financed</option>
    <option value="IPE self-financed">IPE self-financed</option>
              <option value="CEE partial">CEE partial</option>
    <option value="CEE self-financed">CEE self-financed</option>
   <option value="SWE partial">SWE partial</option>
              <option value="SWE self-financed">SWE self-financed</option>
             
              <option value="BTM self-financed">BTM self-financed</option>
              <option value="TVE self-financed">TVE self-financed</option>
   
          </select>
        <label for="5th choice:">5th choice:</label>
          <select id="subject" name="subject">
              <option value="CSE partial">CSE partial</option>
    <option value="CSE self-financed">CSE self-financed</option>
    <option value="EEE partial">EEE partial</option>
    <option value="EEE self-financed">EEE self-financed</option>
    <option value="MPE partial">MPE partial</option>
    <option value="MPE self-financed">MPE self-financed</option>
    <option value="MCE partial">MCE partial</option>
    <option value="MCE self-financed">MCE self-financed</option>
    <option value="IPE self-financed">IPE self-financed</option>
              <option value="CEE partial">CEE partial</option>
    <option value="CEE self-financed">CEE self-financed</option>
   <option value="SWE partial">SWE partial</option>
              <option value="SWE self-financed">SWE self-financed</option>
             
              <option value="BTM self-financed">BTM self-financed</option>
              <option value="TVE self-financed">TVE self-financed</option>
   
          </select>
        <label for="6th choice:">6th choice:</label>
          <select id="subject" name="subject">
              <option value="CSE partial">CSE partial</option>
    <option value="CSE self-financed">CSE self-financed</option>
    <option value="EEE partial">EEE partial</option>
    <option value="EEE self-financed">EEE self-financed</option>
    <option value="MPE partial">MPE partial</option>
    <option value="MPE self-financed">MPE self-financed</option>
    <option value="MCE partial">MCE partial</option>
    <option value="MCE self-financed">MCE self-financed</option>
    <option value="IPE self-financed">IPE self-financed</option>
              <option value="CEE partial">CEE partial</option>
    <option value="CEE self-financed">CEE self-financed</option>
   <option value="SWE partial">SWE partial</option>
              <option value="SWE self-financed">SWE self-financed</option>
             
              <option value="BTM self-financed">BTM self-financed</option>
              <option value="TVE self-financed">TVE self-financed</option>
   
          </select>
        <label for="7th choice:">7th choice:</label>
          <select id="subject" name="subject">
              <option value="CSE partial">CSE partial</option>
    <option value="CSE self-financed">CSE self-financed</option>
    <option value="EEE partial">EEE partial</option>
    <option value="EEE self-financed">EEE self-financed</option>
    <option value="MPE partial">MPE partial</option>
    <option value="MPE self-financed">MPE self-financed</option>
    <option value="MCE partial">MCE partial</option>
    <option value="MCE self-financed">MCE self-financed</option>
    <option value="IPE self-financed">IPE self-financed</option>
              <option value="CEE partial">CEE partial</option>
    <option value="CEE self-financed">CEE self-financed</option>
   <option value="SWE partial">SWE partial</option>
              <option value="SWE self-financed">SWE self-financed</option>
             
              <option value="BTM self-financed">BTM self-financed</option>
              <option value="TVE self-financed">TVE self-financed</option>
   
          </select>
        <label for="8th choice:">8th choice:</label>
          <select id="subject" name="subject">
              <option value="CSE partial">CSE partial</option>
    <option value="CSE self-financed">CSE self-financed</option>
    <option value="EEE partial">EEE partial</option>
    <option value="EEE self-financed">EEE self-financed</option>
    <option value="MPE partial">MPE partial</option>
    <option value="MPE self-financed">MPE self-financed</option>
    <option value="MCE partial">MCE partial</option>
    <option value="MCE self-financed">MCE self-financed</option>
    <option value="IPE self-financed">IPE self-financed</option>
              <option value="CEE partial">CEE partial</option>
    <option value="CEE self-financed">CEE self-financed</option>
   <option value="SWE partial">SWE partial</option>
              <option value="SWE self-financed">SWE self-financed</option>
             
              <option value="BTM self-financed">BTM self-financed</option>
              <option value="TVE self-financed">TVE self-financed</option>
   
          </select>
        <label for="9th choice:">9th choice:</label>
          <select id="subject" name="subject">
              <option value="CSE partial">CSE partial</option>
    <option value="CSE self-financed">CSE self-financed</option>
    <option value="EEE partial">EEE partial</option>
    <option value="EEE self-financed">EEE self-financed</option>
    <option value="MPE partial">MPE partial</option>
    <option value="MPE self-financed">MPE self-financed</option>
    <option value="MCE partial">MCE partial</option>
    <option value="MCE self-financed">MCE self-financed</option>
    <option value="IPE self-financed">IPE self-financed</option>
              <option value="CEE partial">CEE partial</option>
    <option value="CEE self-financed">CEE self-financed</option>
   <option value="SWE partial">SWE partial</option>
              <option value="SWE self-financed">SWE self-financed</option>
             
              <option value="BTM self-financed">BTM self-financed</option>
              <option value="TVE self-financed">TVE self-financed</option>
   
          </select>
        <label for="10th choice:">10th choice:</label>
          <select id="subject" name="subject">
              <option value="CSE partial">CSE partial</option>
    <option value="CSE self-financed">CSE self-financed</option>
    <option value="EEE partial">EEE partial</option>
    <option value="EEE self-financed">EEE self-financed</option>
    <option value="MPE partial">MPE partial</option>
    <option value="MPE self-financed">MPE self-financed</option>
    <option value="MCE partial">MCE partial</option>
    <option value="MCE self-financed">MCE self-financed</option>
    <option value="IPE self-financed">IPE self-financed</option>
              <option value="CEE partial">CEE partial</option>
    <option value="CEE self-financed">CEE self-financed</option>
   <option value="SWE partial">SWE partial</option>
              <option value="SWE self-financed">SWE self-financed</option>
             
              <option value="BTM self-financed">BTM self-financed</option>
              <option value="TVE self-financed">TVE self-financed</option>
   
          </select>
        <label for="11th choice:">11th choice:</label>
          <select id="subject" name="subject">
              <option value="CSE partial">CSE partial</option>
    <option value="CSE self-financed">CSE self-financed</option>
    <option value="EEE partial">EEE partial</option>
    <option value="EEE self-financed">EEE self-financed</option>
    <option value="MPE partial">MPE partial</option>
    <option value="MPE self-financed">MPE self-financed</option>
    <option value="MCE partial">MCE partial</option>
    <option value="MCE self-financed">MCE self-financed</option>
    <option value="IPE self-financed">IPE self-financed</option>
              <option value="CEE partial">CEE partial</option>
    <option value="CEE self-financed">CEE self-financed</option>
   <option value="SWE partial">SWE partial</option>
              <option value="SWE self-financed">SWE self-financed</option>
             
              <option value="BTM self-financed">BTM self-financed</option>
              <option value="TVE self-financed">TVE self-financed</option>
   
          </select>
        <label for="12th choice:">12th choice:</label>
          <select id="subject" name="subject">
              <option value="CSE partial">CSE partial</option>
    <option value="CSE self-financed">CSE self-financed</option>
    <option value="EEE partial">EEE partial</option>
    <option value="EEE self-financed">EEE self-financed</option>
    <option value="MPE partial">MPE partial</option>
    <option value="MPE self-financed">MPE self-financed</option>
    <option value="MCE partial">MCE partial</option>
    <option value="MCE self-financed">MCE self-financed</option>
    <option value="IPE self-financed">IPE self-financed</option>
              <option value="CEE partial">CEE partial</option>
    <option value="CEE self-financed">CEE self-financed</option>
   <option value="SWE partial">SWE partial</option>
              <option value="SWE self-financed">SWE self-financed</option>
             
              <option value="BTM self-financed">BTM self-financed</option>
              <option value="TVE self-financed">TVE self-financed</option>
   
          </select>
        <label for="13th choice:">13th choice:</label>
          <select id="subject" name="subject">
              <option value="CSE partial">CSE partial</option>
    <option value="CSE self-financed">CSE self-financed</option>
    <option value="EEE partial">EEE partial</option>
    <option value="EEE self-financed">EEE self-financed</option>
    <option value="MPE partial">MPE partial</option>
    <option value="MPE self-financed">MPE self-financed</option>
    <option value="MCE partial">MCE partial</option>
    <option value="MCE self-financed">MCE self-financed</option>
    <option value="IPE self-financed">IPE self-financed</option>
              <option value="CEE partial">CEE partial</option>
    <option value="CEE self-financed">CEE self-financed</option>
   <option value="SWE partial">SWE partial</option>
              <option value="SWE self-financed">SWE self-financed</option>
             
              <option value="BTM self-financed">BTM self-financed</option>
              <option value="TVE self-financed">TVE self-financed</option>
   
          </select>
        <label for="14th choice:">14th choice:</label>
          <select id="subject" name="subject">
              <option value="CSE partial">CSE partial</option>
    <option value="CSE self-financed">CSE self-financed</option>
    <option value="EEE partial">EEE partial</option>
    <option value="EEE self-financed">EEE self-financed</option>
    <option value="MPE partial">MPE partial</option>
    <option value="MPE self-financed">MPE self-financed</option>
    <option value="MCE partial">MCE partial</option>
    <option value="MCE self-financed">MCE self-financed</option>
    <option value="IPE self-financed">IPE self-financed</option>
              <option value="CEE partial">CEE partial</option>
    <option value="CEE self-financed">CEE self-financed</option>
   <option value="SWE partial">SWE partial</option>
              <option value="SWE self-financed">SWE self-financed</option>
             
              <option value="BTM self-financed">BTM self-financed</option>
              <option value="TVE self-financed">TVE self-financed</option>
   
          </select>
        <label for="15th choice:">15th choice:</label>
          <select id="subject" name="subject">
              <option value="CSE partial">CSE partial</option>
    <option value="CSE self-financed">CSE self-financed</option>
    <option value="EEE partial">EEE partial</option>
    <option value="EEE self-financed">EEE self-financed</option>
    <option value="MPE partial">MPE partial</option>
    <option value="MPE self-financed">MPE self-financed</option>
    <option value="MCE partial">MCE partial</option>
    <option value="MCE self-financed">MCE self-financed</option>
    <option value="IPE self-financed">IPE self-financed</option>
              <option value="CEE partial">CEE partial</option>
    <option value="CEE self-financed">CEE self-financed</option>
   <option value="SWE partial">SWE partial</option>
              <option value="SWE self-financed">SWE self-financed</option>
             
              <option value="BTM self-financed">BTM self-financed</option>
              <option value="TVE self-financed">TVE self-financed</option>
   
          </select>
          <label for="3 yr Tech:">3 yr Tech:</label>
          <select id="subject" name="subject">
              <option value="CSE partial">CSE partial</option>
    <option value="CSE self-financed">CSE self-financed</option>
    <option value="EEE partial">EEE partial</option>
    <option value="EEE self-financed">EEE self-financed</option>
    <option value="MPE partial">MPE partial</option>
    <option value="MPE self-financed">MPE self-financed</option>
    <option value="MCE partial">MCE partial</option>
    <option value="MCE self-financed">MCE self-financed</option>
    <option value="IPE self-financed">IPE self-financed</option>
              <option value="CEE partial">CEE partial</option>
    <option value="CEE self-financed">CEE self-financed</option>
   <option value="SWE partial">SWE partial</option>
              <option value="SWE self-financed">SWE self-financed</option>
             
              <option value="BTM self-financed">BTM self-financed</option>
              <option value="TVE self-financed">TVE self-financed</option>
   
          </select>
        
         
        
        




    </div>
  );
}
export default App;


