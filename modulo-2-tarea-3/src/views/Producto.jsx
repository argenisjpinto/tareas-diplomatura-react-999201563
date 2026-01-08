import { useParams, useSearchParams } from 'react-router-dom'

const Producto = () => {
  const { id } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()

  const color = searchParams.get('color') || 'sin color'
  const qty = searchParams.get('qty') || 'sin qty'

  const esVerde = color === 'verde'
  const esRojo = color === 'rojo'

  const toggleColor = () => {
    esVerde? setSearchParams({ color: 'rojo', qty: '1' }) : setSearchParams({ color: 'verde', qty: '5' })
  }

  const getButtonStyle = () => {
    if (esVerde) return 'green'
    if (esRojo) return 'red'
    return 'gray'
  }

  return (
    <>
    <section className='producto'>
      <h2>Producto</h2>
      <p><strong>ID dinámico:</strong> {id}</p>
      <p><strong>Query params:</strong> color={color} | qty={qty}</p>
      <button onClick={toggleColor} style={{backgroundColor: getButtonStyle(), color: 'white',padding: '10px 16px', border: 'none', cursor: 'pointer'}}>{esVerde? 'Ver en rojo' : 'Ver en verde'}</button>
    </section>
    </>
  )
}

export { Producto }