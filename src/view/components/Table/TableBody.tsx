import React, { useEffect, useState } from 'react';
import NoDataFound from '../NoDataFound';
import { TableDataProps } from './types';
import Modal from '../Modal';

const TableRowActionConstructor = (props: any) => {
  return (
    <td>
      <button
        className="btn btn-link"
        data-bs-toggle="modal"
        data-bs-target="#standard-modal" //{'#viewModal' + props.index.toString()}
        title="view"
        onClick={() => {
          props.setSelectedRecord(props.data);
          props.setAction('View');
          props.setModalView(true);
        }}
      >
        <span className="material-icons fs-6">visibility</span>
      </button>
      {/* <Modal
        data={props.data}
        disabled={true}
        index={'viewModal' + props.index.toString()}
      /> */}

      <button
        className="btn btn-link"
        data-bs-toggle="modal"
        data-bs-target="#standard-modal" //{'#editModal' + props.index.toString()}
        title="edit"
        onClick={() => {
          props.setSelectedRecord(props.data);
          props.setAction('Edit');
          props.setModalView(true);
        }}
      >
        <span className="material-icons fs-6">edit</span>
      </button>
      {/* <Modal
        data={props.data}
        disabled={false}
        index={'editModal' + props.index.toString()}
      /> */}
      <button
        className="btn btn-link text-danger"
        data-bs-toggle="modal"
        data-bs-target="#standard-modal" //{'#deleteModal' + props.index.toString()}
        title="delete"
        onClick={() => {
          props.setSelectedRecord(props.data);
          props.setAction('Delete');
          props.setModalView(true);
        }}
      >
        <span className="material-icons fs-6">delete</span>
      </button>
      {/* <Modal
        data={props.data}
        disabled={true}
        index={'deleteModal' + props.index.toString()}
      /> */}
    </td>
  );
};
const TableRowConstructor = (props: any) => {
  /* const [data, setData] = useState<TableDataProps>(props.data);
  useEffect(()=>{
    setData(props.data)
  },[]) */
  return (
    <tr>
      {/* <td className="table-checkbox">
        <div>
          <input className="form-check-input" type="checkbox" value="" id="" />
        </div>
      </td> */}
      {/*<td>{props.data.firstName}</td>
      <td>{props.data.lastName}</td>
      <td>
        <a href={`mailto:${props.data.email}`} className="text-link">
          {props.data.email}
        </a>
      </td>
      <td className="table-description">
        <a
          data-bs-toggle="popover"
          data-bs-trigger="hover focus"
          data-bs-placement="top"
          title={props.data.description}
        >
          {props.data.description}
        </a>
      </td> */}
      {props.data.map((d: any, index: number) => {
        if (index == 3) {
          return (
            <>
              <td>{d}</td>
              <TableRowActionConstructor
                data={props.data}
                index={props.index.toString()}
                setSelectedRecord={props.setSelectedRecord}
                setAction={props.setAction}
                setModalView={props.setModalView}
              />
            </>
          );
        } else return <td>{d}</td>;
      })}
    </tr>
  );
};
export const TableBody: React.FC<any> = (props: any) => {
  return (
    <>
      <tbody>
        {props.paginatedData.length > 0 ? (
          props.paginatedData.map((data: any, index: number) => {
            return (
              <TableRowConstructor
                index={index}
                data={data}
                setSelectedRecord={props.setSelectedRecord}
                setAction={props.setAction}
                setModalView={props.setModalView}
              />
            );
          })
        ) : (
          <tr>
            <td colSpan={4}>
              <NoDataFound />
            </td>
          </tr>
        )}
      </tbody>
    </>
  );
};
