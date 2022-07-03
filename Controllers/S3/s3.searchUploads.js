import File from "../../Models/File.js";

export default async function searchUploads(req, res) {
  const { firebaseId, searchTerm } = req.body;

  if (!firebaseId || !searchTerm || searchTerm.length < 3)
    return res.status(400).json({ error: "Provide a valid body" });

  try {
    const files = await File.find({
      firebaseId: firebaseId,
      fileName: { $regex: searchTerm, $options: "i" },
    });

    if (files.length === 0) {
      return res.status(404).json({ error: "Root is empty, No files found" });
    }

    return res.status(200).json(files);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}
