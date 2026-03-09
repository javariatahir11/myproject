import React, { useState } from "react";
import { FaBell } from "react-icons/fa";
import "./NotificationPanel.css";
import img from "./man.jpg";





function NotificationPanel() {
  const [open, setOpen] = useState(false);

  const togglePanel = () => setOpen(!open);

  return (
    <>
      {/* Overlay for mobile */}
      {open && <div className="panel-overlay" onClick={togglePanel}></div>}

      {/* Toggle Button */}
      <button className="panel-toggle" onClick={togglePanel}>
        <FaBell />
      </button>

      {/* Notification Panel */}
      <div className={`panel ${open ? "open" : ""}`}>
        <h4>Notifications</h4>

        <div className="item">
          <span>🐞</span>
          <div>
            <p>You fixed a bug.</p>
            <small>Just now</small>
          </div>
        </div>

        <div className="item">
          <span>👤</span>
          <div>
            <p>New user registered.</p>
            <small>59 minutes ago</small>
          </div>
        </div>

        <div className="item">
          <span>🔔</span>
          <div>
            <p>Andi Lane subscribed to you.</p>
            <small>Today, 11:59 AM</small>
          </div>
        </div>

        <h4 className="title">Activities</h4>

        <div className="item">
          <img src={img} alt="avatar" />
          <div>
            <p>Changed the style.</p>
            <small>Just now</small>
          </div>
        </div>

        <div className="item">
          <img src={img} alt="avatar" />
          <div>
            <p>Released a new version.</p>
            <small>59 minutes ago</small>
          </div>
        </div>
        


        <div className="item">
           <img src={img} alt="avatar" />
        <div>
           <p>Submitted a bug.</p> 
           <small>12 hours ago</small> 
           </div> 
           </div>
         <div className="item">
          <img src={img} alt="avatar" />
            <div>
               <p>Modified data in Page X.</p>
                <small>Today, 11:59 AM</small>
                 </div> 
                 </div> 
         <div className="item">
         <img src={img} alt="avatar" />
           <div>
             <p>Deleted a page in Project X.</p> 
             <small>Feb 2, 2026</small>
              </div> 
              </div>
        <h4 className="title">Contacts</h4>

        <div className="contact">
          <img src={img} alt="avatar" />
          <span>Natali Craig</span>
        </div>

        <div className="contact">
       <img src={img} alt="avatar" />
          <span>Drew Cano</span>
        </div>

        <div className="contact">
         <img src={img} alt="avatar" />
          <span>Andi Lane</span>
        </div>

        <div className="contact"><img src={img} alt="avatar" /> <span>Andi Lane</span> </div>
         <div className="contact"> <img src={img} alt="avatar" /> <span>Koray Okumus</span> </div> 
         <div className="contact"> <img src={img} alt="avatar" /> <span>Kate Morrison</span> </div>
          <div className="contact"> <img src={img} alt="avatar" /> <span>Melody Macy</span> </div>
      </div>
    </>
  );
}

export default NotificationPanel;