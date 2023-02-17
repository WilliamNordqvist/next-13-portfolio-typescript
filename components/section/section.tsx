export const Section = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" p-5 sm:p-0 text-white min-h-screen flex items-center justify-center font-thin ">
      {children}
    </div>
  );
};
