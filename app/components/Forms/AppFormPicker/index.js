import React from "react";
import { useFormikContext } from "formik";

import AppPicker from "../../AppPicker";
import ErrorMessage from "../ErrorMessage";

function AppFormPicker({ numberOfColumns, items, width, name, placeholder, PickerItemComponent }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        width={width}
        numberOfColumns={numberOfColumns}
        PickerItemComponent={PickerItemComponent}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;
