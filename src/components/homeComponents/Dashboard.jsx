import React from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const Dashboard = ({ data, prevData }) => {
    // Arrays for different types of comments
    const goodComments = [
        "Great job! Keep it up!",
        "You're making a real difference!",
        "Amazing progress, keep going!"
    ];

    const badComments = [
        "Don't worry, you can do better!",
        "Keep pushing forward, every step counts!",
        "Stay motivated, every little change helps!"
    ];

    const sameComments = [
        "You're doing great, stay consistent!",
        "Good work, keep up the effort!",
        "Consistency is key, you're on the right track!"
    ];

    // Function to get a random comment from the given array
    const getRandomComment = (comments) => {
        const randomIndex = Math.floor(Math.random() * comments.length);
        return comments[randomIndex];
    };

    // Function to determine the trend (good, bad, or same)
    const getTrendIcon = (current, previous) => {
        if (current > previous) {
            return <FaArrowUp className="green-arrow" />;
        } else if (current < previous) {
            return <FaArrowDown className="red-arrow" />;
        }
        return null;
    };

    // Get the appropriate comment based on the data comparison
    const getComment = (current, previous) => {
        if (current > previous) {
            return getRandomComment(goodComments);
        } else if (current < previous) {
            return getRandomComment(badComments);
        }
        return getRandomComment(sameComments);
    };

    return (
        <div className="dashboard">
            <div className="summary-cards">
                {/* Total Carbon Footprint Card */}
                <div className="card balance">
                    <h4>Total Carbon Footprint</h4>
                    <p>{data.carbonFootprint} kg CO2</p>
                    <div className="trend">
                        {getTrendIcon(data.carbonFootprint, prevData.carbonFootprint)}
                        <small>{data.carbonFootprint > prevData.carbonFootprint ? '- ' : '+ '}{Math.abs(data.carbonFootprint - prevData.carbonFootprint)} kg</small>
                    </div>
                </div>

                {/* Carbon Reduction Card */}
                <div className="card sales">
                    <h4>Carbon Reduction</h4>
                    <p>{data.carbonReduction} kg CO2</p>
                    <div className="trend">
                        {getTrendIcon(data.carbonReduction, prevData.carbonReduction)}
                        <small>{data.carbonReduction > prevData.carbonReduction ? '+ ' : '- '}{Math.abs(data.carbonReduction - prevData.carbonReduction)} kg</small>
                    </div>
                </div>

                {/* Suggestions/Upgrade Card */}
                <div className="card upgrade">
                    <h4>Keep It Up!</h4>
                    <p>{getComment(data.carbonFootprint, prevData.carbonFootprint)}</p>
                    {/* <p>{getComment(data.carbonReduction, prevData.carbonReduction)}</p> */}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
