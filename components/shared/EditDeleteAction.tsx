"use client"
import Image from "next/image";
import edit from "@/public/assets/icons/edit.svg"
import trash from "@/public/assets/icons/trash.svg"
import { deleteAnswer } from "@/lib/actions/answer.action";
import { deleteQuestion } from "@/lib/actions/question.action";
import { usePathname, useRouter } from "next/navigation";

interface Props {
    type: string;
    itemId: string
}

const EditDeleteAction = ({ type, itemId }: Props) => {

    const pathname = usePathname();
    const router = useRouter();

    const handleEdit = () => { 
        router.push(`/question/edit/${JSON.parse(itemId)}`)
    };

    const handleDelete = async () => {
        if (type === 'Question') {
            await deleteQuestion(
                { questionId: JSON.parse(itemId), path: pathname }
            )

        } else if (type === 'Answer') {
            await deleteAnswer(
                { answerId: JSON.parse(itemId), path: pathname }
            )
        }
    }

    return (
        <div className="flex items-center justify-end gap-3 max-sm:w-full">
            {type === "Question" && (
                <Image
                    src={edit}
                    width={14}
                    height={14}
                    alt="edit"
                    className="cursor-pointer object-contain"
                    onClick={handleEdit}
                />
            )}
            <Image
                src={trash}
                width={14}
                height={14}
                alt="delete"
                className="cursor-pointer object-contain"
                onClick={handleDelete}
            />

        </div>
    )
}

export default EditDeleteAction