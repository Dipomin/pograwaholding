import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  const blogArticle = [
    {
      idArticle: 0,
      articlePict: "/maison.jpg",
      blogTitle: "5 conseils pour acheter un bien immobilier en Côte d'Ivoire",
      articleLink: "comment-acheter-un-bien-immolier-en-cote-ivoire",
    },
    {
      idArticle: 1,
      articlePict: "/ascenseur.jpg",
      blogTitle:
        "Les ascenseurs : un élément essentiel pour la ville intelligente de demain",
      articleLink: "comment-acheter-un-bien-immolier-en-cote-ivoire",
    },
    {
      idArticle: 2,
      articlePict: "/minier.jpg",
      blogTitle:
        "Comment l'industrie minière peut contribuer au développement durable",
      articleLink:
        "comment-l-industrie-miniere-peut-contribuer-au-développement-durable",
    },
  ];

  return (
    <section className="pb-24">
      <h2 className="text-4xl font-bold text-center my-16">Blog</h2>
      <div className="grid grid-cols-1 place-items-center lg:flex justify-center">
        {blogArticle.map((article) => (
          <div
            key={article.idArticle}
            className="w-[300px] border-2 border-blue-800 lg:mx-4 my-4 hover:underline"
          >
            <Link href={article.articleLink}>
              <div>
                <Image
                  src={article.articlePict}
                  width={300}
                  height={300}
                  alt="Pograwa Holding"
                />
              </div>
              <div className="text-xl font-bold p-3">{article.blogTitle}</div>
            </Link>
            <Button variant={"orange"}>Lire la suite {"•"}</Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
