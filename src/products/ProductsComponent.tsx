import { useState } from "react";
import ProductGridComponent from "./ProductComponentGrid";
import ProductModalFormComponent from "./ProductModalComponent";

const ProductsComponent: React.FC = () => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleRowClick = (event: any) => {
    const selectedRows = event.api.getSelectedRows();
    console.log(event.api.getSelectedRows());
    console.log(selectedRows);
    setSelectedRow(selectedRows[0]);
    setModalOpen(true);
  };


  return (
    <>
      <ProductGridComponent onRowClick={handleRowClick} />
      <ProductModalFormComponent
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        selectedRow={selectedRow}
      />
    </>
  );
};

export default ProductsComponent;
