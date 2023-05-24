"use client";

import React, { useRef } from "react";

import "@/styles/components/Form.sass";

export default function Form({ fields, onSubmit }) {
  const mappedFields = fields.map((field) => {
    return {
      ...field,
      ref: useRef(),
    };
  });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const body = {};
        mappedFields.forEach((field) => {
          body[field.name] = field.ref.current.value;
        });
        onSubmit(body);
      }}
      className="custom_form"
    >
      {mappedFields.map((field) => {
        return (
          <div className="field_box" key={field.name}>
            <label>{field.label}</label>
            {field.fetchedFrom ? (
              <select
                name={field.name}
                id={field.name}
                ref={field.ref}
              ></select>
            ) : (
              <input ref={field.ref} type={field.type} name={field.name} />
            )}
          </div>
        );
      })}
    </form>
  );
}
