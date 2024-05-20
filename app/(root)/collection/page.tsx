import LocalSearchBar from "@/components/shared/search/LocalSearchBar";
import search from "@/public/assets/icons/search.svg"
import Filter from "@/components/shared/Filter";
import { QuestionFilters } from "@/constants/filters";
import NoResults from "@/components/shared/NoResults";
import QuestionCard from "@/components/cards/QuestionCard";
import { getSavedQuestions } from "@/lib/actions/user.action";
import {auth} from '@clerk/nextjs'
import { SearchParamsProps } from "@/types";

export default async function Home({searchParams}: SearchParamsProps) {
    const {userId} = auth()

    if(!userId) return null

    const results = await getSavedQuestions({
        clerkId: userId,
        searchQuery: searchParams.q,
        filter: searchParams.filter
    });
    

    return (
        <>
            <h1 className="h1-bold text-dark100_light900">Saved Questions</h1>
            <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
                <LocalSearchBar
                    route="/"
                    iconPosition="left"
                    imgSrc={search}
                    placeholder="Search for question"
                    otherClasses="flex-1"
                />
                <Filter
                    filters={QuestionFilters}
                    otherClasses="min-h-[56px] sm:min-w-[170px]"
                />
            </div>
            <div className="mt-10 flex w-full flex-col gap-6">
                {results.questions.length > 0 ? results.questions.map((question: any) => (
                    <QuestionCard
                        key={question._id}
                        _id={question._id}
                        title={question.title}
                        tags={question.tags}
                        author={question.author}
                        upvotes={question.upvotes}
                        views={question.views}
                        answers={question.content}
                        createdAt={question.createdAt}
                    />
                )) :
                    <NoResults
                        title="There are no saved question to show"
                        description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
                        link="/ask-question"
                        linkTitle="Ask a Question"
                    />}
            </div>
        </>
    )
}