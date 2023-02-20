export default function handler(req, res) 
{

    const location = [
    {        
        Id:"Belek_Turkey",
        title: "Belek Turkey",
        visitedDate: "Three years",
        imgUrl: "/assets/Belek_Turkey.jpg"

    },
    {
        Id:"Dubai",
        title: "Dubai",
        visitedDate: "Last year",
        imgUrl: "/assets/Dubai.jpg"


    },
    {
        Id:"Windsor",
        title: "Windsor Castle",
        visitedDate: "Last year",
        imgUrl: "/assets/WindsorCastle.jpg"
    }];

    res.json(location);
}