export default function Checkerboard({ className = '' }) {
  return (
    <div
      className={`h-3 w-full bg-checkerboard bg-[length:24px_24px] ${className}`}
      role="presentation"
    />
  )
}
