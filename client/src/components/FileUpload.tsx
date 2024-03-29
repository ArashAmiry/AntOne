import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import "./FileUpload.css"
import { FaCloudUploadAlt } from "react-icons/fa";
const FileUpload = () => {
    const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
    const { getRootProps, getInputProps } = useDropzone({
        onDrop: (acceptedFiles: File[]) => {
            setUploadedFiles(acceptedFiles);
        },
    });
    //TO DO : Customize and Style this Drag and Drop to Upload box as you want🧑‍💻😊
    return (
        <div {...getRootProps()} className='upload d-flex align-items-center justify-content-center'>
            <input {...getInputProps()} />
            <p>Drag and drop files here or click to browse <FaCloudUploadAlt size={20} /></p> 
        </div>
    );
};
export default FileUpload;