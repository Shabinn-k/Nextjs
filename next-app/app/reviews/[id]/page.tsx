export default function DynamicRoute({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Review ID: {params.id}</h1>
    </div>
  )
}