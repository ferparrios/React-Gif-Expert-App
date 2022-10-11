import { render, screen } from "@testing-library/react"
import { GifItems } from "../../src/components/GifItems"

describe('Pruebas en el <GifItems />', () => {

    const title = 'Saitama'
    const url = 'https://saitama.com/saitama.jpg'

    test('debe de hacer match con el snapshot', () => {
        const {container} = render(
            <GifItems title={title} url={url} />
        )
        expect(container).toMatchSnapshot()
    })

    test('Mostrar la imagen con el url y el alt indicado', () => { 
        render(<GifItems title={title}  url={url} />)
        // screen.debug()
        // expect(screen.getByRole('img').src).toBe(url)
        // expect(screen.getByRole('img').alt).toBe(title)
        const { src, alt } = screen.getByRole('img')
        expect(src).toBe(url)
        expect(alt).toBe(title)
     })

     test('debe de mostra el titulo en el componente', () => { 
        render(<GifItems title={title} url={url} />)
        expect(screen.getByText(title)).toBeTruthy()
      })
})