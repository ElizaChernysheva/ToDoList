import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Input from '../input/Input';
import Button from '../button/Button';
import { addToDo } from '../../redux/todos/actionCreators';
import { EMPTY_ERROR } from '../../constants/errors';
import style from './Form.module.css';

function Form() {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    title: '',
    description: '',
  });
  const [stateError, setStateError] = useState({
    title: '',
    description: '',
  });

  const onChangeInput = ({ target }) => {
    const { name, value } = target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onClickBtn = () => {
    const errors = {};

    Object.entries(state).forEach(([key, value]) => {
      if (!value) errors[key] = EMPTY_ERROR;
    });
    if (Object.values(errors).length) {
      setStateError((prevState) => ({ ...prevState, ...errors }));
      return;
    }
    dispatch(addToDo(state));
    setStateError({
      title: '',
      description: '',
    });
    setState({
      title: '',
      description: '',
    });
  };
  return (
    <form className={style.form}>
      <div className={style.inputWrapper}>
        <Input
          placeholder="Enter title"
          onChange={onChangeInput}
          value={state.title}
          name="title"
          errorText={stateError.title}
          label="Title"
        />
        <Input
          placeholder="Enter description"
          onChange={onChangeInput}
          value={state.description}
          name="description"
          errorText={stateError.description}
          label="Description"
        />
      </div>

      <Button onClick={onClickBtn}>Create</Button>
    </form>
  );
}

export default Form;
