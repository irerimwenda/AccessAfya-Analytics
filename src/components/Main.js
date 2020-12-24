import React, { Component } from 'react'
import Navbar from './Navbar'

import { ProgressBar } from 'react-bootstrap'
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';

const footfall = [
    {
      name: 'FootFall A', uv: 4000, pv: 2400, amt: 2400,
    },
    {
      name: 'FootFall B', uv: 3000, pv: 1398, amt: 2210,
    },
    {
      name: 'FootFall C', uv: 2000, pv: 9800, amt: 2290,
    },
    {
      name: 'FootFall D', uv: 2780, pv: 3908, amt: 2000,
    },
];

const patientsatisfaction = [
    {
      name: 'PatientSatisfaction A', uv: 4000, pv: 1398, amt: 2210,
    },
    {
      name: 'PatientSatisfaction B', uv: 4000, pv: 2400, amt: 2400,
    },
    {
      name: 'PatientSatisfaction C', uv: 2780, pv: 3908, amt: 2000,
    },
    {
      name: 'PatientSatisfaction D', uv: 4000, pv: 9800, amt: 2290,
    },
];

const revenue = [
    {
      name: 'Revenue A', uv: 2780, pv: 3908, amt: 2000,
    },
    {
      name: 'Revenue B', uv: 2000, pv: 1800, amt: 2290,
    },
    {
      name: 'Revenue C', uv: 3000, pv: 3000, amt: 3000,
    },
    {
      name: 'Revenue D', uv: 4000, pv: 4000, amt: 4000,
    },
];
class Main extends Component {
    render() {
        return (
            <div className="main-wrapper">
                <header>
                    <Navbar />
                </header>

                <main className="main-section">
                    <h6 className="main-section__title">Analytics</h6>
                    <div className="main-section__grid-layout">
                        <div className="card visits-section">
                            <h6 className="card-title mb-4">Visits</h6>

                            <div className="card-btn-1 mb-4">
                                <p className="count mr-3">7</p>
                                <p className="location  mr-auto">Kiambu</p>
                                <i className="more-icon fas fa-ellipsis-v"></i>
                            </div>

                            <div className="card-btn-1 mb-4">
                                <p className="count mr-3">12</p>
                                <p className="location  mr-auto">Mukuru Kwa ruben</p>
                                <i className="more-icon fas fa-ellipsis-v"></i>
                            </div>

                            <div className="card-btn-1 mb-4">
                                <p className="count mr-3">26</p>
                                <p className="location  mr-auto">Mukuru Kwa Njenga</p>
                                <i className="more-icon fas fa-ellipsis-v"></i>
                            </div>

                            <div className="card-btn-1 mb-4">
                                <p className="count mr-3">38</p>
                                <p className="location  mr-auto">Baba Dogo</p>
                                <i className="more-icon fas fa-ellipsis-v"></i>
                            </div>

                            <div className="card-btn-1 mb-4">
                                <p className="count mr-3">41</p>
                                <p className="location  mr-auto">Kosovo</p>
                                <i className="more-icon fas fa-ellipsis-v"></i>
                            </div>

                            <div className="card-btn-1">
                                <p className="count mr-3">24</p>
                                <p className="location  mr-auto">Mukuru Kayaba</p>
                                <i className="more-icon fas fa-ellipsis-v"></i>
                            </div>
                        </div>
                        <div className="breakdown-section">
                            <div className="card mb-4">
                                <h6 className="card-title mb-4">Key Issues</h6>

                                <div className="key-issues-card-btns">
                                    <div className="card-btn-2">
                                        <div className="card-info mr-auto">
                                            <p className="title">Wrong Prescription</p>
                                            <span className="location">Kosovo</span>
                                        </div>
                                        <i className="more-icon fas fa-ellipsis-v"></i>
                                    </div>

                                    <div className="card-btn-2">
                                        <div className="card-info mr-auto">
                                            <p className="title">Opened Late</p>
                                            <span className="location">Kiambu</span>
                                        </div>
                                        <i className="more-icon fas fa-ellipsis-v"></i>
                                    </div>

                                    <div className="card-btn-2">
                                        <div className="card-info mr-auto">
                                            <p className="title">Bad receipts</p>
                                            <span className="location">New York</span>
                                        </div>
                                        <i className="more-icon fas fa-ellipsis-v"></i>
                                    </div>

                                    <div className="card-btn-2">
                                        <div className="card-info mr-auto">
                                            <p className="title">Late check in</p>
                                            <span className="location">Mathare</span>
                                        </div>
                                        <i className="more-icon fas fa-ellipsis-v"></i>
                                    </div>

                                    <div className="card-btn-2">
                                        <div className="card-info mr-auto">
                                            <p className="title">Delay in Lab</p>
                                            <span className="location">Kiambu</span>
                                        </div>
                                        <i className="more-icon fas fa-ellipsis-v"></i>
                                    </div>

                                    <div className="card-btn-2">
                                        <div className="card-info mr-auto">
                                            <p className="title">Careless waste dis...</p>
                                            <span className="location">Kiambu</span>
                                        </div>
                                        <i className="more-icon fas fa-ellipsis-v"></i>
                                    </div>
                                </div>
                            </div>

                            <div className="card mb-4">
                                <h6 className="card-title mb-4">Monitoring Period</h6>

                                <div className="period-card-btns">
                                    <div className="btn-group card-btn-group mr-4" role="group" aria-label="Basic example">
                                        <button type="button" className="btn btn-light">Day</button>
                                        <button type="button" className="btn btn-light">Week</button>
                                        <button type="button" className="btn btn-light">Month</button>
                                        <button type="button" className="btn btn-light">Year</button>
                                    </div>

                                    <button className="btn btn-light card-btn-3">
                                        <i className="far fa-calendar mr-3"></i>
                                        <span>10 Dec 2019 - 10 Jan 2020</span>
                                    </button>
                                </div>
                            </div>

                            <div className="row mb-4">
                                <div className="col-md-4">
                                    <div className="card">
                                        <h5 className="card-title-2 mb-4">Foot fall</h5>

                                        <div className="card-graph-details">
                                            <div className="card-graph-details__info">
                                                <h4 className="title">13K</h4>
                                                <p className="description">patients</p>
                                                <span className="details rank-up">
                                                    <i className="fas fa-caret-up mr-2"></i>
                                                    <p className="my-0">+0,2</p>
                                                </span>
                                            </div>

                                            <div className="card-graph-details__graph">
                                                <LineChart width={150} height={100} data={footfall}>
                                                    <Line type="monotone" dataKey="pv" stroke="#239B56" strokeWidth={2} />
                                                </LineChart>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="card">
                                        <h5 className="card-title-2 mb-4">Patient Satisfaction</h5>

                                        <div className="card-graph-details">
                                            <div className="card-graph-details__info">
                                                <h4 className="title">7.8</h4>
                                                <p className="description">NPS</p>
                                                <span className=" details rank-down">
                                                    <i className="fas fa-caret-down mr-2"></i>
                                                    <p className="my-0">-0,1</p>
                                                </span>
                                            </div>

                                            <div className="card-graph-details__graph">
                                                <LineChart width={150} height={100} data={patientsatisfaction}>
                                                    <Line type="monotone" dataKey="pv" stroke="#E74C3C" strokeWidth={2} />
                                                </LineChart>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="card">
                                        <h5 className="card-title-2 mb-4">Revenue</h5>

                                        <div className="card-graph-details">
                                            <div className="card-graph-details__info">
                                                <h4 className="title">4.2m</h4>
                                                <p className="description">Kenya Shillings</p>
                                                <span className="details rank-up">
                                                    <i className="fas fa-caret-up mr-2"></i>
                                                    <p className="my-0">+2,4</p>
                                                </span>
                                            </div>

                                            <div className="card-graph-details__graph">
                                                <LineChart width={150} height={100} data={revenue}>
                                                    <Line type="monotone" dataKey="pv" stroke="#239B56" strokeWidth={2} />
                                                </LineChart>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <table className="table table-borderless analytics-table">
                                    <thead>
                                        <tr>
                                            <th scope="col">No</th>
                                            <th scope="col">Staff Name</th>
                                            <th scope="col">Efficiency Delta</th>
                                            <th scope="col">NPS Delta</th>
                                            <th scope="col">Efficiency</th>
                                            <th scope="col">Reported Issues</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row" className="table-index">1</th>
                                            <td className="table-title">Mercy Mukoya</td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span className="table-text-primary mr-4">1,3</span>
                                                    <span className="table-text-secondary mr-3">+0,2</span>
                                                    <i className="fas fa-caret-up rank-up"></i>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span className="table-text-primary mr-4">1,3</span>
                                                    <span className="table-text-secondary mr-3">+0,2</span>
                                                    <i className="fas fa-caret-up rank-up"></i>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="issue-progress">
                                                    <span className="table-text-primary mr-4">96%</span>
                                                    <ProgressBar variant="primary" now={96} />
                                                </div>
                                            </td>
                                            <td>
                                                <div className="issue-progress">
                                                    <span className="table-text-primary mr-4">3</span>
                                                    <ProgressBar variant="primary" now={30} />
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <th scope="row" className="table-index">2</th>
                                            <td className="table-title">Kennedy Ayako</td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span className="table-text-primary mr-4">1,8</span>
                                                    <span className="table-text-secondary mr-3">+0,4</span>
                                                    <i className="fas fa-caret-up rank-up"></i>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span className="table-text-primary mr-4">1,8</span>
                                                    <span className="table-text-secondary mr-3">+0,2</span>
                                                    <i className="fas fa-caret-up rank-up"></i>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="issue-progress">
                                                    <span className="table-text-primary mr-4">92%</span>
                                                    <ProgressBar variant="primary" now={92} />
                                                </div>
                                            </td>
                                            <td>
                                                <div className="issue-progress">
                                                    <span className="table-text-primary mr-4">6</span>
                                                    <ProgressBar variant="primary" now={60} />
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <th scope="row" className="table-index">3</th>
                                            <td className="table-title">Stephanie Tomstett</td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span className="table-text-primary mr-4">2,7</span>
                                                    <span className="table-text-secondary mr-3">+2,5</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span className="table-text-primary mr-4">2, 0</span>
                                                    <span className="table-text-secondary mr-3">+1, 8</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="issue-progress">
                                                    <span className="table-text-primary mr-4">58%</span>
                                                    <ProgressBar variant="primary" now={58} />
                                                </div>
                                            </td>
                                            <td>
                                                <div className="issue-progress">
                                                    <span className="table-text-primary mr-4">1</span>
                                                    <ProgressBar variant="primary" now={10} />
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <th scope="row" className="table-index">4</th>
                                            <td className="table-title">Faith Kityo</td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span className="table-text-primary mr-4">2,8</span>
                                                    <span className="table-text-secondary mr-3">-0, 5</span>
                                                    <i className="fas fa-caret-down rank-down"></i>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span className="table-text-primary mr-4">2,5</span>
                                                    <span className="table-text-secondary mr-3">-2,1</span>
                                                    <i className="fas fa-caret-down rank-down"></i>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="issue-progress">
                                                    <span className="table-text-primary mr-4">74%</span>
                                                    <ProgressBar variant="primary" now={74} />
                                                </div>
                                            </td>
                                            <td>
                                                <div className="issue-progress">
                                                    <span className="table-text-primary mr-4">8</span>
                                                    <ProgressBar variant="primary" now={80} />
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export default Main