import Question from '@/components/form/Question';
import { getUserById } from '@/lib/actions/user.action';
import { redirect } from 'next/navigation';
import React from 'react';

const page = async () => {
    // const {userId} = auth();

    const userId = "1234567890"

    if(!userId){
        redirect('/sign-in')
    }

    const mongoUser = await getUserById({userId});

    console.log(mongoUser);
    return (
        <div>
            <h1 className='h1-bold text-dark100_light900'>Ask a Question</h1>
            <div className='mt-9'>
                <Question mongoUserId={JSON.stringify(mongoUser._id)} />
            </div>
        </div>
    );
};

export default page;