import React, {useState} from 'react';
import {Button, Form, FormGroup} from 'reactstrap';
import './Upload.css'

const Upload = () => {

    const [data, setData] = useState()
    const [result, setResult] = useState([])
    const [ifPerson, setIfPerson] = useState('')

    const uploadImage = async (e) => {
        const file = e.target.files[0]
        const base64 = await convertBase64(file)
        setData(base64)
    }

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader()
            fileReader.readAsDataURL(file)
            
            fileReader.onload = () => {
                resolve(fileReader.result)
            }

            fileReader.onerror = (error) => {
                reject(error)
            }
        })
    }

    const fileUpload = async () => {
        const response = await fetch('https://f55qj1kvya.execute-api.us-east-1.amazonaws.com/Dev/passportphoto', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({photo: data})
        })
        
        const Result = await response.json()
        setResult(Result.body)
        const FaceDetails = await JSON.parse(result)
        if(FaceDetails['FaceDetails'][0] === undefined) {
            setIfPerson('This picture is invalid. Please upload a valid jpeg picture.')
        } else {
            setIfPerson('This picture is valid!')
        }

        
    }

    return (
			<div>
				<div className='row'>
					<div className='col-6 offset-3'>
						<h4>Passport Photo Validator</h4>
					</div>
				</div>

				<div className='row'>
					<div className='col-6 offset-3 files'>
						<input
							type='file'
							onChange={(e) => {
								uploadImage(e);
							}}
						/>
					</div>
				</div>

				<div className='row'>
					<div className='col-6 offset-3'>
						<img alt='' src={data} width='40%' />
					</div>
				</div>

				<div className='row'>
					<div className='col-6 offset-3'>
						<Button
							className='btn btn-lg btn-danger btn-block'
							onClick={() => {
								fileUpload();
							}}>
							Verify My Photo!
						</Button>
					</div>
				</div>

				<div className='row'>
					<div className='col-6 offset-3'>
						{ifPerson}
					</div>
				</div>
			</div>
		);
};

export default Upload;