import { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import Link from "next/link";
import { Text } from "@chakra-ui/react";
import useViewport from "../hooks/useViewport";
import axios from "axios";

export const SmallContactForm = ({ setSentEmail }) => {
  const isMobile = useViewport();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setSentEmail(true);
    let data = {
      name,
      phone,
      email,
    };

    await axios.post("/api/heroContact", data).then((response) => {
      // console.log(response);
      if (response.data.status) {
        setErrorMessage(true);
        console.log(response.data.status, response.data.message);
      }
    });

    // console.log(data);
  }
  return (
    <Box bg="white" p="1em" borderRadius="12px" border=" 1px solid #F2F2F2">
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <label htmlFor="name">Nombre</label>
        <input
          name="name"
          required
          style={{
            border: "1px solid #E7E7E7",
            borderRadius: "8px",
            margin: "2px 0 14px 0",
            height: "45px",
            //   width: !isMobile ? "400px" : "300px",
            padding: "0 10px",
          }}
          type="text"
          placeholder="Escribe tu nombre"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="phone">Teléfono</label>
        <input
          name="phone"
          required
          style={{
            border: "1px solid #E7E7E7",
            borderRadius: "8px",
            margin: "2px 0 14px 0",
            height: "45px",
            //   width: !isMobile ? "400px" : "300px",
            padding: "0 10px",
          }}
          type="phone"
          placeholder="Escribe tu teléfono"
          onChange={(e) => setPhone(e.target.value)}
        />
        <label htmlFor="email">Correo electrónico</label>
        <input
          name="email"
          required
          style={{
            border: "1px solid #E7E7E7",
            borderRadius: "8px",
            margin: "2px 0 14px 0",
            height: "45px",
            //   width: !isMobile ? "400px" : "300px",
            padding: "0 10px",
          }}
          type="email"
          placeholder="Escribe tu correo electrónico"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Flex ml="10px">
          <Box mt="6px">
            <input type="checkbox" className="disclaimer-checkbox" required />
          </Box>
          <Text
            fontSize="14px"
            lineHeight="18px"
            ml="16px"
            fontFamily="Poppins"
          >
            Autorizo el uso de mis datos con fines comerciales.
            <Link
              href="/documents/politica_de_privacidad.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                style={{
                  fontWeight: "400",
                  color: "var(--main-red-color)",
                }}
              >
                {" "}
                Consultar política
              </span>
            </Link>
          </Text>
        </Flex>
        <button
          className="btn"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "40px",
            margin: "18px auto",
          }}
          type="submit"
        >
          Enviar
        </button>
      </form>
    </Box>
  );
};

export const FooterForm = ({ setSentEmail }) => {
  const isMobile = useViewport();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  async function handleSubmit(e) {
    setSentEmail(true);
    e.preventDefault();
    let data = {
      name,
      phone,
      email,
    };

    await axios.post("/api/heroContact", data).then((response) => {
      if (response.data.status) {
        setErrorMessage(true);
        console.log(response.data.status, response.data.message);
      }
    });
  }
  return (
    <Box
      borderRadius="16px"
      bg="rgba(0,0,0,0.2)"
      p="2%"
      maxW={isMobile ? "75vw" : "20vw"}
      m="16px auto"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        lineHeight="1.4em"
      >
        <Box my="4px" textAlign="center">
          <Text as="span" color="white" fontSize="14px" fontFamily="Poppins">
            Quiero un entrenamiento para mi equipo de trabajo
          </Text>
        </Box>
        <Box>
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <label htmlFor="name">
              <Text
                as="span"
                color="white"
                fontSize="12px"
                fontFamily="Poppins"
              >
                Nombre
              </Text>
            </label>
            <input
              name="name"
              required
              style={{
                // border: "1px solid #E7E7E7",
                // borderRadius: "8px",
                margin: "0 0 8px 0",
                height: "40px",
                //   width: !isMobile ? "400px" : "300px",
                padding: "0 10px",
                fontSize: "12px",
              }}
              type="text"
              placeholder="Escribe tu nombre"
              onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="phone">
              <Text
                as="span"
                color="white"
                fontSize="12px"
                fontFamily="Poppins"
              >
                Teléfono
              </Text>
            </label>
            <input
              name="phone"
              required
              style={{
                // border: "1px solid #E7E7E7",
                // borderRadius: "8px",
                margin: "0 0 8px 0",
                height: "40px",
                //   width: !isMobile ? "400px" : "300px",
                padding: "0 10px",
                fontSize: "12px",
              }}
              type="tel"
              placeholder="Teléfono"
              onChange={(e) => setPhone(e.target.value)}
            />

            <label htmlFor="email">
              <Text
                as="span"
                color="white"
                fontSize="12px"
                fontFamily="Poppins"
              >
                Correo
              </Text>
            </label>
            <input
              name="email"
              required
              style={{
                border: "1px solid #E7E7E7",
                // borderRadius: "8px",
                margin: "0 0 6px 0",
                height: "40px",
                //   width: !isMobile ? "400px" : "300px",
                padding: "0 10px",
                fontSize: "12px",
              }}
              type="email"
              placeholder="Escribe tu correo electrónico"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Flex ml="">
              <Box mr="10px">
                <input
                  type="checkbox"
                  className="disclaimer-checkbox"
                  required
                />
              </Box>
              <Text
                fontSize="10px"
                lineHeight="18px"
                fontFamily="Poppins"
                color="white"
              >
                <Link
                  href="/documents/politica_de_privacidad.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  He leído y acepto la política de privacidad
                </Link>
              </Text>
            </Flex>
            <button
              className="btn"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",

                padding: "8px 0",
                margin: "12px auto",
                border: "4px solid white",
                borderRadius: "0",
                fontFamily: "Poppins",
                fontSize: "18px",
                fontWeight: "600",
              }}
              type="submit"
            >
              Enviar
            </button>
          </form>
        </Box>
      </Box>
    </Box>
  );
};
