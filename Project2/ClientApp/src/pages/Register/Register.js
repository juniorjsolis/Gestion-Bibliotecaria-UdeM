import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
  Input,
} from "@chakra-ui/react";

import * as Yup from "yup";
import { useFormik } from "formik";
import { useState } from "react";

export const Register = () => {
  const formik = useFormik({
    initialValues: {
      correo: "",
      contrasena: "",
      nombre: "",
      apellido: "",
      telefono: "",
      direccion: "",
    },
    validationSchema: Yup.object({
      correo: Yup.string().email("Invalid email address").required("Required"),
      contrasena: Yup.string()
        .min(8, "Must be 8 characters or more")
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      nombre: Yup.string()
        .min(2, "Must be 2 characters or more")
        .max(15, "Must be 15 characters or less")

        .required("Required"),
      apellido: Yup.string()
        .min(2, "Must be 2 characters or more")
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      telefono: Yup.string()
        .min(8, "Must be 8 characters or more")
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      direccion: Yup.string()
        .min(2, "Must be 2 characters or more")
        .max(15, "Must be 15 characters or less")
        .required("Required"),
    }),
    onSubmit: async (values, actions) => {
      const registerUsers = await fetch("api/users/Register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Correo: values.correo,
          Contrasena: values.contrasena,
          Nombre: values.nombre,
          Apellido: values.apellido,
          Telefono: values.telefono,
          Direccion: values.direccion,
        }),
      });

      if (registerUsers.status === 409) {
        formik
          .setErrors({
            correo: "Este Correo ya se encuentra registrado",
          })
          .then(() => {});
      }

      actions.setSubmitting(false);
    },
  });

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={formik.handleSubmit}>
        <FormControl
          id="correo"
          isInvalid={formik.touched.correo && formik.errors.correo}
        >
          <FormLabel>correo Address</FormLabel>

          <Input
            type="email"
            name="correo"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.correo}
          />
          <FormErrorMessage>{formik.errors.correo}</FormErrorMessage>
        </FormControl>
        <FormControl
          id="contrasena"
          isInvalid={formik.touched.contrasena && formik.errors.contrasena}
        >
          -<FormLabel>contrasena</FormLabel>
          <Input
            type="password"
            name="contrasena"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.contrasena}
          />
          <FormErrorMessage>{formik.errors.contrasena}</FormErrorMessage>
        </FormControl>
        <FormControl
          id="nombre"
          isInvalid={formik.touched.nombre && formik.errors.nombre}
        >
          <FormLabel>nombre</FormLabel>
          <Input
            type="nombre"
            name="nombre"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.nombre}
          />
          <FormErrorMessage>{formik.errors.nombre}</FormErrorMessage>
        </FormControl>
        <FormControl
          id="apellido"
          isInvalid={formik.touched.apellido && formik.errors.apellido}
        >
          <FormLabel>apellido</FormLabel>
          <Input
            type="text"
            name="apellido"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.apellido}
          />
          <FormErrorMessage>{formik.errors.apellido}</FormErrorMessage>
        </FormControl>
        <FormControl
          id="telefono"
          isInvalid={formik.touched.telefono && formik.errors.telefono}
        >
          <FormLabel>telefono</FormLabel>
          <Input
            type="phone"
            name="telefono"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.telefono}
          />
          <FormErrorMessage>{formik.errors.telefono}</FormErrorMessage>
        </FormControl>
        <FormControl
          id="direccion"
          isInvalid={formik.touched.direccion && formik.errors.direccion}
        >
          <FormLabel>direccion</FormLabel>
          <Input
            type="text"
            name="direccion"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.direccion}
          />
          <FormErrorMessage>{formik.errors.direccion}</FormErrorMessage>
        </FormControl>
        <Button
          mt={4}
          colorScheme="teal"
          isLoading={formik.isSubmitting}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};
