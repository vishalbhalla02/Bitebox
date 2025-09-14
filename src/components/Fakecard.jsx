function Fakecard() {
  return (
    <div className="flex w-full max-w-40 animate-pulse flex-col justify-between rounded-xl bg-slate-300 p-4 shadow-lg sm:max-w-60 md:max-w-72">
      {/* Image placeholder */}
      <div className="h-40 w-full rounded-lg bg-slate-400 sm:h-48 md:h-56"></div>

      {/* Title placeholder */}
      <div className="mt-2 h-6 w-3/4 rounded bg-slate-400"></div>

      {/* Subtitle placeholder */}
      <div className="mt-1 h-4 w-1/2 rounded bg-slate-400"></div>

      {/* Footer row */}
      <div className="mt-1 flex items-center justify-between">
        <div className="h-4 w-10 rounded bg-slate-400"></div>
        <div className="h-4 w-12 rounded bg-slate-400"></div>
      </div>
    </div>
  );
}

export default Fakecard;
