import { Tabs } from '@mantine/core';
import { useState } from 'react';
import classes from './Tabs.module.css';

const TabsComponent = ({tabsList}) => {
    const [activeTab, setActiveTab] = useState(1);

  return (
    <Tabs defaultValue="1" value={activeTab} onChange={setActiveTab}
        classNames={{
            list: classes.tablist,
            tab: classes.tab,

        }}
    >
      <Tabs.List>
        <Tabs.Tab value="1" >
          Gallery
        </Tabs.Tab>
        <Tabs.Tab value="2" >
          Messages
        </Tabs.Tab>
        <Tabs.Tab value="3" >
          Settings
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="1">
        Gallery tab content
      </Tabs.Panel>

      <Tabs.Panel value="2">
        Messages tab content
      </Tabs.Panel>

      <Tabs.Panel value="3">
        Settings tab content
      </Tabs.Panel>
    </Tabs>
  );
}

export default TabsComponent; 
