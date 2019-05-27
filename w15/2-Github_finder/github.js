class Github {
    constructor() {
      this.client_id = '0e75c86772ead3b8302f';
      this.client_secret = '10110a9e688add141d1c939578d791f9d9883cfa';
      this.repos_count = 5;
      this.repos_sort = 'created: asc';
    }
  
    async getUser(user) {
      const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
  
      const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
  
      const profile = await profileResponse.json();
      const repos = await repoResponse.json();
  
      return {
        profile,
        repos
      }
    }
  }


/*
https://api.github.com/users/Snow1413?client_id=%220e75c86772ead3b8302f%22&client_secret=%2210110a9e688add141d1c939578d791f9d9883cfa%22
{
  "login": "Snow1413",
  "id": 43173922,
  "node_id": "MDQ6VXNlcjQzMTczOTIy",
  "avatar_url": "https://avatars2.githubusercontent.com/u/43173922?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Snow1413",
  "html_url": "https://github.com/Snow1413",
  "followers_url": "https://api.github.com/users/Snow1413/followers",
  "following_url": "https://api.github.com/users/Snow1413/following{/other_user}",
  "gists_url": "https://api.github.com/users/Snow1413/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Snow1413/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Snow1413/subscriptions",
  "organizations_url": "https://api.github.com/users/Snow1413/orgs",
  "repos_url": "https://api.github.com/users/Snow1413/repos",
  "events_url": "https://api.github.com/users/Snow1413/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Snow1413/received_events",
  "type": "User",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "public_repos": 2,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2018-09-11T12:19:51Z",
  "updated_at": "2019-05-21T10:25:02Z"
}
*/