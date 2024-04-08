"use client";

import Footer from "@/components/footer";
import HeaderPage from "@/components/header-page";
import PageMenu from "@/components/page-menu";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import HeaderMobile from "@/components/HeaderMobile";
import axios from "axios";

type Inputs = {
  nom: string;
  prenoms: string;
  email: string;
  logement: string;
  site: string;
  telephone: number;
  budget: string;
  paiement: string;
};

type Props = {};

const formSchema = z.object({
  nom: z
    .string()
    .min(2, {
      message: "Le champ doit contenir un minimum de 2 caractères.",
    })
    .max(60),
  prenoms: z
    .string()
    .min(2, {
      message: "Le champ doit contenir un minimum de 2 caractères.",
    })
    .max(110),
  email: z.string().min(6, {
    message: "Le champ doit contenir une adresse email valide.",
  }),
  telephone: z.number().min(8, {
    message: "Le champ doit contenir un numéro de téléphone valide.",
  }),
  budget: z.number().min(4, {
    message: "Vous devez saisir un montant",
  }),
});

export default function Reservation({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();

  //console.log(formSchema);

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    console.log(formData);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json;

      if (response.ok) {
        console.log("Formulaire soumis avec succès");
      } else {
        console.log("Erreur lors de la soumission du formulaire");
      }
    } catch (error) {
      console.log(
        "Erreur inattendue lors de la soumission du formulaire:",
        error
      );
    }
    toast({
      variant: "destructive",
      title: "Message envoyé",
      description: "Votre message a été envoyé avec succès.",
    });
  };

  console.log(onSubmit);

  /**   function onSubmit(formData) {
    console.log(data);

    axios
      .post("/api/send", {
        data,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    toast({
      variant: "destructive",
      title: "Message envoyé",
      description: "Votre message a été envoyé avec succès.",
    });
  }
*/

  return (
    <div>
      <div className="hidden lg:block">
        <PageMenu />
      </div>
      <div className="lg:hidden block">
        <HeaderMobile />
      </div>
      <HeaderPage
        titlePage="Réserver une villa"
        headerPageImage="/reserver.png"
        titleDesc="Réservez votre villa dès maintenant , un conseil client vous contactera dans les plus brefs délais."
      />
      <div className="container lg:p-5 text-center text-xl">
        Veuillez remplir le formulaire ci-dessous pour réserver votre villa :
      </div>
      <div className="lg:container p-3 lg:pt-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-y-4"
        >
          <input
            type="text"
            className="contactInput mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-blue-500 block w-full h-10 rounded-lg sm:text-sm focus:ring-1 placeholder:text-base"
            required
            {...register("nom")}
            placeholder="Votre nom"
          />

          <input
            type="text"
            className="contactInput mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-blue-500 block w-full h-10 rounded-md sm:text-sm focus:ring-1 placeholder:text-base"
            required
            {...register("prenoms")}
            placeholder="Votre prénom"
          />

          <input
            type="Phone"
            className="contactInput mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-blue-500 block w-full h-10 rounded-md sm:text-sm focus:ring-1 placeholder:text-base"
            required
            {...register("telephone")}
            placeholder="Votre Téléphone"
          />

          <input
            type="email"
            className="contactInput mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-900 focus:ring-blue-500 block w-full h-10 rounded-md sm:text-sm focus:ring-1 placeholder:text-base"
            required
            {...register("email")}
            placeholder="vous@email.com"
          />
          <input
            type="text"
            className="contactInput mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-900 focus:ring-blue-500 block w-full h-10 rounded-md sm:text-sm focus:ring-1 placeholder:text-base"
            required
            {...register("logement")}
            placeholder="Type de logement"
          />
          <input
            type="text"
            className="contactInput mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-900 focus:ring-blue-500 block w-full h-10 rounded-md sm:text-sm focus:ring-1 placeholder:text-base"
            required
            {...register("site")}
            placeholder="Site"
          />
          <input
            type="budget"
            className="contactInput mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-900 focus:ring-blue-500 block w-full h-10 rounded-md sm:text-sm focus:ring-1 placeholder:text-base"
            required
            {...register("budget")}
            placeholder="Votre budget"
          />
          <input
            type="text"
            className="contactInput mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-900 focus:ring-blue-500 block w-full h-10 rounded-md sm:text-sm focus:ring-1 placeholder:text-base"
            required
            {...register("paiement")}
            placeholder="Mode de paiement"
          />

          <button className="text-white bg-[#f17c28] border-2 border-cyan-500-300 font-bold rounded-lg text-sm  pr-5 pl-5 pt-3 pb-3 hover:bg-blue-800">
            ENVOYER
          </button>
        </form>
      </div>
      ;
      <Footer />
    </div>
  );
}
