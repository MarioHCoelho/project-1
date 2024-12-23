import { render, screen } from "@testing-library/react"
import { Posts } from "."


const props = {
    posts:
    [
        {
        id:1,
        title:'title 1',
        body: 'body 1',
        cover: 'img/img1.png'
        },
        {
        id:2 ,
        title:'title 2 ',
        body: 'body 2',
        cover: 'img/img2.png'
        },
        {
        id:3,
        title:'title 3',
        body: 'body 3',
        cover: 'img/img3.png'
        }
        
    ]
}

describe ('<Posts/>', () => {
    it('should render posts', () => {
        render (<Posts{...props}/>);

        expect(screen.getAllByRole('heading', {name:/title/i}))
        .toHaveLength(4);
        expect(screen.getAllByRole('img', {name:/title/i}))
        .toHaveLength(4);
        expect(screen.getAllByRole(/body/i))
        .toHaveLength(4);

    })
    describe ('<Posts/>', () => {
        it('should not match snapshot', () => {
            expect (screen.queryAllByRole('heading', {name: /title/i }))
            .toHaveLength(0)
        })
        it('should match snapshot', () => {
            const {container} = render (<Posts {...Posts}/>);
            expect (container.firstChild).toMatchSnapshot();
        })
})})