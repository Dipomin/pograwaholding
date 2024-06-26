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
  telephone: number;
  message: string;
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
  message: z.string().min(6, {
    message: "Vous devez saisir un message",
  }),
});

const Contacts = ({}: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();

  //console.log(formSchema);

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    try {
      const response = await fetch("/api/submitForm", {
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
        titlePage="Contacts"
        headerPageImage="/contact-us.png"
        titleDesc="N'hésitez pas à nous contacter pour toutes informations complémentaires."
      />
      <div className="container lg:p-5 text-center text-xl">
        Veuillez remplir le formulaire ci-dessous :
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

          <textarea
            cols={10}
            rows={10}
            className="contactInput mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-900 focus:ring-blue-500 block w-full  rounded-md sm:text-sm focus:ring-1 placeholder:text-base"
            required
            {...register("message")}
            placeholder="Saisissez votre message ici"
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
};

export default Contacts;
