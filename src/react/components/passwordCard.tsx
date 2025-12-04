import React from 'react';

import {Password} from "../../db/entities";

interface IPasswordProps {
    data: Password;
}

const PasswordCard = React.memo(({ data }:IPasswordProps) => {


    console.log("this was rendered with", data.webPage);


    return (
        <div className="border rounded-lg bg-sky-950 flex justify-center items-center hover:bg-sky-800 hover:cursor-pointer max-h-2/6">
            <h3 className="font-bold font-sans text-3xl">{data.webPage}</h3>
        </div>
    )

})

export default PasswordCard;