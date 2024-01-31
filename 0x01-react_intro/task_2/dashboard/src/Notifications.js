import React from 'react';
import './Notifications.css'

function Notifications() {
    return (
        <div className='Notifications'>
            <p>Here is the list of notifications</p>
            <ul>
                <li id="blue">New course available</li> 
                <li>New resume available</li> 
                <li><b>Urgent requirement</b> - complete by EOD</li> 
            </ul>
        </div>
    )
}

export default Notifications;
