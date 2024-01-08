import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-balham.css';
import { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ColDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css'; // Core CSS
import Box from '@mui/material/Box';
import { useThemeContext } from '../theme/ThemeContextProvider';
import { fetchData } from './productService';
import { RowClickedEvent } from "ag-grid-community";

// Row Data Interface
export type ProductRowType = {
  id: string;
  postId: string;
  name: string;
  email: string;
  body: string;
}

export type OnRowClick = (event: RowClickedEvent) => void;

// Create new GridExample component
const ProductGridComponent: React.FC<{onRowClick: OnRowClick}> = ({ onRowClick }) => {
  // Row Data: The data to be displayed.
  const { theme } = useThemeContext();
  
  let aggridClassName = "ag-theme-balham";
  if (theme.palette.mode === 'light'){
    aggridClassName = "ag-theme-balham";
  }
  else
    aggridClassName = "ag-theme-balham-dark";

  const [rowData, setRowData] = useState<ProductRowType[]>([]);

  async function fetcGridhData() {
    try {
      const result = await fetchData();
      setRowData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetcGridhData()
  }, []);

  // Column Definitions: Defines & controls grid columns.
  const [colDefs, setColDefs] = useState<ColDef<ProductRowType>[]>([
    { field: 'id' },
    { field: 'postId' },
    { field: 'name' },
    { field: 'email' },
    { field: 'body' }
  ]);

  // Container: Defines the grid's theme & dimensions.
  return (
    <Box
      className={
        aggridClassName
      }
      style={{ width: '100%', height: '100%' }}
    >
      <AgGridReact 
        rowData={rowData} 
        columnDefs={colDefs}
        onRowClicked={onRowClick}
        rowSelection='single'
      />
    </Box>
  );
};

export default ProductGridComponent;

