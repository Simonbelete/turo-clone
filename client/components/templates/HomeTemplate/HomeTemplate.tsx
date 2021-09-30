import React, { ReactElement } from 'react';

interface HomeTemplateProps {
  topBar: ReactElement;
  header: ReactElement;
  body: ReactElement;
  footer: ReactElement;
}

const HomeTemplate = ({ topBar, header }: HomeTemplateProps): ReactElement => {
  return (
    <div>
      {/* Tob Bar */}
      <div>{topBar}</div>
      {/* Header */}
      <div>{header}</div>
      <main></main>
    </div>
  );
};

export default HomeTemplate;
