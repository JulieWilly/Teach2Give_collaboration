import { getAllByRole, render, screen} from '@testing-library/react'
import Blogs from "../Blog";
import "@testing-library/jest-dom"; 
import { describe, it, expect } from 'vitest'

describe("Blogs tests", () => {
    it('Renders the blog section title name', () => {
        render(<Blogs/>)
        const blogsTitle = screen.getByRole('heading', { name: /blog/i})
        expect(blogsTitle).toBeInTheDocument()
    })
     it("Renders blog title", () => {
       render(<Blogs />);
       const blogsTitle = screen.getAllByRole("title_");
       expect(blogsTitle).toBeInTheDocument();
     });
})
