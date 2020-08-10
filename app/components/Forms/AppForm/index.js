import React from 'react';

import { Formik } from 'formik';

function AppForm({ initialValues, onSubmit, validationSchema, children }) {
  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {
        () => (
          <>
            {children}
          </>
        )
      }
    </Formik>
  )
}

export default AppForm;
