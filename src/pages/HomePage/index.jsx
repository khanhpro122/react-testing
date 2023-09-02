// Libraries
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Container, Media, PopoverBody, Row, Popover } from "reactstrap";

// Images
import Avatar from "../../logo.svg";
import Illustration from "../../assets/images/Illustration.svg";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { initialData, logOutUserAsync } from "../../redux/actions";

// Utils
import { getDataLocal } from "../../utils";

// Components
import LoadingComponent from "../../components/Loading";
import { useIsFirstRender } from "../../hooks/useIsFirstRender";

const HomePage = () => {
  // navigate
  const navigate = useNavigate();
  const data = getDataLocal();

  // Selector
  const selector = useSelector((state) => state.user);
  const { user, isLoading, isLogOuted } = selector;
  const isFirstRender = useIsFirstRender()

  // Dispatch
  const dispatch = useDispatch();

  // State
  const [popoverOpen, setPopoverOpen] = useState(false);

  // Handle
  const togglePopover = () => {
    setPopoverOpen(!popoverOpen);
  };

  const handleLogout = () => {
    dispatch(logOutUserAsync(data));
  };

  useEffect(() => {
    if(isLogOuted) {
      navigate('/signin')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogOuted])

  useEffect(() => {
    if(isFirstRender) {
      if (data?.accessToken) {
        dispatch(
          initialData({
            lastName: data?.lastName,
            firstName: data?.firstName,
            id: data?.id,
          })
        );
      } else {
        navigate("/signin");
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container style={{ maxWidth: "unset", height: "100vh" }}>
      <LoadingComponent isLoading={isLoading} />
      <Row className="px-5">
        <Col
          className="d-flex justify-content-end align-items-center gap-2"
          style={{ height: 62 }}
        >
          {user?.id && (
            <>
              <Popover
                placement="bottom"
                isOpen={popoverOpen}
                target="avatarPopover"
                toggle={togglePopover}
              >
                <PopoverBody className="p-0">
                  <button
                    className="btn"
                    style={{
                      width: "120px",
                      backgroundColor: "#fff",
                      textAlign: "right",
                    }}
                    onClick={handleLogout}
                  >
                    <span>Logout{' '}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="0.9em"
                      viewBox="0 0 512 512"
                    >
                      <path d="M400 54.1c63 45 104 118.6 104 201.9 0 136.8-110.8 247.7-247.5 248C120 504.3 8.2 393 8 256.4 7.9 173.1 
                      48.9 99.3 111.8 54.2c11.7-8.3 28-4.8 35 7.7L162.6 90c5.9 10.5 3.1 23.8-6.6 31-41.5 30.8-68 79.6-68 134.9-.1 92.3 
                      74.5 168.1 168 168.1 91.6 0 168.6-74.2 168-169.1-.3-51.8-24.7-101.8-68.1-134-9.7-7.2-12.4-20.5-6.5-30.9l15.8-28.1c7-12.4 23.2-16.1 34.8-7.8zM296 
                      264V24c0-13.3-10.7-24-24-24h-32c-13.3 0-24 10.7-24 24v240c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24z"
                      fill="#b9b9c3"
                     />
                    </svg>
                  </button>
                </PopoverBody>
              </Popover>
              <div className="d-flex flex-column align-items-end">
                <span style={{ fontSize: 14, color: "#6E6B7B" }}>
                  {user?.firstName} {user?.lastName}
                </span>
                <span style={{ fontSize: 12, color: "#B9B9C3" }}>
                  Available
                </span>
              </div>
              <div className="position-relative" id="avatarPopover">
                <Media
                  object
                  src={Avatar}
                  alt="Avatar"
                  className="rounded-circle cursor-pointer border border-1 bg-dark"
                  style={{ width: "40px", height: "40px" }}
                />
                <span
                  className="position-absolute rounded-circle bottom-0 end-0"
                  style={{
                    height: 12,
                    width: 12,
                    border: "2px solid #fff",
                    background: "#28c76f",
                  }}
                ></span>
              </div>
            </>
          )}
        </Col>
      </Row>
      <Row style={{ height: "calc(100% - 124px)", backgroundColor: "#f8f8f8" }}>
        <Col className="d-flex flex-column align-items-center justify-content-center">
          <h4 style={{ color: "#5E5873", fontSize: "24px", fontWeight: 500 }}>
            Welcome to Demo App
          </h4>
          <img src={Illustration} alt="banner" className="h-auto w-auto mt-4" />
        </Col>
      </Row>
      <Row className="px-5" style={{ backgroundColor: "#f8f8f8" }}>
        <Col
          className="d-flex justify-content-start align-items-center"
          style={{ height: 62 }}
        >
          <h4 className="fs-6">COPYRIGHT © 2020</h4>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
