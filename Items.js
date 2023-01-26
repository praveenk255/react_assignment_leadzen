import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import ContextAwareToggle from './ContextAwareToggle';
import Stack from 'react-bootstrap/Stack';





// Example items, to simulate fetching from another resources.


function Items({ currentItems }) {

  return (
    <>
      {currentItems &&
        currentItems.map((item) => (

          <div className="mb-5">
            <Accordion defaultActiveKey="0" >
              <Card >
                <Card.Header className="bg-transparent">
                  <Row  >

                    <Col><br />{item.name}</Col>
                    <Col><table>
                      <tr>
                        <th>Username</th>
                      </tr>
                      <tr>
                        <td>{item.username}</td>
                      </tr>
                    </table></Col>
                    <Col><table>
                      <tr>
                        <th>City</th>
                      </tr>
                      <tr>
                        <td>{item.address.city}</td>
                      </tr>
                    </table></Col>
                    <Col><table>
                      <tr>
                        <th>Email</th>
                      </tr>
                      <tr>
                        <td>{item.email}</td>
                      </tr>
                    </table></Col>
                    <Col><ContextAwareToggle eventKey="1"></ContextAwareToggle>


                    </Col>

                  </Row>

                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body><table>
                    <tr>
                      <th>Description</th>
                    </tr>
                    <tr>
                      <td>lorem ipsum text</td>
                    </tr>
                  </table> <br />

                    <Row>
                      <Col><Stack gap={3}>
                        <table>
                          <tr>
                            <th>Contact Person</th>
                          </tr>
                          <tr>
                            <td>{item.name}</td>
                          </tr>
                        </table>

                        <table>
                          <tr>
                            <th>Username</th>
                          </tr>
                          <tr>
                            <td>{item.username}</td>
                          </tr>
                        </table>

                        <table>
                          <tr>
                            <th>Email</th>
                          </tr>
                          <tr>
                            <td>{item.email}</td>
                          </tr>
                        </table>
                      </Stack></Col>
                      <Col><Stack gap={3}>
                        <table>
                          <tr>
                            <th>Address</th>
                          </tr>

                        </table>

                        <table>
                          <tr>
                            <th>Street</th>
                          </tr>
                          <tr>
                            <td>{item.address.street}</td>
                          </tr>
                        </table>

                        <table>
                          <tr>
                            <th>Suite</th>
                          </tr>
                          <tr>
                            <td>{item.address.suite}</td>
                          </tr>
                        </table>
                        <table>
                          <tr>
                            <th>City</th>
                          </tr>
                          <tr>
                            <td>{item.address.city}</td>
                          </tr>
                        </table>
                        <table>
                          <tr>
                            <th>Zipcode</th>
                          </tr>
                          <tr>
                            <td>{item.address.zipcode}</td>
                          </tr>
                        </table>
                      </Stack></Col>
                    </Row>



                  </Card.Body>
                </Accordion.Collapse>
              </Card>

            </Accordion>
          </div>

        ))}

    </>
  );
}

export default Items