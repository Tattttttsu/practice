type Props = {
    image: string
    title: string
    description: string
    date: string
}

export const TravelBlogCard = ({
    image,
    title,
    description,
    date,
}: Props) => {
    return (
        <article>
            <img src={image} alt={title} />
            <div>
                <h3>{title}</h3>
                <p>{description}</p>

                <div>
                    <time dateTime={date}>{date}</time>
                    <a href="#">читать статью</a>
                </div>
            </div>
        </article>
    )
}