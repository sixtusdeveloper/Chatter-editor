import React from 'react';
import { useOthers } from '@liveblocks/react/suspense';

const ActiveCollaborators = () => {
    const others = useOthers()

    const collaborators = others.map((other) => other.info);

    return (
        <ul className='collaborators-list'>
            {collaborators.map(({ id, name, avatar, color }) => (
                <li key={id}>
                    <img 
                    src={avatar} 
                    alt={name} 
                    width={100} height={100} 
                    className='inline-block rounded-full size-8 ring-2 ring-dark-100'
                    style={{ border: `3px solid ${color}` }}
                    />
                    {/* <span>{name}</span> */}
                </li>
            ))}
        </ul>
    )
}

export default ActiveCollaborators