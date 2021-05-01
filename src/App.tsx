import React, { ReactNode, ReactElement } from 'react';
import './App.css';

//Conventional Props


function Heading({ title }: {title?: string;}){
  return <h1>{title}</h1>
}


function HeadingWithContent({ children }: {children: ReactNode}): ReactElement {
  return <h1>{children}</h1>
}


//Default Props

const defaultContainerProps = {
  heading: <strong>My Heading</strong>
}
function Container({ heading, children }: {children: ReactNode} & typeof defaultContainerProps): ReactElement {
  return <div><h1>{heading}{children}</h1>{children}</div>
}

Container.defaultProps = defaultContainerProps;

function App() {
  return (
    <div >
     <Heading title={"Hello There"}></Heading>
     <HeadingWithContent><strong>Check This!</strong></HeadingWithContent>
     <Container>Foo</Container>
    </div>
  );
}

export default App;
