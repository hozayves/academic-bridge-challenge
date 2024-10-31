import { describe, it, expect, vi, beforeEach, afterEach } from "vitest"
import { showToast } from "../../src/utils/toast"
import "@testing-library/jest-dom"

describe("showToast utility", () => {
  beforeEach(() => {
    document.body.innerHTML = ""
  })

  afterEach(() => {
    vi.clearAllTimers()
  })

  it("should create a toast element with the correct message", () => {
    const message = "Test message"
    showToast(message)

    const toastElement = document.querySelector(".toast")
    expect(toastElement).toBeTruthy()
    expect(toastElement?.textContent?.trim()).toBe(message)
  })

  it("should create an info toast by default", () => {
    showToast("Test message")

    const alertElement = document.querySelector(".alert")
    expect(alertElement).toHaveClass("alert-info")
  })

  it("should create a success toast when specified", () => {
    showToast("Success message", "success")

    const alertElement = document.querySelector(".alert")
    expect(alertElement).toHaveClass("alert-success")
  })

  it("should create an error toast when specified", () => {
    showToast("Error message", "error")

    const alertElement = document.querySelector(".alert")
    expect(alertElement).toHaveClass("alert-error")
  })

  it("should remove toast after 3 seconds", () => {
    vi.useFakeTimers()
    showToast("Test message")

    expect(document.querySelector(".toast")).toBeTruthy()

    vi.advanceTimersByTime(3000)

    expect(document.querySelector(".toast")).toBeFalsy()

    vi.useRealTimers()
  })
})
