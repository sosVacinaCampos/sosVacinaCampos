import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import db from '../../configs/firebase';
import {
  Container,
  Header,
  Covid,
  Main,
  Panel,
  Info,
  Mark,
  Vaccine,
  Description,
  AppointmentButton,
  Image,
  Stats,
  InfoCard,
  DangerCard,
  SuccessCard,
  CardTitle,
  CardDesc,
  Live,
} from './styles';

function Home() {
  const [vaccined, setVaccined] = useState([]);
  db.collection('vacinacao').onSnapshot((querySnapshot) => {
    querySnapshot.docChanges().forEach((change) => {
      const doc = {
        id: change.doc.id,
        ...change.doc.data(),
      };

      const vaccinedChanged = vaccined.find((old) => old.id === change.doc.id);

      if (!vaccinedChanged) {
        const newVaccined = [...vaccined, doc];
        newVaccined.sort((a, b) => a.data - b.data);
        setVaccined(newVaccined);
      }
    });
  });
  return (
    <Container>
      <Header>
        <Covid>
          COVID-<span>19</span>
        </Covid>
        <div />
      </Header>
      <Main>
        <Panel>
          <Info>
            <Mark>Campos dos Goytacazes</Mark>
            <Vaccine>Vacina</Vaccine>
            <Description>
              Fique por dentro de tudo sobre a Vacinação em Campos dos
              Goytacazes. Saiba quando vacinar, faça seu agendamento e evite
              aglomerações em filas. Acompanhe números em tempo real.
            </Description>
            <AppointmentButton>
              <div>Agende-se</div>
              <FaArrowRight size={24} />
            </AppointmentButton>
          </Info>
          <Image>
            <img src="/campos.png" alt="Campos dos Goytacazes" />
          </Image>
        </Panel>

        <Stats>
          <InfoCard>
            <CardTitle>23.553+</CardTitle>
            <CardDesc>Confirmados</CardDesc>
          </InfoCard>
          <DangerCard>
            <CardTitle>815+</CardTitle>
            <CardDesc>Óbitos</CardDesc>
          </DangerCard>
          <SuccessCard>
            <CardTitle>21.185+</CardTitle>
            <CardDesc>Recuperados</CardDesc>
          </SuccessCard>
          <Live>
            <CardDesc>
              <div />
              <p>Em tempo real</p>
            </CardDesc>
            <CardTitle>
              {vaccined.reduce(
                (prev, curr) => Number(prev) + Number(curr.qtd_vacinado),
                0,
              )}
              +
            </CardTitle>
            <CardDesc>Vacinados</CardDesc>
          </Live>
        </Stats>
      </Main>
    </Container>
  );
}

export default Home;
