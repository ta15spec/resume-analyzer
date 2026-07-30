"use client";

import { useDropzone } from "react-dropzone";

export default function ResumeUploader() {
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "application/pdf": [".pdf"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
    },
    onDrop: (acceptedFiles) => {
      console.log(acceptedFiles);
      alert("Uploaded: " + acceptedFiles[0].name);
    },
  });

  return (
    <div
      {...getRootProps()}
      className="border-2 border-dashed border-cyan-500 rounded-xl p-10 text-center cursor-pointer"
    >
      <input {...getInputProps()} />
      <p>📄 Drag & Drop Resume Here</p>
      <p>or click to upload PDF/DOCX</p>
    </div>
  );
}