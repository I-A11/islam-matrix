import Image from "next/image";
import RealWorldImage from "../../assets/images/real-world.jpeg";

const MatrixHomeHero = () => {
  return (
    <div className="bg-black">
      <div className="">
        <Image
          style={{
            filter: "grayScale(100%)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100vw",
            height: "35rem",
          }}
          src={RealWorldImage}
          alt="world after matrix"
        />
      </div>
    </div>
  );
};
export default MatrixHomeHero;
