const Container = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="max-w-[1300px] mx-auto">{children}</div>;
};

export default Container;
