import React from 'react';

const Loader: React.FC<any> = () => {
  return (
    <div className="smartui-loader d-block">
      <div className="loader-container">
        <div className="donut loader-blue-bg-white"></div>
        <div className="loaderWrap">
          <div className="loaderCar">
            <img
              src="https://storage.googleapis.com/valeo-cp2096.appspot.com/img/loader-blue.png"
              alt=""
              className="carsShake"
            />
          </div>
          <div className="slideReverse">
            <div className="loadercontent">
              <div className="loaderItem"></div>
              <div className="loaderItem"></div>
              <div className="loaderItem"></div>
              <div className="loaderItem"></div>
              <div className="loaderItem"></div>
              <div className="loaderItem"></div>
              <div className="loaderItem"></div>
              <div className="loaderItem"></div>
              <div className="loaderItem"></div>
              <div className="loaderItem"></div>
              <div className="loaderItem"></div>
              <div className="loaderItem"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Loader;
