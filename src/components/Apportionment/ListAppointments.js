import React, {Component} from 'react';
import {FaTimes} from "react-icons/fa/index";
import Moment from 'react-moment';

const rescheduleAppointment = 'retail/appointment/rescheduleAppointment';


class ListAppointments extends Component {
    render() {

        return (
            <div className="appointment-list item-list mb-3">
                {this.props.appointments.map(item => (
                    <div className="pet-item col media py-3" key={item.aptId}>
                        <div className="mr-3">
                            <span className="pet-delete btn btn-sm btn-danger"
                                    onClick={() => this.props.deleteAppointment(item)}><FaTimes/></span>
                        </div>

                        <div className="pet-info media-body">
                            <div className="pet-head d-flex">
                                <span className="pet-name"
                                      contentEditable
                                      suppressContentEditableWarning
                                      onBlur={
                                          e => this.props.updateInfo('petName', e.target.innerText, item.aptId)
                                      }
                                >
                                    {item.petName}</span>
                                <span className="apt-date ml-auto">
                                    <Moment
                                        date={item.aptDate}
                                        parse={"YYYY-MM-DD hh:mm"}
                                        format={"MMM-D h:mma"}
                                    />
                                </span>
                            </div>

                            <div className="owner-name">
                                <span className="label-item">Owner: </span>
                                <span contentEditable style={{fontSize: "13px"}}
                                      suppressContentEditableWarning
                                      onBlur={
                                          e => this.props.updateInfo('ownerName', e.target.innerText, item.aptId)
                                      }>{item.ownerName}</span>
                            </div>
                            <div className="apt-notes"
                                 contentEditable
                                 suppressContentEditableWarning
                                 onBlur={
                                     e => this.props.updateInfo('aptNotes', e.target.innerText, item.aptId)
                                 }
                            >{item.aptNotes}</div>
                        </div>
                    </div>
                ))}

            </div>
        )
    }
}

export default ListAppointments;