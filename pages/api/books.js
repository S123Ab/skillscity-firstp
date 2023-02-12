export default function handler(req, res) {
    const Books = [
    {        

        title: "Why You?",
        author: "James Reed",

    },
    {
        title:  "Parenting a child with Autism",
        author: "Richard Bass",

    },
    {
        title: "Emotional Intelligence",
        author: "Daniel Goleman",
    }

    ];

    res.json(Books);
}