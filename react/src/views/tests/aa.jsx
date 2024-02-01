{/* <div className='  container p-2'>
<div className="row justify-content-center">
    <div className="col-12 col-sm-12 col-md-6">
        <div className="">
            <div className="">
                <div className="form-wrapper">
                    {Object.keys(validationError).length > 0 && (
                        <div className="row">
                            <div className="col-12">
                                <div className="alert alert-danger">
                                    <ul className="mb-0">
                                        {Object.entries(validationError).map(([key, value]) => (
                                            <li key={key}>{value}</li>
                                            ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}
                     <Form className="LoginForm-create" onSubmit={createProduct}>
              <center>      <h4 className="card-title">Create information</h4>
                    <hr />
                        <Row>
                            <Col>
                                <Form.Group controlId="nom">
                                    <Form.Label>nom</Form.Label>
                                    <Form.Control type="text" value={nom} onChange={(event) => {
                                        setNom(event.target.value)
                                    }} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group controlId="marque">
                                    <Form.Label>marque</Form.Label>

                                    <select className="form-select" aria-label="Default select example" onChange={(e) => { setMarque(e.target.value) }}>
                                        {
                                            marquevoiture.map(state => {
                                                return <option>{state}</option>
                                            })
                                        }
                                    </select><br />


                                    Modèle:


                                    {marque && <select className="form-select" aria-label="Default select example" onChange={(e) => { setModele(e.target.value) }} >
                                        {
                                            model[marque].map(city => {
                                                return <option>{city}</option>
                                            })
                                        }
                                    </select>}
                                </Form.Group>
                            </Col>
                        </Row><br />



                        <Row>
                            <Col>
                                <Form.Group controlId="Image">
                                    <Form.Label>Image</Form.Label>
                                    <Form.Control type="file" onChange={changeHandler} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Button variant="primary" className="mt-2 p-1 m-1" size="lg" block="block" type="submit">
                            Créer
                        </Button> 
                        </center>
                    </Form>
                </div>
            </div>
        </div>
    </div>
</div>
</div>

 */}
