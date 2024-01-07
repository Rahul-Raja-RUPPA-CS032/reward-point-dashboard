import React from 'react';
import Modal from '../Modal';

export const TableController: React.FC<any> = (props: any) => {
  return (
    <>
      <div className="col-6 col-sm-6">
        <button
          className="btn btn-outline-primary d-inline-flex st-table-control"
          data-bs-toggle="modal"
          data-bs-target="#standard-modal"
          onClick={() => {
            props.setSelectedRecord(Array(4).fill(''));
            props.setAction('Add');
            props.setModalView(true);
          }}
        >
          <span className="material-icons fs-6"> add </span>
        </button>
        {/* <Modal data={[]} disabled={false} index={'createModal'} /> */}
        {/* <button className="btn btn-outline-primary d-inline-flex st-table-control" onClick={getData()}>
          <span className="material-icons fs-6"> refresh </span>
        </button>
        <button className="btn btn-outline-danger d-inline-flex st-table-control">
          <span className="material-icons fs-6">delete </span>
        </button>
        <button className="btn btn-outline-primary d-inline-flex st-table-control">
          <span className="material-icons fs-6 pe-2">file_download</span>
          Export
        </button> */}
      </div>
      <div className="col-6 col-sm-4 ms-auto">
        <div className="input-group mb-3">
          <span className="input-group-text material-icons bg-transparent text-muted">
            search
          </span>
          <input
            className="form-control border-start-0 search-bar"
            type="search"
            placeholder="Search Here"
            aria-label="Search"
            onChange={(event) => props.handleSearch(event.target.value)}
          />
        </div>
      </div>
    </>
  );
};
