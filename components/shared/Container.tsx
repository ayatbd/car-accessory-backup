const Container = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="max-w-[1300px] lg:px-0 md:px-12 px-10 mx-auto">
      {children}
    </div>
  );
};

export default Container;
