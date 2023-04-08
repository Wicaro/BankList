import React from 'react';
import { useRouteError } from 'react-router-dom';
import { Container, Text} from './Style';

const ErrorElement = () => {
  let error: any = useRouteError();
  return (
    <Container>
      <div>
        <Text>Um problema foi identificado</Text>
        <p className="mt-3 text-danger text-center">{error?.message}</p>
      </div>
    </Container>
  );
};

export default ErrorElement;
