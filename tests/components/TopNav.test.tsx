import React from "react"
import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import TopNav from "../../src/components/rootComponents/TopNav"
import { BrowserRouter } from "react-router-dom"

describe("TopNav", () => {
  const renderWithRouter = (component: React.ReactNode) => {
    return render(<BrowserRouter>{component}</BrowserRouter>)
  }

  it("renders navigation bar", () => {
    renderWithRouter(<TopNav />)
    const nav = screen.getByRole("navigation")
    expect(nav).toBeInTheDocument()
  })

  it("contains search input", () => {
    renderWithRouter(<TopNav />)
    const searchInput = screen.getByPlaceholderText("nav.search")
    expect(searchInput).toBeInTheDocument()
  })
})
