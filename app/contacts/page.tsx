"use client";

import Footer from "@/components/footer";
import HeaderPage from "@/components/header-page";
import PageMenu from "@/components/page-menu";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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

interface TemplateEmailProps {
  nom: string;
  prenoms: string;
  email: string;
  message: string;
}

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
  email: z
    .string()
    .min(6, {
      message: "Le champ doit contenir une adresse email valide.",
    })
    .email("Votre adresse email est invalide."),
  message: z.string().min(6, {
    message: "Vous devez saisir un message",
  }),
});

const Contacts = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nom: "Votre nom",
      prenoms: "Votre prénoms",
      email: "@",
      message: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
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
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="nom"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="prenoms"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Prénoms</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Adresse email</FormLabel>
                  <FormControl>
                    <Input required {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Votre message</FormLabel>
                  <FormControl>
                    <Textarea required {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" variant={"orange"}>
              Envoyer
            </Button>
          </form>
        </Form>
      </div>
      ;
      <Footer />
    </div>
  );
};

export default Contacts;
