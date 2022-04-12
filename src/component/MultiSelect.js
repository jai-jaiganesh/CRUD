import React, { useState, useEffect } from "react";
import ReactMultiSelectCheckboxes from "react-multiselect-checkboxes";
import { useSelector } from "react-redux";

const MultiSelectAll = () => {
  const options = useSelector((state)=>state);

  const [selectedOptions, setSelectedOptions] = useState([]);
  // console.log(options);
  useEffect(() => {
    setSelectedOptions([{ label: "All", value: "*" }, ...options]);
    // console.log("jj",setSelectedOptions);
  }, []);

  function getDropdownButtonLabel({ placeholderButtonLabel, value }) {
    
    // console.log("value", value);
    if (value && value.some((o) => o.value === "*")) {
      return `${placeholderButtonLabel}`;
    } else {
      return `${placeholderButtonLabel}: ${value.length} selected`;
    }
  }

  function onChange(value, event) {
    if (event.action === "select-option" && event.option.value === "*") {
      setSelectedOptions(this.options);
    } 
    else if (
      event.action === "deselect-option" &&
      event.option.value === "*"
    ) {
      this.setState([]);
      // console.log("--------", setSelectedOptions);
    } 
    else if (event.action === "deselect-option") {
      this.setState(value.filter((o) => o.value !== "*"));
    } else if (value.length === this.options.length - 1) {
      this.setState(this.options);
     } 
     else {
      this.setState(value);
    }
  }

  return (
    <ReactMultiSelectCheckboxes
      options={[{ label: "All", value: "*" }, ...options]}
      placeholderButtonLabel="Company"
      hideSearch={ true}
      getDropdownButtonLabel={getDropdownButtonLabel}
      value={selectedOptions}
      onChange={onChange}
      setState={setSelectedOptions}
    />
  );
};

export default MultiSelectAll;
