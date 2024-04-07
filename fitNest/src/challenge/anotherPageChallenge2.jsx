import React, { useState } from 'react';
import './challenge1Video.css'
import axios from 'axios'; // Import Axios for making HTTP requests
import { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const AnotherPageChallenge2 = () => {
    const [formData, setFormData] = useState({});
    const [pushups, setpushups] = useState(0);
    const [loading, setLoading] = useState(true);
    const [dataAdded, setDataAdded] = useState({});
    const [testPassed, setTestPassed] = useState(false);
    const [showCongratsMessage, setShowCongratsMessage] = useState(false); // State variable for showing the congrats message
    const navigate = useNavigate();

    const handleFileChange = (e) => {
        setFormData({ file: e.target.files[0] });
    };

    useEffect(() => {
        if (testPassed) {
            handleFileChange3();
        }
    }, []);


    const handleFileChange3 = async (id, pushups, progress, days) => {
        if (testPassed) {
            const pushUpsToDo = Number(pushups) + 4;
            const prog = parseInt(progress) + 5; 
            try {
                const response = await fetch(`http://localhost:30049/users/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        challenges: [
                            { 
                                progress: `${prog}%`,
                                completed: true,
                                pushUpsToDo: pushUpsToDo,
                                name: "pullUps",
                                daysCompleted: days
                            }
                        ]
                    }),
                });
        
                if (!response.ok) {
                    throw new Error('Failed to update challenges data');
                }
        
                const responseData = await response.json();
                console.log('Success:', responseData);
                setShowCongratsMessage(true); // Update state to show the congrats message
            } catch (error) {
                console.error('Error:', error);
            } navigate("/challenge1", { state: { message: "Congrats, you have passed" } })
            window.location.reload()
        }   
        navigate("/challenge2", { state: { message: "Sorry, you will come back stronger" } })
            window.location.reload()
    };
        

    

    useEffect(() => {
        const getChallengeRequirements = async () => {
          try {
            const response = await fetch("http://localhost:30049/userlist");
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setDataAdded(data);
            console.log(data);
          } catch (error) {
            console.error("Failed to fetch data:", error);
            setError("Failed to fetch data. Please try again later.");
          } finally {
            setLoading(false);
          }
        };
    
        getChallengeRequirements();
      }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        formDataToSend.append('file', formData.file);
        try {
            const response = await axios.post('http://127.0.0.1:5000/pullup', formDataToSend);
            console.log(response.data[0]);
            setpushups(response.data[0]);

            // Handle response from backend as needed
        } catch (error) {
            console.error('Error uploading file:', error);
            // Handle error
        } 
    };

    if (loading) {
        return <div>Loading...</div>;
      }


    return (
        <div className="anotherPageContainer">
            <form onSubmit={handleSubmit} className="uploadForm">
                <div className="uploadFormGroup">
                    <label htmlFor="file">Upload a file</label>
                    <input
                        type="file"
                        id="file"
                        name="file"
                        onChange={handleFileChange}
                    />

                    <div>
                    {showCongratsMessage && (
                        <p className="description2" style={{ fontSize: "40px", marginLeft: "40%" }}>
                            Congrats u have passed
                        </p>
                    )}
                       </div>
                    {pushups > 0 && dataAdded.length > 0 && (
                        dataAdded[0].challenges[0].pushUpsToDo <= pushups ? (
                            <p className="description2" style={{ fontSize: "40px", marginLeft: "40%" }}>
                                {setTestPassed(true)};
                                {handleFileChange3(dataAdded[0].user_id, dataAdded[0].challenges[0].pushUpsToDo, dataAdded[0].challenges[0].progress, dataAdded[0].challenges[0].daysCompleted)};
                                <p className="description2" style={{ fontSize: "40px", marginLeft: "40%" }}>
                                    Congrats u have passed
                                </p>
                            </p>
                        ) : (
                            <p className="description2" style={{ fontSize: "20px", marginLeft: "40%"  }}>
                                {setTestPassed(false)};
                                {/* {alert("u will come back stronger")}; */}
                                {handleFileChange3(dataAdded[0].user_id, dataAdded[0].challenges[0].pushUpsToDo)};

                            </p>
                        )
                    )} 
                    
                </div>
                <button type="submit" className="uploadFormButton">Submit</button>
            </form>
        </div>
    );
};

export default AnotherPageChallenge2;
