"use client";

// components/ContactForm.js
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenoms: "",
    telephone: "",
    budget: "",
    email: "",
    paiement: "",
    logement: "",
    site: "",
    contenu: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.message);
        // Handle success message or redirect
      } else {
        console.error("Error submitting form:", response.statusText);
        // Handle error message
      }
    } catch (error: unknown) {
      console.error("Error submitting form:", error);
      // Handle error message
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input fields */}
      <div className="flex flex-col gap-3 container">
        <input
          type="text"
          name="nom"
          value={formData.nom}
          onChange={handleChange}
          className=" border-black-100 border-2"
          placeholder="Nom"
        />
        <input
          type="text"
          name="prenoms"
          value={formData.prenoms}
          onChange={handleChange}
          className=" border-black-100 border-2"
          placeholder="Prenoms"
        />
        <input
          type="text"
          name="telephone"
          value={formData.telephone}
          onChange={handleChange}
          className=" border-black-100 border-2"
          placeholder="Téléphone"
        />
        <input
          type="text"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          className=" border-black-100 border-2"
          placeholder="Budget"
        />
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className=" border-black-100 border-2"
          placeholder="Email"
        />
        <input
          type="text"
          name="paiement"
          value={formData.paiement}
          onChange={handleChange}
          className=" border-black-100 border-2"
          placeholder="Paiement"
        />
        <input
          type="text"
          name="logement"
          value={formData.logement}
          onChange={handleChange}
          className=" border-black-100 border-2"
          placeholder="Logement"
        />
        <input
          type="text"
          name="site"
          value={formData.site}
          onChange={handleChange}
          className=" border-black-100 border-2"
          placeholder="Site"
        />
        {/* Other input fields */}
        <button className=" bg-blue-800 text-white" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
