import * as React from "react";
import styled from "styled-components";

function Footer(props) {
  return (
    <div>
      <Div>
        <Column>
          <Div2>
            <Div3>
              <div>
                <Column2>
                  <Div5>
                    <Div6>Home</Div6>
                    <Div7>About Us</Div7>
                  </Div5>
                </Column2>
                <Column3>
                  <Div8>
                    <Div9>Shop</Div9>
                    <Div10>
                      Earrings
                      <br />
                      Bottles
                      <br />
                      Tumbler <br />
                      Pouches
                      <br />
                      Tote Bags
                      <br />
                      Pop Socket
                    </Div10>
                  </Div8>
                </Column3>
                <Column4>
                  <Div11>
                    Tray
                    <br />
                    Magnets
                    <br />
                    Mirror
                    <br />
                    Rakwe
                    <br />
                    Stainless Mug
                  </Div11>
                </Column4>
              </div>
            </Div3>
            <Div12>
              © 2023, Lze2a All rights reserved.
              <br />
            </Div12>
          </Div2>
        </Column>
        <Column5>
          <Div13>
            <div>
              <Column6>
                <Div15>
                  <Div16>Services</Div16>
                  <Div17>
                    Customize
                    <br />
                    Wishlist
                    <br />
                    Feedback
                  </Div17>
                </Div15>
              </Column6>
              <Column7>
                <Div18>
                  <Div19>Keep in touch</Div19>
                  <Div20>info@lze2a.com</Div20>
                  <Div21>+961 78 946 423</Div21>
                </Div18>
              </Column7>
              <Column8>
                <Div22>
                  <Div23>Support</Div23>
                  <Div24>
                    FAQ
                    <br />
                    My Account
                    <br />
                    Terms and Conditions
                    <br />
                    Return Policies
                  </Div24>
                </Div22>
              </Column8>
            </div>
          </Div13>
        </Column5>
      </Div>
    </div>
  );
}

const Div = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 41%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div2 = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  padding: 0 20px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Div3 = styled.div`
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 38%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div5 = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 991px) {
    margin-top: 39px;
  }
`;

const Div6 = styled.div`
  color: #000;
  font: 700 27px Poppins, sans-serif;
`;

const Div7 = styled.div`
  color: #000;
  margin-top: 25px;
  white-space: nowrap;
  font: 700 27px Poppins, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Column3 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 28%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div8 = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  @media (max-width: 991px) {
    margin-top: 38px;
  }
`;

const Div9 = styled.div`
  color: #000;
  white-space: nowrap;
  font: 700 27px Poppins, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div10 = styled.div`
  color: #000;
  margin-top: 11px;
  font: 500 18px Poppins, sans-serif;
`;

const Column4 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 34%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div11 = styled.div`
  color: #000;
  margin: auto 0;
  font: 500 18px Poppins, sans-serif;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Div12 = styled.div`
  color: #000;
  margin-top: 53px;
  white-space: nowrap;
  font: 400 22px Poppins, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
    white-space: initial;
  }
`;

const Column5 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 59%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div13 = styled.div`
  padding: 0 20px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Column6 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 23%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div15 = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Div16 = styled.div`
  color: #000;
  white-space: nowrap;
  font: 700 27px Poppins, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div17 = styled.div`
  color: #000;
  margin-top: 19px;
  font: 500 18px Poppins, sans-serif;
`;

const Column7 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 37%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div18 = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Div19 = styled.div`
  color: #000;
  white-space: nowrap;
  font: 700 27px Poppins, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div20 = styled.div`
  color: #000;
  margin-top: 11px;
  white-space: nowrap;
  font: 500 18px Poppins, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div21 = styled.div`
  color: #000;
  margin-top: 13px;
  font: 500 18px Poppins, sans-serif;
`;

const Column8 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 40%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div22 = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Div23 = styled.div`
  color: #000;
  font: 700 27px Poppins, sans-serif;
`;

const Div24 = styled.div`
  color: #000;
  margin-top: 14px;
  font: 500 18px Poppins, sans-serif;
`;



export default Footer