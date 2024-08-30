interface BProps {
  text: string;
}

export default function Button({ text }:BProps) {
  return(
    <button className="outline-none bg-blue-400 font-bold rounded-lg p-4 border">
      {text}
    </button>
  )
}