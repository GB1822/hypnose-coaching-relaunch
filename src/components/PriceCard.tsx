interface PriceCardProps {
  name: string
  price: string
  duration: string
  description: string
  highlighted?: boolean
}

export function PriceCard({ name, price, duration, description, highlighted }: PriceCardProps) {
  return (
    <div className={`rounded-xl border-2 p-6 ${highlighted ? 'bg-white shadow-lg border-[#00b0d0]' : 'bg-white'} relative`}
         style={highlighted ? { borderColor: "#00b0d0", borderWidth: "2px" } : {}}>
      {highlighted && (
        <span className="absolute -top-3 left-6 px-3 py-1 rounded-full text-xs font-medium text-white" style={{ backgroundColor: '#00b0d0' }}>
          Beliebt
        </span>
      )}
      <h3 className="font-semibold text-lg mb-1">{name}</h3>
      <p className="text-3xl font-bold mb-1" style={{ color: '#003060' }}>{price}</p>
      <p className="text-sm text-gray-500 mb-3">{duration}</p>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  )
}
