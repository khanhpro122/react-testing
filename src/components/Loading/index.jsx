// Libraries
import React from "react";
import { Spinner } from "reactstrap";

const LoadingComponent = ({isLoading}) => {
  return (
    <>
        {isLoading ? (
            <div className="postion-relative">
            <div className="position-fixed fixed-top fixed-bottom"
              style={{
                  background: 'rgba(0,0,0,0.2)'
              }}
            ></div>
            <Spinner
              color="primary"
              style={{
                height: "3rem",
                width: "3rem",
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translateX(-50%)'
              }}
              type="grow"
            >
            </Spinner>
          </div>
        ) : (
            <></>
        )}
    </>
  );
};

export default LoadingComponent;
