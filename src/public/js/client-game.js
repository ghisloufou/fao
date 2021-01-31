function generateClientGameState() {
	return {
		roomCode: undefined,
		users: [],
		round: undefined,
		phase: undefined,
		turn: undefined,
		whoseTurn: undefined,
		keyword: undefined,
		hint: undefined,
		fakerName: undefined,
		strokes: [],

		getUsernames() {
			return this.users.map((u) => u.name);
		},
		adoptJson(json) {
			return Object.assign(this, json);
		},
		old_getUserColor(username, reason) {
			console.log(
				`!! Warning : OLD_GETUSERCOLOR is used for user: ${username} because : ${reason}`
			);
			let userIdx = this.getUsernames().findIndex((u) => u === username); // needs es6 polyfill
			// return userIdx >= 0 ? this.colors[userIdx] || 'var(--grey6)' : 'var(--grey6)';
			return userIdx >= 0 ? '#FF00FF' || 'var(--grey6)' : 'var(--grey6)';
		},
		getUserColor(username) {
			const user = this.users.find((u) => u.name === username);
			const userColor =
				user !== undefined
					? user.color !== undefined
						? user.color
						: this.old_getUserColor(username, 'no .color')
					: this.old_getUserColor(username, 'no user');
			return userColor;
		},
		setUserColor(username, colorId) {
			let userIdx = this.getUsernames().findIndex((u) => u === username); // needs es6 polyfill
			this.users[userIdx].colorId = colorId;
		},
		getMostRecentStroke() {
			return this.strokes[this.strokes.length - 1];
		},
		findUser(username) {
			return this.users.find((u) => u.name === username);
		},
	};
}

export { generateClientGameState };
