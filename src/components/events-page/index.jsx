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
                    <div className="w-80 flex flex-col items-center bg-gradient-to-b from-[#502D6A] to-[#9B36EA] text-white p-2 m-0">
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
        <div className="flex flex-col bg-gray-300">
            <div className="h-screen bg-black">
            <img src="./images/zephrbanner.png" alt="zephyr-banner" className="w-full h-1/2"/>
            <div className="text-white">
                <p className="text-center font-bold text-5xl my-8">ZEPHYR</p>
                <p className="mx-20 border-2 rounded border-gray-500 px-10 py-8 text-center text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam porro quisquam ea deleniti fugit suscipit accusantium sit ab reiciendis nemo voluptate, laborum libero consequuntur vitae quas recusandae rem eius fuga facere illum excepturi obcaecati, harum iure? Tempore neque magnam nobis quaerat eum. Quas id laboriosam eveniet quisquam nihil error quis dicta fugit veritatis saepe ut consequatur repudiandae atque tenetur voluptates nulla, optio doloribus numquam explicabo, itaque magnam! Ad labore nisi natus. Excepturi beatae molestiae iste distinctio doloribus voluptatum optio nulla sunt quo delectus tempora in et quia, doloremque autem possimus voluptates veritatis odio aliquid corrupti impedit ad quam est asperiores!</p>
            </div>
            </div>
            <p className="text-white shadow-lg shadow-slate-700 text-center font-bold text-5xl my-8 w-auto py-4 bg-gray-800">EVENTS</p>
            <div className="wrapper">
                {eventDetail}
            </div>
        </div>
    )
}