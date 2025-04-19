function countdown(targetDate) {
	const el = document.getElementById('countdown')
	function pad(n) {
		return n < 10 ? `0${n}` : n
	}

	function update() {
		const now = new Date()
		let diff = Math.max((targetDate - now) / 1000, 0)

		if (diff <= 0) {
			el.innerHTML = `<span>É HOJE! 🚀</span>`
			return
		}

		const days = Math.floor(diff / (3600 * 24))
		diff -= days * (3600 * 24)
		const hours = Math.floor(diff / 3600)
		diff -= hours * 3600
		const minutes = Math.floor(diff / 60)
		const seconds = Math.floor(diff - minutes * 60)

		el.innerHTML = `
      <div>
        <strong>${pad(days)}</strong><span>dias</span>
      </div>
      <div>
        <strong>${pad(hours)}</strong><span>h</span>
      </div>
      <div>
        <strong>${pad(minutes)}</strong><span>min</span>
      </div>
      <div>
        <strong>${pad(seconds)}</strong><span>s</span>
      </div>
    `
	}
	update()
	setInterval(update, 1000)
}

countdown(new Date('2025-06-02T19:00:00'))
