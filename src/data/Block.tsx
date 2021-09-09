type BlockType = {
    srcimg: string,
    name: string,
    text: string,
    likeNum: Number
}

const Block = ({ srcimg, name, text, likeNum }: BlockType) => {

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

    return (
        <div className="flex p-2 items-start space-x-2 pl-14" >
            <img className="w-10 h-10 rounded-full" src={srcimg}></img>
            <div className="bg-gray-500 rounded-lg p-2">
                <p className="font-semibold text-white">{name}</p>
                <p className='text-white'>{text}</p>
                {checkLike(likeNum)}
            </div>
        </div >
    )

}

export default Block