import React, { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import { SVG } from "@designs/SVG";

import { EditorContainer, Label, Required, Error } from "./styles";

const modules = {
  toolbar: false,
};

interface IEditor {
  initValue?: string;
  placeholder?: string;
  label: string;
  required?: boolean;
  className?: string;
  onChange?: (text: string) => void;
  touched?: any;
  error?: any;
  disabled?: boolean;
}

const Editor: React.FC<IEditor> = (props) => {
  const {
    initValue = "",
    placeholder = "",
    className = "",
    onChange,
    label,
    required,
    error,
    touched,
    disabled,
  } = props;

  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    if (touched && error) {
      !isError && setIsError(true);
    } else {
      isError && setIsError(false);
    }
  }, [touched, error]);

  const handleChange = (value: string) => {
    onChange && onChange(value);
  };
  return (
    <EditorContainer disabled={disabled} className={`quill-wrap ${className}`}>
      {label && (
        <Label>
          {label}
          {required && <Required>(*)</Required>}
        </Label>
      )}
      <ReactQuill
        className={
          disabled ? "bg-grey bg-opacity-20 pointer-events-none" : "bg-white"
        }
        modules={modules}
        value={initValue}
        onChange={handleChange}
        placeholder={placeholder}
      />
      {error && touched && (
        <Error>
          <SVG name="common/error" width={16} height={16} className="mr-0.5" />
          {error}
        </Error>
      )}
    </EditorContainer>
  );
};

export default Editor;
