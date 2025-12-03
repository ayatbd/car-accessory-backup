const Title = ({ title, subtitle }: { title: string; subtitle?: string }) => {
  return (
    <div className="text-center lg:my-20 md:my-14 my-10">
      <div>
        <h1 className="md:text-2xl lg:text-3xl text-[22px] font-kanit font-medium text-white mb-5">
          {title}
        </h1>
      </div>
      <p className="lg:text-[24px] md:text-[20px] text-[18px] leading-relaxed text-gray-300">
        {subtitle}
      </p>
    </div>
  );
};

export default Title;
