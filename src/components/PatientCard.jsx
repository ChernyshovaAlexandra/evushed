import React from "react";


const PatientCard = ({ data, odd }) => {
    return (
        <div className={`bg-white rounded-lg p-4 patient-card ${odd ? '' : 'mt-16'}`}>
            <div className="rounded-xl overflow-hidden w-full relative patient-card_img bg-blue-grad">
                <img className="absolute top-0 left-0 w-full h-full object-cover object-center" src={data.img} alt="" />
            </div>
            <div className="mt-8 patient-card_data">
                <p className="text-pink patient-card_data_name">{data.name}</p>
                <h4 className="text-black gilroy text-xl patient-card_data_diagnose my-5">{data.diagnose}</h4>
                <p className="text-black gilroy font-bold patient-card_data_process text-lg">{data.process}</p>
                <p className="text-black gilroy patient-card_data_process-description text-lg font-normal mt-3">{data.description}</p>
            </div>
        </div>
    )
}

export default PatientCard;