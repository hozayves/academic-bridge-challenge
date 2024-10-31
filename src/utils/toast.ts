type ToastType = "success" | "error" | "info"

export const showToast = (message: string, type: ToastType = "info") => {
  const toast = document.createElement("div")
  toast.innerHTML = `
        <div class="toast">
            <div class="alert alert-${type}">
                <span>${message}</span>
            </div>
        </div>
    `
  document.body.appendChild(toast)

  setTimeout(() => {
    toast.remove()
  }, 3000)
}
