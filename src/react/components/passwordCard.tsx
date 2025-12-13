import React from 'react';

import { Password } from "../../db/entities";

interface IPasswordProps {
    data: Password;
}

const PasswordCard = React.memo(({ data }: IPasswordProps) => {



    return (
        <div className="group relative flex h-32 flex-col justify-center intems-center rounded-2xl border border-white/5
        bg-zinc-900 p-6 shadow-xl transition-all duration-300 hover:scale-[1.02] hover:bg-zinc-800/80 hover:shadow-2xl
        hover:shadow-brand/10 hover:border-brand/20 cursor-pointer">
            <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-brand transition-colors duration-300">{data.webPage}</h3>
        </div>
    )

})

export default PasswordCard;