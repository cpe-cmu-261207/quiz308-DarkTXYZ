import { CommentType } from "./comments"
import { CommentStore } from "./comments"
import Block from './Block'

const CommentBlock = () => {

    const state = CommentStore.useState()
    const commentData = state.data

    const checkLike = (num: Number) => {
        if (num > 0)
            return (
                <div className='flex items-center'>
                    <img className='w-4 h-4 mr-1' src='/like.svg'></img>
                    <p className='text-gray-300'>{num} คน</p>
                </div>
            )
        else
            return;
    }

    const eachBlock = (srcimg: string, name: string, text: string, likeNum: Number, replies: CommentType[]) => {
        return (
            <div className="flex flex-col p-2 items-start">
                <div className="flex space-x-2">
                    <img className="w-10 h-10 rounded-full" src={srcimg}></img>
                    <div className="bg-gray-500 rounded-lg p-2">
                        <p className="font-semibold text-white">{name}</p>
                        <p className='text-white'>{text}</p>
                        {checkLike(likeNum)}
                    </div>
                </div>
                <div className="flex flex-col">
                    {replies.map(x => <Block srcimg={x.userImagePath} name={x.username} text={x.commentText} likeNum={x.likeNum} />)}
                </div>
            </div>
        )
    }

    return (
        <div>
            {commentData.map((x: CommentType) => eachBlock(x.userImagePath, x.username, x.commentText, x.likeNum, x.replies))}
        </div>
    )

}

export default CommentBlock