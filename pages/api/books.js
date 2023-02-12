export default function handler(req, res) 
{

    const Books = [
    {        

        title: "Why You?",
        author: "James Reed",
        imgUrl: "/assets/book1.jpg"

    },
    {
        title:  "Parenting a child with Autism",
        author: "Richard Bass",
        imgUrl: "/assets/book2.jpg"


    },
    {
        title: "Emotional Intelligence",
        author: "Daniel Goleman",
        imgUrl: "/assets/book3.jpg"
    }];

    res.json(Books);
}