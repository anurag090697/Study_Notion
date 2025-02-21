
export const createNewCourse = async (req, res) => {
    try {
        const { userId, title, description } = req.body;
    } catch (error) {
        res.status(500).json({ message: "", error: error });
    }
}