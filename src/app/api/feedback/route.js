// import { feedback } from "../route";


const feedbackcollection =connect("feedbacks");

export async function GET(request) {

    const feedback = await feedbackcollection.find().toArray();
    return Response.json(feedback);
}
export async function POST(request) {

    const {message} = await request.json();

    if(!message || typeof message !== "string") {
        return Response.json({
            status: 400,
            message: "Message is required"
        });
    }

    const newFeedback = {message, date:new date().toISOString()};
    // feedback.push(newFeedback);
    const result = await feedbackcollection.insertOne(newFeedback);

    return Response.json(result);

    // return Response.json({
    //     // status: 200,
    //     // message: "Feedback submitted successfully",
    //     // data
    //     acknowledged: true,
    //     insertedId: newFeedback.id,
    // });
}