const Title = ({ title, subtitle }: { title: string; subtitle?: string }) => {
  return (
    <div className="text-center my-20">
      <h1 className="text-3xl md:text-3xl font-kanit font-medium text-white">
        {title}
      </h1>
      <p className="text-[24px] leading-relaxed text-gray-300">{subtitle}</p>
    </div>
  );
};

export default Title;
