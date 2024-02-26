import { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import Link from "next/link";
import { Text } from "@chakra-ui/react";
import useViewport from "../hooks/useViewport";

export const ContactForm = ({ setSentEmail, origin }) => {
  const isMobile = useViewport();
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [people, setPeople] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setSentEmail(true);
    let data = {
      origin,
      company,
      email,
      people,
      date,
      message,
    };

    await axios.post("/api/contact", data).then((response) => {
      // console.log(response);
      if (response.data.status) {
        setErrorMessage(true);
        console.log(response.data.status, response.data.message);
      }
    });

    // console.log(data);
  }
  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          padding:"16px 24px",
          backgroundColor:"#ff0077",
          maxWidth:"400px"
        }}
      >
        <Box backgroundColor={"#cc005f"} display={"flex"} flexDirection={"column"} paddingY={"8px"} paddingX={"32px"} rounded={"2xl"}>
          <Text textAlign={"center"} color={"#ffffff"} py={"8px"} mx={"auto"} maxW={"240px"}>
            Quiero un entrenamiento para mi equipo de trabajo
          </Text>
          <input
            required
            style={{
              border: "1px solid black",
              margin: "2px 0",
              height: "45px",
              //width: !isMobile ? "400px" : "300px",
              padding: "0 10px",
            }}
            type="text"
            placeholder="Nombre de la empresa"
            onChange={(e) => setCompany(e.target.value)}
          />
          <input
            required
            style={{
              border: "1px solid black",
              margin: "2px 0",
              height: "45px",
              //width: !isMobile ? "400px" : "300px",
              padding: "0 10px",
            }}
            type="email"
            placeholder="Correo corporativo"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            required
            style={{
              border: "1px solid black",
              margin: "2px 0",
              height: "45px",
              //width: !isMobile ? "400px" : "300px",
              padding: "0 10px",
            }}
            type="text"
            placeholder="Cantidad de personas"
            onChange={(e) => setPeople(e.target.value)}
          />
          <Flex>
            <Box w="100%" display="flex" alignItems="center" lineHeight="1">
              <label style={{color:"#FFFFFF"}} htmlFor="date">Fecha para el workshop: </label>
            </Box>
            <Box>
              <input
                id="date"
                required
                style={{
                  border: "1px solid black",
                  margin: "2px 0",
                  height: "45px",
                  padding: "0 10px",
                }}
                type="date"
                placeholder="Fecha"
                onChange={(e) => setDate(e.target.value)}
              />
            </Box>
          </Flex>
          <input
            style={{
              border: "1px solid black",
              margin: "2px 0",
              //height: "45px",
              //width: !isMobile ? "400px" : "300px",
              height: "100px",
              padding: "0 10px",
            }}
            type="textarea"
            placeholder="Si necesitas algo adicional escríbelo aquí"
            onChange={(e) => setMessage(e.target.value)}
          />
          <Flex>
            <Box fontSize="20px">
              <input type="checkbox" required />
            </Box>
            <Text fontSize="16px" lineHeight="0.9em" ml="10px" mt="10px" color={"white"}>
              Autorizo el tratamiento de mis datos personales para recibir
              información sobre La Rula. Consulta términos y política de privacidad{" "}
              <Link
                href="/documents/politica_de_privacidad.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span
                  style={{
                    fontWeight: "600",
                    color: "var(--main-red-color)",
                  }}
                >
                  aquí
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
              width: "200px",
              height: "40px",
              margin: "18px auto",
            }}
            type="submit"
          >
            Enviar
          </button>
        </Box>
      </form>
    </>
  );
};
