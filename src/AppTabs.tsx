import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import AppTabOne from './AppTabOne';
import ProductsComponent from './products/ProductsComponent';
import AdminForm from './adminform/AdminForm';
import UserForm from './header/UserForm';

export default function AppTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%',height: '100%',  typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Comments" value="1" />
            <Tab label="Products" value="2" />
            <Tab label="User" value="3" />
            <Tab label="Test" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1"  sx={{height:"80vh"}}>
          <ProductsComponent />
        </TabPanel>
        <TabPanel value="2">
          <AdminForm />
        </TabPanel>
        <TabPanel value="3">
          <UserForm />
        </TabPanel>
        <TabPanel value="4">
          <AppTabOne />
        </TabPanel>
      </TabContext>
    </Box>
  );
}