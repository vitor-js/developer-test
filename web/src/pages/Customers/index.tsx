import React, { useEffect, useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight,FiTrash2 ,FiSearch} from 'react-icons/fi';

import api from '../../services/api';
import { Header, ContainerSearch, Error, CustomersList } from './styles';

import InputComponent from '../../components/formsComponents/inputText'

interface Customer {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  email: string;
}

const Customers: React.FC = () => {
  const [inputError, setInputError] = useState('');
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [originalCustomerData, setOriginalCustomerData] = useState<Customer[]>([]);

  useEffect(() => {
    getData()
  }, []);

  const getData = () => {
    try {
      api.get('/').then((response) => {
        setCustomers(response.data.data);
        setOriginalCustomerData(response.data.data);
      });
    }catch (err) {

    }
  }

  async function handleAddRepository(
    event: React.MouseEvent<HTMLElement>,
  ): Promise<void> {
    event.preventDefault();
  
  }

  async function handleSearch(data:string) {
    try {
      let array = JSON.parse(JSON.stringify(originalCustomerData)) 
      setCustomers(array.filter((costumer: any) => costumer.firstName.toUpperCase().includes(data.toUpperCase()) || costumer.lastName.toUpperCase().includes(data.toUpperCase())))
    } catch (err) {
      setInputError('Erro na busca por esse repositório');
    }
  }

  async function handleDeleteCostumer(id:Number) {
    try {
     api.delete(`/${id}`).then((response) =>{
      getData()
    })
    }catch (err) {

    }
  }
   
 
  return (
    <>
      <Header>
        <h1>Lista de clientes:</h1>
      </Header>

      <ContainerSearch>
        <InputComponent
          onChange={(e: React.FormEvent<HTMLFormElement>)=> handleSearch(e.currentTarget.value)}
          placeholder="Pesquisar cliente pelo nome/sobrenome"
        />
        <button type="submit" onClick={(e)=>handleAddRepository(e)} >Adicionar novo</button>
      </ContainerSearch>

      <CustomersList>
        {customers && customers.map((customer) => (
          <div key={customer.id}>
            <div className="container-info-card">
              <strong>{customer.firstName} {customer.lastName}</strong>
              <p>{customer.email}</p>
            </div>

          <div className="container-info-card-buton" >
            <FiTrash2 className='svg-trash' onClick={(e)=>handleDeleteCostumer(customer.id)} style={{marginRight:20}} size={20} />
            
            <Link to={`/customers/${customer.id}`}>
              <FiSearch className='svg-search' size={20} />
            </Link> 
          </div>
    
        </div>
        ))}
      </CustomersList>
    </>
  );
};

export default Customers;
