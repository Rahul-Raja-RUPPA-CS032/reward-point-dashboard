import React, { useEffect, useState } from 'react';
import { paginationArrayConstructor } from '../../../utils';
import { TableBody } from './TableBody';
import { TableController } from './TableController';
import { TableFooter } from './TableFooter';
import { TableHead } from './TableHead';
import { TableDataProps } from './types';

const Table: React.FC<any> = (props: any) => {
  const [data, setData] = useState<any>(props.data.slice(1));
  const [paginatedData, setPaginatedData] = useState<any>(data.slice(1, 11));
  const recordPerpage = 10;
  const [pagination, setPagination] = useState({
    page: 1,
    startRecord: 1,
    endrecord: recordPerpage >= data.length ? data.length : recordPerpage,
    totalPages: Math.ceil(data.length / recordPerpage),
    totalRecord: data.length,
    paginationArray: paginationArrayConstructor(
      1,
      Math.ceil(data.length / recordPerpage)
    )
  });
  useEffect(() => {
    if (pagination.page >= 1) {
      const slicedData = data.slice(
        pagination.startRecord - 1,
        pagination.page * recordPerpage
      );
      setPaginatedData([...slicedData]);
    }
  }, [pagination.page, data]);
  const handleSearch = (searchvalue: string) => {
    if (!searchvalue) {
      setData([...props.data.slice(1)]);
      setPagination({
        page: 1,
        startRecord: 1,
        endrecord: recordPerpage >= data.length ? data.length : recordPerpage,
        totalPages: Math.ceil(data.length / recordPerpage),
        totalRecord: data.length,
        paginationArray: paginationArrayConstructor(
          1,
          Math.ceil(data.length / recordPerpage)
        )
      });
    } else {
      const filteredData = data.filter((d: any) => {
        if (d.join().includes(searchvalue)) {
          return d;
        }
      });
      setData([...filteredData]);
      setPagination({
        page: 1,
        startRecord: 1,
        endrecord:
          filteredData.length > 10 ? recordPerpage : filteredData.length,
        totalPages: Math.ceil(filteredData.length / recordPerpage),
        totalRecord: filteredData.length,
        paginationArray: paginationArrayConstructor(
          1,
          Math.ceil(filteredData.length / recordPerpage)
        )
      });
    }
  };
  return (
    <div className="row mb-2">
      <TableController
        handleSearch={handleSearch}
        setSelectedRecord={props.setSelectedRecord}
        setAction={props.setAction}
        setModalView={props.setModalView}
      />
      <div className="table-responsive table-fixed">
        <table className="table table-bordered align-middle mb-0">
          <TableHead tableHeaderData={props.data[0]} />
          <TableBody
            paginatedData={paginatedData}
            setPaginatedData={setPaginatedData}
            setSelectedRecord={props.setSelectedRecord}
            setAction={props.setAction}
            setModalView={props.setModalView}
          />
        </table>
      </div>
      {pagination.totalPages !== 0 && (
        <TableFooter pagination={pagination} setPagination={setPagination} />
      )}
    </div>
  );
};

export default Table;
