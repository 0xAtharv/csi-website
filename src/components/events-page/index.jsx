import React from "react";
import {eventDetails} from "./eventDetails";
import "../events-page/events.css"
import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  
Modal.setAppElement('#root');

export default function EventsPage(){

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    const eventDetail = eventDetails.map((details) => {
        return (
            <div className="card">
                <img src={details.image}/>  
                <div className="info">
                    <h1>{details.name}</h1>
                    <p>{details.detail}</p>
                    <button onClick={openModal}>Read More</button>
                </div>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <div className="w-80 flex flex-col items-center bg-gradient-to-b from-[#502D6A] to-[#9B36EA] text-white p-2">
                        <div className="bg-white text-black p-2 rounded-sm font-bold text-lg text-center w-full">{details.name}</div>
                        <div className="flex w-full justify-start flex-col p-4">
                            <p>Date: <b>{details.date}</b></p>
                            <p>Participation type : <b>{details.participation}</b></p>
                            <p>Registration fees: <b>{details.fees}</b></p>
                            <p>Perks: <b className="text-lg">{details.perks}</b></p>
                            <p className="font-semibold underline decoration-dashed decoration-white underline-offset-4">For queries: </p>
                            <p className="ml-4">{details.queries[0].name}: {details.queries[0].number}</p>
                            <p className="ml-4">{details.queries[1].name}: {details.queries[1].number}</p>
                        </div>
                        <button onClick={closeModal} className="w-16 bg-white text-black font-medium rounded-xl mb-2.5 p-2">CLOSE</button>
                    </div>
                </Modal>
            </div>
        )
    })

    return(
        <div className="wrapper">
         {eventDetail}
        </div>
    )
}