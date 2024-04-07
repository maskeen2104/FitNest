import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests
import { useEffect } from 'react';

const AnotherPage = () => {
    const [formData, setFormData] = useState({});
    const [pushups, setpushups] = useState(0);
    const [loading, setLoading] = useState(true);
    const [dataAdded, setDataAdded] = useState({});
    const handleFileChange = (e) => {
        setFormData({ file: e.target.files[0] });
    };

    // const handleFileChange3 = async (id, pushups) => {
    //     const pushUpsToDo = pushups + 4; // The new value you want to set for pushUpsToDo
    
    //     try {
    //         const response = await fetch(`http://localhost:30049/userChallenge/${id}`, {
    //             method: 'PUT', // or 'PATCH' if you're partially updating the resource
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({
    //                 pushUpsToDo: pushUpsToDo, // This assumes the field you're updating is called `pushUpsToDo`
    //             }),
    //         });
    
    //         if (!response.ok) {
    //             throw new Error('Network response was not ok');
    //         }
    
    //         const responseData = await response.json();
    //         console.log('Success:', responseData);
    //     } catch (error) {
    //         console.error('Error:', error);
    //     }
    // };
    

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
            const response = await axios.post('http://127.0.0.1:5000/', formDataToSend);
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
            <form onSubmit={handleSubmit}>
                <div className="formGroup">
                    <label htmlFor="file">Upload a file</label>
                    <input
                        type="file"
                        id="file"
                        name="file"
                        onChange={handleFileChange}
                    />
                    {pushups > 0 && dataAdded.length > 0 && (
                        dataAdded[0].challenges[0].pushUpsToDo <= pushups ? (
                            <p className="description2" style={{ fontSize: "40px", marginLeft: "40%" }}>
                                Congrats u passed the test
                                {/* handleFileChange3(dataAdded[0].id, dataAdded[0].challenges[0].pushUpsToDo); */}
                            </p>
                        ) : (
                            <p className="description2" style={{ fontSize: "20px", marginLeft: "40%"  }}>
                                u failed the test
                            </p>
                        )
                    )}

                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AnotherPage;
