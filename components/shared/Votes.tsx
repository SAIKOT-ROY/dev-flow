"use client"

import Image from "next/image";
import upvoted from "@/public/assets/icons/upvoted.svg"
import upvote from "@/public/assets/icons/upvote.svg"
import downvote from "@/public/assets/icons/downvote.svg"
import downvoted from "@/public/assets/icons/downvoted.svg"
import starFilled from "@/public/assets/icons/star-filled.svg"
import star from "@/public/assets/icons/star-red.svg"
import { formatNumber } from "@/lib/utils";
import { downvoteQuestion, upVoteQuestion } from "@/lib/actions/question.action";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { downvoteAnswer, upVoteAnswer } from "@/lib/actions/answer.action";
import { toggleSaveQuestion } from "@/lib/actions/user.action";
import { useEffect } from "react";
import { viewQuestion } from "@/lib/actions/interaction.action";

interface Props {
  type: string;
  itemId: string;
  userId: string;
  upvotes: number;
  hasupVoted: boolean;
  downvotes: number;
  hasdownVoted: boolean;
  hasSaved?: boolean;
}

const Votes = (
  {
    type,
    itemId,
    userId,
    upvotes,
    hasupVoted,
    downvotes,
    hasdownVoted,
    hasSaved,
  }: Props) => {

  const pathname = usePathname();
  const router = useRouter()

  const handleSave = async () => {
    await toggleSaveQuestion({
      userId: JSON.parse(userId),
      questionId: JSON.parse(itemId),
      path: pathname
    })
  
  }

  const handleVote = async (action: string) => {
    if (!userId) {
      return
    }
    if (action === 'upvote') {
      if (type === 'Question') {
        await upVoteQuestion({
          questionId: JSON.parse(itemId),
          userId: JSON.parse(userId),
          hasupVoted,
          hasdownVoted,
          path: pathname,
        })
      } else if (type === 'Answer') {
        await upVoteAnswer({
          answerId: JSON.parse(itemId),
          userId: JSON.parse(userId),
          hasupVoted,
          hasdownVoted,
          path: pathname,
        })
      }
      return
    }

    if (action === 'downvote') {
      if (type === 'Question') {
        await downvoteQuestion({
          questionId: JSON.parse(itemId),
          userId: JSON.parse(userId),
          hasupVoted,
          hasdownVoted,
          path: pathname,
        })
      } else if (type === 'Answer') {
        await downvoteAnswer({
          answerId: JSON.parse(itemId),
          userId: JSON.parse(userId),
          hasupVoted,
          hasdownVoted,
          path: pathname,
        })
      }
      return
    }

  }

  useEffect(() => {
    viewQuestion({
      questionId: JSON.parse(itemId),
      userId: userId ? JSON.parse(userId) : undefined
    })
  }, [itemId, userId, pathname, router])

  return (
    <div className="flex gap-5">

      <div className="flex-center gap-2.5">
        <div className="flex-center gap-1.5">
          <Image
            src={hasupVoted ? upvoted : upvote}
            width={18}
            height={18}
            alt="upvote"
            className="cursor-pointer"
            onClick={() => handleVote("upvote")}
          />

          <div className="flex-center background-light700_dark400 min-w-[18px] rounded-sm p-1">
            <p className="subtle-medium text-dark400_light900">
              {formatNumber(upvotes)}
            </p>
          </div>
        </div>
      </div>
      <div className="flex-center gap-2.5">
        <div className="flex-center gap-1.5">
          <Image
            src={hasdownVoted ? downvoted : downvote}
            width={18}
            height={18}
            alt="upvote"
            className="cursor-pointer"
            onClick={() => handleVote('downvote')}
          />

          <div className="flex-center background-light700_dark400 min-w-[18px] rounded-sm p-1">
            <p className="subtle-medium text-dark400_light900">
              {formatNumber(downvotes)}
            </p>
          </div>
        </div>
      </div>
      {type === "Question" && (
        <Image
          src={hasSaved ? starFilled : star}
          width={18}
          height={18}
          alt="star"
          className="cursor-pointer"
          onClick={handleSave}
        />
      )}
    </div>
  )
}

export default Votes