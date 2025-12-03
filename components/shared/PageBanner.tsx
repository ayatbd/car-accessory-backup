import styles from "./shared.module.css";
const PageBanner = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className={`h-48 md:h-60 lg:h-[380px] px-5 lg:px-0 ${styles.banner}`}>
      {/* Content */}
      <div className="max-w-[1300px] mx-auto z-10 h-full flex flex-col items-start justify-center">
        <span className="text-white text-4xl md:text-5xl font-bold">
          {title}
        </span>
        {/* Breadcrumb */}
        <span className="flex items-center gap-2 mt-4 text-white text-lg font-medium">
          <span>Home</span>
          <span className="text-white/60">|</span>
          <span className="text-[#E6C48F]">{subtitle}</span>
        </span>
      </div>
    </div>
  );
};

export default PageBanner;
