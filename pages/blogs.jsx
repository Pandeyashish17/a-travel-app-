import React from "react";
import HeadSection from "../components/HeadSection";
import { sanityClient, urlFor } from "../sanity";

const services = ({ posts }) => {
  return (
    <>
      <HeadSection title="Blogs" />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Our Services
            </h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              exercitationem incidunt minima soluta ab molestiae placeat
              temporibus nesciunt eius earum!
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {posts.map((post) => {
              return (
                <div className="xl:w-1/3 md:w-1/2 p-4 " key={post.id}>
                  <div className="border border-gray-200 p-6 rounded-lg">
                    {post.mainImage ? (
                      <img src={urlFor(post.mainImage).url()} />
                    ) : null}
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                      {post.title}
                    </h2>
                    <p className="leading-relaxed text-base line-clamp-5">
                      {post.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            See More
          </button>
        </div>
      </section>
    </>
  );
};

export const getServerSideProps = async () => {
  const query = `
*[_type=="post"]{
  _id,title,slug,excerpt,mainImage,description,
  author->{
  name,image
}
}
`;
  const posts = await sanityClient.fetch(query);
  return {
    props: {
      posts,
    },
  };
};

export default services;
