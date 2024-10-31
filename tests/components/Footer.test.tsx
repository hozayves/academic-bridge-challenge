import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import Footer from "../../src/components/rootComponents/Footer"

describe("Footer", () => {
  it("renders footer text correctly", () => {
    render(<Footer />)
    expect(screen.getByRole("contentinfo")).toBeInTheDocument()
  })

  it("contains the copyright text", () => {
    render(<Footer />)

    const currentYear = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`${currentYear}`))).toBeInTheDocument()
  })

  it("has the correct styling", () => {
    render(<Footer />)
    const footer = screen.getByRole("contentinfo")

    expect(footer).toHaveClass("w-full", "flex", "p-2", "bg-indigo-50")
  })
})
