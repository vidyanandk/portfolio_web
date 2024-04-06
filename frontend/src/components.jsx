// import React, { useEffect } from 'react';

// const DownloadButton = () => {
//     useEffect(() => {
//         // Function to handle the click event
//         const handleDownload = () => {
//             // Simulate click on the download link
//             downloadLink.click();
//         };

//         // Get references to the link and the button
//         const downloadLink = document.getElementById('downloadLink');
//         const downloadButton = document.getElementById('downloadButton');

//         // Add event listener to the button
//         downloadButton.addEventListener('click', handleDownload);

//         // Cleanup function to remove event listener
//         return () => {
//             downloadButton.removeEventListener('click', handleDownload);
//         };
//     }, []); // Empty dependency array ensures the effect runs only once after initial render

//     return (
//         <div>
//             <a id="downloadLink" href="../public/assets/Vidyanand_Resume_NITJ" download="Resume.pdf" style={{ display: 'none' }}>
//                 Download File
//             </a>
//             <button id="downloadButton" className="px-8 shadow-gray-500 shadow-md py-5 mt-5 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700" >Download resume</button>
//         </div>
//     );
// };

//  export  {DownloadButton};


import React, { useEffect } from 'react';

const DownloadButton = () => {
    useEffect(() => {
        const handleDownload = () => {
            const downloadLink = document.createElement('a');
            downloadLink.href = '../public/assets/Vidyanand_Resume_NITJ.pdf'; // Update the href to the correct file path
            downloadLink.download = 'Resume.pdf';
            downloadLink.style.display = 'none';
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
        };

        const downloadButton = document.getElementById('downloadButton');

        downloadButton.addEventListener('click', handleDownload);

        return () => {
            downloadButton.removeEventListener('click', handleDownload);
        };
    }, []);

    return (
        <div>
            <button id="downloadButton" className="px-8 shadow-gray-500 shadow-md py-5 mt-5 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">Download resume</button>
        </div>
    );
};

export  {DownloadButton};
