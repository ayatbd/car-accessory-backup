const Title = ({ title, subtitle }: { title: string; subtitle?: string }) => {
  return (
    <div className="text-center lg:my-20 md:my-14 my-10">
      <div className="relative">
        <h1 className="inline-block py-2 px-4 md:text-2xl lg:text-3xl text-[22px] font-kanit font-medium text-white mb-2">
          {title}
        </h1>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-primary-yellow"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-4/12 translate-y-1 w-24 h-0.5 bg-white"></div>
      </div>
      <p className="lg:text-[24px] md:text-[20px] text-[18px] leading-relaxed text-gray-300">
        {subtitle}
      </p>
    </div>
  );
};

export default Title;
