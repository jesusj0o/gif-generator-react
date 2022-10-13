import { render, screen } from "@testing-library/react";
import GifItem from "../../src/components/GifItem";

describe('Test en <GifItem />', () => {
    const title = "star wars"; 
    const url = "https://star-wars.com/yoda.jpg";
    test('should math with its snapshot', () => {
       const { container } = render(<GifItem title={title} url={url} />);
       expect(container).toMatchSnapshot();
    });

    test('should show the image with the indicated URL and ALT ', () => {
        render(<GifItem title={title} url={url}/>); 
        //screen.debug();
        // expect(screen.getByRole('img').src).toBe(url);
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url); 
        expect(alt).toBe(title);
    });

    test('should show the title in a component', () => {
        render(<GifItem title={title} url={url} />); 
        expect(screen.getByText(title)).toBeTruthy()
    });
});