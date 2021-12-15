import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <footer>&copy; testing footer boss</footer>
    </div>
  )
}

export default MyApp
