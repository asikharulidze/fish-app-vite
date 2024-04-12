import React, { useState } from 'react';
import './FishCardForm.css'; 
import styled from 'styled-components';

const FishCardForm = ({onCardSubmit}) => {
  const [CardForm, setCardForm] = useState({
    info: '',
    region: '',
    scientificName: '',
    illustrationPhoto: null,
    name: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [file, setFile] = useState();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardForm({
      ...CardForm,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(URL.createObjectURL(file));

    setCardForm({
      ...CardForm,
      illustrationPhoto: file
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //for not refreshing

    const errors = validateForm();
    setFormErrors(errors);

    //if no errors
    if (!Object.keys(errors).length) {
      onCardSubmit(CardForm);
      
      //Reset form
      setCardForm({
        info: '',
        region: '',
        scientificName: '',
        illustrationPhoto: null,
        name: ''
      }) ;
    }
    else{
        console.log('Please fill out all fields');
      }
    // console.log('Form Errors:', errors);
    // console.log('Form submitted:', CardForm);
  };

  const validateForm = () => {
    const errors ={};
    if(CardForm.name.trim() ===""){
        errors.name = 'Required';
      }
    if(CardForm.scientificName.trim() ===""){
      errors.scientificName = 'Required';
    }
    if(CardForm.region.trim() ===""){
      errors.region = 'Required';
    }
    return errors;
  }

  return (
    <form  className="fish-card-form border-card" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={CardForm.name}
          onChange={handleChange}
        />
        {
        formErrors.name && (
        <span className="error-message">{formErrors.name}</span>)
        }
        
      </div>
      <div className="form-group">
        <label htmlFor="scientificName">Scientific Name:</label>
        <input
          type="text"
          id="scientificName"
          name="scientificName"
          value={CardForm.scientificName}
          onChange={handleChange}
        />
        
        {
        formErrors.scientificName && (
        <span className="error-message">{formErrors.scientificName}</span>)
        }
      </div>
      <div className="form-group">
        <label htmlFor="region">Region:</label>
        <input
          type="text"
          id="region"
          name="region"
          value={CardForm.region}
          onChange={handleChange}
        />
        {
        formErrors.region && (
        <span className="error-message">{formErrors.region}</span>)
        }
      </div>
      <div className="form-group">
        <label htmlFor="info">Information:</label>
        <textarea
          id="info"
          name="info"
          value={CardForm.info}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="illustrationPhoto">Illustration Photo:</label>
        <img src={file} />
        <input
          type="file"
          id="illustrationPhoto"
          name="illustrationPhoto"
          accept="image/*"
          onChange={handleFileChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FishCardForm;
