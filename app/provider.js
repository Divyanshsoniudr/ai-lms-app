'use client'
import { db } from '@/configs/db';
import { eq } from 'drizzle-orm';
import { USER_TABLE } from '@/configs/schema';
import { useUser } from '@clerk/nextjs';
import React, { useEffect } from 'react';

function Provider({ children }) {

    const {user} = useUser();

    useEffect(() => {
        user&& CheckIsNewUser();
    }, [user]);

    const CheckIsNewUser = async() => {
        //Check if user already Exists 
        const result = await db.select().from(USER_TABLE)
        .where(eq(USER_TABLE.email, user?.primaryEmailAddress?.emailAddress));

        console.log(result);
        if(result?.length==0){
            // If user does not exist, then add to DB
            const userResp = await db.insert(USER_TABLE).values({
                name: user?.fullName,
                email: user?.primaryEmailAddress?.emailAddress
            }).returning({id:USER_TABLE.id});

            console.log("User added to DB", userResp);
        }

        
    }

    return(
        <div>
            {children}
        </div>
    )
}
export default Provider;