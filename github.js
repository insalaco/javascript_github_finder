class Github {
  constructor() {
    this.client_id     = '';
    this.client_secret = '';
    this.repos_count = 20;
    this.repos_sort = 'created: asc';
  }

  // get user from form userText
  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
    // convert profileResponse to json
    const profile = await profileResponse.json();

    const repos = await repoResponse.json();

    // return json response
    return {
      // profile: profile
      // if both above or the same you can use 'profile'
      profile,
      repos
    }
  }
}