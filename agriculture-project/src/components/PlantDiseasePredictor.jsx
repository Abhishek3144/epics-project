import React, { useState } from "react";

export default function PlantDiseasePredictor() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFile = (selected) => {
    setFile(selected);
    setPreview(URL.createObjectURL(selected));
    setResult(null);
    setError("");
  };

  const handleChange = (e) => {
    handleFile(e.target.files[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    handleFile(e.dataTransfer.files[0]);
  };

  const handlePredict = async () => {
    if (!file) return;

    setLoading(true);
    setError("");
    setResult(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error();

      const data = await res.json();
      setResult(data);
    } catch {
      setError("Prediction failed. Check backend server.");
    }

    setLoading(false);
  };

  const reset = () => {
    setFile(null);
    setPreview(null);
    setResult(null);
    setError("");
  };

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-6">

      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg text-center">

        <h1 className="text-3xl font-bold text-green-700 mb-6">
          🌿 Plant Disease Detector
        </h1>

        {/* Upload Area */}
        <div
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          className="border-2 border-dashed border-green-300 rounded-xl p-6 mb-4 cursor-pointer hover:bg-green-50 transition"
        >
          <input
            type="file"
            accept="image/*"
            onChange={handleChange}
            className="hidden"
            id="upload"
          />

          <label htmlFor="upload" className="cursor-pointer">
            📂 Click or Drag & Drop Leaf Image
          </label>
        </div>

        {/* Preview */}
        {preview && (
          <img
            src={preview}
            alt="preview"
            className="mx-auto h-48 rounded-lg shadow mb-4 object-cover"
          />
        )}

        {/* Buttons */}
        <div className="flex gap-3 justify-center">
          <button
            onClick={handlePredict}
            disabled={loading}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition"
          >
            {loading ? "Analyzing..." : "Predict"}
          </button>

          {preview && (
            <button
              onClick={reset}
              className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-lg"
            >
              Reset
            </button>
          )}
        </div>

        {/* Loading */}
        {loading && (
          <div className="mt-4 animate-pulse text-gray-500">
            🔍 Checking leaf health...
          </div>
        )}

        {/* Result */}
        {result && (
          <div className="mt-6 bg-green-100 rounded-xl p-4 shadow-inner">

            <h2 className="text-lg font-semibold text-green-800">
              Disease: {result.class}
            </h2>

            <p className="mt-2 text-sm text-gray-700">
              Confidence: {result.confidence}%
            </p>

            <div className="w-full bg-gray-300 h-3 rounded-full mt-2">
              <div
                className="bg-green-600 h-3 rounded-full"
                style={{ width: `${result.confidence}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Error */}
        {error && (
          <p className="text-red-500 mt-4">{error}</p>
        )}

      </div>
    </div>
  );
}
