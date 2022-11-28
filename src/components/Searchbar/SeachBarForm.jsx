import { Formik, Form, Field } from 'formik';
import css from './Searchbar.module.css'

export const SeachBarForm = ({ onSubmit }) => {
  const handleSubmit = async (values, actions) => {
    await onSubmit(values);
    actions.setSubmitting(false);
    actions.resetForm();
  };
  return (
    <div className={css.searchbar}>
    <Formik initialValues={{ title: '' }} 
    onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form >
         <button type='submit'
                 className={css.button}
                 disabled={isSubmitting}>
           <span className={css.buttonSpan}>Search</span>
          </button>
            <Field name='title'
                   type='text'
                   //autocomplete='off'
                   //autofocus
                   placeholder="Search images and photos" /> 
            </Form>
      )}
    </Formik>
    </div>
  );
};

