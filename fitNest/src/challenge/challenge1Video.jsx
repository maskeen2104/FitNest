import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests

const AnotherPage = () => {
    const [formData, setFormData] = useState({});

    const handleFileChange = (e) => {
        setFormData({ file: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        formDataToSend.append('file', formData.file);
        try {
            const response = await axios.post('http://127.0.0.1:5000/', formDataToSend);
            console.log(response.data);
            // Handle response from backend as needed
        } catch (error) {
            console.error('Error uploading file:', error);
            // Handle error
        }
    };

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
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AnotherPage;
