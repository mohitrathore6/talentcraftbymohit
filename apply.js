export default async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;
        console.log("Application Received:", data);
        res.status(200).json({ success: true, message: "Application received!" });
    } else {
        res.status(405).json({ message: "Only POST method allowed" });
    }
}