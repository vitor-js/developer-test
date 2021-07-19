import styled, { css } from 'styled-components';
import { shade } from 'polished';



export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;

    &:hover {
      color: #666;
    }
  }
`;

export const ContainerSearch = styled.div`
  margin-top: 40px;
  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #fff;
    border-right: 0;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: #145DA0;
    border-radius: 0px 5px 5px 0px;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#145DA0')};
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;

export const CustomersList = styled.div`
  margin-top: 80px;
 
  
  svg {
    cursor: pointer;
  }
  .svg-trash {
    color:#fd05055c;
    transition: ease all .3s;
    
    &:hover {
      color:#fd05058f;
    }
  }
  .svg-search {
    color:#145da06b;
    transition: ease all .3s;

    &:hover {
      color:#145da0;
    }
  }
  div {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }

    .container-info-card {
      margin: 0 16px;
      display: flex;
      align-items: baseline;
      flex-direction: column;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    .container-info-card-buton {
      justify-content: flex-end;
    }
  }
`;
