"use client";

import { useState } from "react";

interface FormData {
  area: string;
  severity: string;
  email: string;
  summary: string;
  description: string;
  steps: string;
  reproducible: boolean;
}

interface Errors {
  email?: string;
  summary?: string;
  description?: string;
  steps?: string;
  area?: string;
  severity?: string;
}

export default function DefectForm() {
  const [formData, setFormData] = useState<FormData>({
    area: "frontend",
    severity: "low",
    email: "",
    summary: "",
    description: "",
    steps: "",
    reproducible: false,
  });

  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
    const { name, value, type } = target;
    const checked = target instanceof HTMLInputElement && target.type === "checkbox" ? target.checked : false;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    // validateField(name, value);
  };

  const validateField = (name: string, value: string) => {
    let error = "";
    if (name === "email" && !value.includes("@")) error = "Invalid email format";
    if (name === "summary" && value.trim().length < 5) error = "Summary must be at least 5 characters";
    if (name === "description" && value.trim().length < 10) error = "Description must be at least 10 characters";
    if (name === "steps" && value.trim().length < 10) error = "Steps to reproduce must be at least 10 characters";
    if ((name === "area" || name === "severity") && !value) error = "This field is required";
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const validate = (): boolean => {
    const newErrors: Errors = {};
    ["email", "summary", "description", "steps", "area", "severity"].forEach((field) => {
      validateField(field as keyof FormData, formData[field as keyof FormData]?.toString());
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Submitted", formData);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4 w-full">
      <div className="max-w-xl w-full p-8 bg-white dark:bg-gray-800 shadow-lg rounded-xl">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Submit a Defect</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
        <div>
            <label className="block text-sm font-medium text-gray-900 dark:text-gray-300">Area</label>
            <select
              name="area"
              value={formData.area}
              onChange={handleChange}
              onBlur={(e) => validateField(e.target.name, e.target.value)}
              className={`w-full p-2 border rounded-lg text-gray-900 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 ${errors.area ? "border-red-500" : "border-gray-300"}`}
              required
            >
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
              <option value="database">Database</option>
            </select>
            {errors.area && <p className="text-red-500 text-sm">{errors.area}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 dark:text-gray-300">Severity</label>
            <select
              name="severity"
              value={formData.severity}
              onChange={handleChange}
              onBlur={(e) => validateField(e.target.name, e.target.value)}
              className={`w-full p-2 border rounded-lg text-gray-900 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 ${errors.severity ? "border-red-500" : "border-gray-300"}`}
              required
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
            {errors.severity && <p className="text-red-500 text-sm">{errors.severity}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={(e) => validateField(e.target.name, e.target.value)}
              className={`w-full p-2 border rounded-lg text-gray-900 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 ${errors.email ? "border-red-500" : "border-gray-300"}`}
              required
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 dark:text-gray-300">Summary</label>
            <input
              type="text"
              name="summary"
              value={formData.summary}
              onChange={handleChange}
              onBlur={(e) => validateField(e.target.name, e.target.value)}
              className={`w-full p-2 border rounded-lg text-gray-900 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 ${errors.summary ? "border-red-500" : "border-gray-300"}`}
              required
            />
            {errors.summary && <p className="text-red-500 text-sm">{errors.summary}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 dark:text-gray-300">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              onBlur={(e) => validateField(e.target.name, e.target.value)}
              className={`w-full p-2 border rounded-lg text-gray-900 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 ${errors.description ? "border-red-500" : "border-gray-300"}`}
              required
            />
            {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 dark:text-gray-300">Steps to Reproduce</label>
            <textarea
              name="steps"
              value={formData.steps}
              onChange={handleChange}
              onBlur={(e) => validateField(e.target.name, e.target.value)}
              className={`w-full p-2 border rounded-lg text-gray-900 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 ${errors.steps ? "border-red-500" : "border-gray-300"}`}
              required
            />
            {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 font-semibold dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}