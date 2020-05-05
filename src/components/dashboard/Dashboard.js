import React from 'react';
import ProjectList from '../project/ProjectList';
import Notifications from './Notifications';

const Dashboard = () => {
    return(
        <div className="dashboard">
            <section className="projects">
                <ProjectList/>
            </section>
            <aside className = "aside-box">
                <Notifications/>
            </aside>
        </div>
    )
}

export default Dashboard;