import styled from 'styled-components';

import theme from '../../styles/theme';

export const Container = styled.div`
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Covid = styled.div`
  font-family: 'Gilroy';
  font-size: ${theme.main.textSizes.big};

  span {
    color: ${theme.main.colors.secondary};
  }
`;

export const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 26px;
`;

export const Panel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;
  text-align: center;

  @media (min-width: 1024px) {
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }
`;

export const Info = styled.div`
  @media (min-width: 1024px) {
    max-width: 500px;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    text-align: left;
  }
`;

export const Mark = styled.div`
  font-weight: bold;
`;

export const Vaccine = styled.div`
  font-family: 'Gilroy';
  font-size: 48px;
  padding-bottom: 16px;
  text-transform: uppercase;

  @media (min-width: 1024px) {
    font-size: 128px;
  }
`;

export const Description = styled.div`
  font-size: ${theme.main.textSizes.medium};
  @media (min-width: 1024px) {
    font-size: ${theme.main.textSizes.big};
  }
`;

export const AppointmentButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 24px;
  margin-top: 50px;
  font-size: ${theme.main.textSizes.big};
  font-weight: bold;
  color: ${theme.main.colors.secondary};
  border-radius: 8px;
  box-shadow: inset 0 0 0 2px ${theme.main.colors.secondary};
  cursor: pointer;
  transition: 500ms;

  :hover {
    opacity: 0.6;
  }

  @media (min-width: 1024px) {
    width: 256px;
  }
`;

export const Image = styled.div`
  img {
    width: 200px;
    max-width: 200px;
  }
`;

export const Stats = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 800px;

  @media (min-width: 1100px) {
    flex-direction: row;
    height: 416px;
  }
`;

export const MiniCard = styled.div`
  width: 256px;
  height: 144px;
  border-radius: 8px;
  box-shadow: inset 0 0 0 4px rgba(255, 255, 255, 0.2);
  flex: 0 0 auto;
  /* margin: 20px 4px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (min-width: 768px) and (max-width: 1100px) {
    width: 512px;
  }
`;

export const InfoCard = styled(MiniCard)`
  background-color: ${theme.main.colors.info};
`;
export const DangerCard = styled(MiniCard)`
  background-color: ${theme.main.colors.danger};
`;
export const SuccessCard = styled(MiniCard)`
  background-color: ${theme.main.colors.success};
`;

export const CardTitle = styled.div`
  font-family: 'Gilroy';
  font-size: 32px;
`;
export const CardDesc = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 20px;
  text-transform: uppercase;
  div {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: red;
    margin-right: 4px;
    animation-name: live;
    animation-duration: 1000ms;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
  p {
    padding: 0;
    margin: 0;
    height: 16px;
    line-height: 16px;
    font-weight: bold;
  }

  @keyframes live {
    0% {
      opacity: 100;
    }

    100% {
      opacity: 0;
    }
  }
`;

export const Live = styled(MiniCard)`
  box-shadow: 0;
`;
