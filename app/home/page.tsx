
export default function Page() {
  /// TODO: move these a tags into a component so they are reusable
  /// TODO: pass in an [active] parameter so that we can work out from the current url path if that page is active or not
  /// TODO: display this nav bar on all pages
  return (
    <body >
      <div className="bg-white overflow-hidden" >
        <a className="text-black p-4 text-center float-left hover:bg-slate-600 hover:text-white hover:cursor-pointer bg-green-500 ">Home</a>
        <a className="text-black p-4 text-center float-left hover:bg-slate-600 hover:text-white hover:cursor-pointer">Blog</a>
        <a className="text-black p-4 text-center float-left hover:bg-slate-600 hover:text-white hover:cursor-pointer">News</a>
        <a className="text-black p-4 text-center float-left hover:bg-slate-600 hover:text-white hover:cursor-pointer">Contact</a>
      </div>
    </body>
  );
}