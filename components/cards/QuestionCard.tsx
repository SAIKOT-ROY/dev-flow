import Link from 'next/link';
import React from 'react'
import RenderTag from '../shared/RenderTag';
import Metric from '../shared/Metric';
import like from "@/public/assets/icons/like.svg"
import message from "@/public/assets/icons/message.svg"
import eye from "@/public/assets/icons/eye.svg"
import avatar from "@/public/assets/icons/avatar.svg"
import { formatNumber, getTimestamp } from '@/lib/utils';

interface QuestionProps {
    _id: string;
    title: string;
    tags: {
        _id: string;
        name: string;
    }[],
    author: { _id: string; name: string; picture: string; };
    upvotes: number;
    views: number;
    answers: Array<object>;
    createdAt: Date;
}

const QuestionCard = (
    { _id, title, tags, author, upvotes, views, answers, createdAt }: QuestionProps) => {
    return (
        <div className='card-wrapper rounded-[10px] p-9 sm:px-11'>
            <div className='flex flex-col-reverse items-start justify-between gap-5
            sm:flex-row'>
                <div>
                    <span className='subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden'>
                        {getTimestamp(createdAt)}
                    </span>
                    <Link href={`/question/${_id}`}>
                        <h3 className='sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1 flex-1'>{title}</h3>
                    </Link>
                </div>
                {/* If signed in add edit delete actions */}
            </div>
            <div className='mt-3.5 flex flex-wrap gap-2'>
                {tags.map((tag) => (
                    <RenderTag key={tag._id} _id={tag._id} name={tag.name} />
                ))}
            </div>
            <div className='flex-between mt-6 w-full flex-wrap gap-3'>
                    <Metric 
                        imgUrl={avatar}
                        alt="user"
                        value={author.name}
                        title={`- asked ${getTimestamp(createdAt)}`}
                        isAuthor
                        textStyles="body-medium text-dark400_light700"
                     />
                    <Metric 
                        imgUrl={like}
                        alt="Upvotes"
                        value={formatNumber(upvotes)}
                        title="Votes"
                        textStyles="small-medium text-dark400_light800"
                     />
                    <Metric 
                        imgUrl={message}
                        alt="answers"
                        value={formatNumber(answers.length)}
                        title="Answers"
                        textStyles="small-medium text-dark400_light800"
                     />
                    <Metric 
                        imgUrl={eye}
                        alt="eye"
                        value={formatNumber(views)}
                        title="Views"
                        textStyles="small-medium text-dark400_light800"
                     />
            </div>
        </div>
    )
}

export default QuestionCard