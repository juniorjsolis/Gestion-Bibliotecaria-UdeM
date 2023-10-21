import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
  Input,
} from "@chakra-ui/react";

export const Login = () => {
  const formik = useFormik({
    initialValues: {
      correo: "",
      contrasena: "",
    },
    validationSchema: Yup.object({
      correo: Yup.string().email("Invalid email address").required("Required"),
      contrasena: Yup.string()
        .min(8, "Must be 8 characters or more")
        .max(15, "Must be 15 characters or less")
        .required("Required"),
    }),
    onSubmit: async (values, actions) => {
      try {
        const response = await fetch("api/users/Login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            correo: values.correo,
            contrasena: values.contrasena,
          }),
        });

        const data = await response.json();
        console.log(data);

        // Resto de la l�gica despu�s de la petici�n fetch
      } catch (error) {
        // Manejo de errores
      }
    },
  });

  const logout = async () => {
    try {
      const response = await fetch("api/users/Logout");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      // Manejo de errores
    }
  };

  return (
    <div>
      <h1>Login</h1>
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
          <FormLabel>contrasena</FormLabel>
          <Input
            type="password"
            name="contrasena"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.contrasena}
          />
          <FormErrorMessage>{formik.errors.contrasena}</FormErrorMessage>
        </FormControl>

        <Button mt={4} colorScheme="teal" type="submit">
          Submit
        </Button>
      </form>

      <h2> Logout</h2>
      <Button mt={4} colorScheme="teal" type="button" onClick={logout}>
        Logout
      </Button>
    </div>
  );
};
