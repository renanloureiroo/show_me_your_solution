import React from 'react'
import { CircleNotch } from "phosphor-react";


interface Props {
    size: number
}

export const Loading = ( { size } : Props  ) => {
	return (
        <main className="w-full h-screen flex items-center justify-center">
            <CircleNotch size={size} className="animate-spin" />
        </main>
    )
}

