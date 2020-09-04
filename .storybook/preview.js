import React from 'react';
import { addDecorator } from '@storybook/react';
import styled, { ThemeProvider } from 'styled-components';
import { MemoryRouter } from 'react-router-dom'
import { theme, BaseStyle } from '../src/baseStyles';
import '../src/i18n'

const Container = styled.div``

addDecorator((storyFn) => (
  <Container>
    <BaseStyle />
    <ThemeProvider theme={theme}>
      <MemoryRouter>
        {storyFn()}
      </MemoryRouter>
    </ThemeProvider>
  </Container>
))
