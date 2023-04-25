import Card from "./shared/Card"

export default function FeedbackItem( {item}) {


  return (
    <Card className='card'>
        <div className="rating-display"> {item.rating} </div>
        <div className='text-display'>
            {item.text}
        </div>
        

    </Card>
  )
}
