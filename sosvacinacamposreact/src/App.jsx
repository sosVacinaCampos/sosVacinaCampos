import { ThemeProvider } from 'styled-components';
import Routes from './Routes';
import GlobalStyles from './styles/ThemeConfig';
import main from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={main}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
