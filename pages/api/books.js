export default function handler(req, res) 
{

    const Books = [
    {        
        Id:"1",
        title: "Why You?",
        author: "James Reed",
        imgUrl: "/assets/book1.jpg"

    },
    {
        Id:"2",
        title:  "Parenting a child with Autism",
        author: "Richard Bass",
        imgUrl: "/assets/book2.jpg"


    },
    {
        Id:"3",
        title: "Emotional Intelligence",
        author: "Daniel Goleman",
        imgUrl: "/assets/book3.jpg"
    }];

    res.json(Books);
}