import BgImage from '../assets/images/bg.svg';

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <main
      className="min-h-screen w-full flex justify-center items-center md:py-8 md:px-2"
      style={{
        background: `no-repeat fixed center / cover url(${BgImage}), #10b981`,
      }}
    >
      <div className="w-full md:max-w-screen-sm py-16 md:py-8 px-6 shadow-md md:rounded-2xl bg-white text-gray-700 flex flex-col">
        <div className="h-full w-full max-w-sm mx-auto flex flex-col">
          {children}
        </div>
      </div>
    </main>
  );
};
