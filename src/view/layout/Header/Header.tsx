import React, { useEffect, useState } from 'react';
export const Header = (props: any) => {
  const [userProfile, setUserProfile] = useState<string>(
    'https://storage.googleapis.com/valeo-cp2096.appspot.com/img/user-avatar.svg'
  );
  const [userName, setUserName] = useState<String>('Test Account');
  return (
    <>
      <div id="header-page">
        <header className="py-2 bg-white shadow-sm fixed-top">
          <div className="container-fluid">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-start">
              <div className="d-flex align-items-center mb-0 me-auto">
                <a
                  className="material-icons text-decoration-none text-dark cursor-pointer"
                  style={{ cursor: 'pointer', paddingBottom: '5px' }}
                  id="mainMenulink"
                  onClick={() => {
                    props.setExpand(!props.isExpand);
                  }}
                >
                  menu
                </a>
                <a
                  className="navbar-brand me-auto py-0"
                  href="/"
                  style={{ paddingLeft: '20px' }}
                >
                  <h4>
                    <span className="text-primary">Smart</span>
                    <span className="text-success">Tool</span>
                    <span className="text-primary">box</span>
                  </h4>
                </a>
              </div>
              <div className="d-flex align-items-center mb-0 me-auto header-logo">
                <h4>
                  <span className="text-dark">Reward Points Dashboard</span>
                </h4>
              </div>
              <ul className="nav nav-items pe-3">
                <li className="nav-item">
                  <a
                    href="https://docs.google.com/document/d/1k5knEsmThqGC-OcNc7exO__A74_BDMhICi8EHJU3CCE/edit"
                    target={'_blank'}
                    className="nav-link px-2"
                  >
                    <span className="material-icons">help</span>
                  </a>
                </li>
              </ul>
              <div className="p-2 bg-white shadow-sm rounded">
                <a
                  href="#"
                  className="d-block link-dark text-decoration-none"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    className="d-md-inline me-2 header-logo"
                    height="24"
                    src="https://storage.googleapis.com/valeo-cp2096.appspot.com/img/valeo-green-logo.png"
                  />
                  <img
                    src={userProfile}
                    className="rounded-circle z-depth-0"
                    alt="avatar image"
                    height="30"
                    width="30"
                  />
                </a>
                <div
                  id="alertsDropdown-username-dropdown"
                  className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in profile-mobile"
                  aria-labelledby="alertsDropdown"
                >
                  <div>
                    <div
                      className="accountchooser-details"
                      style={{ padding: '15px 15px' }}
                    >
                      <div
                        className="profilepicture"
                        style={{ textAlign: 'center' }}
                      >
                        <img
                          src={userProfile}
                          style={{
                            borderRadius: '50%',
                            width: '100px !important',
                            height: '100px'
                          }}
                        />
                      </div>
                      <div
                        style={{
                          marginTop: '20px',
                          paddingLeft: '15px',
                          textAlign: 'center'
                        }}
                      >
                        <div className="profilename fullname">
                          <b></b>
                        </div>
                        <span aria-hidden="true" className="profileemail">
                          {userName}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};
