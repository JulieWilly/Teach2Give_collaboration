import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Posts from "../post";

describe("Posts Component", () => {
  test("renders the component without crashing", () => {
    render(<Posts />);
  });

  test("renders the correct header", () => {
    render(<Posts />);
    const headerElement = screen.getByText(/Recent posts/i);
    expect(headerElement).toBeInTheDocument();
  });

  test('renders the "View all" link', () => {
    render(<Posts />);
    const viewAllLink = screen.getByRole("link", { name: /View all/i });
    expect(viewAllLink).toBeInTheDocument();
    expect(viewAllLink).toHaveAttribute("href", "#");
  });

  test("renders the first post with correct title ", () => {
    render(<Posts />);
    const firstPostTitle = screen.getByText(
      /Making a design system from scratch/i,
    );
    expect(firstPostTitle).toBeInTheDocument();

    const postMeta = screen.getAllByText(/12 Feb 2020/);
    expect(postMeta[0]).toBeInTheDocument();
    const firstPostMetaDetails = postMeta[0].parentElement.textContent;
    expect(firstPostMetaDetails).toContain("12 Feb 2020 | Design, Pattern");
  });

  test("renders the second post with correct title ", () => {
    render(<Posts />);
    const secondPostTitle = screen.getByText(
      /Creating pixel perfect icons in Figma/i,
    );
    expect(secondPostTitle).toBeInTheDocument();

    const postMeta = screen.getAllByText(/12 Feb 2020/);
    expect(postMeta[1]).toBeInTheDocument();
    const secondPostMetaDetails = postMeta[1].parentElement.textContent;
    expect(secondPostMetaDetails).toContain("12 Feb 2020 | Figma, Icon Design");
  });

  test("renders the first post description", () => {
    render(<Posts />);
    const firstPostDescription = screen.getAllByText(
      /Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet./i,
    )[0];
    expect(firstPostDescription).toBeInTheDocument();
  });

  test("renders the second post description", () => {
    render(<Posts />);
    const secondPostDescription = screen.getAllByText(
      /Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet./i,
    )[1];
    expect(secondPostDescription).toBeInTheDocument();
  });
});
