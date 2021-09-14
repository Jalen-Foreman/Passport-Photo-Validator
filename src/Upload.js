import React, {useState} from 'react';
import {Button, Form, FormGroup} from 'reactstrap';
import axios from 'axios';
import './Upload.css'

const Upload = () => {

    const [data, setData] = useState()
    const [result, setResult] = useState()
    const [ifPerson, setIfPerson] = useState('')

    const uploadImage = (e) => {
        const file = e.target.files[0]
        convertBase64(file)
    }

    const convertBase64 = (file) => {
            const fileReader = new FileReader()
            fileReader.readAsDataURL(file)

            fileReader.onload = () => {
                let base64 = fileReader.result
                setData(base64)
            }

            fileReader.onerror = (error) => {
                console.log(error);
            }
        
    }
    
    const fileUpload = async () => {
        
        const response = await axios({
            method: 'post',
            url: 'https://slq4jw7mya.execute-api.us-east-2.amazonaws.com/Dev/passportphoto',
            data: JSON.stringify({photo: data}),
        })
        try {
            await setResult(response.data.body)
            const FaceDetails = JSON.parse(result)
            if(FaceDetails['FaceDetails'][0] === undefined) {
                setIfPerson('This picture is invalid. Please upload a valid jpeg picture.')
            } else {
                setIfPerson('This picture is valid!')
            }
            
        } catch (error) {
            console.log(error);
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