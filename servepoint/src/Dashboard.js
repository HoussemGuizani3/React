import './dashboard.css';
import arrow_leftIcon from './images/arrow_left.png';
import arrow_rightIcon from './images/arrow_right.png';
import actifIcon from './images/actif.png';
import alarmIcon from './images/alarm.png';
import searchIcon from './images/search.png';
import { useNavigate } from 'react-router-dom';

export const Dashboard = () => {
const navigate = useNavigate();
    return (
        <div className="dashboard">
            <div className="dashboard-container">
                <div className="dashboard-header_left">
                    <div className="dashboard-header-left_left">
                         <button onClick={() => navigate(-1)} className="back-btn">
                            <img src={arrow_leftIcon} alt="" />
                            <h3>Dashboard</h3>
                        </button>
                    </div>
                    <div className="dashboard-header-left_right">
                        <button className="back-btn">
                            <img src={arrow_rightIcon} alt="" />
                            <h3>Sales statistics</h3>
                        </button>

                    </div>
                </div>
                <div className="dashboard-header_right">
                    <div className="dashboard-content-right-left">
                        <img src={actifIcon} alt="" />
                        <img src={alarmIcon} alt="" />
                    </div>
                    <div className="dashboard-header_right-right">
                        <img src={searchIcon} alt="Search" />
                        <input type="text" placeholder="Search..." />
                    </div>
                </div>
            </div>
            <div className="dashboard-content_header">
                <h1>Dashboard</h1>
                <div>
                    <ul>
                        <li>Yesterday</li>
                        <li>Today</li>
                        <li>Week</li>
                        <li>Month</li>
                        <li>Year</li>
                    </ul>
                </div>
            </div>
            <div className="dashboard-content">
                <div className="dashboard-content_top">
                    <div className="dashboard-content_left-top">
                        <h3>Daily statistics</h3>
                    </div>
                    <div className="dashboard-content_center-top">
                        <h3>Total Revenue </h3>
                        <select>
                            <option value="1">Today</option>
                            <option value="2">Yesterday</option>
                            <option value="3">Week</option>
                            <option value="4">Month</option>
                            <option value="5">Year</option>
                        </select>
                    </div>
                    <div className="dashboard-content_right-top">
                        <div className="dashboard-content_right-top-top">
                            <h3>Total Order</h3>
                        </div>
                        <div className="dashboard-content_right-top-bottom">
                            <h3>New Custommers</h3>
                        </div>

                    </div>
                </div>
                <div className="dashboard-content_bottom">
                    <div className="dashboard-content_left-bottom">
                        <div className="dashboard-content_left-bottom-top">
                            <h3>Best Employees</h3>
                            <select>
                                <option value="1">Today</option>
                                <option value="2">Yesterday</option>
                                <option value="3">Week</option>
                                <option value="4">Month</option>
                                <option value="5">Year</option>
                            </select>
                        </div>
                        <div className="dashboard-content_left-bottom-bottom">
                            <span>Employees</span>
                            <span>Sales</span>
                        </div>

                    </div>
                    <div className="dashboard-content_right-bottom">
                        <div className="dashboard-content_right-bottom-top">
                            <h3>Trending Dishes</h3>
                            <select>
                                <option value="1">Today</option>
                                <option value="2">Yesterday</option>
                                <option value="3">Week</option>
                                <option value="4">Month</option>
                                <option value="5">Year</option>
                            </select>
                        </div>
                        <div className="dashboard-content_right-bottom-bottom">
                            <span>Item</span>
                            <span>Orders</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}