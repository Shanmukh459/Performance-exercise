export function slowCountItems(data, ms) {
    const wakeUpTime = Date.now() + ms
    while (Date.now() < wakeUpTime) {}
    return data.length
}