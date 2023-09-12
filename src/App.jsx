import './App.css';
import 'react-icons/fa';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './pages/Menu';
import SobreNosotrosPage from './pages/SobreNosotrosPage';
import TareaPage from './pages/TareaPage';
import HomePage from './pages/Homepage';
import { ChakraProvider, Box, Grid } from '@chakra-ui/react';

function App() {
  return (
    <div>
    <ChakraProvider>
      <BrowserRouter>
      <Grid
      templateAreas={`"Header Header" "main main"`}
      gridTemplateRows={"70px 1fr 20px"}
      gridAutoColumns={"120px 1fr"}
      h={"150px"}
      gap={"0.5"}
      color={"#4A5568"}
      fontWeight={"bold"}>
        <Menu />
      <Box>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/sobre-nosotros' element={<SobreNosotrosPage />} />
          <Route path='/Tarea/:id' element={<TareaPage />} />
        </Routes>
      </Box>
      </Grid>
      </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}

export default App;