import useFetch from "../hooks/useFetch"

function CustomHookExample1() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
    {}
  )
  console.log(data)

  if (loading) {
    return <h3>Loading...</h3>
  }

  if (!data.length || error) {
    return (
      <>
        <h3>Error</h3>
        {error}
      </>
    )
  }

  return (
    <div>
      {data.map((post) => (
        <h3 key={post.id}>{post.title}</h3>
      ))}
    </div>
  )
}

export default CustomHookExample1
