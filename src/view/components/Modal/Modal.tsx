import React, { useEffect, useState } from 'react';
import runGoogleScript from '../../../assets/js/google';
const Modal: React.FC<any> = (props: any) => {
  useEffect(() => {
    console.log('Change Detected');
  }, [props.selectedRecord, props.action]);
  const crudUser = async () => {
    let obj = JSON.stringify({
      selectedRecord: props.selectedRecord,
      action: props.action
    });
    props.setLoading(true);
    try {
      const response = JSON.parse(await runGoogleScript('crudUser', obj));
      alert(response.message);
    } catch (error) {
      alert(error);
    }
    props.setLoading(false);
  };
  console.log(props);
  return (
    <>
      <div
        className="modal modal-catalog-custom right fade"
        id="standard-modal" //{props.index}
        role="dialog"
        aria-labelledby="standard-modal" //{props.index}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-small" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h6 className="modal-title" id="myModalLabel2">
                {props.action} User Configuration
              </h6>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="row m-0">
                  <div className="col-md-12 mb-3">
                    <label className="form-label">Name</label>
                    <input
                      disabled={props.action != 'Add'}
                      value={props.selectedRecord[1]}
                      type="name"
                      className="form-control"
                      onChange={(e) => {
                        props.setSelectedRecord(
                          props.selectedRecord.map((sr: any, index: any) =>
                            index == 1 ? e.target.value : sr
                          )
                        );
                      }}
                    />
                  </div>
                  <div className="col-md-12 mb-3">
                    <label className="form-label">Email</label>
                    <input
                      disabled={props.action != 'Add'}
                      value={props.selectedRecord[2]}
                      type="name"
                      className="form-control"
                      onChange={(e) => {
                        props.setSelectedRecord(
                          props.selectedRecord.map((sr: any, index: any) =>
                            index == 2 ? e.target.value : sr
                          )
                        );
                      }}
                    />
                  </div>
                  <div className="col-md-12 mb-3">
                    <label className="form-label">Service ID</label>
                    <input
                      disabled={
                        props.action == 'View' || props.action == 'Delete'
                      }
                      value={props.selectedRecord[3]}
                      type="name"
                      className="form-control"
                      onChange={(e) => {
                        props.setSelectedRecord(
                          props.selectedRecord.map((sr: any, index: any) =>
                            index == 3 ? e.target.value : sr
                          )
                        );
                      }}
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <div className="d-flex float-end">
                <button
                  className="btn btn-default me-2"
                  data-bs-dismiss="modal"
                  id="dynamicModalClose"
                  onClick={() => {
                    props.setModalView(false);
                  }}
                >
                  Cancel
                </button>
                <button
                  className="btn btn-danger"
                  onClick={(e) => {
                    // deleteUser();
                    console.log(props.selectedRecord);
                    crudUser();
                    props.setModalView(false);
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
