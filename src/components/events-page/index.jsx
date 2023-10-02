import React from "react";
import {eventDetails} from "./eventDetails";
import "../events-page/events.css"
export default function EventsPage(){

    const eventDetail = eventDetails.map((details) => {
        return (
            <div className="card">
                <img src={details.image}/>  
                <div className="info">
                    <h1>{details.name}</h1>
                    <p>{details.detail}</p>
                </div>
            </div>
        )
    })

    return(
        <div className="flex flex-col bg-gray-900">
            <div className=" bg-black">
            <img src="./images/zephrbanner.png" alt="zephyr-banner" className="object-cover hidden md:block w-auto h-1/2"/>
            <div className="text-white py-8 ">
                {/* <p className="text-center font-bold text-5xl my-8">ZEPHYR</p> */}
                <p className="mx-10 border-2 rounded border-gray-500 px-6 md:px-10 text-center text-sm md:text-base lg:text:lg xl:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam porro quisquam ea deleniti fugit suscipit accusantium sit ab reiciendis nemo voluptate, laborum libero consequuntur vitae quas recusandae rem eius fuga facere illum excepturi obcaecati, harum iure? Tempore neque magnam nobis quaerat eum. Quas id laboriosam eveniet quisquam nihil error quis dicta fugit veritatis saepe ut consequatur repudiandae atque tenetur voluptates nulla, optio doloribus numquam explicabo, itaque magnam! Ad labore nisi natus. Excepturi beatae molestiae iste distinctio doloribus voluptatum optio nulla sunt quo delectus tempora in et quia, doloremque autem possimus voluptates veritatis odio aliquid corrupti impedit ad quam est asperiores!</p>
            </div>
            </div>
            <p className="text-white shadow-lg shadow-slate-700 text-center font-bold text-5xl my-8 w-auto py-4 bg-gray-800">EVENTS</p>
            <div className="wrapper">
                {eventDetail}
            </div>
        </div>
    )
}