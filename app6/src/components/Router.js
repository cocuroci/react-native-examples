import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

import Main from './Main';
import About from './About';
import OtherGames from './OtherGames';
import Result from './Result';

const router = () => (
  <Router>
    <Stack>
      <Scene key='main' component={Main} />
      <Scene key='about' component={About} />
      <Scene key='other' component={OtherGames} />
      <Scene key='result' component={Result} />
    </Stack>
  </Router>
);

export default router;
