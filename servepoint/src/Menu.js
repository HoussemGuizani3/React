import './menu.css';
import logoImg from './images/logo.webp';
import dashboardIcon from './images/dashboard.png';
import foodIcon from './images/food.png';
import messagesIcon from './images/message.png';
import billsIcon from './images/bills.png';
import settingsIcon from './images/settings.png';
import notificationsIcon from './images/notification.png';
import supportIcon from './images/support.png';
import profileIcon from './images/profile.png';
import othersIcon from './images/c.png';
import { useNavigate } from 'react-router-dom';


export const Menu = () => {
    const navigate = useNavigate();
     const handleCardClickdashboard = () => {
        navigate(`/dashboard`);
    };

    const handleCardClickcategorie = () => {
        navigate(`/categorie`);
    };

    const handleCardClickSignup = () => {
        navigate(`/Signup`);
    }


    return (
        <div className="menu">
            <div className="menu-container">
                <div className="menu-header">
                    <img src={logoImg} alt="logo" className="icone"/>
                    <span>ServePoint</span>
                </div>
                <div>
                    <ul>
                        <li onClick={handleCardClickdashboard}><img src={dashboardIcon} alt="logo" />  Dashboard </li>
                        <li onClick={handleCardClickcategorie}><img src={foodIcon} alt="logo" />  Food & Drinks </li>
                        <li><img src={messagesIcon} alt="logo" />  Messages </li>
                        <li><img src={billsIcon} alt="logo" />  Bills </li>
                        <li><img src={settingsIcon} alt="logo" />  Settings</li>
                    </ul>
                </div>
                <hr />
                <div className="menu-footer">
                    <span>Others</span>
                    <ul>
                        <div className="notification"> 
                            <li><img src={notificationsIcon} alt="logo" />  Notifications </li>
                            <span>2</span>
                        </div>
                        <li><img src={supportIcon} alt="logo" />  Support</li>
                    </ul>
                </div>

            </div>
            <div className="profile">
                <div className="profile-container">
                    <img src={profileIcon} alt="user" />
                    <span>Houssem guizani</span>
                    <span>ServePoint 08:00 - 18:00</span>
                    <button onClick={handleCardClickSignup}>Open Profile</button>
                </div>
                <div className="profile-footer">
                    <img src={othersIcon} alt="logo" />
                    <span>2026 HoussemGuizani</span>
                </div>
            </div>

        </div>
    );
}