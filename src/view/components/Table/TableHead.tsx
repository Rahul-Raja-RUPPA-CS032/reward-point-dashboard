import React from 'react';

export const TableHead: React.FC<any> = (props: any) => {
  return (
    <>
      <thead className="table-secondary">
        <tr>
          {/* <th className="table-checkbox">
            <div>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
            </div>
          </th> */}
          {props.tableHeaderData.map((heading: string) => {
            return <th>{heading}</th>;
          })}
          <th className="table-action" style={{ width: '160' }}>
            Action
          </th>
          {/* <th>Firstname</th>
          <th>Lastname</th>
          <th>Email</th>
          <th className="table-description"> Description </th>
          <th className="table-action" style={{ width: '160' }}>
            Action
          </th> */}
        </tr>
      </thead>
    </>
  );
};
