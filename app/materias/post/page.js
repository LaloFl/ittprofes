"use client";

import Form from "@/components/Form";
import { server } from "@/lib/config";
import React from "react";

export default function page() {
  const fields = [
    {
      label: "nombre",
      name: "nombre",
      type: "text",
    },
  ];
  return (
    <div>
      <Form
        fields={fields}
        onSubmit={(body) => {
          fetch(`${server}/api/materias`, {
            method: "POST",
            body: JSON.stringify(body),
          })
            .then((res) => res.json())
            .then((res) => {
              console.log(res);
            });
        }}
      />
    </div>
  );
}
