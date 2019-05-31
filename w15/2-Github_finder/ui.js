class UI {
    constructor() {
        this.profile = document.querySelector('#profile');
    }

    showProfile(user) {
        this.profile.innerHTML = `
        <div class="card card-body">
          <div class="row">
            <div class="col-md-3">
              <img src="${user.avatar_url}" alt="" class="img-fluid mb-2">
              <a href="${user.html_url}" class="btn btn-primary btn-block">View Profile</a>
            </div>
            <div class="col-md-9">
              <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
              <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
              <span class="badge badge-success">Followers: ${user.followers}</span>
              <span class="badge badge-info">Following: ${user.following}</span>
              
              <ul class="list-group mt-3">
                <li class="list-group-item">Company: ${user.company}</li>
                <li class="list-group-item">Website/Blog: ${user.blog}</li>
                <li class="list-group-item">Location: ${user.location}</li>
                <li class="list-group-item">Member Since: ${user.created_at}</li>
              </ul>
            </div>
          </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
        `;
    }

    showRepos(repos) {
        let output = '';
        repos.forEach(repo => {
            output += `
                <div class="card card-body">
                    <div class="col-md-6">
                        <a href="${repo.html_url}">${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                        <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                        <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                        <span class="badge badge-primary">Forks: ${repo.forms_count}</span>
                    </div>
                </div>
            `
        });
        document.getElementById('repos').innerHTML = output;
    }

    showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `${className}`;
        div.appendChild(document.createTextNode(message));
        document.querySelector('.searchContainer').insertBefore(div, document.querySelector('.search'));

        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000);
    }
    clearProfile() {
        this.profile.innerHTML = ' ';
    }
}