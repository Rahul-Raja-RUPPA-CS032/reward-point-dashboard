import React from 'react';
import { paginationArrayConstructor } from '../../../utils';

export const TableFooter: React.FC<any> = (props: any) => {
  return (
    <>
      <div className="d-flex align-items-center py-3 border-top-1">
        <div className="d-flex me-auto">
          <p className="mb-0">{`Showing ${props.pagination.startRecord} to ${props.pagination.endrecord} of ${props.pagination.totalRecord} entries`}</p>
        </div>
        <div className="d-flex">
          <nav>
            <ul className="pagination mb-0">
              <li
                className={
                  props.pagination.page === 1
                    ? 'page-item disabled'
                    : 'page-item cursor-pointer'
                }
              >
                <span
                  className="page-link"
                  onClick={() => {
                    props.setPagination({
                      ...props.pagination,
                      page: props.pagination.page - 1,
                      startRecord: props.pagination.startRecord - 10,
                      endrecord: props.pagination.endrecord - 10,
                      paginationArray: paginationArrayConstructor(
                        props.pagination.page - 1,
                        props.pagination.totalPages
                      )
                    });
                  }}
                >
                  Previous
                </span>
              </li>
              {props.pagination.paginationArray.map(
                (arrayData: number, index: number) => {
                  return (
                    <li
                      key={index}
                      className={
                        props.pagination.page === arrayData
                          ? 'page-item cursor-pointer active'
                          : 'cursor-pointer page-item'
                      }
                      value={arrayData}
                      onClick={() => {
                        props.setPagination({
                          ...props.pagination,
                          page: arrayData,
                          startRecord: (arrayData - 1) * 10 + 1,
                          endrecord: arrayData * 10,
                          paginationArray: paginationArrayConstructor(
                            arrayData,
                            props.pagination.totalPages
                          )
                        });
                      }}
                    >
                      <span className="page-link">{arrayData}</span>
                    </li>
                  );
                }
              )}
              <li
                className={
                  props.pagination.page === props.pagination.totalPages
                    ? 'page-item disabled'
                    : 'page-item cursor-pointer'
                }
              >
                <span
                  className="page-link"
                  onClick={() => {
                    props.setPagination({
                      ...props.pagination,
                      page: props.pagination.page + 1,
                      startRecord: props.pagination.startRecord + 10,
                      endrecord: props.pagination.endrecord + 10,
                      paginationArray: paginationArrayConstructor(
                        props.pagination.page + 1,
                        props.pagination.totalPages
                      )
                    });
                  }}
                >
                  Next
                </span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};
