import React from 'react'
import Files from 'react-files'
import './App.css'

function App() {
  const handleChange = (files) => {
    console.log(files)
  }

  const handleErrror = (error, file) => {
    console.log(`Complete Error object \n`)
    console.log(error)
    alert(`error code ${error.code} : ${error.message} `)
  }

  return (
    <div className='file'>
      <Files 
        className = "files-dropzone"
        onChange = {handleChange}
        onError = {handleErrror}
        accepts = {['image/png', '.pdf', 'audio/*']}  // accepted files paterns regex
        multiple  // aalows multiple files to be uploaded
        clickable // allows user to click select files from file explorer instead of just drag-drop
        maxFileSize = {1000000}
        minFileSize = {0}
        >
          Drop Files here or click to upload
        </Files>
    </div>
  )
}

export default App