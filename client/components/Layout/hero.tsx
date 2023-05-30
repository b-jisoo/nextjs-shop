import Image from "next/image";
import React from "react";
import heroImage from "../../public/hero_image.png";

type Props = {};

const Hero = (props: Props) => {
  const handleClick = () => {
    window.scrollTo({ top: 800, behavior: "smooth" });
  };
  return (
    <div>
      <div
        className=" w-screen min-w-[1200px] my-auto object-fill bg-cover bg-center min-h-[800px] "
        style={{
          backgroundImage: `url(${heroImage.src})`,
          width: "100%",
          height: "100%",
        }}
      >
        <div className="flex flex-col text-white  px-20 justify-center min-h-[800px]">
          <div className="text-3xl">신규 제품 추가!</div>
          <div className="text-5xl font-bold mt-6">깜짝 번개 특가 세일</div>
          <div className="text-2xl mt-12">
            망설이면 품절, 아울렛 인기제품을 놓치지 마세요
          </div>
          <button
            onClick={handleClick}
            className="bg-white text-black hover:bg-gray-700 font-bold py-2 px-4 rounded-full mt-12 w-28 h-11"
          >
            구매하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
