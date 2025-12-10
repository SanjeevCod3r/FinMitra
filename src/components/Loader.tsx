import logoUrl from '../../asset/logo.png';

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-sky-50 via-white to-blue-50">
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-sky-400 opacity-60 blur-2xl animate-pulse" />
        <div className="relative grid place-items-center w-40 h-40 rounded-full bg-white shadow-2xl border border-gray-100">
          <span className="absolute inset-0 rounded-full border-4 border-transparent [border-top-color:#38bdf8] [border-right-color:#3b82f6] animate-spin" />
          <span className="absolute inset-3 rounded-full border-2 border-sky-200 animate-[spin_2s_linear_infinite_reverse]" />
          <img src={logoUrl} alt="Logo" className="h-14 w-auto drop-shadow" />
        </div>
        <div className="absolute -inset-8 rounded-full animate-ping bg-sky-300/20" />
      </div>
    </div>
  );
}
