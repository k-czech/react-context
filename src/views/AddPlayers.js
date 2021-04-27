import React, { useState, useContext } from 'react';
import Wrapper from 'components/molecules/Wrapper/Wrapper';
import FormField from 'components/molecules/FormField/FormField';
import styled from 'styled-components';
import { PlayersContext } from 'providers/PlayersProvider';

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  min-width: 320px;
`;

const initialValues = {
  name: '',
  age: '',
  born: '',
  country: '',
  position: 'Bramkarz',
  team: '',
  amount: '',
};

const AddPlayers = () => {
  const [values, setValues] = useState(initialValues);
  const [error, setError] = useState('');
  const { handleAddPlayer } = useContext(PlayersContext);

  const validateForm = (el) => {
    if (el.length < 2) {
      setError('Wpisz min. 2 znaki');
    } else {
      setError('');
    }
  };

  const handleOnChange = (e) => {
    validateForm(e.target.value);
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (!error && error === '') {
      handleAddPlayer(values);
      setValues(initialValues);
    }
  };

  return (
    <Wrapper>
      <FormWrapper>
        <Form onSubmit={handleSubmitForm}>
          <FormField id="name" label="Imię" name="name" value={values.name} onChange={handleOnChange} error={error} />
          <FormField id="age" label="Wiek" name="age" value={values.age} onChange={handleOnChange} error={error} />
          <FormField id="born" label="Miejsce urodzenia" name="born" value={values.born} onChange={handleOnChange} error={error} />
          <FormField id="country" label="Kraj" name="country" value={values.country} onChange={handleOnChange} error={error} />
          <span>
            <select name="position" value={values.position} onChange={handleOnChange}>
              <option value="Bramkarz">Bramkarz</option>
              <option value="Lewy obrońca">Lewy obrońca</option>
              <option value="Środkowy obrońca">Środkowy obrońca</option>
              <option value="Prawy obrońca">Prawy obrońca</option>
              <option value="Stoper">Stoper</option>
              <option value="Lewy pomocnik">Lewy pomocnik</option>
              <option value="Prawy pomocnik">Prawy pomocnik</option>
              <option value="Środkowy pomocnik">Środkowy pomocnik</option>
              <option value="Defensywny pomocnik">Defensywny pomocnik</option>
              <option value="Ofensywny pomocnik">Ofensywny pomocnik</option>
              <option value="Prawy napastnik">Prawy napastnik</option>
              <option value="Lewy napastnik">Lewy napastnik</option>
              <option value="Środkowy napastnik">Środkowy napastnik</option>
              <option value="Napastnik">Napastnik</option>
            </select>
          </span>
          <FormField id="team" label="Klub" name="team" value={values.team} onChange={handleOnChange} error={error} />
          <FormField id="amount" label="Wartość rynkowa" name="amount" value={values.amount} onChange={handleOnChange} error={error} />
          <button type="submit">Zatwierdź</button>
        </Form>
      </FormWrapper>
    </Wrapper>
  );
};

export default AddPlayers;
