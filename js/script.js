const Clock = {
    getTime() {
        const now = new Date();
        return {
            hours: this.formatTime(now.getHours()),
            minutes: this.formatTime(now.getMinutes()),
            seconds: this.formatTime(now.getSeconds())
        };
    },
    render: function() {
        const container = document.querySelector(".container");
        container.textContent = `${this.getTime().hours}:${this.getTime().minutes}:${this.getTime().seconds}`;
    },
    formatTime: function(unit) {
        return unit.toString().padStart(2, '0')
    }
};
setInterval(Clock.render.bind(Clock), 1000)