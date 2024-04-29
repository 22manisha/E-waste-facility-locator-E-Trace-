import React from "react";
import { ImHeadphones } from "react-icons/im";
import { GiSmartphone } from "react-icons/gi";
import { PiTelevisionFill } from "react-icons/pi";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { GiLaptop } from "react-icons/gi";
import { TbDevicesPlus } from "react-icons/tb";
import Link from "next/link";

interface RecycleCardProps {
  itemName: string;
  description: string;
  recyclingProcess: string;
  specialInstructions: string;
  icon: React.ReactNode;
}

const Recycle: React.FC = () => {
  const recycleItems: RecycleCardProps[] = [
    {
      itemName: "Laptop",
      description: "Get rid of your old laptops in a sustainable manner.",
      recyclingProcess:
        "We follow environmental regulations in our recycling procedure.",
      specialInstructions: "Kindly take out the batteries before recycling.",
      icon: <GiLaptop size={48} />,
    },
    {
      itemName: "Smartphone",
      description: "Dispose of your old smartphones properly.",
      recyclingProcess:
        "We guarantee the appropriate disassembly and recycling of electronic parts.",
      specialInstructions:
      "Make sure to erase any personal information before recycling.",
      icon: <GiSmartphone size={48} />,
    },
    {
      itemName: "Accessories",
      description: "Recycle different kinds of electrical accessories in an appropriate way.",
      recyclingProcess:
        "For every accessory, we separate and recycle several materials.",
      specialInstructions: "Before letting go, bundle the cables.",
      icon: <ImHeadphones size={48} />,
    },
    {
      itemName: "Refrigerator",
      description: "Environmentally responsible refrigerator disposal.",
      recyclingProcess:
      "Refrigerants and other components should be removed and recycled safely.",
      specialInstructions:"Before recycling, make sure the refrigerator is defrosted.",
      icon: <CgSmartHomeRefrigerator size={48} />,
    },
    {
      itemName: "Television",
      description: "Disposed of outdated televisions in an environmentally responsible manner.",

      recyclingProcess:
        "Removing hazardous materials with care to reduce their influence on the environment.",
      specialInstructions:
        "For appropriate recycling, bring power cords and remote controllers..",
      icon: <PiTelevisionFill size={48} />,
    },
    {
      itemName: "Other",
      description: "Recycling other electronics in an appropriate manner.",
      recyclingProcess:
      "Correct disassembly and recycling of electrical and metal components.",

      specialInstructions: "Make sure it isn't functional before recycling.",

      icon: <TbDevicesPlus size={48} />,
    },
  ];

  return (
    <div className="section container">
      <h2 className="text-4xl text-center md:text-left font-bold mb-4" style={{ color: 'rgb(0%, 40%, 58%)' }}>
  Recycle Center
</h2>

      <div className="grid grid-cols-1 md:grid-cols-3">
        {recycleItems.map((item, index) => (
          <RecycleCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

const RecycleCard: React.FC<RecycleCardProps> = ({
  itemName,
  description,
  recyclingProcess,
  specialInstructions,
  icon,
}) => {
  return (
    <div className="p-4 m-4 bg-white shadow-lg rounded-md">
      <div className="flex justify-center items-center mb-2">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{itemName}</h3>
      <p className="text-gray-600">{description}</p>
      <p className="text-gray-600">{recyclingProcess}</p>
      <p className="text-gray-600">{specialInstructions}</p>
      <Link
        href={`/recycle/${itemName.toLowerCase()}`}
        className="btn-md btn-primary mt-2"
      >
        Recycle Now
      </Link>
    </div>
  );
};

export default Recycle;
