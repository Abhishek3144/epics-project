import { useState } from "react";

export default function PlantDisease() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
    setResult(null);
  };

  const handlePredict = async () => {
    if (!image) return;

    const formData = new FormData();
    formData.append("file", image);

    setLoading(true);

    try {
      const res = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error(err);
      alert("Server error");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg">

        <h1 className="text-2xl font-bold mb-6 text-center text-green-700">
          🌿 Plant Disease Prediction
        </h1>

        {/* Upload */}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="mb-4"
        />

        {/* Preview */}
        {preview && (
          <img
            src={preview}
            alt="preview"
            className="w-full rounded-lg mb-4"
          />
        )}

        {/* Button */}
        <button
          onClick={handlePredict}
          disabled={loading}
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
        >
          {loading ? "Predicting..." : "Predict Disease"}
        </button>

        {/* Result */}
        {result && (
          <div className="mt-6 text-center">
            <p className="text-lg font-semibold">
              Disease: {result.class}
            </p>
            <p className="text-green-600">
              Confidence: {result.confidence}%
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
