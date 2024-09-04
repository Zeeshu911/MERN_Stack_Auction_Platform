import React from "react";

const About = () => {
  const values = [
    {
      id: 1,
      title: "Integrity",
      description:
        "We prioritize honesty and transparency in all our dealings, ensuring a fair and ethical auction experience for everyone.",
    },
    {
      id: 2,
      title: "Innovation",
      description:
        "We continually enhance our platform with cutting-edge technology and features to provide users with a seamless and efficient auction process.",
    },
    {
      id: 3,
      title: "Community",
      description:
        "We foster a vibrant community of buyers and sellers who share a passion for finding and offering exceptional items.",
    },
    {
      id: 4,
      title: "Customer Focus",
      description:
        "We are committed to providing exceptional customer support and resources to help users navigate the auction process with ease.",
    },
  ];

  return (
    <>
      <section className="w-full ml-0 m-0 h-fit px-5 pt-20 lg:pl-[320px] gap-7 flex flex-col min-h-screen py-4 justify-center">
        <div>
          <h1
            className={`text-[#d6482b] text-2xl font-bold mb-2 min-[480px]:text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl`}
          >
            About Us
          </h1>
          <p className="text-xl text-stone-600">
            Welcome to PrimeBid, the ultimate destination for online auctions
            and bidding excitement. Founded in 2024, we are dedicated to
            providing a dynamic and user-friendly platform for buyers and
            sellers to connect, explore, and transact in a secure and seamless
            environment.
          </p>
        </div>
        <div>
          <h3
            className={`text-[#111] text-xl font-semibold mb-2 min-[480px]:text-xl md:text-2xl lg:text-3xl`}
          >
            Our Mission
          </h3>
          <p className="text-xl text-stone-600">
            At PrimeBid, our mission is to revolutionize the way people buy and
            sell items online. We strive to create an engaging and trustworthy
            marketplace that empowers individuals and businesses to discover
            unique products, make informed decisions, and enjoy the thrill of
            competitive bidding.
          </p>
        </div>
        <div>
          <h3
            className={`text-[#111] text-xl font-semibold mb-2 min-[480px]:text-xl md:text-2xl lg:text-3xl`}
          >
            Our Values
          </h3>
          <ul className="list-inside">
            {values.map((element) => {
              return (
                <li className="text-xl text-stone-600 mb-2" key={element.id}>
                  <span className="text-black font-bold">{element.title}</span>:{" "}
                  {element.description}
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h3
            className={`text-[#111] text-xl font-semibold mb-2 min-[480px]:text-xl md:text-2xl lg:text-3xl`}
          >
            Our Story
          </h3>
          <p className="text-xl text-stone-600">
            Founded by CodeWithZeeshu, PrimeBid was born out of a passion for
            connecting people with unique and valuable items. With years of
            experience in the auction industry, our team is committed to
            creating a platform that offers an unparalleled auction experience
            for users worldwide.
          </p>
        </div>
        <div>
          <h3
            className={`text-[#111] text-xl font-semibold mb-2 min-[480px]:text-xl md:text-2xl lg:text-3xl`}
          >
            Join Us
          </h3>
          <p className="text-xl text-stone-600">
            Whether you're looking to buy, sell, or simply explore, PrimeBid
            invites you to join our growing community of auction enthusiasts.
            Discover new opportunities, uncover hidden gems, and experience the
            thrill of winning your next great find.
          </p>
        </div>
        <div>
          <p className="text-[#d6482b] text-xl font-bold mb-3">
            Thank you for choosing PrimeBid. We look forward to being a part of
            your auction journey!
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
