
export default function Header() {
  return (
    <header className="bg-base-200 p-2 flex flex-row justify-between">
      <h1 className="text-4xl font-bold">Basic Dashboard</h1>
      <nav className="flex flex-row gap-2">
        <a href="#" className="btn btn-ghost btn-sm">Home</a>
        <a href="#" className="btn btn-ghost btn-sm">About</a>
        <a href="#" className="btn btn-ghost btn-sm">Contact</a>
      </nav>
    </header>
  )
}   