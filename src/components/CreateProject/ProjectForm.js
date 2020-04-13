import React from 'react';
import { Field, reduxForm } from 'redux-form';
import history from '../../history';

const renderInput = (formProps) => {
  return(
    <div>
      <label> {formProps.label} </label>
      <input data-testid={formProps.dataTestid} {...formProps.input} />
    </div>
  );
};

const ProjectForm = props => {
  const onSubmit = formValues => {
    props.onSubmit(formValues);
    redirect();
  };

  const redirect = () => {
    history.push('/home');
  };

  return(
    <form onSubmit={props.handleSubmit(onSubmit)}>
      <Field name="projectName" dataTestid="projectName" component={renderInput} label="Project Name" />
      <Field name="projectDescription" dataTestid="projectDescription" component={renderInput} label="Project Description"/>

      <button data-testid="finishButton">Finish</button>
    </form>
  );
};

export default reduxForm({ form: 'ProjectForm' })(ProjectForm);
