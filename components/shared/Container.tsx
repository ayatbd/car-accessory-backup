const Container = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="max-w-[1300px] mx-auto overflow-hidden">{children}</div>
  );
};

export default Container;
