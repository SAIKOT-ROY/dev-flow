import Metric from "@/components/shared/Metric"
import { getQuestionById } from "@/lib/actions/question.action"
import { formatNumber, getTimestamp } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import like from "@/public/assets/icons/clock.svg"
import message from "@/public/assets/icons/message.svg"
import eye from "@/public/assets/icons/eye.svg"
import ParseHTML from "@/components/shared/ParseHTML"
import RenderTag from "@/components/shared/RenderTag"
import Answer from "@/components/form/Answer"
import { auth } from "@clerk/nextjs"
import { getUserById } from "@/lib/actions/user.action"
import AllAnswers from "@/components/shared/AllAnswers"
import Votes from "@/components/shared/Votes"


const Page = async ({ params, searchParams }: any ) => {

    const result = await getQuestionById({ questionId: params.id })
    const { userId: clerkId } = auth();
    

    let mongoUser

    if (clerkId) {
        mongoUser = await getUserById({ userId: clerkId })
    }

    return (
        <>
            <div className="flex-start w-full flex-col">
                <div className="flex w-full flex-col-reverse justify-between gap-5 sm:flex-row sm:items-center sm:gap-2">
                    <Link href={`/profile/${result.author.clerkId}`}
                        className="flex items-center justify-start gap-1"
                    >
                        <Image
                            src={result.author.picture}
                            className="rounded-full"
                            width={22}
                            height={22}
                            alt="profile"
                        />
                        <p className="paragraph-semibold text-dark300_light700">
                            {result.author.name}
                        </p>
                    </Link>
                    <div className="flex justify-end">
                        <Votes
                            type="Question"
                            itemId={JSON.stringify(result._id)}
                            userId={JSON.stringify(mongoUser._id)}
                            upvotes={result.upvotes.length}
                            hasupVoted={result.upvotes.includes(mongoUser._id)}
                            downvotes={result?.downVotes?.length}
                            hasdownVoted={result?.downVotes?.includes(mongoUser._id)}
                            hasSaved={mongoUser?.saved.includes(result._id)}
                        />
                    </div>
                </div>
                <h2 className="h2-semibold text-dark200_light900 mt-3.5 w-full text-left">
                    {result.title}
                </h2>
            </div>
            <div className="mb-8 mt-5 flex flex-wrap gap-4">
                <Metric
                    imgUrl={like}
                    alt="clock icon"
                    value={`asked ${getTimestamp(result.createdAt)}`}
                    title="Asked"
                    textStyles="small-medium text-dark400_light800"
                />
                <Metric
                    imgUrl={message}
                    alt="answers"
                    value={formatNumber(result?.content?.length)}
                    title="Answers"
                    textStyles="small-medium text-dark400_light800"
                />
                <Metric
                    imgUrl={eye}
                    alt="eye"
                    value={formatNumber(result?.views)}
                    title="Views"
                    textStyles="small-medium text-dark400_light800"
                />
            </div>
            <ParseHTML data={result.content} />

            <div className="mt-8 flex flex-wrap gap-2">
                {result.tags.map((tag: any) => (
                    <RenderTag key={tag._id} _id={tag._id} name={tag.name}
                        showCount={false} />
                ))}
            </div>

            <AllAnswers
                questionId={result._id}
                totalAnswers={result.content.length}
                userId={mongoUser.id}
                page={searchParams?.page}
                filter={searchParams?.filter}
            />

            <Answer
                question={result.content}
                questionId={JSON.stringify(result._id)}
                authorId={JSON.stringify(mongoUser.id)}
            />
        </>

    )
}

export default Page