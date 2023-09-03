import React from 'react'
import pic1 from '../img/DistributedTechnology.png'
import pic2 from '../img/multipleserver.png'
const WhatIsWebService = () => {
  return (
    <div className='active'>
      <h2>What is Web Service ?</h2>
      <p>
        WebService means distributed technology. previously people are using mainframe computerin their workplace.
        For ex:- In Railway Reservation System all the machine are don't have any cpu, they just plugin with the port and 
        access the information from the server.
        <p>In this case there is some drawback will happened like...</p>
      </p>
      <img src={pic1} style={{width:'70%', height: '50%'}}/>
      <p>In this above fig-1.1 there are some problrm like -
        <ul>
            <li>If Server has crassed  all the computer are loggedoff.</li>
            <li>client have no processing capacity</li>
        </ul>
      </p>
      <p>To Over come these problem Distributed Technology came.</p>
      <p>The server side capability is brokendown & distributed in multiple server.</p>
      <img src={pic2} style={{width:'30%', height: '30%'}}/>

      <p>So, here lots of server side are their & client side are also their . 
        When an application has deployed in multiple server to scaleup of the number of user to accessing the application.
      </p>
      <p>Mainly in webservice two parts are there i.e --
        <h4>Consumer/Client side server</h4>
            <ul>
                <li>Consumer is always looking for accessing the information from the provider</li>
                <li>Ex- here Makemytrip and  goibibo are the consumer for IRCTC.</li>
            </ul>
            <h4>Provider</h4>
            <ul>
                <li>Provider is always provide the bussiness service / functionality to the world who are requesting for the service.</li>
                <li>Ex-IRCTC</li>
            </ul>
      </p>
      <p>Two programs are running in different computer system and they looking for exchanging the data between them.They wants to communicate with each other.</p>
      <p>For that we need 3 components i.e 
            <ul>
                <li>Medium</li>
                <li>Protocol</li>
                <li>Language</li>
            </ul>
            <h4>Medium</h4>
            <ol>
                <li>To exchange their information to one computer to other computer they need medium(i.e connected over the network).</li>
                <li>Medium act as physical channel on which data would be exchanged.</li>
            </ol>
            <h4>Protocol</h4>
            <ol>
                <li>If two computer wants to exchange the data 1st need medium.</li>
                <li>Even though there is one wire or one n/w connection it just makes the one wire act as 10 wires, by deviding the physical communication channel into logical connection. so it is only by some protocol.</li>
                <li>Protocol gauranties the delivering the information or physical bits of information i.e send by 1 system will be gauranty to deliver to the other system is an understandable formate.</li>
                <li>Protocol is a set of rules and guidlines</li>
                <li>The information is exchange between the computer protocol is mandatory.</li>
                <li>While information transmit, it devided into packets and travel throw different communication channel & the provider side the packege must be re-arranging in the same order.Thats why TCP/IP came into the picture.</li>
                {/* <li>Network adopter will transmit the data on the physical channel & receive by n/w adopter & n/w adopter handover to protocol & then protocol will re-arranging the packets, re-sequence,re-assemble the data and then handover to tye provider.</li> */}
               
            </ol>
      </p>
      <h4>TCP/IP</h4>
      <p>
        <ol>
            <li>Transmission Control Protocol.</li>
            <li>This TCP/IP protocol is called physical layer Transfer protocol .</li>
            <li>so , for every computer the transfering the data over network is TCP/IP protocol .</li>
            <h5>Purpose of TCP/IP</h5>
            <li>Data sent over the network</li>
            <li>Ensuring that the data will receive by the receiver properly .</li>
            <li>Data chucking(breaking)</li>
            <li>Packet sequencing, re- ordering and assembling</li>
            <h5>Role of Protocol</h5>
                <li>Only job of TCP/IP is delivery from host machine to itendent receiver .</li>
                <li>If the 2 computer send the data over the physical communication channel protocol creates an virtual,interlived,gaurded communication channel .</li>
                <li>virtual-not reality</li>
                <li>interlived- every 2 computers information communication not be colide</li>
                <li>gaurded-protected</li>
                <li>end-to-end communication of data will not be promise by TCP/IP .</li>
        </ol>
        <ul>
            <li>When i send any data wheather the receiver of the other program can't understand/ interprete the data because other program don't know what is the information that it trying to communicate</li>
            <li>Then the messeging structure / standared are required for presenting the data.</li>
            <li>The information transfor from 1 computer to other computer must have need structural formate and symantic attach .</li>
        </ul>
        <h4>Language</h4>
            <ol>
                <li>if 2 programs can exchange the data they need common language .</li>
                <li>when we are send the character data it can't transmit the data. Every computer understand binary form</li>
                <li>Everything(character,symbol) 1st be converted to binary representation.Every character has given one unique binary representation.</li>
                {/* <img></img> */}
                <h5 className='question'>Here question is how receiver knowthese binary form is which number.How the character are encoding & decoding ?</h5>
                <li>ASCII is the popular character encoding & decoding standared</li>
                <li>ASCII is the one of the data representation formate. for every symbol it gives a numeric value</li>
                <li>Thats why when both have using same charset then only they transmit the data</li>
            </ol>
      </p>
      <p>
        <h4>Why Http protocol is mandatory to use ?</h4>
        <ol>
            <li>Two different program exchanging the information through a Http protocol formate.</li>
            <li>Because Http protocol is supported by all the language & platform Every computer system support internet. internet support Http protocol</li>
            <li>Interperibility is gaurantee</li>
            <li>Hyper Transferit </li>
            <li>It is a Application layer protocol</li>
            <li>Http is firewall friendly protocol . so that we no need to do configuration in making my program exchanging the data over a network .</li>
        </ol>
      </p>
    </div>
  )
}

export default WhatIsWebService
