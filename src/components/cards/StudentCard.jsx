import Image from 'next/image';
import Button from '../atoms/Button';

const StudentCard = ({ image, name }) => {
  return (
    <div className="bg-[#FBF9F6] rounded-lg overflow-hidden pb-5">
      <Image
        src={image}
        alt={name}
        width={400}
        height={300}
        className="w-full h-[70%] object-cover rounded-t-lg"
      />
      <p className="text-2xl text-center py-3 font-bold text-[#FF7043]">{name}</p>
      <div className="flex justify-center mb-4 md:mb-10">
        <Button className="w-[150px]" text="View details" />
      </div>
    </div>
  );
};

export default StudentCard;
