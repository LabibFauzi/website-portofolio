export default function Footer() {
  return (
    <footer className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-3 px-4 py-8 text-center sm:px-6 mt-20">
      <p className="text-sm sm:text-xs">
        @2026 labib fauzi | website portofolio
      </p>
      <p className="flex flex-wrap items-center justify-center gap-2 text-[10px] sm:text-xs">
        create with
        <span className="inline-flex h-4 w-4">
          <img src="/icons/heart.svg" alt="heart" className="h-full w-full object-contain" />
        </span>
        using nextjs . look at my
        <span className="inline-flex h-4 w-4">
          <img src="/icons/code.svg" alt="code" className="h-full w-full object-contain" />
        </span>
        on github
      </p>
    </footer>
  );
}
