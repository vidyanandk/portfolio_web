// // DownloadButton component to download the resume
// import React, { useEffect } from 'react';
// import Resume from './assets/Vidyanand_Resume_NITJ.pdf';
// const DownloadButton = () => {
//     useEffect(() => {
//         const handleDownload = () => {
//             const downloadLink = document.createElement('a');
//             // downloadLink.href = './assets/Vidyanand_Resume_NITJ.pdf'; // Update the href to the correct file path
//             downloadLink.href = {Resume}; // Update the href to the correct file path

//             downloadLink.download = 'Resume.pdf';
//             downloadLink.style.display = 'none';
//             document.body.appendChild(downloadLink);
//             downloadLink.click();
//             document.body.removeChild(downloadLink);
//         };

//         const downloadButton = document.getElementById('downloadButton');

//         downloadButton.addEventListener('click', handleDownload);

//         return () => {
//             downloadButton.removeEventListener('click', handleDownload);
//         };
//     }, []);

//     return (
//         <div>
//             <button id="downloadButton" className="px-8 shadow-gray-500 shadow-md py-5 mt-5 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">Download resume</button>
//         </div>
//     );
// };

// export  {DownloadButton};


// method 2;
// DownloadButton component to download the resume
import React from 'react';
const DownloadButton = () => {
    

    return (
        <div>
            <button id="downloadButton" className="px-8 shadow-gray-500 shadow-md py-5 mt-5 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700"><a href="https://drive.google.com/file/d/1txn27t_xdcAH2rNX-mbEf-hDcNVo6cwS/view?usp=drivesdk">Download resume</a> </button>

        </div>
    );
};

export  {DownloadButton};