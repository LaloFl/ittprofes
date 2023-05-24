"use client";

import Form from "@/components/Form";
import { server } from "@/lib/config";
import React from "react";

export default function page() {
  const fields = [
    {
      label: "full_name",
      name: "full_name",
      type: "text",
    },
  ];
  return (
    <div>
      <Form
        fields={fields}
        onSubmit={(body) => {
          fetch(`${server}/api/profesores`, {
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
