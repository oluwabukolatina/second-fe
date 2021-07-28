import styled from 'styled-components';

export const BulletContainer = styled.div`
  padding-left: 2rem;
  padding-right: 2rem;
`;

export const ShowContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding-left: 4rem;
  padding-right: 4rem;
  margin-top: 2%;
  grid-column-gap: 1%;
`;

export const Image = styled.img`
  height: 203px;
  width: 176px;
`;
export const ShowDetails = styled.p`
  font-weight: lighter;
  font-size: 12px;
`;

export const Button = styled.button`
  background: #0e65c9;
  color: white;
  padding: 9px;
  border-radius: 11px;
  border-style: none;
  cursor: pointer;
`;

export const SingleShowContainer = styled.div`
  margin: auto;
  width: 40%;
  margin-top: 1rem;
  font-size: 13px;
`;
export const HeaderStyle = styled.div`
  background: #0e65c9;
  padding: 0.2% 4rem;
  display: grid;
  grid-template-columns: 70% 15% auto;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;
