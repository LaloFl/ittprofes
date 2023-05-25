"use client";

import { server } from "@/lib/config";
import { useSession } from "next-auth/react";
import React, { useRef } from "react";

export default async function page() {
  const formRef = useRef();

  const { data } = useSession();

  const submitForm = (e) => {
    e.preventDefault();
    console.log({
      user: JSON.parse(data.user.image),
    });

    let promedio = 0;
    preguntas.forEach((pregunta, index) => {
      promedio += parseFloat(formRef.current[`cp${index}`].value);
    });
    promedio /= preguntas.length;

    const body = {
      id_user: JSON.parse(data.user.image)._id,
      id_profesor: formRef.current.profesor.value,
      id_materia: formRef.current.materia.value,
      calificaciones: preguntas.map((pregunta, index) => {
        return {
          pregunta: pregunta,
          calificacion: formRef.current[`cp${index}`].value,
        };
      }),
      promedio: promedio,
      calif_propia: parseFloat(formRef.current.calif_propia.value),
    };
    console.log(body);
    fetch(`${server}/api/calificar`, {
      method: "POST",
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  };
  const preguntas = [
    "no deja muchas tareas",
    "explica bien los temas",
    "no se pasa de lanza en los exámenes",
    "no es muy estricto",
    "da suficientes oportunidades de recuperación",
  ];

  let res = await fetch(`${server}/api/profesores`, {
    method: "GET",
    cache: "no-cache",
  });
  const profesores = await res.json();

  res = await fetch(`${server}/api/materias`, {
    method: "GET",
    cache: "no-cache",
  });
  const materias = await res.json();

  return (
    <div>
      <form onSubmit={submitForm} ref={formRef}>
        <select name="profesor" defaultValue={""} required>
          {profesores.map((profesor) => {
            return (
              <option key={profesor._id} value={profesor._id}>
                {profesor.full_name}
              </option>
            );
          })}
        </select>
        <select name="materia" defaultValue={""} required>
          {materias.map((materia) => {
            return (
              <option key={materia._id} value={materia._id}>
                {materia.nombre}
              </option>
            );
          })}
        </select>
        {preguntas.map((pregunta, index) => {
          return (
            <div key={index}>
              <span>{pregunta}</span>
              {[0, 2.5, 5, 7.5, 10].map((calificacion, _) => {
                return (
                  <div key={_}>
                    <input
                      type="radio"
                      required
                      id={`cp${index}_${_}`}
                      name={`cp${index}`}
                      value={calificacion}
                    />
                    <label htmlFor={`cp${index}_${_}`}>
                      {_ == 0
                        ? "Muy de acuerdo"
                        : _ == 1
                        ? "De acuerdo"
                        : _ == 2
                        ? "Neutral"
                        : _ == 3
                        ? "En desacuerdo"
                        : "Muy en desacuerdo"}
                    </label>
                  </div>
                );
              })}
            </div>
          );
        })}
        <label htmlFor="calif_propia">
          Calificación que sacaste o crees sacar
        </label>
        <input
          type="number"
          name="calif_propia"
          id="calif_propia"
          max={100}
          min={0}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
