import React, { useState } from 'react';

const Toast: React.FC<any> = (props: any) => {
  const [classDetails, setClassDetails] = useState<any>(
    `toast ${props.classType} fade show`
  );
  setTimeout(() => {
    setClassDetails(`toast ${props.classType} fade`);
  }, 5000);
  return (
    <div className="toast-container top-0 end-0">
      <div
        className={classDetails}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="d-flex align-items-center gap-3">
          {props.type == 'Error' ? (
            <span className={`material-icons text-${props.classType}`}>
              {' '}
              cancel{' '}
            </span>
          ) : (
            <span className={`material-icons text-${props.classType}`}>
              {' '}
              check_circle{' '}
            </span>
          )}
          <div>
            <h6 className="text-secondary"> {props.type} </h6>
            <p className="mt-0 mb-0">{props.content}</p>
          </div>
          <span
            className="material-icons ms-auto fs-6 cursor-pointer"
            data-bs-dismiss="toast"
            aria-label="Close"
          >
            close
          </span>
        </div>
      </div>
    </div>
  );
};
export default Toast;
