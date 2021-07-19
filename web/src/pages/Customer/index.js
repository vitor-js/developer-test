//Packages
import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import InputMask from "react-input-mask";

// Components
import { FiChevronLeft } from "react-icons/fi";
import InputComponent from "../../components/formsComponents/input";

// Services
import api from "../../services/api";

// Style
import { Header, ContainerForm } from "./styles";

const Customer = () => {
  const params = useParams();
  const [cpfMask, setCpfMask] = useState("");

  const [data, setData] = useState({
    age: null,
    cpf: null,
    email: null,
    firstName: null,
    gender: null,
    id: null,
    lastName: null,
    phone: null,
  });

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      api.get(`/${params.repository}`).then((response) => {
        setData(response.data.data);
        console.log(response.data.data);
      });
    } catch (err) {}
  }

  return (
    <>
      <Header>
        <h1>
          {data.firstName} {data.lastName}
        </h1>
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <ContainerForm>
        <form>
          <div className="container-item-form">
            <label>Primeiro nome</label>
            <InputComponent value={data.firstName} />
          </div>

          <div className="container-item-form">
            <label>Segundo nome</label>
            <InputComponent value={data.firstName} />
          </div>

          <div className="container-item-form">
            <label>CPF</label>
            <InputComponent
              onChange={(e) =>
                setData({
                  ...data,
                  cpf: e.target.value.replace(
                    /(\d{3})?(\d{3})?(\d{3})?(\d{2})/,
                    "$1.$2.$3-$4"
                  ),
                })
              }
            />
          </div>

          <input type="submit" />
        </form>
      </ContainerForm>
    </>
  );
};

export default Customer;
