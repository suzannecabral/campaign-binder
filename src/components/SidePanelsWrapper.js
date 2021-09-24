import React from 'react'
import SidePanelFolders from './SidePanelFolders';
import SidePanelPages from './SidePanelPages';
import { Heading } from '@chakra-ui/react';

const SidePanelsWrapper = props => {
  return ( 
    <div>
      <Heading as="h2" size="sm">Side Panels</Heading>
      <SidePanelFolders />
      <SidePanelPages />
    </div>
  );
};

export default SidePanelsWrapper;